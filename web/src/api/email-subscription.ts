import { api } from "@/lib/axios";

export interface EmailSubscriptionBody {
  email: string
}

export async function emailSubscription({ email }: EmailSubscriptionBody) {
  await api.post("/register", { email });
}