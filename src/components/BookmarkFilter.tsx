import { AboutIcon, CollectionIcon } from "@apee/components/icons";
import { Button, Flex, Input, Paragraph } from "@apee/components/ui";
import { formatNumber } from "@apee/lib/format";
import { Bookmark } from "@apee/lib/models";

interface Props {
  bookmarks: Bookmark[];
}

export default function BookmarkFilter({ bookmarks }: Props) {
  return (
    <Flex className="justify-between gap-4">
      <Flex className="gap-4">
        <Input placeholder="Search bookmarks…" />
        <Button icon={CollectionIcon}>Tags</Button>
        <Button icon={AboutIcon}>Author</Button>
      </Flex>
      <Paragraph>{formatNumber(bookmarks.length)} bookmarks</Paragraph>
    </Flex>
  );
}
