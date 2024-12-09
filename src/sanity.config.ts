import { defineConfig } from "sanity"
import schemas from "@/sanity/schemas"
import { structureTool } from "sanity/structure"

const config = defineConfig({
  title: "Sweden Rugby League Content",
  projectId: "8bih5ddk",
  dataset: "production",
  apiVersion: "2024-12-04",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})

export default config
