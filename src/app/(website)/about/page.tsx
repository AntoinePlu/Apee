import { ErrorAlert, Flex, Title } from "@apee/components/ui";
import { keystatic } from "@apee/lib/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Image from "next/image";
import Link from "next/link";

export default async function AboutPage() {
  const aboutPageData = await keystatic.singletons.aboutPage.read();
  const content = await aboutPageData?.content();

  if (!content) {
    return (
      <Flex className="flex-col items-center justify-center">
        <ErrorAlert>
          Unable to fetch about page data, please make sure it exists in
          Keystatic
        </ErrorAlert>
      </Flex>
    );
  }

  return (
    <Flex className="flex-col gap-y-32 overflow-y-auto overflow-x-hidden px-6 pt-20 xl:px-32 xl:py-20">
      <DocumentRenderer
        document={content}
        renderers={{
          block: {
            layout: (props) => {
              switch (props.layout.join(",")) {
                case "1,1":
                  return (
                    <div className="grid grid-cols-2 gap-16">
                      {props.children.map((child) => (
                        <div className="space-y-6" key={child.key}>
                          {child}
                        </div>
                      ))}
                    </div>
                  );
                default:
                  return <div className="space-y-6">{props.children}</div>;
              }
            },
            heading: ({ children, level }) => <Title>{children}</Title>, // TODO: implement heading levels
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
        componentBlocks={{
          portrait: () => <img src="https://placehold.co/400/2e2e2e/ededed" />,
          experience: ({ title, organization, startYear, endYear, logo }) => {
            return (
              <div className="flex items-start gap-4">
                <Image
                  src={logo}
                  alt={`Logo for ${organization}`}
                  width={48}
                  height={48}
                  className="rounded"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg/none font-semibold">{title}</h3>
                  <p className="text-lg opacity-60">
                    {organization} - {startYear} - {endYear}
                  </p>
                </div>
              </div>
            );
          },
        }}
      />
    </Flex>
  );
}
