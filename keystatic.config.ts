// keystatic.config.ts
import { config, fields, singleton, collection } from "@keystatic/core";

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
