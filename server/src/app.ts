import fastify from "fastify";
import cors from "@fastify/cors";
import { collectEmail } from "./routes/collect-email";

export const app = fastify();

app.register(cors);
app.register(collectEmail);