// src/services/product.service.ts


export const getProducts = async () => {
  const response = await fetch(
    "http://localhost:5000/api/products/"
  );

  return response.json();
};