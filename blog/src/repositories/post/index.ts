import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new JsonPostRepository(); // Cria uma instância da classe e exporta para uso em outros arquivos