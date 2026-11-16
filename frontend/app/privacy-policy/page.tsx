import React from "react";
import Link from "next/link";
import styles from "./privacy-policy.module.css";

export const metadata = {
  title: "Privacy Policy | Ummat IT House",
  description: "Learn how Ummat IT House collects, uses, and protects your information.",
};

const ShieldLockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      fill="currentColor"
    />
    <rect x="9.1" y="10.6" width="5.8" height="4.6" rx="0.9" fill="#fff" />
    <path
      d="M10.2 10.6V9.2a1.8 1.8 0 0 1 3.6 0v1.4"
      stroke="#fff"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

function Icon({ children, className }: { children: React.ReactNode; className?: string }) {
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

const ShieldIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const sectionIcons = {
  database: (
    <Icon>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </Icon>
  ),
  gear: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  ),
  users: (
    <Icon>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  ),
  cookie: (
    <Icon>
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M11 17v.01" />
      <path d="M7 14v.01" />
    </Icon>
  ),
  userCog: (
    <Icon>
      <path d="M14 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8" cy="7" r="4" />
      <circle cx="18" cy="16" r="2.4" />
      <path d="M18 13.6v-1.4M18 20.4V22M20.9 14.6l1-1M15.1 18.4l-1 1M20.9 19.4l1 1M15.1 15.6l-1-1" />
    </Icon>
  ),
  calendar: (
    <Icon>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </Icon>
  ),
  fileText: (
    <Icon>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </Icon>
  ),
  mail: (
    <Icon>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2 6 12 13 22 6" />
    </Icon>
  ),
};

const sections = [
  {
    icon: sectionIcons.database,
    title: "Information We Collect",
    text: "We may collect personal information such as your name, email address, phone number, billing details, and learning activity (e.g., course enrollments and progress).",
  },
  {
    icon: sectionIcons.gear,
    title: "How We Use Your Information",
    text: "We use your information to provide and improve our services, process orders and course enrollments, communicate with you, and ensure a secure and personalized experience.",
  },
  {
    icon: sectionIcons.shield,
    title: "How We Protect Your Information",
    text: "We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.",
  },
  {
    icon: sectionIcons.users,
    title: "Sharing Your Information",
    text: "We do not sell or rent your personal information. We may share it with trusted service providers (e.g., payment gateways or hosting services) only to operate our website and services.",
  },
  {
    icon: sectionIcons.cookie,
    title: "Cookies",
    text: "Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze site usage.",
  },
  {
    icon: sectionIcons.userCog,
    title: "Your Rights",
    text: "You can access, update, or delete your personal information at any time by contacting our support team.",
  },
];

const menuItems = [
  { label: "Privacy Policy", icon: sectionIcons.fileText, href: "/privacy-policy", active: true },
  { label: "Terms & Conditions", icon: sectionIcons.fileText, href: "#" },
  { label: "Cookie Policy", icon: sectionIcons.cookie, href: "#" },
  { label: "Refund Policy", icon: sectionIcons.shield, href: "#" },
  { label: "Contact Us", icon: sectionIcons.mail, href: "/contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      {/* HERO — same pattern as Enrollment / Order Confirmation pages */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.breadcrumb}>
              <Link href="/">⌂ &nbsp;Home</Link>
              <span aria-hidden="true">›</span>
              <span>Privacy Policy</span>
            </p>
            <div className={styles.heroTitleRow}>
              <span className={styles.iconBox}>
                <ShieldIcon className={styles.heroIcon} />
              </span>
              <div>
                <h1>
                  Privacy <em>Policy</em>
                </h1>
                <p className={styles.heroCopy}>
                  Learn how we collect, use, and protect your information.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=85" alt="" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className={styles.main}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sideArt}>
            <ShieldLockIcon className={styles.shieldLock} />
            <span className={`${styles.leaf} ${styles.leafLeft}`} aria-hidden="true" />
            <span className={`${styles.leaf} ${styles.leafRight}`} aria-hidden="true" />
          </div>

          <nav className={styles.menu} aria-label="Legal pages">
            {menuItems.map((item) =>
              item.href === "#" ? (
                <span key={item.label} className={styles.menuItem}>
                  {item.icon}
                  {item.label}
                </span>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${styles.menuItem} ${item.active ? styles.menuItemActive : ""}`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className={styles.skyline} aria-hidden="true">
            <svg viewBox="0 0 220 70" fill="#e6d8bd">
              <rect x="30" y="22" width="5" height="48" />
              <circle cx="32.5" cy="20" r="4" />
              <rect x="185" y="22" width="5" height="48" />
              <circle cx="187.5" cy="20" r="4" />
              <path d="M110 6c-16 12-22 20-22 24h44c0-4-6-12-22-24z" />
              <rect x="70" y="30" width="80" height="40" />
              <rect x="82" y="40" width="10" height="30" rx="5" fill="#f4ead6" />
              <rect x="105" y="40" width="10" height="30" rx="5" fill="#f4ead6" />
              <rect x="128" y="40" width="10" height="30" rx="5" fill="#f4ead6" />
              <rect x="10" y="62" width="200" height="8" />
            </svg>
          </div>
        </aside>

        {/* Content card */}
        <div className={styles.content}>
          <h2>Privacy Policy</h2>
          <p className={styles.intro}>
            Your privacy is important to us. This Privacy Policy explains how Ummat IT House
            collects, uses, and protects your personal information when you use our website and
            services.
          </p>

          {sections.map((section) => (
            <div key={section.title} className={styles.section}>
              <span className={styles.sectionIcon}>{section.icon}</span>
              <div>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            </div>
          ))}

          <div className={styles.updatedBar}>
            <Icon className={styles.updatedIcon}>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </Icon>
            <span>
              <strong>Last Updated:</strong> November 13, 2026
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
