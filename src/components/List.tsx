"use client";
import { cn } from "@apee/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ListProps = {
  items: ListItemProps[];
};

export default function List({ items }: ListProps) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-1">
      {items.map((item) => (
        <ListItem {...item} active={item.href === pathname} key={item.label} />
      ))}
    </ul>
  );
}

type ListItemProps = {
  active?: boolean;
  href: string;
  label: string;
  icon?: React.ElementType;
};

function ListItem({ active = false, label, href, icon: Icon }: ListItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex h-9 items-center gap-x-2.5 rounded-lg px-2.5 py-2 font-medium text-white-11 hover:bg-white-3",
          {
            "bg-white-4 text-white-12": active,
          },
        )}
      >
        {Icon ? (
          <Icon className={cn("fill-white-8", { "fill-white-10": active })} />
        ) : null}
        <span>{label}</span>
      </Link>
    </li>
  );
}

List.Item = ListItem;
