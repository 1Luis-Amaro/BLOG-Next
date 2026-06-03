'use server'

import { makePartialPublicPost, makePublicPostFromDb, PublicPost } from "@/dto/post/dto"
import { PostUpdateSchema } from "@/lib/post/validation";
import { PostModel } from "@/models/post/post.models";
import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


type UpdatePostActionState = {
  formState: PublicPost;
  errors: string[];
  succes?: true;

}

export async function updatePostAction(
  prevState: UpdatePostActionState,
  formData: FormData,
):
  Promise<UpdatePostActionState> {
  //TODO: verificar se o usuário tá logado

  if (!(formData instanceof FormData)) {
    return {
      formState:
        prevState.formState,
      errors: ['Dados inválidos']

    }
  }

  const id = formData.get('id')?.toString() || ''

  if (!id || typeof id !== 'string') {
    return {
      formState:
        prevState.formState,
      errors: ['ID inválido']

    }
  }

  const formDataToObj = Object.fromEntries(formData.entries())
  const zodParseObj = PostUpdateSchema.safeParse(formDataToObj)

  if (!zodParseObj.success) {

    const errors = zodParseObj.error.issues.map(issue => issue.message); return {
      errors,
      formState: makePartialPublicPost(formDataToObj),

    }
  }

  const validPostData = zodParseObj.data;
  const newPost = {
    ...validPostData,
  }

  let post: PostModel;
  try {
    post = await postRepository.update(id, newPost)
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataToObj),
        errors: [e.message]
      }
    }

    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ['Erro desconhecido']
    }
  }

  revalidateTag('posts')
  redirect(`post-${post.slug}`)

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    succes: true,
  }

}