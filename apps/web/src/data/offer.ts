import { Offer } from "@/src/types/offer";

export const offers: Offer[] = [
  {
    id: "offer-1",

    title: "Limited Time Offer",

    description:
      "Get the ARMOR_CORE Ecosystem Bundle. Includes a Pro Case, Volt Dock, and Shield Glass at a 30% technical discount.",

    image: "/offers/bundle.png",

    buttonText: "Claim Bundle",

    expiresAt: "2025-12-31T23:59:59",

    discount: 30,

    active: true,
  },
];