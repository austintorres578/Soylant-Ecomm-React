export type PurchaseType = "subscribe" | "one-time" | "prepaid";

export type CartItem = {
  title: string;
  price: string;
  quantity: number;
  purchaseType: PurchaseType;
  image: string;
};