import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  href:string;
  src: string;
}

export function PostCoverImage ({href,src}: PostCoverImageProps) {
  return (

    <Link className="w-full h-full overflow-hidden rounded-xl" href={href}>
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src={src}
            width={1200}
            height={768}
            alt="Título do post"
            priority
          />
        </Link>
  )
}