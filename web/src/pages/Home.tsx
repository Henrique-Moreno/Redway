import { emailSubscription } from "@/api/email-subscription";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function Home() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const { mutateAsync: recordEmail } = useMutation({
    mutationFn: emailSubscription,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await recordEmail({
        email: data.email,
      });

      toast.success("Seu e-mail foi enviado com sucesso");
      navigate("/welcome");
    } catch (error) {
      toast.error("Ocorreu um erro ao cadastrar o e-mail.");
    }
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="w-[250px] sm:w-[530px]">
          <div className="flex flex-col gap-3 text-center mb-10">
            <h1 className="text-2xl font-bold tracking-tight">
              Quer receber nossa Newsletter?
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              A REDWAY é uma empresa de consultoria em segurança da informação,
              com o foco em excelência técnica, que visa contribuir para a
              consolidação da postura de segurança de nossos clientes. Hoje
              contamos com uma equipe técnica extremamente especializada, com
              mais de 15 anos de experiência em projetos complexos nos mais
              diversos segmentos de negócio. Cadastre seu e-mail abaixo e receba
              todo semana os melhores conteúdos sobre segurança da informação!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-lg font-bold tracking-tight" htmlFor="email">Seu e-mail</Label>
              <Input className=" text-gray-600 font-semibold border-gray-300" id="email" type="email" {...register("email")} required placeholder="Digite seu email"/>
            </div>
            <Button disabled={isSubmitting} className="w-full font-semibold text-base" type="submit">
              Cadastrar
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
