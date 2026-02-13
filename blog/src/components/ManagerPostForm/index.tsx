"use client";

import { useState } from "react";
import { Button } from "../Button";
import { InputCheckBox } from "../InputCheckBox";
import { InputText } from "../InputText";
import { MarkdownEditor } from "../MarkDownEditor";
import { ImageUploader } from "../Admin/ImageUploader";

export function ManagerPostForm() {
  const [content, setContentValue] = useState('Esté é **um** exemplo')
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Sobrenome" placeholder="seu sobrenome" />
        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
        />

    <ImageUploader/>

        <InputCheckBox labelText="Sobrenome" />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={content}
          setValue={setContentValue}

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
          defaultValue="ola mundo"
          readOnly
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
