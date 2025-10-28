import BlogList from "@/components/blogPage/blogList/BlogList";
import Hero from "@/components/blogPage/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { Suspense } from "react";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { allPostsQuery } from "@/lib/queries";

export default async function BlogPage() {
  const posts = await fetchSanityDataServer(allPostsQuery);

  return (
    <>
      <Hero />
      <MarqueeLine />
      <Suspense fallback={<Loader />}>
        <BlogList posts={posts} />
      </Suspense>
    </>
  );
}
