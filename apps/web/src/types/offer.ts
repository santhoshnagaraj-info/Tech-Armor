export interface Offer {
  id: string;

  title: string;

  description: string;

  image: string;

  buttonText: string;

  expiresAt: string;

  discount: number;

  active: boolean;
}