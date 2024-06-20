import { createClient } from "@sanity/client"

export default createClient({
    projectId: "ypnxw9ep",
    dataset:"production",
    useCdn: true,
    apiVersion: "2024-04-30"
})