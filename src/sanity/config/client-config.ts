import { createClient } from "next-sanity"

const clientConfig = createClient({
  projectId: "8bih5ddk",
  dataset: "production",
  apiVersion: "2024-12-04",
  useCdn: true,
})

export default clientConfig
