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
    projectCategories: collection({
      label: "Project Categories",
      path: "src/content/projectCategories/*/",
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "The name of the category",
          },
        }),
      },
    }),
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
        category: fields.relationship({
          label: "Category",
          description: "The category this project is related to",
          collection: "projectCategories",
        }),
      },
    }),
  },
});
