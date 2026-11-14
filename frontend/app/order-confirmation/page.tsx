"use client";

import React from "react";
import Link from "next/link";
import styles from "./order-confirmation.module.css";

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const CartIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </Svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <polyline points="20 6 9 17 4 12" />
  </Svg>
);

const stepIcons = {
  cart: <CartIcon />,
  pin: (
    <Svg>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </Svg>
  ),
  shield: (
    <Svg>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
};

const steps = [
  { label: "Shopping Cart", icon: stepIcons.cart, state: "done" },
  { label: "Checkout", icon: stepIcons.pin, state: "done" },
  { label: "Order Confirmation", icon: stepIcons.shield, state: "active" },
] as const;

const orderInfo = [
  { icon: <Svg><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></Svg>, label: "Order Number", value: "#UMH-20458" },
  { icon: <Svg><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></Svg>, label: "Order Date", value: "Jan 28, 2026, 10:24 AM" },
  { icon: <Svg><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></Svg>, label: "Payment Method", value: "Online Card Payment (Visa ending in 4312)" },
  { icon: <Svg><path d="M10 17h4V5H2v12h3" /><path d="M14 17h2l4-5v5h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></Svg>, label: "Estimated Delivery", value: "Feb 2 – Feb 5, 2026" },
];

const orderItems = [
  { name: "Quran (Uthmani Script)", sub: "Holy Quran with Uthmani script", qty: 1, price: 5599, image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=200&q=85" },
  { name: "Premium Prayer Mat", sub: "Janamaz", qty: 1, price: 6999, image: "https://urbanrugs-kw.com/cdn/shop/files/R-M-26_1.jpg?v=1761086810&width=200" },
  { name: "Wooden Tasbeeh", sub: "99 Beads", qty: 2, price: 3599, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=200&q=85" },
];

const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
const shipping = 499;
const total = subtotal + shipping;
const itemCount = orderItems.reduce((sum, item) => sum + item.qty, 0);
const pkr = (amount: number) => `Rs. ${amount.toLocaleString("en-PK")}`;

const BenefitIcons = {
  secure: (
    <Svg>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  support: (
    <Svg>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </Svg>
  ),
  shipping: (
    <Svg>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M14 17h2l4-5v5h-2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </Svg>
  ),
  returns: (
    <Svg>
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </Svg>
  ),
};

const benefits = [
  { icon: BenefitIcons.secure, title: "Secure Payment", desc: "Your payment is 100% protected" },
  { icon: BenefitIcons.support, title: "Order Support", desc: "Get help with your order anytime" },
  { icon: BenefitIcons.shipping, title: "Shipping Updates", desc: "Receive real-time delivery updates" },
  { icon: BenefitIcons.returns, title: "Easy Returns", desc: "Hassle-free return policy" },
];

export default function OrderConfirmationPage() {
  return (
    <main className={styles.page}>
      {/* HERO — same pattern as Forgot Password / Islamic Shop pages */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>
            <Link href="/">⌂ &nbsp;Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/islamic-shop">Islamic Shop</Link>
            <span aria-hidden="true">›</span>
            <span>Order Confirmation</span>
          </p>
          <div className={styles.heroTitleRow}>
            <span className={styles.iconBox}>
              <CartIcon className={styles.heroIcon} />
            </span>
            <div>
              <h1>
                Order <em>Confirmation</em>
              </h1>
              <p className={styles.heroCopy}>Thank you! Your order has been placed successfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS STEPS */}
      <section className={styles.steps} aria-label="Checkout progress">
        <div className={styles.stepsInner}>
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              {index > 0 && <span className={styles.stepLine} aria-hidden="true" />}
              <div className={`${styles.step} ${step.state === "active" ? styles.stepActive : ""}`}>
                <span className={styles.stepIconWrap}>
                  {step.icon}
                  <i className={styles.stepCheck}>
                    <CheckIcon className={styles.stepCheckIcon} />
                  </i>
                </span>
                <span className={styles.stepLabel}>{step.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className={styles.main}>
        <div className={styles.leftCol}>
          {/* Thank you banner */}
          <div className={styles.thankCard}>
            <span className={styles.thankSeal}>
              <CheckIcon className={styles.thankCheck} />
            </span>
            <div className={styles.thankText}>
              <h2>Thank You!</h2>
              <p>
                <strong>Your order has been placed successfully.</strong>
              </p>
              <p>
                We&apos;ve received your order and will start preparing it for shipment. You&apos;ll
                receive an order update via email and SMS.
              </p>
            </div>
          </div>

          {/* Order info bar */}
          <div className={styles.infoBar}>
            {orderInfo.map((item) => (
              <div key={item.label} className={styles.infoCell}>
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery + Billing cards */}
          <div className={styles.addressGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardHead}>
                <span className={styles.infoCardIcon}>
                  <Svg>
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </Svg>
                </span>
                <h3>Delivery Address</h3>
              </div>
              <p className={styles.addressName}>Muhammad Bilal</p>
              <p className={styles.addressLines}>House 24, Street 7, F-8/2, Islamabad, 44000, Pakistan</p>
              <p className={styles.addressPhone}>
                <Svg className={styles.phoneIcon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </Svg>
                +92 333 8130214
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardHead}>
                <span className={styles.infoCardIcon}>
                  <Svg>
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </Svg>
                </span>
                <h3>Billing / Contact Information</h3>
              </div>
              <div className={styles.billingRow}>
                <strong>Full Name:</strong>
                <span>Muhammad Bilal</span>
              </div>
              <div className={styles.billingRow}>
                <strong>Email Address:</strong>
                <span>bilal@ummatithouse.com</span>
              </div>
              <div className={styles.billingRow}>
                <strong>Phone Number:</strong>
                <span>+92 333 8130214</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className={styles.actions}>
            <a href="#" className={styles.trackBtn}>
              <Svg className={styles.actionIcon}>
                <path d="M10 17h4V5H2v12h3" />
                <path d="M14 17h2l4-5v5h-2" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </Svg>
              Track Order
              <span aria-hidden="true">→</span>
            </a>
            <a href="#" className={styles.outlineBtn}>
              <Svg className={styles.actionIcon}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="13" y2="17" />
              </Svg>
              View My Orders
            </a>
            <a href="#" className={styles.outlineBtn}>
              <Svg className={styles.actionIcon}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </Svg>
              Download Invoice
            </a>
            <Link href="/islamic-shop" className={styles.outlineBtn}>
              <CartIcon className={styles.actionIcon} />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <aside className={styles.summary}>
          <div className={styles.summaryHead}>
            <CartIcon className={styles.summaryHeadIcon} />
            <h3>Order Summary</h3>
          </div>

          <div className={styles.summaryItems}>
            {orderItems.map((item) => (
              <div key={item.name} className={styles.summaryItem}>
                <span className={styles.summaryThumb}>
                  <img src={item.image} alt={item.name} />
                </span>
                <div className={styles.summaryItemInfo}>
                  <strong>{item.name}</strong>
                  <span>{item.sub}</span>
                  <span>Qty: {item.qty}</span>
                </div>
                <strong className={styles.summaryPrice}>{pkr(item.price)}</strong>
              </div>
            ))}
          </div>

          <div className={styles.summaryTotals}>
            <div className={styles.totalRow}>
              <span>Subtotal ({itemCount} Items)</span>
              <strong>{pkr(subtotal)}</strong>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping</span>
              <strong>{pkr(shipping)}</strong>
            </div>
            <div className={styles.grandTotal}>
              <span>Total</span>
              <strong>{pkr(total)}</strong>
            </div>
          </div>
        </aside>
      </section>

      {/* FEATURE BADGES STRIP — same style as other pages */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefitItem}>
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
