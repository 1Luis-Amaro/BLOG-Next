"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DelePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DelePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm("Tem certeza?")) return;
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`O result é: ${result}`);
    });
  }
  return (
    <button
      className={clsx(
        "text-red-500 cursor-pointer transition",
        "[&_svg]:w-4 [&_svg]:h-4",
        "hover:scale-125 hover:text-red-700",
        "disabled:text-slate-600 disabled:cursor-not-allowed"
      )}
      aria-label={`Apagar post: ${id}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
