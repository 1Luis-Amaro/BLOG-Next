import { PostModel } from "@/models/post/post.models"; // Importa o tipo PostModel de outro arquivo
import { PostRepository } from "./post-repository"; // Importa a interface PostRepository do arquivo local
import { readFile } from "fs/promises"; // Importa a função readFile para ler arquivos de forma assíncrona
import { resolve } from "path"; // Importa a função resolve para criar caminhos de arquivos

const ROOT_DIR = process.cwd(); // Pega o diretório atual onde o projeto está sendo executado
const JSON_POSTS_FILE_PATH = resolve( // Cria o caminho completo até o arquivo JSON
  ROOT_DIR, // Diretório raiz do projeto
  'src', // Pasta src
  'db', // Pasta db
  'seed', // Pasta seed
  'posts.json' // Arquivo JSON com os posts
);

const SIMULATE_WAIT_IN_MS = 5000;


export class JsonPostRepository implements PostRepository { // Define uma classe que implementa a interface PostRepository
  
    private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  
  private async readFromDisk(): Promise<PostModel[]> { // Método privado para ler o arquivo JSON do disco
      const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8'); // Lê o conteúdo do arquivo como texto
      const parsedJson = JSON.parse(jsonContent); // Converte o texto JSON em um objeto JavaScript
      const { posts } = parsedJson; // Extrai a propriedade "posts" do objeto JSON (destructuring)
      return posts; // Retorna apenas o array de posts
    }

     async findAll(): Promise<PostModel[]> { // Método público para buscar todos os posts
      const posts = await this.readFromDisk(); // Chama o método privado para ler os posts do disco
      return posts; // Retorna a lista de posts
      }

      async findById(id: string): Promise<PostModel> { // Método público para buscar um post por ID
            await this.simulateWait();

        const posts = await this.findAll(); // Busca todos os posts primeiro
        const post = posts.find(post => post.id === id); // Procura o post com o ID especificado

        if(!post) throw new Error('Post não encontrado'); // Se não encontrar, lança um erro
        return post; // Retorna o post encontrado
      }
}

export const postRepository: PostRepository = new JsonPostRepository(); // Cria uma instância da classe e exporta para uso em outros arquivos