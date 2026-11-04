"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { ShopProduct } from "../islamic-shop/catalog";

export type CartItem = Pick<ShopProduct, "title" | "price" | "image" | "category"> & { quantity: number };
type CartContextValue = { items: CartItem[]; ready: boolean; add: (product: ShopProduct, quantity?: number) => void; setQuantity: (title: string, quantity: number) => void; remove: (title: string) => void; clear: () => void };
const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "ummat-it-house-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) setItems(parsed.filter((item): item is CartItem => item && typeof item.title === "string" && Number.isFinite(item.price) && Number.isFinite(item.quantity) && item.quantity > 0));
      }
    } catch { /* Ignore invalid browser storage and start with an empty cart. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem(storageKey, JSON.stringify(items)); }, [items, ready]);
  const value = useMemo<CartContextValue>(() => ({
    items, ready,
    add: (product, quantity = 1) => setItems((current) => {
      const found = current.find((item) => item.title === product.title);
      return found ? current.map((item) => item.title === product.title ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { title: product.title, category: product.category, price: product.price, image: product.image, quantity }];
    }),
    setQuantity: (title, quantity) => setItems((current) => quantity <= 0 ? current.filter((item) => item.title !== title) : current.map((item) => item.title === title ? { ...item, quantity } : item)),
    remove: (title) => setItems((current) => current.filter((item) => item.title !== title)),
    clear: () => setItems([]),
  }), [items, ready]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
