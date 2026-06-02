'use server'

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto"
import { PostCreateSchema } from "@/lib/post/validation";
import { PostModel } from "@/models/post/post.models";
import { getZodErrorMessages } from "@/utils/get-zod-error-message";

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
  id: Date.now().toString(),
  slug: Math.random().toString(36)
}

  return {
    formState: newPost,
    errors: [],
  }
}