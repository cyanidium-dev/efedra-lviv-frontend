import type { Metadata } from "next";
import Hero from "@/components/articlePage/hero/Hero";
import { Suspense } from "react";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { postsAndPostBySlugQuery, postBySlugQuery } from "@/lib/queries";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Content from "@/components/articlePage/content/Content";
import RecommendedPosts from "@/components/articlePage/hero/recommendedPosts/RecommendedPosts";
import { Post } from "@/types/post";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article } = await params;

  const currentPost = await fetchSanityDataServer(postBySlugQuery, {
    slug: article,
  });

  return {
    title: `${currentPost?.title}` || getDefaultMetadata().title,
    description: currentPost?.description || getDefaultMetadata().description,
    openGraph: {
      images: [
        {
          url:
            urlFor(currentPost?.image).fit("crop").url() ||
            "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Efedra Clinic",
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = await params;

  const res = await fetchSanityDataServer(postsAndPostBySlugQuery, {
    slug: article,
  });

  const post = res?.postBySlug;
  const allPosts = res?.allPosts;

  const recommendedPosts = allPosts
    ?.filter((post: Post) => post?.slug !== article)
    .slice(0, 12);

  return (
    <>
      <Suspense fallback={<Loader className="h-[440px] lg:h-[700px]" />}>
        <Hero post={post} />
        <MarqueeLine />
        <Content post={post} />
        <RecommendedPosts posts={recommendedPosts} />
      </Suspense>
    </>
  );
}
