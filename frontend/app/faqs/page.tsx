"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./faqs.module.css";

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

const ChatIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M8 11h.01M12 11h.01M16 11h.01" strokeWidth={2.4} />
  </Svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
  </Svg>
);

const LaptopIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 20h20" />
  </Svg>
);

const GradCapIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </Svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
    <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
  </Svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </Svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Svg>
);

const HeadsetIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </Svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </Svg>
);

const QuestionIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" strokeWidth={2.4} />
  </Svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <polyline points="6 9 12 15 18 9" />
  </Svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <polyline points="9 6 15 12 9 18" />
  </Svg>
);

const categories = [
  {
    id: "general",
    label: "General",
    icon: <LaptopIcon />,
    questions: [
      {
        q: "What is Ummat IT House?",
        a: "Ummat IT House is an online platform that offers Islamic learning (Qur'an, Hadith, Seerah, etc.), IT training courses (like Web Development, React, etc.), and Islamic products (books, prayer items, and more).",
      },
      {
        q: "How can I enroll in an IT course?",
        a: "Open the IT Courses page, choose your course, and click View Details → Enroll Now. Fill in your details on the enrollment page and our team will contact you within 24 hours to complete your admission.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfer, JazzCash, EasyPaisa, and major debit/credit cards for online payments. Cash on delivery is also available for physical products.",
      },
      {
        q: "Will I get a certificate after completing a course?",
        a: "Yes! Every completed course includes a Completion Certificate from Ummat IT House that you can download and share.",
      },
      {
        q: "How can I track my order?",
        a: "Once your order is shipped, you'll receive a tracking number via SMS and email. You can also contact our support team for real-time delivery updates.",
      },
      {
        q: "How can I contact support?",
        a: "Use the Contact Us page, email us, or call our helpline. Our support team is available Monday to Saturday, 10 AM – 8 PM.",
      },
    ],
  },
  {
    id: "courses",
    label: "IT Courses",
    icon: <GradCapIcon />,
    questions: [
      {
        q: "Which IT courses do you offer?",
        a: "We offer Web Development (Full Stack), Frontend Development, Python Programming, Java Programming, Graphic Design, UI/UX Design, Digital Marketing, SEO, and more.",
      },
      {
        q: "Are classes online or on-site?",
        a: "Both options are available. You can join live online classes from anywhere, or attend on-site sessions at our campus.",
      },
      {
        q: "Do I need prior experience to join?",
        a: "Most of our beginner courses (like Computer Basics and Frontend Development) require no prior experience. Advanced courses may recommend basic knowledge.",
      },
      {
        q: "How long does each course take?",
        a: "Course durations range from 2 to 3 months depending on the program. Details are listed on each course's detail page.",
      },
    ],
  },
  {
    id: "islamic",
    label: "Islamic Studies",
    icon: <BookIcon />,
    questions: [
      {
        q: "What Islamic learning programs are available?",
        a: "We offer Qur'an reading with Tajweed, Hadith studies, Seerah, Fiqh basics, and Islamic studies courses for kids and adults.",
      },
      {
        q: "Are the teachers qualified scholars?",
        a: "Yes, all our Islamic studies teachers are qualified scholars with recognized degrees and years of teaching experience.",
      },
      {
        q: "Is there a free trial class?",
        a: "Yes, we offer one free trial class for every Islamic learning program so you can meet the teacher and see the teaching style before enrolling.",
      },
    ],
  },
  {
    id: "orders",
    label: "Orders & Payments",
    icon: <CartIcon />,
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 3–5 working days across Pakistan. Major cities usually receive orders within 2–3 days.",
      },
      {
        q: "What is your return policy?",
        a: "You can return any unused product within 7 days of delivery for a full refund or exchange. Books and electronic items must be in original condition.",
      },
      {
        q: "Do you deliver outside Pakistan?",
        a: "Currently we deliver across Pakistan only. International shipping is planned for the future, Insha'Allah.",
      },
    ],
  },
  {
    id: "account",
    label: "Account & Profile",
    icon: <UserIcon />,
    questions: [
      {
        q: "How do I create an account?",
        a: "Click the My Account button in the navbar and follow the sign-up steps. You only need your name, email, and phone number.",
      },
      {
        q: "I forgot my password — what do I do?",
        a: "Use the Forgot Password link in the footer, enter your email address, and we'll send you a reset link right away.",
      },
      {
        q: "How do I update my profile information?",
        a: "Open My Account from the navbar, go to your profile, and edit your details. Changes are saved instantly.",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: <HeadsetIcon />,
    questions: [
      {
        q: "How quickly does support respond?",
        a: "We typically respond within a few hours during working days, and always within 24 hours.",
      },
      {
        q: "What are your support hours?",
        a: "Our support team is available Monday to Saturday, 10 AM – 8 PM (PKT).",
      },
      {
        q: "How can I report an issue with the website?",
        a: "Use the Contact Us page and describe the issue, or email us directly. A screenshot helps us fix it faster.",
      },
    ],
  },
];

export default function FaqsPage() {
  const [selectedCat, setSelectedCat] = useState("general");
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();
  const searching = query.length > 0;

  const activeCategory = categories.find((c) => c.id === selectedCat) ?? categories[0];

  const visibleFaqs = searching
    ? categories.flatMap((c) =>
        c.questions.filter(
          (f) => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)
        )
      )
    : activeCategory.questions;

  const heading = searching ? "Search Results" : `${activeCategory.label} Questions`;

  const changeCategory = (id: string) => {
    setSelectedCat(id);
    setOpenIdx(0);
  };

  return (
    <main className={styles.page}>
      {/* HERO — same pattern as other pages */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.breadcrumb}>
              <Link href="/">⌂ &nbsp;Home</Link>
              <span aria-hidden="true">›</span>
              <span>FAQs</span>
            </p>
            <div className={styles.heroTitleRow}>
              <span className={styles.iconBox}>
                <ChatIcon className={styles.heroIcon} />
              </span>
              <div>
                <h1>
                  FAQ<em>s</em>
                </h1>
                <p className={styles.heroCopy}>Find quick answers to the most common questions.</p>
              </div>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=85" alt="" />
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className={styles.searchSection}>
        <div className={styles.skyline} aria-hidden="true">
          <svg viewBox="0 0 220 70" fill="#e6d8bd">
            <rect x="30" y="22" width="5" height="48" />
            <circle cx="32.5" cy="20" r="4" />
            <rect x="185" y="22" width="5" height="48" />
            <circle cx="187.5" cy="20" r="4" />
            <path d="M110 6c-16 12-22 20-22 24h44c0-4-6-12-22-24z" />
            <rect x="70" y="30" width="80" height="40" />
            <rect x="10" y="62" width="200" height="8" />
          </svg>
        </div>
        <form className={styles.searchBar} role="search" onSubmit={(e) => e.preventDefault()}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Search your question..."
            aria-label="Search questions"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
        <div className={`${styles.skyline} ${styles.skylineRight}`} aria-hidden="true">
          <svg viewBox="0 0 220 70" fill="#e6d8bd">
            <rect x="30" y="22" width="5" height="48" />
            <circle cx="32.5" cy="20" r="4" />
            <rect x="185" y="22" width="5" height="48" />
            <circle cx="187.5" cy="20" r="4" />
            <path d="M110 6c-16 12-22 20-22 24h44c0-4-6-12-22-24z" />
            <rect x="70" y="30" width="80" height="40" />
            <rect x="10" y="62" width="200" height="8" />
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className={styles.main}>
        {/* Sidebar — categories */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>
            <LayersIcon className={styles.sidebarIcon} />
            FAQ Categories
          </h2>
          <nav className={styles.catMenu} aria-label="FAQ categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`${styles.catItem} ${!searching && category.id === selectedCat ? styles.catItemActive : ""}`}
                onClick={() => changeCategory(category.id)}
              >
                <span className={styles.catIcon}>{category.icon}</span>
                {category.label}
                <ChevronRightIcon className={styles.catChevron} />
              </button>
            ))}
          </nav>
        </aside>

        {/* Questions panel */}
        <div className={styles.content}>
          <div className={styles.contentHead}>
            <h2>
              <LaptopIcon className={styles.contentIcon} />
              {heading}
            </h2>
            <span className={styles.countBadge}>
              {visibleFaqs.length} Question{visibleFaqs.length === 1 ? "" : "s"}
            </span>
          </div>

          {visibleFaqs.length === 0 ? (
            <div className={styles.noResults}>
              <p>No questions found for &quot;{search}&quot;.</p>
              <button type="button" onClick={() => setSearch("")}>
                Clear search
              </button>
            </div>
          ) : (
            <div className={styles.faqList}>
              {visibleFaqs.map((faq, index) => {
                const open = searching ? true : openIdx === index;
                return (
                  <div key={faq.q} className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}>
                    <button
                      type="button"
                      className={styles.faqHead}
                      onClick={() => setOpenIdx(open ? null : index)}
                      aria-expanded={open}
                    >
                      <QuestionIcon className={styles.faqIcon} />
                      <strong>{faq.q}</strong>
                      <ChevronDownIcon className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ""}`} />
                    </button>
                    {open && <p className={styles.faqAnswer}>{faq.a}</p>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
