/**
 * Database Seeder for Tech-Armor
 * Usage: npm run seed
 */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  console.error("❌ MONGO_URL is missing in environment (.env)");
  process.exit(1);
}

// ── Inline Schemas ────────────────────────────────────────────────────────────

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    brand: { type: String, default: "Generic" },
    rating: { type: Number, default: 0, min: 0, max: 5 },
  },
  { timestamps: true }
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

// ── Seed Dataset ──────────────────────────────────────────────────────────────

const categoriesData = [
  { name: "Cases & Covers", slug: "cases-covers" },
  { name: "Chargers & Cables", slug: "chargers-cables" },
  { name: "Audio & Acoustics", slug: "audio-acoustics" },
];

async function runSeed(): Promise<void> {
  console.log("⏳ Connecting to MongoDB...");
  await mongoose.connect(MONGO_URL as string);
  console.log(`✅ Connected to MongoDB database: '${mongoose.connection.name}'`);

  // Clear existing collections
  await Product.deleteMany({});
  await Category.deleteMany({});
  console.log("🗑️  Cleared existing products and categories");

  // Insert Categories
  const categories = await Category.insertMany(categoriesData);
  console.log(`📦 Seeded ${categories.length} categories`);

  const casesId = categories[0]?._id;
  const chargersId = categories[1]?._id;
  const audioId = categories[2]?._id;

  const productsData = [
    {
      name: "ClearShield Pro Case",
      category: casesId,
      description: "Ultra-thin transparent case with military-grade drop protection.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=ClearShield+Pro",
      price: 24.99,
      brand: "ArmorTech",
      rating: 4.5,
    },
    {
      name: "MagSafe Leather Wallet Case",
      category: casesId,
      description: "Genuine leather wallet case with integrated MagSafe ring.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Leather+Wallet",
      price: 49.99,
      brand: "LuxeCase",
      rating: 4.7,
    },
    {
      name: "Rugged Armor Case",
      category: casesId,
      description: "Heavy-duty dual-layer protection for extreme outdoor conditions.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Rugged+Armor",
      price: 34.99,
      brand: "ArmorTech",
      rating: 4.3,
    },
    {
      name: "GaN 65W Fast Charger",
      category: chargersId,
      description: "Compact GaN charger with 65W PD output, charges laptop and phone simultaneously.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=GaN+65W",
      price: 39.99,
      brand: "PowerCore",
      rating: 4.8,
    },
    {
      name: "USB-C to Lightning Braided Cable (2m)",
      category: chargersId,
      description: "MFi-certified braided nylon cable with 20W fast charging support.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Braided+Cable",
      price: 19.99,
      brand: "PowerCore",
      rating: 4.4,
    },
    {
      name: "MagSafe 15W Wireless Charger",
      category: chargersId,
      description: "Official MagSafe compatible 15W wireless pad with perfect magnetic alignment.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=MagSafe+Charger",
      price: 29.99,
      brand: "WireFree",
      rating: 4.6,
    },
    {
      name: "ProBuds X True Wireless",
      category: audioId,
      description: "ANC earbuds with 30hr battery, spatial audio, and IPX5 water resistance.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=ProBuds+X",
      price: 89.99,
      brand: "SoundCraft",
      rating: 4.7,
    },
    {
      name: "BassBoom Bluetooth Speaker",
      category: audioId,
      description: "360° sound, 20hr playtime, IPX7 waterproof — perfect for outdoors.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=BassBoom",
      price: 59.99,
      brand: "SoundCraft",
      rating: 4.5,
    },
    {
      name: "NeckEase Pro Wired Earphones",
      category: audioId,
      description: "Hi-Fi tuned 3.5mm earphones with in-line mic and flat tangle-free cable.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=NeckEase+Pro",
      price: 14.99,
      brand: "ToneWave",
      rating: 4.1,
    },
    {
      name: "StealthGrip Carbon Fiber Case",
      category: casesId,
      description: "Real carbon fiber back with aerospace-grade aluminum bumper.",
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Carbon+Fiber",
      price: 64.99,
      brand: "LuxeCase",
      rating: 4.9,
    },
  ];

  const products = await Product.insertMany(productsData);
  console.log(`🛍️  Seeded ${products.length} products`);

  console.log("\n✨ Database seed completed successfully!");
  await mongoose.disconnect();
}

runSeed().catch(async (err) => {
  console.error("❌ Seeding failed:", err);
  await mongoose.disconnect();
  process.exit(1);
});
