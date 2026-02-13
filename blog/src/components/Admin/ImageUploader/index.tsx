"use client";

import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/post/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChosseFile(){
    if(!fileInputRef.current) return

    fileInputRef.current.click()
  }

  function handleChange() {
        if(!fileInputRef.current) return

      const fileInput = fileInputRef.current
      const file = fileInput?.files?.[0]

      if (!file) return

      if(file.size > IMAGE_UPLOAD_MAX_SIZE ) {
        const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024
        toast.error(`Imagem muito grande. Máx.:${readableMaxSize}KB.`)

        fileInput.value = ''
        return
      }

      //TODO: criar a action para upload de arquivo
      const formData = new FormData()
      formData.append('file', file)

      fileInput.value = ''
    }


  return (
    <div className="flex flex-col gap-2 py-4">
      <Button onClick={handleChosseFile} type="button" className="self-start">
        <ImageUpIcon />
        Enviar uma imagem
      </Button>
      <input onChange={handleChange} className="hidden" name="file" type="file" accept="image/*" ref={fileInputRef} />
    </div>
  );
}
