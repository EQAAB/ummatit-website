"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useCart } from "../components/CartProvider";
import { productImage } from "../islamic-shop/catalog";
import styles from "./cart.module.css";
import shopStyles from "../islamic-shop/shop.module.css";

const money = (amount: number) => `Rs. ${amount.toLocaleString("en-PK")}`;
const whatsappNumber = "923451548039";

type DeliveryForm = {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};

const emptyForm: DeliveryForm = {
  fullName: "",
  phone: "",
  city: "",
  address: "",
  notes: "",
};

export default function ShoppingCartPage() {
  const { items, ready, setQuantity, remove, clear } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [form, setForm] = useState<DeliveryForm>(emptyForm);
  const [formError, setFormError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length ? 250 : 0;
  const total = Math.max(0, subtotal + shipping - discount);
  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

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

  const updateField = (field: keyof DeliveryForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (formError) setFormError("");
  };

  const placeCodOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!items.length) return;

    const fullName = form.fullName.trim();
    const phone = form.phone.trim();
    const city = form.city.trim();
    const address = form.address.trim();

    if (!fullName || !phone || !city || !address) {
      setFormError("Please fill in your name, phone, city, and delivery address.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setFormError("Please enter a valid phone number for Cash on Delivery.");
      return;
    }

    const reference = `COD-${Date.now().toString().slice(-8)}`;
    const lines = [
      `New Cash on Delivery order (${reference})`,
      "",
      ...items.map((item) => `• ${item.title} × ${item.quantity} — ${money(item.price * item.quantity)}`),
      "",
      `Subtotal: ${money(subtotal)}`,
      `Shipping: ${money(shipping)}`,
      discount > 0 ? `Discount: − ${money(discount)}` : "",
      `Total (COD): ${money(total)}`,
      "",
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `City: ${city}`,
      `Address: ${address}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : "",
      "",
      "Payment method: Cash on Delivery",
    ].filter(Boolean);

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setOrderRef(reference);
    setOrderPlaced(true);
    clear();
    setDiscount(0);
    setCoupon("");
    setCouponMessage("");
    setForm(emptyForm);
    setFormError("");
  };

  return (
    <main className={styles.page}>
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
            Review your items and complete your order with Cash on Delivery.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        {orderPlaced ? (
          <div className={styles.success} role="status">
            <span aria-hidden="true">✓</span>
            <h2>Cash on Delivery order placed</h2>
            <p>
              Your order <strong>{orderRef}</strong> is ready. We opened WhatsApp so you can confirm it with our team.
              Pay in cash when your parcel arrives.
            </p>
            <div className={styles.successActions}>
              <Link className={styles.primaryButton} href="/islamic-shop">
                Continue Shopping
              </Link>
              <a
                className={styles.secondaryButton}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open WhatsApp
              </a>
            </div>
          </div>
        ) : !ready ? (
          <div className={styles.empty}>
            <p>Loading your cart…</p>
          </div>
        ) : items.length === 0 ? (
          <div className={styles.empty}>
            <span aria-hidden="true">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Explore the shop and find something meaningful for your home.</p>
            <Link className={styles.primaryButton} href="/islamic-shop">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.mainCol}>
              <section className={styles.cartCard} aria-labelledby="your-cart">
                <div className={styles.cardHeading}>
                  <h2 id="your-cart">
                    Your Cart <small>({itemCount} items)</small>
                  </h2>
                  <button
                    type="button"
                    className={styles.clearButton}
                    onClick={() => {
                      clear();
                      setDiscount(0);
                    }}
                  >
                    Clear Cart
                  </button>
                </div>
                <div className={styles.columnHead}>
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                  <span className={styles.removeLabel}>Remove</span>
                </div>
                <div className={styles.items}>
                  {items.map((item) => (
                    <article className={styles.item} key={item.title}>
                      <div className={styles.product}>
                        <img src={productImage(item.image)} alt={item.title} />
                        <div>
                          <h3>{item.title}</h3>
                          <small>{item.category}</small>
                        </div>
                      </div>
                      <span className={styles.unitPrice}>{money(item.price)}</span>
                      <div className={styles.quantity} aria-label={`Quantity for ${item.title}`}>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.title, item.quantity - 1)}
                          aria-label={`Decrease ${item.title} quantity`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.title, item.quantity + 1)}
                          aria-label={`Increase ${item.title} quantity`}
                        >
                          +
                        </button>
                      </div>
                      <strong className={styles.lineTotal}>{money(item.price * item.quantity)}</strong>
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => remove(item.title)}
                        aria-label={`Remove ${item.title}`}
                      >
                        ×
                      </button>
                    </article>
                  ))}
                </div>
                <Link className={styles.continueButton} href="/islamic-shop">
                  ← &nbsp; Continue Shopping
                </Link>
              </section>

              <section className={styles.checkoutCard} aria-labelledby="cod-checkout">
                <div className={styles.cardHeading}>
                  <h2 id="cod-checkout">Cash on Delivery</h2>
                </div>
                <form className={styles.checkoutForm} onSubmit={placeCodOrder} noValidate>
                  <div className={styles.paymentMethod} role="radiogroup" aria-label="Payment method">
                    <label className={styles.paymentOption}>
                      <input type="radio" name="payment" value="cod" checked readOnly />
                      <span>
                        <strong>Cash on Delivery</strong>
                        <small>Pay in cash when your order arrives across Pakistan</small>
                      </span>
                    </label>
                  </div>

                  <div className={styles.fields}>
                    <label>
                      Full Name <b>*</b>
                      <input
                        value={form.fullName}
                        onChange={(event) => updateField("fullName", event.target.value)}
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label>
                      Phone / WhatsApp <b>*</b>
                      <input
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        autoComplete="tel"
                        placeholder="+92 3XX XXXXXXX"
                        required
                      />
                    </label>
                    <label>
                      City <b>*</b>
                      <input
                        value={form.city}
                        onChange={(event) => updateField("city", event.target.value)}
                        autoComplete="address-level2"
                        required
                      />
                    </label>
                    <label className={styles.fullWidth}>
                      Delivery Address <b>*</b>
                      <textarea
                        value={form.address}
                        onChange={(event) => updateField("address", event.target.value)}
                        autoComplete="street-address"
                        rows={3}
                        required
                      />
                    </label>
                    <label className={styles.fullWidth}>
                      Order Notes <span>(optional)</span>
                      <textarea
                        value={form.notes}
                        onChange={(event) => updateField("notes", event.target.value)}
                        rows={2}
                        placeholder="Landmark, preferred delivery time, etc."
                      />
                    </label>
                  </div>

                  {formError && (
                    <p className={styles.formError} role="alert">
                      {formError}
                    </p>
                  )}

                  <button type="submit" className={styles.checkout}>
                    Place COD Order <span>→</span>
                  </button>
                  <p className={styles.codHint}>
                    Your order details will open in WhatsApp for confirmation. No online payment is required.
                  </p>
                </form>
              </section>
            </div>

            <aside className={styles.summary}>
              <h2>Order Summary</h2>
              <div className={styles.summaryBody}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <strong>{money(subtotal)}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <strong>{money(shipping)}</strong>
                </div>
                {discount > 0 && (
                  <div className={styles.summaryRow}>
                    <span>Discount</span>
                    <strong>− {money(discount)}</strong>
                  </div>
                )}
                <div className={styles.totalRow}>
                  <span>Total (COD)</span>
                  <strong>{money(total)}</strong>
                </div>
                <p className={styles.codBadge}>💵 Cash on Delivery</p>
                <div className={styles.coupon}>
                  <h3>Have a Coupon Code?</h3>
                  <p>Enter your code to get a discount.</p>
                  <div className={styles.couponForm}>
                    <input
                      value={coupon}
                      onChange={(event) => setCoupon(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") applyCoupon();
                      }}
                      aria-label="Coupon code"
                      placeholder="Enter coupon code"
                    />
                    <button type="button" onClick={applyCoupon}>
                      Apply
                    </button>
                  </div>
                  {couponMessage && (
                    <p className={styles.couponMessage} role="status">
                      {couponMessage}
                    </p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
