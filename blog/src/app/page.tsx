import SpinLoader from "@/components/SpinLoader";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses='min-h-[500px] bg-amber-500' />
    </div>
  );
}
