import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "@/sanity/schemas";

import { apiVersion, dataset, projectId, projectTitle } from "./src/sanity/env";

const config = defineConfig({
  title: projectTitle,
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas,
  },
});

export default config;
