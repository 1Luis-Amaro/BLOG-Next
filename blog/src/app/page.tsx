import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
        <header>
          <h1 className="text-6xl font-bold text-center py-8">
            Aqui é a HEADER
          </h1>

          <p className="text-justify py-8" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            laboriosam corrupti, cum porro deleniti expedita illo eveniet rerum
            facilis aliquid aliquam qui quia aut voluptatum nisi id eos ipsa
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam
            nostrum libero similique, numquam quas eius. Nulla illum, veniam,
            totam iure harum, id tempore voluptas aspernatur vel expedita
            mollitia impedit! voluptate.
          </p>
        </header>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <p className="text-6xl font-bold text-center py-8">Footer</p>
        </footer>
      </Container>
  );
}
