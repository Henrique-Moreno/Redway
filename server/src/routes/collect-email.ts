import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "@/lib/prisma"; 

export async function collectEmail(app: FastifyInstance) {
  app.post("/register", async (request, reply) => {
    try {
      const createUserBody = z.object({
        email: z.string()
      });

      const { email } = createUserBody.parse(request.body);

      const user = await prisma.emailSubscription.create({
        data: {
          email
        }
      });

      return reply.status(201).send({ user, message: "Your email has been sent successfully." });
      
    } catch (error) {

      return reply.status(400).send({ message: "Error processing the request" });
    }
  });
}
