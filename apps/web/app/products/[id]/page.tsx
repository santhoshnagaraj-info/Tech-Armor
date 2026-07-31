import { Metadata } from "next";
import ProductDetails from "@/src/components/products/ProductDetails";
import { API_URL } from "@/src/lib/api";

async function getProduct(id: string) {
  const response = await fetch(
    `${API_URL}/products/${id}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data.data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Tech Armor`,

    description: product.description,

    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetails id={id} />;
}