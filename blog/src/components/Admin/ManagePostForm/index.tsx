"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "../../Button";
import { InputCheckBox } from "../../InputCheckBox";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkDownEditor";
import { ImageUploader } from "../ImageUploader";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { createPostAction } from "@/actions/post/create-post-action";
import { toast } from "react-toastify";

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState,
  );

  useEffect(() => {
    if(state.errors.length > 0 ) {
      toast.dismiss()
      state.errors.forEach(error => toast.error(error))
    }
  }, [state.errors])

  const {formState} = state
  const [contentValue, setContentValue] = useState(publicPost?.content || "");

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={formState.id}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={formState.slug}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o autor"
          type="text"
          defaultValue={formState.author}
        />

        <InputText
          labelText="Titulo"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={formState.title}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckBox
          labelText="Publicar"
          name="published"
          type="checkbox"
          defaultChecked={publicPost?.published || false}
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
