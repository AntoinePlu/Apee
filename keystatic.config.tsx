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

          componentBlocks: {
            jobPosition: component({
              preview: ({
                fields: { title, company, startDate, endDate, companyLogo },
              }) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h2>{title.value}</h2>
                  <h3>
                    {company.value} - {(startDate.value || "").slice(0, 4)} -{" "}
                    {(endDate.value || "").slice(0, 4)}
                  </h3>
                </div>
              ),
              label: "Job position",
              schema: {
                title: fields.text({ label: "Title" }),
                company: fields.text({ label: "Company" }),
                startDate: fields.date({ label: "Start date" }),
                endDate: fields.date({ label: "End date" }),
                companyLogo: fields.image({
                  label: "Company logo",
                  directory: "public/assets/images/company-logos/",
                  publicPath: "/assets/images/company-logos/",
                }),
              },
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
