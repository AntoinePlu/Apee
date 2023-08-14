// keystatic.config.ts
import {
  collection,
  component,
  config,
  fields,
  singleton,
} from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "src/content/_homepage",
      schema: {
        intro: fields.text({ label: "Intro" }),
        jobTitle: fields.text({ label: "Job Title" }),
        catchphrase: fields.text({ label: "Catchprase" }),
        email: fields.text({ label: "Email" }),
      },
    }),

    aboutPage: singleton({
      label: "About page",
      path: "src/content/_aboutPage",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        content: fields.document({
          label: "Content",
          layouts: [[1], [1, 1]],
          formatting: true,
          links: true,

          componentBlocks: {
            experience: component({
              preview: ({ fields: { title, organization } }) => (
                <h2>
                  {title.value} @ {organization.value}
                </h2>
              ),
              label: "Experience",
              schema: {
                title: fields.text({ label: "Title" }),
                organization: fields.text({ label: "Organizatoin" }),
                startYear: fields.text({ label: "Start year" }),
                endYear: fields.text({ label: "End year" }),
                logo: fields.image({
                  label: "Logo",
                  directory: "public/images/logos/",
                  publicPath: "/images/logos/",
                }),
              },
            }),
            portrait: component({
              preview: () => <p>Portrait</p>,
              label: "Portrait",
              schema: {},
            }),
          },
        }),
      },
    }),
  },

  collections: {
    projects: collection({
      label: "Projects",
      slugField: "name",
      path: "src/content/projects/*/",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "The name of the project",
          },
        }),
      },
    }),
    collections: collection({
      label: "Collections",
      path: "src/content/collections/*",
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "The name of the collection",
          },
        }),
        description: fields.document({
          label: "Description",
          formatting: true,
          links: true,
        }),
      },
    }),
    bookmarks: collection({
      label: "Bookmarks",
      slugField: "name",
      path: "src/content/bookmarks/*",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "The name of the bookmark",
          },
        }),
        url: fields.url({
          label: "URL",
          description: "The bookmark URL",
        }),
        collection: fields.relationship({
          label: "Collection",
          description: "The collection this bookmark should be part of",
          collection: "collections",
        }),
        curatedOn: fields.date({
          label: "Curated on",
          description: "When was the bookmark curated",
          defaultValue: { kind: "today" },
        }),
        postedOn: fields.date({
          label: "Posted on",
          description: "When was the bookmark originally posted",
        }),
        author: fields.relationship({
          label: "Author",
          description: "The original author for this bookmark",
          collection: "authors",
        }),
        description: fields.document({
          label: "Description",
          formatting: true,
          links: true,
        }),
        picture: fields.image({
          label: "Picture",
          directory: "public/images/bookmarks/",
          publicPath: "/images/bookmarks/",
        }),
        tags: fields.array(
          fields.relationship({
            label: "Tag",
            collection: "tags",
          }),
          {
            label: "Tags",
            description: "The tags to associate this bookmark to",
            itemLabel: (props) => props.value || "Unknown tag",
          },
        ),
      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "The name of the author",
          },
        }),
        picture: fields.image({
          label: "Picture",
          directory: "public/images/authors/",
          publicPath: "/images/authors/",
        }),
      },
    }),
    tags: collection({
      label: "Tags",
      slugField: "name",
      path: "src/content/tags/*",
      schema: {
        name: fields.slug({
          name: { label: "Name", description: "The tag name" },
        }),
      },
    }),
  },
});
