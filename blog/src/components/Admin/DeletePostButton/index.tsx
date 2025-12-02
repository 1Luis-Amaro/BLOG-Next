'use client'

import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DelePostButtonProps = {
  id: string;
  title: string
}

export function DeletePostButton( {id, title}:DelePostButtonProps ) {
  function handleClick() {
    alert('Botão clicado' + id)
  }
  return (
    <button
                className={clsx(
                  "text-red-500 cursor-pointer transition",
                  "[&_svg]:w-4 [&_svg]:h-4",
                  "hover:scale-125 hover:text-red-700"
                )}
                aria-label={`Apagar post: ${id}`}
                title={`Apagar post: ${title}`}
                onClick={handleClick}
              >
                <Trash2Icon />
              </button>
  )
}