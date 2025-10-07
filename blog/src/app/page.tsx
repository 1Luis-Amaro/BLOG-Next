import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { PostFeatured } from "@/components/PostFeatured";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16"/>}>
      <PostFeatured/>
        <PostsList />
      </Suspense>
    </>
  );
}
