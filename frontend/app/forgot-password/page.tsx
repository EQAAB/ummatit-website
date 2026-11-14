"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./forgot-password.module.css";

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

const LockIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </Svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </Svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </Svg>
);

const BenefitIcons = {
  delivery: (
    <Svg>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M14 17h2l4-5v5h-2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </Svg>
  ),
  secure: (
    <Svg>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
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
  support: (
    <Svg>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </Svg>
  ),
};

const benefits = [
  { icon: BenefitIcons.delivery, title: "Fast & Reliable Delivery", desc: "Across your region" },
  { icon: BenefitIcons.secure, title: "Secure & Safe", desc: "Your data is always protected" },
  { icon: BenefitIcons.returns, title: "Easy Returns", desc: "Hassle-free return policy" },
  { icon: BenefitIcons.support, title: "Customer Support", desc: "We're here to help you" },
];

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className={styles.page}>
      {/* HERO — same pattern as Islamic Shop page */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>
            <Link href="/">⌂ &nbsp;Home</Link>
            <span aria-hidden="true">›</span>
            <span>Forgot Password</span>
          </p>
          <div className={styles.heroTitleRow}>
            <span className={styles.lockBox}>
              <LockIcon className={styles.lockIcon} />
            </span>
            <div>
              <h1>
                Forgot <em>Password</em>
              </h1>
              <p className={styles.heroCopy}>Reset your password and get back to your account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CENTER CARD — illustration + form */}
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.artCol}>
            <div className={styles.archFrame}>
              <img
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=90"
                alt="Holy Quran with traditional lantern"
              />
            </div>
          </div>

          <div className={styles.formCol}>
            {sent ? (
              <div className={styles.successBox}>
                <span className={styles.successIcon}>
                  <Svg>
                    <polyline points="20 6 9 17 4 12" />
                  </Svg>
                </span>
                <h3>Reset Link Sent!</h3>
                <p>
                  We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check
                  your inbox — and the spam folder, just in case.
                </p>
                <button type="button" className={styles.backBtn} onClick={() => setSent(false)}>
                  <ArrowLeftIcon className={styles.btnArrow} />
                  Back to Login
                </button>
              </div>
            ) : (
              <>
                <h2>Forgot Your Password?</h2>
                <p className={styles.lead}>
                  No worries! Enter your registered email address and we&apos;ll send you a link to
                  reset your password.
                </p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">
                    Email Address <em aria-hidden="true">*</em>
                  </label>
                  <div className={styles.inputWrap}>
                    <MailIcon className={styles.inputIcon} />
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <button type="submit" className={styles.sendBtn}>
                    <SendIcon className={styles.sendIcon} />
                    Send Reset Link
                  </button>
                </form>
                <div className={styles.backRow}>
                  <Link href="/" className={styles.backLink}>
                    <ArrowLeftIcon className={styles.backArrow} />
                    Back to Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FEATURE BADGES STRIP — same style as Islamic Shop page */}
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
