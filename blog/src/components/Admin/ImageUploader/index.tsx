"use client";

import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChosseFile(){
    if(!fileInputRef.current) return

    fileInputRef.current.click()
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button onClick={handleChosseFile} type="button" className="self-start">
        <ImageUpIcon />
        Enviar uma imagem
      </Button>
      <input className="hidden" name="file" type="file" accept="image/*" ref={fileInputRef} />
    </div>
  );
}
