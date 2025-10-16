import { PostModel } from "@/models/post/post.models";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>  //acha todos que estão com published como true
  findBySlugPublic(slug: string): Promise<PostModel>
  findAll(): Promise<PostModel[]> // acha todos incluindo os que não são publicos
  findById(id: string): Promise<PostModel>
}