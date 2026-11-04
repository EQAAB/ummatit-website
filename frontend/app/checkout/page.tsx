"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "../components/CartProvider";
import { productImage } from "../islamic-shop/catalog";
import shopStyles from "../islamic-shop/shop.module.css";
import styles from "./checkout.module.css";

const money = (amount: number) => `Rs. ${amount.toLocaleString("en-PK")}`;

export default function CheckoutPage() {
  const { items, ready } = useCart();
  const [payment, setPayment] = useState("cod");
  const [placed, setPlaced] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length ? 250 : 0;

  function placeOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setPlaced(true);
  }

  return <main className={styles.page}>
    <section className={shopStyles.hero}><div className={shopStyles.heroInner}>
      <p className={shopStyles.breadcrumb}><Link href="/">Home</Link><span>›</span><Link href="/islamic-shop">Islamic Shop</Link><span>›</span><Link href="/shopping-cart">Shopping Cart</Link><span>›</span><span>Checkout</span></p>
      <h1>Checkout</h1><p className={shopStyles.heroCopy}>Complete your order and be a part of our Islamic journey.</p>
    </div></section>
    <section className={styles.content}>
      {!ready ? <div className={styles.empty}>Loading your order…</div> : items.length === 0 ? <div className={styles.empty}><h2>Your cart is empty</h2><p>Add some products before checking out.</p><Link className={styles.action} href="/islamic-shop">Explore the Shop</Link></div> :
      <form className={styles.layout} onSubmit={placeOrder}>
        <div className={styles.formCard}>
          <section className={styles.section}>
            <h2><span className={styles.icon}>●</span>Billing Information</h2>
            <div className={styles.fields}>
              <label>First Name <b>*</b><input name="firstName" autoComplete="given-name" placeholder="Enter your first name" required /></label>
              <label>Last Name <b>*</b><input name="lastName" autoComplete="family-name" placeholder="Enter your last name" required /></label>
              <label>Email Address <b>*</b><input name="email" type="email" autoComplete="email" placeholder="Enter your email address" required /></label>
              <label>Phone Number <b>*</b><input name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" required /></label>
            </div>
          </section>
          <section className={styles.section}>
            <h2><span className={styles.icon}>●</span>Shipping Address</h2>
            <div className={styles.fields}>
              <label>Country <b>*</b><select name="country" defaultValue="Pakistan" required><option>Pakistan</option></select></label>
              <label>City <b>*</b><select name="city" defaultValue="" required><option value="" disabled>Select your city</option>{["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Other"].map(city => <option key={city}>{city}</option>)}</select></label>
              <label className={styles.street}>Complete Street Address <b>*</b><input name="address" autoComplete="street-address" placeholder="Enter your complete address" required /></label>
              <label>Postal Code <b>*</b><input name="postalCode" autoComplete="postal-code" placeholder="Enter postal code" required /></label>
            </div>
          </section>
          <section className={styles.section}>
            <h2><span className={styles.icon}>●</span>Additional Information</h2>
            <label className={styles.notes}>Order Notes (Optional)<textarea name="notes" rows={2} placeholder="Any special instructions for your order..." /></label>
          </section>
          <section className={`${styles.section} ${styles.paymentSection}`}>
            <h2><span className={styles.icon}>▰</span>Payment Method</h2>
            <div className={styles.paymentOptions}>
              <label className={payment === "cod" ? styles.selected : ""}><input type="radio" name="payment" value="cod" checked={payment === "cod"} onChange={() => setPayment("cod")} /><span aria-hidden="true">▣</span>Cash on Delivery (COD)</label>
              <label className={payment === "bank" ? styles.selected : ""}><input type="radio" name="payment" value="bank" checked={payment === "bank"} onChange={() => setPayment("bank")} /><span aria-hidden="true">♜</span>Bank Transfer</label>
            </div>
          </section>
        </div>
        <aside className={styles.summary}>
          <h2>Order Summary</h2><div className={styles.summaryBody}>
            <div className={styles.products}>{items.map(item => <article className={styles.product} key={item.title}><img src={productImage(item.image)} alt="" /><div className={styles.productInfo}><strong>{item.title}</strong><span>{item.category}</span><small>Qty: {item.quantity}</small></div><b>{money(item.price * item.quantity)}</b></article>)}</div>
            <div className={styles.summaryRow}><span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span><strong>{money(subtotal)}</strong></div>
            <div className={styles.summaryRow}><span>Shipping</span><strong>{money(shipping)}</strong></div>
            <div className={styles.totalRow}><span>Total</span><strong>{money(subtotal + shipping)}</strong></div>
            <button className={styles.action} type="submit" disabled={placed}><span aria-hidden="true">♙</span>{placed ? "Order Placed" : "Place Order"}<span aria-hidden="true">→</span></button>
            {placed && <p className={styles.confirmation} role="status">Thank you! Your order has been placed. We’ll contact you to confirm delivery details.</p>}
            <p className={styles.secure}><span aria-hidden="true">♧</span>Your information is secure and encrypted</p>
          </div>
        </aside>
      </form>}
    </section>
  </main>;
}
