import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage src='/images/bryen_5.png' href="#" />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-09-09"
          >
            09/09/2025 10:00
          </time>

          <PostHeading as="h2" url="#">maxime quam porro minima</PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            vero consectetur quasi officia nesciunt, accusantium animi ut,
            molestiae qui  voluptatem cum voluptatibus.
            Ducimus ea rem dolorem.
          </p>
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
