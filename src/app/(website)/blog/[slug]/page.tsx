import { Title } from "@apee/components/ui";
import { keystatic } from "@apee/lib/keystatic";
import { hydratePost, loadModel } from "@apee/lib/models";
// import { DocumentRenderer } from "@keystatic/core/renderer";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await keystatic.collections.posts.list();

  return posts.map((slug) => ({ slug }));
}

export default async function CollectionPage({ params }: PostPageProps) {
  const post = await loadModel("posts", params.slug, hydratePost);

  if (post === null) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col gap-y-32 overflow-auto px-32 py-20">
      <header className="grid grid-cols-2 px-24">
        <div className="flex flex-col gap-y-6">
          <Title>{post.title}</Title>
        </div>
        <div />
      </header>
    </div>
  );
}
