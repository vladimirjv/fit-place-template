import { createClerkClient } from "@clerk/remix/api.server"

export const clerkClient = async () => {
  return await createClerkClient({secretKey: process.env.CLERK_SECRET_KEY});
}