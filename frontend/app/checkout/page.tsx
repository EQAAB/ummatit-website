"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "../components/CartProvider";
import { productImage } from "../islamic-shop/catalog";
import shopStyles from "../islamic-shop/shop.module.css";
import styles from "./checkout.module.css";

const money = (amount: number) => `Rs. ${amount.toLocaleString("en-PK")}`;

function Icon({ children }: { children: React.ReactNode }) {
  return <span className={styles.icon} aria-hidden="true">{children}</span>;
}

export default function CheckoutPage() {
  const { items, ready, clear } = useCart();
  const [payment, setPayment] = useState("card");
  const [placed, setPlaced] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length ? 250 : 0;
  const total = subtotal + shipping;

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlaced(true);
    clear();
  };

  return <main className={styles.page}>
    <section className={shopStyles.hero}><div className={shopStyles.heroInner}>
      <p className={shopStyles.breadcrumb}><Link href="/">Home</Link><span>›</span><Link href="/islamic-shop">Islamic Shop</Link><span>›</span><span>Checkout</span></p>
      <h1>Checkout</h1><p className={shopStyles.heroCopy}>Complete your order securely and quickly.</p>
    </div></section>

    <div className={styles.steps} aria-label="Order progress"><span><b>✓</b> Shopping Cart</span><i /><span className={styles.current}><b>●</b> Checkout</span><i /><span className={styles.pending}><b>✓</b> Order Confirmation</span></div>

    {placed ? <section className={styles.success} role="status"><span>✓</span><h2>Thank you for your order!</h2><p>Your order details have been received. We’ll be in touch to confirm delivery.</p><Link href="/islamic-shop">Continue shopping</Link></section> : !ready ? <p className={styles.loading}>Loading your order…</p> : items.length === 0 ? <section className={styles.empty}><h2>Your cart is empty</h2><p>Add something from the shop before checking out.</p><Link href="/islamic-shop">Browse the shop</Link></section> : <form className={styles.layout} onSubmit={submitOrder}>
      <section className={styles.formCard}>
        <section className={styles.formSection}>
          <div className={styles.sectionTitle}><Icon>♙</Icon><div><h2>Contact Information</h2><p>We’ll use this information to send your order updates.</p></div></div>
          <div className={`${styles.fields} ${styles.three}`}>
            <label>Full Name <em>*</em><input name="name" autoComplete="name" placeholder="Enter your full name" required /></label>
            <label>Email Address <em>*</em><input name="email" type="email" autoComplete="email" placeholder="Enter your email address" required /></label>
            <label>Phone Number <em>*</em><input name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" required /></label>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.sectionTitle}><Icon>⌖</Icon><div><h2>Delivery Address</h2><p>Enter the address where you want to receive your order.</p></div></div>
          <div className={`${styles.fields} ${styles.three}`}>
            <label>Country <em>*</em><input name="country" autoComplete="country-name" placeholder="Country" required /></label>
            <label>City <em>*</em><input name="city" autoComplete="address-level2" placeholder="City" required /></label>
            <label>Postal Code <em>*</em><input name="postal" autoComplete="postal-code" placeholder="e.g. 44000" required /></label>
            <label className={styles.spanTwo}>Street Address <em>*</em><input name="address" autoComplete="street-address" placeholder="House number, street name" required /></label>
            <label>Additional Details <small>(Optional)</small><input name="details" placeholder="Apartment, building, floor, etc." /></label>
          </div>
        </section>

        <section className={`${styles.formSection} ${styles.paymentSection}`}>
          <div className={styles.sectionTitle}><Icon>▤</Icon><div><h2>Payment Method</h2><p>Choose a secure payment method.</p></div></div>
          <label className={`${styles.paymentOption} ${payment === "card" ? styles.selected : ""}`}><input type="radio" name="payment" value="card" checked={payment === "card"} onChange={() => setPayment("card")} /><span className={styles.payIcon}>▣</span><span className={styles.payCopy}><strong>Online Card Payment</strong><small>Pay securely with your debit or credit card</small></span><span className={styles.cards}>VISA　🔴🟡　AMEX</span></label>
          <label className={`${styles.paymentOption} ${payment === "cod" ? styles.selected : ""}`}><input type="radio" name="payment" value="cod" checked={payment === "cod"} onChange={() => setPayment("cod")} /><span className={styles.payIcon}>♧</span><span className={styles.payCopy}><strong>Cash on Delivery (COD)</strong><small>Pay when you receive your order</small></span></label>
        </section>
      </section>

      <aside className={styles.summary}>
        <h2><span>🛒</span> Order Summary</h2>
        <div className={styles.summaryBody}>
          <div className={styles.products}>{items.map((item) => <article className={styles.product} key={item.title}><img src={productImage(item.image)} alt="" /><div className={styles.productInfo}><strong>{item.title}</strong><small>{item.category}</small><small>Qty: {item.quantity}</small></div><b>{money(item.price * item.quantity)}</b></article>)}</div>
          <div className={styles.priceRow}><span>Subtotal ({items.reduce((n, i) => n + i.quantity, 0)} items)</span><strong>{money(subtotal)}</strong></div>
          <div className={styles.priceRow}><span>Shipping</span><strong>{money(shipping)}</strong></div>
          <div className={styles.totalRow}><strong>Total</strong><b>{money(total)}</b></div>
          <button className={styles.placeOrder} type="submit"><span>♙</span> Place Order <small>({money(total)})</small><b>→</b></button>
          <p className={styles.secure}>♢ &nbsp; Your payment is secure and encrypted.</p>
        </div>
      </aside>
    </form>}

    <section className={styles.benefits} aria-label="Shopping benefits"><div><b>♧</b><span><strong>Fast &amp; Reliable Delivery</strong><small>Across Pakistan</small></span></div><div><b>♢</b><span><strong>Secure Payment</strong><small>With trusted partners</small></span></div><div><b>⟳</b><span><strong>Easy Returns</strong><small>Hassle-free return policy</small></span></div><div><b>♧</b><span><strong>Customer Support</strong><small>We’re here to help you</small></span></div></section>
  </main>;
}

