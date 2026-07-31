import { Metadata } from "next";
import { API_URL } from "@/src/lib/api";

async function getProduct(id: string) {

  const res = await fetch(
    `${API_URL}/products/${id}`
  );

  const data = await res.json();

  return data.data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,

    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}