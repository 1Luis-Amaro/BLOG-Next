import { PostModel } from "@/models/post/post.models";
import { PostRepository } from "./post-repository"; // Importa a interface PostRepository do arquivo local
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository { // Define uma classe que implementa a interface PostRepository

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;

  } //acha todos que estão com published como true

  async findBySlugPublic(slug: string): Promise<PostModel> { }

  async findAll(): Promise<PostModel[]> { } // acha todos incluindo os que não são publicos

  async findById(id: string): Promise<PostModel> { }
}


(async () => {
  const repo = new DrizzlePostRepository()
  const posts = await repo.findAllPublic()

  posts.forEach(post => console.log(post.slug, post.published))
})()