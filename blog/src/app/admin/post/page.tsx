import { InputText } from "@/components/InputText";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputText labelText="Nome" placeholder="Digite seu nome" />
      <InputText labelText="Sobrenome" placeholder="seu sobrenome" />
      <InputText
        disabled
        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"
        defaultValue="Olá mundo"
      />
      <InputText
        disabled
        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"

      />
      <InputText

        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"
        readOnly
      />
      <InputText

        labelText="Sobrenome"
        placeholder="Olá Mundo"
        defaultValue='ola mundo'
        readOnly
      />
    </div>
  );
}
