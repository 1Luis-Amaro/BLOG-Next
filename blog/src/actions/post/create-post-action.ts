'use server'

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto"
import { PostCreateSchema } from "@/lib/post/validation";
import { PostModel } from "@/models/post/post.models";
import { postRepository } from "@/repositories/post";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import {v4 as uuidV4} from 'uuid'

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[]

}

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
):
  Promise<CreatePostActionState> {
  //TODO: verificar se o usuário tá logado

  if (!(formData instanceof FormData)) {
    return {
      formState:
        prevState.formState,
      errors: ['Dados inválidos']

    }
  }

  const formDataToObj = Object.fromEntries(formData.entries())
  const zodParseObj = PostCreateSchema.safeParse(formDataToObj)

  if (!zodParseObj.success) {

     const errors = zodParseObj.error.issues.map(issue => issue.message); return {
       errors,
       formState: makePartialPublicPost(formDataToObj),

     }
  }

const validPostData = zodParseObj.data;
const newPost: PostModel = {
  ...validPostData,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  id: uuidV4(),
  slug: makeSlugFromText(validPostData.title)
}

try {
  await postRepository.create(newPost)
} catch (e: unknown) {
  if( e instanceof Error) {
    return {
      formState: newPost,
      errors: [e.message]
    }
  }

  return {
    formState: newPost,
    errors: ['Erro desconhecido']
  }
}

revalidateTag('posts')
redirect(`/admin/post/${newPost.id}`)


}