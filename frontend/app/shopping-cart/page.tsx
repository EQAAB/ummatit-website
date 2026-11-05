"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../components/CartProvider";
import { productImage } from "../islamic-shop/catalog";
import styles from "./cart.module.css";
import shopStyles from "../islamic-shop/shop.module.css";

const money = (amount: number) => `Rs. ${amount.toLocaleString("en-PK")}`;

export default function ShoppingCartPage() {
  const { items, ready, setQuantity, remove, clear } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length ? 250 : 0;
  const total = Math.max(0, subtotal + shipping - discount);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "UMMAT10") {
      const amount = Math.round(subtotal * 0.1);
      setDiscount(amount);
      setCouponMessage(`UMMAT10 applied — ${money(amount)} off.`);
    } else {
      setDiscount(0);
      setCouponMessage("That coupon code isn’t valid. Try UMMAT10.");
    }
  };

  return <main className={styles.page}>
    <section className={shopStyles.hero}>
      <div className={shopStyles.heroInner}>
        <p className={shopStyles.breadcrumb}>
          <Link href="/">Home</Link>
          &nbsp; › &nbsp;
          <Link href="/islamic-shop">Islamic Shop</Link>
          &nbsp; › &nbsp;Shopping Cart
        </p>
        <h1>
          Shopping <em>Cart</em>
        </h1>
        <p className={shopStyles.heroCopy}>
          Review your selected items and continue when you’re ready.
        </p>
      </div>
    </section>
    <section className={styles.content}>
      {!ready ? <div className={styles.empty}><p>Loading your cart…</p></div> : items.length === 0 ? <div className={styles.empty}><span aria-hidden="true">🛒</span><h2>Your cart is empty</h2><p>Explore the shop and find something meaningful for your home.</p><Link className={styles.primaryButton} href="/islamic-shop">Continue Shopping</Link></div> : <div className={styles.layout}>
        <section className={styles.cartCard} aria-labelledby="your-cart">
          <div className={styles.cardHeading}><h2 id="your-cart">Your Cart <small>({items.reduce((sum, item) => sum + item.quantity, 0)} items)</small></h2><button type="button" className={styles.clearButton} onClick={() => { clear(); setDiscount(0); }}>Clear Cart</button></div>
          <div className={styles.columnHead}><span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span><span className={styles.removeLabel}>Remove</span></div>
          <div className={styles.items}>{items.map((item) => <article className={styles.item} key={item.title}>
            <div className={styles.product}><img src={productImage(item.image)} alt={item.title} /><div><h3>{item.title}</h3><small>{item.category}</small></div></div>
            <span className={styles.unitPrice}>{money(item.price)}</span>
            <div className={styles.quantity} aria-label={`Quantity for ${item.title}`}><button type="button" onClick={() => setQuantity(item.title, item.quantity - 1)} aria-label={`Decrease ${item.title} quantity`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => setQuantity(item.title, item.quantity + 1)} aria-label={`Increase ${item.title} quantity`}>+</button></div>
            <strong className={styles.lineTotal}>{money(item.price * item.quantity)}</strong>
            <button type="button" className={styles.removeButton} onClick={() => remove(item.title)} aria-label={`Remove ${item.title}`}>×</button>
          </article>)}</div>
          <Link className={styles.continueButton} href="/islamic-shop">← &nbsp; Continue Shopping</Link>
        </section>
        <aside className={styles.summary}>
          <h2>Order Summary</h2><div className={styles.summaryBody}>
            <div className={styles.summaryRow}><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
            <div className={styles.summaryRow}><span>Shipping</span><strong>{money(shipping)}</strong></div>
            {discount > 0 && <div className={styles.summaryRow}><span>Discount</span><strong>− {money(discount)}</strong></div>}
            <div className={styles.totalRow}><span>Total</span><strong>{money(total)}</strong></div>
            <Link className={styles.checkout} href="/checkout">Proceed to Checkout <span>→</span></Link>
            <div className={styles.coupon}><h3>Have a Coupon Code?</h3><p>Enter your code to get a discount.</p><div className={styles.couponForm}><input value={coupon} onChange={(event) => setCoupon(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") applyCoupon(); }} aria-label="Coupon code" placeholder="Enter coupon code" /><button type="button" onClick={applyCoupon}>Apply</button></div>{couponMessage && <p className={styles.couponMessage} role="status">{couponMessage}</p>}</div>
          </div>
        </aside>
      </div>}
    </section>
  </main>;
}
