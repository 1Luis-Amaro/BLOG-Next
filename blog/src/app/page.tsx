import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group" >
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
      <Image
      className="group-hover:scale-105 transition"
      src="/images/bryen_0.png"
      width={1200}
      height={768}
      alt="Título do post"
      />
      </Link>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          vero consectetur quasi officia nesciunt, accusantium animi ut,
          molestiae qui maxime quam porro minima voluptatem cum voluptatibus.
          Ducimus ea rem dolorem.
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
