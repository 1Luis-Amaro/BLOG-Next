import { ManagerPostForm } from "@/components/Admin/ManagerPostForm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostNewPage() {
  return <>
  <h1>Criar post</h1>
  <ManagerPostForm />
  </>;
}
