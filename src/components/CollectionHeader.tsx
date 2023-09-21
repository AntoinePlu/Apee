import Link from "@apee/components/Link";
import { Heading } from "@apee/components/ui";
import { Collection } from "@apee/lib/models";
import { DocumentRenderer } from "@keystatic/core/renderer";

interface Props {
  collection: Collection;
}

export default function CollectionHeader({ collection }: Props) {
  return (
    <header className="grid grid-cols-2 px-24">
      <div className="flex flex-col gap-y-6">
        <Heading level={1}>{collection.name}</Heading>
        <DocumentRenderer
          document={collection.description}
          renderers={{
            block: {
              paragraph: ({ children }) => (
                <p className="text-base text-white-11">{children}</p>
              ),
            },
            inline: {
              link: ({ children, href }) => (
                <Link className="text-white" href={href}>
                  {children}
                </Link>
              ),
            },
          }}
        />
      </div>
      <div />
    </header>
  );
}
