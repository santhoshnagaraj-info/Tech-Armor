"use strict";
/**
 * Seed script — populates MongoDB with sample categories and products.
 * Run with: npm run seed
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
    console.error("❌ MONGO_URL is not set in .env");
    process.exit(1);
}
// ── Schemas (inline to avoid importing the full app) ──────────────────────────
const categorySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
}, { timestamps: true });
const productSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, trim: true },
    category: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Category", required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String },
    rating: { type: Number, default: 0 },
}, { timestamps: true });
const Category = mongoose_1.default.model("Category", categorySchema);
const Product = mongoose_1.default.model("Product", productSchema);
// ── Seed Data ─────────────────────────────────────────────────────────────────
const categories = [
    { name: "Cases & Covers", slug: "cases-covers" },
    { name: "Chargers & Cables", slug: "chargers-cables" },
    { name: "Audio", slug: "audio" },
];
// ── Main ──────────────────────────────────────────────────────────────────────
async function seed() {
    await mongoose_1.default.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB:", mongoose_1.default.connection.name);
    // Clear existing data
    await Product.deleteMany({});
    await Category.deleteMany({});
    console.log("🗑️  Cleared existing products and categories");
    // Insert categories
    const insertedCategories = await Category.insertMany(categories);
    console.log(`📦 Inserted ${insertedCategories.length} categories`);
    const [casesId, chargersId, audioId] = insertedCategories.map((c) => c._id);
    // Insert products
    const products = [
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
            description: "Heavy-duty dual-layer protection for extreme conditions.",
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
    const insertedProducts = await Product.insertMany(products);
    console.log(`🛍️  Inserted ${insertedProducts.length} products`);
    console.log("\n✅ Seed complete! Run `npm run dev` and browse your store.");
    await mongoose_1.default.disconnect();
}
seed().catch((err) => {
    console.error("❌ Seed failed:", err);
    mongoose_1.default.disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map