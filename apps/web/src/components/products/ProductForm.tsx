"use client";

import { useState } from "react";
import { createProduct } from "@/src/services/product.service";

export default function ProductForm() {

  const [name, setName] = useState("");

  const [price, setPrice] = useState(0);

  const [description, setDescription] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    await createProduct({
      name,
      price,
      description,
    });

    setName("");
    setPrice(0);
    setDescription("");

    alert("Created");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(Number(e.target.value))
        }
      />

      <textarea
        className="border p-2 w-full"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Save
      </button>

    </form>
  );
}