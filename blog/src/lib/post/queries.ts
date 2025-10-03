import NotFoundPage from "@/app/not-found"
import { postRepository } from "@/repositories/post"
import { cache } from "react"

export const findAllPublicPostsCached = cache(async () =>
  await postRepository.findAllPublic()
)


export const findPostBySlugCached = cache(async (slug: string) =>{
  const post = await postRepository.findBySlug(slug).catch(() => undefined)

  if (!post) NotFoundPage()

    return post
  return  postRepository.findBySlug(slug)
})

export const findPostByIdCached = cache(async (id: string) =>
  await  postRepository.findById(id),
)