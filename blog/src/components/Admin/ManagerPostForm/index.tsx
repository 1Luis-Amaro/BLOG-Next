"use client";

import { useState } from "react";
import { Button } from "../../Button";
import { InputCheckBox } from "../../InputCheckBox";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkDownEditor";
import { ImageUploader } from "../ImageUploader";

export function ManagerPostForm() {
  const [contentValue, setContentValue] = useState("Esté é **um** exemplo");
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        {/* id: auto;
     title: auto;
     slug: string;
     excerpt: string;
     content: string;
     UPLOADER
     coverImageUrl: string;
     published: boolean;
     author: string; */}

        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o autor"
          type="text"
          defaultValue={""}
        />

        <InputText
          labelText="Titulo"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={""}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={""}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="contet"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={""}
        />

        <InputCheckBox labelText="Publicar" name="published" type="checkbox" />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
