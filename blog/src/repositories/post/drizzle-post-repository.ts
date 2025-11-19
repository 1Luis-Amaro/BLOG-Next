import { PostModel } from "@/models/post/post.models";
import { PostRepository } from "./post-repository"; // Importa a interface PostRepository do arquivo local
import { drizzleDb } from "@/db/drizzle";
import { logColor } from "@/utils/log-color";

export class DrizzlePostRepository implements PostRepository { // Define uma classe que implementa a interface PostRepository

  async findAllPublic(): Promise<PostModel[]> {

    logColor('findAllPublic', Date.now())

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  } //acha todos que estão com published como true

  async findBySlugPublic(slug: string): Promise<PostModel> {

    logColor('findBySlugPublic', Date.now())

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug))
    });


    if (!post) throw new Error('Post não encontrado para Slug'); // Se não encontrar, lança um erro

    return post;

  }

  async findAll(): Promise<PostModel[]> {
    logColor('findAll', Date.now())
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt)
    });
    return posts
  } // acha todos incluindo os que não são publicos


  async findById(id: string): Promise<PostModel> {
    logColor('findById', Date.now())

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id)
    })

    if (!post) throw new Error('Post não encontrado para ID'); // Se não encontrar, lança um erro

    return post

  }
}


// (async () => {
//   const repo = new DrizzlePostRepository()
//   const post = await repo.findBySlugPublic('organizacao-pessoal-por-onde-t')

//   console.log(post)


// })()