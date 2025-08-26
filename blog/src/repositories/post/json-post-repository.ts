import { PostModel } from "@/models/post/post.models";
import { PostRepository } from "./post-repository";

const ROOT_DIR = process.cwd() //para pegar a raiz do projeto

export class JsonPostRepository implements PostRepository {
    private async readDromDisk() {

    }

     async findAll(): Promise<PostModel[]> {

      }
}

export const postRepository = new JsonPostRepository()