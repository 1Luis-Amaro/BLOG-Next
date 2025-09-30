import { PostModel } from "@/models/post/post.models";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>
  findById(id: string): Promise<PostModel>
}