"use client";

import { useState } from "react";
import { Button } from "../../Button";
import { InputCheckBox } from "../../InputCheckBox";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkDownEditor";
import { ImageUploader } from "../ImageUploader";
import { PostModel } from "@/models/post/post.models";
import { PublicPost } from "@/dto/post/dto";

type ManagePostFormProps = {
  publicPost?: PublicPost;

}

export function ManagePostForm({publicPost}: ManagePostFormProps) {
  const [contentValue, setContentValue] = useState(publicPost?.content || '');
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
          defaultValue={publicPost?.id || ''}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={publicPost?.slug || ''}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o autor"
          type="text"
          defaultValue={publicPost?.author || ''}
        />

        <InputText
          labelText="Titulo"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={publicPost?.title || ''}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={publicPost?.excerpt || ''}
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
          defaultValue={publicPost?.coverImageUrl || ''}
        />

        <InputCheckBox labelText="Publicar" name="published" type="checkbox"
         defaultChecked={publicPost?.published || false} />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
