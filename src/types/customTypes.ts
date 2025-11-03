export type PurchaseType = "subscribe" | "one-time" | "prepaid";

export type CartItem = {
  title: string;
  price: string | number;
  quantity: number;
  purchaseType: PurchaseType;
  image: string;
};