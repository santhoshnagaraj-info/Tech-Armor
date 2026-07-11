import Image from "next/image";

export default function ProductGallery({
  image,
}: {
  image: string;
}) {
  return (
    <div>
      <Image
        src={image}
        alt="Product"
        width={800}
        height={800}
        className="rounded-xl"
      />
    </div>
  );
}