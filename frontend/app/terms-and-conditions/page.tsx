import React from "react";
import Link from "next/link";
import styles from "./terms-and-conditions.module.css";

export const metadata = {
  title: "Terms & Conditions | Ummat IT House",
  description: "Read the terms and conditions for using Ummat IT House services.",
};

function Icon({ children, className }: { children: React.ReactNode; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{children}</svg>;
}

const icons = {
  document: <Icon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="14" y2="17" /></Icon>,
  users: <Icon><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></Icon>,
  layers: <Icon><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></Icon>,
  graduation: <Icon><path d="m2 10 10-5 10 5-10 5-10-5Z" /><path d="M6 12.5V17c3 2 9 2 12 0v-4.5" /><path d="M22 10v6" /></Icon>,
  cart: <Icon><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.5L22 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></Icon>,
  ban: <Icon><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></Icon>,
  copyright: <Icon><circle cx="12" cy="12" r="10" /><path d="M15 9.5a4 4 0 1 0 0 5" /></Icon>,
  gavel: <Icon><path d="m14 13-8.5-8.5 3-3L17 10" /><path d="m13 14 6 6" /><path d="m16 11 3-3" /><path d="m4 20 8-8" /><path d="M2 22h13" /></Icon>,
  shield: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></Icon>,
  cookie: <Icon><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M7 14v.01" /></Icon>,
  mail: <Icon><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2 6 12 13 22 6" /></Icon>,
  calendar: <Icon><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></Icon>,
};

const sections = [
  ["Acceptance of Terms", "By using our website, you agree to these Terms & Conditions, our Privacy Policy, and any other applicable policies.", icons.users],
  ["Use of the Website", "You may use our website for personal, educational, and non-commercial purposes in accordance with these terms.", icons.layers],
  ["Courses and Enrollments", "Course details, prices, and availability are subject to change. Enrollment is confirmed only after successful payment.", icons.graduation],
  ["Orders and Payments", "All orders are subject to acceptance and availability. Payments are processed securely through trusted payment providers.", icons.cart],
  ["Prohibited Activities", "You agree not to misuse the website, attempt unauthorized access, or engage in any activity that may harm the website or its users.", icons.ban],
  ["Intellectual Property", "All content on this website, including text, graphics, logos, and course materials, is the property of Ummat IT House and is protected by copyright laws.", icons.copyright],
  ["Changes to Terms", "We may update these Terms & Conditions at any time. Continued use of the website after changes means you accept the updated terms.", icons.gavel],
];

const menuItems = [
  ["Privacy Policy", "/privacy-policy", icons.document],
  ["Terms & Conditions", "/terms-and-conditions", icons.document],
  ["Cookie Policy", "", icons.cookie],
  ["Refund Policy", "", icons.shield],
  ["Contact Us", "/contact", icons.mail],
];

export default function TermsAndConditionsPage() {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.breadcrumb}><Link href="/">⌂ &nbsp;Home</Link><span>›</span><span>Terms &amp; Conditions</span></p>
          <div className={styles.heroTitleRow}><span className={styles.iconBox}>{icons.document}</span><div><h1>Terms &amp; <em>Conditions</em></h1><p>Please read these terms carefully before using our website and services.</p></div></div>
        </div>
        <div className={styles.heroArt} aria-hidden="true"><img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85" alt="" /></div>
      </div>
    </section>
    <section className={styles.main}>
      <aside className={styles.sidebar}>
        <div className={styles.sideArt} aria-hidden="true"><span className={styles.clipboard}>{icons.document}</span><span className={`${styles.leaf} ${styles.leafLeft}`} /><span className={`${styles.leaf} ${styles.leafRight}`} /></div>
        <nav className={styles.menu} aria-label="Legal pages">{menuItems.map(([label, href, icon]) => href ? <Link key={label as string} href={href as string} className={`${styles.menuItem} ${label === "Terms & Conditions" ? styles.menuItemActive : ""}`}>{icon}{label}</Link> : <span key={label as string} className={styles.menuItem}>{icon}{label}</span>)}</nav>
        <div className={styles.skyline} aria-hidden="true"><svg viewBox="0 0 220 70" fill="currentColor"><rect x="30" y="22" width="5" height="48" /><circle cx="32.5" cy="20" r="4" /><rect x="185" y="22" width="5" height="48" /><circle cx="187.5" cy="20" r="4" /><path d="M110 6c-16 12-22 20-22 24h44c0-4-6-12-22-24z" /><rect x="70" y="30" width="80" height="40" /><rect x="10" y="62" width="200" height="8" /></svg></div>
      </aside>
      <div className={styles.content}>
        <h2>Terms &amp; Conditions</h2>
        <p className={styles.intro}>Welcome to Ummat IT House. By accessing or using our website, you agree to be bound by the following Terms &amp; Conditions. Please read them carefully.</p>
        {sections.map(([title, text, icon], index) => <div className={styles.section} key={title as string}><span className={styles.sectionIcon}>{icon}</span><div><h3>{index + 1}. {title}</h3><p>{text}</p></div></div>)}
        <div className={styles.updatedBar}>{icons.calendar}<span><strong>Last Updated:</strong> November 13, 2026</span></div>
      </div>
    </section>
  </main>;
}
