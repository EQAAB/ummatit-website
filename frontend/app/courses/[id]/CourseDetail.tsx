"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./courseDetail.module.css";
import { formatPkr, type Course } from "../courseData";

const outcomesByCategory: Record<string, string[]> = {
  "Web Development": [
    "Build responsive websites with HTML, CSS & Bootstrap",
    "Create interactive web apps with JavaScript",
    "Develop modern front-ends with React",
    "Build backend APIs with Node.js & Express",
    "Work with databases (MongoDB)",
    "Authentication and user management",
    "Deploy real-world projects online",
    "Build a complete full-stack project (portfolio)",
  ],
  Programming: [
    "Write clean, well-structured code from day one",
    "Understand core programming concepts deeply",
    "Solve problems with logic and algorithms",
    "Work confidently with data structures",
    "Debug and test your own programs",
    "Build practical console & GUI projects",
    "Follow professional coding standards",
    "Prepare for advanced frameworks and tools",
  ],
  "Graphic Design": [
    "Master essential design tools and workflows",
    "Apply color theory, layout & typography",
    "Design logos, posters and social media posts",
    "Retouch and enhance photos professionally",
    "Create brand identities and style guides",
    "Prepare print-ready and web-ready files",
    "Build a personal design portfolio",
    "Work with client briefs and feedback",
  ],
  "Digital Marketing": [
    "Understand how digital marketing works end-to-end",
    "Rank websites with practical SEO techniques",
    "Run targeted ad campaigns on social media",
    "Create content that converts followers into customers",
    "Track results with analytics tools",
    "Plan complete marketing strategies",
    "Grow real business pages with case studies",
    "Start your own freelancing career",
  ],
  "Microsoft Office": [
    "Create professional documents in Word",
    "Build formulas, charts and reports in Excel",
    "Design impressive presentations in PowerPoint",
    "Manage data quickly and accurately",
    "Use shortcuts to save hours of work",
    "Automate everyday office tasks",
    "Prepare office-ready files and templates",
    "Boost productivity for study and work",
  ],
  "Computer Basics": [
    "Use a computer with complete confidence",
    "Master files, folders and everyday software",
    "Browse, search and communicate safely online",
    "Create and manage email accounts",
    "Type faster with correct techniques",
    "Protect yourself from common scams and viruses",
    "Handle daily tasks without help",
    "Get ready for advanced computer courses",
  ],
  "UI/UX Design": [
    "Understand what makes designs user-friendly",
    "Research users and define the problem",
    "Create wireframes and user flows",
    "Design clean, modern interfaces",
    "Build interactive prototypes",
    "Apply colors, spacing and typography like a pro",
    "Test designs with real feedback",
    "Compile a strong UI/UX portfolio",
  ],
};

const topicsByCategory: Record<string, [string, string]> = {
  "Web Development": ["HTML, CSS & Responsive Layouts", "JavaScript & React in Depth"],
  Programming: ["Language Fundamentals & Syntax", "Data Structures & Problem Solving"],
  "Graphic Design": ["Design Tools & Color Theory", "Branding & Portfolio Projects"],
  "Digital Marketing": ["SEO & Content Strategy", "Ads, Analytics & Campaigns"],
  "Microsoft Office": ["Word & PowerPoint Essentials", "Excel Formulas, Charts & Reports"],
  "Computer Basics": ["Computer & Internet Essentials", "Everyday Software & Safety"],
  "UI/UX Design": ["UX Research & Wireframing", "UI Design Systems & Prototyping"],
};

const defaultOutcomes = [
  "Master the fundamentals step by step",
  "Learn from practical, real-world examples",
  "Practice with guided hands-on exercises",
  "Build projects you can showcase",
  "Get your questions answered by the instructor",
  "Earn a recognized completion certificate",
  "Learn at your own pace with recordings",
  "Get guidance for jobs and freelancing",
];

const syllabusModules = (topics: [string, string]) => [
  {
    title: "Getting Started",
    duration: "1 Week",
    lessons: [
      "Course orientation & complete roadmap",
      "Tools & software setup (step by step)",
      "How the classes work (Live + Recorded)",
      "Setting your learning goals",
    ],
  },
  {
    title: topics[0],
    duration: "2-3 Weeks",
    lessons: [
      "Core concepts explained with examples",
      "Hands-on practice after every topic",
      "Common mistakes & how to avoid them",
      "Weekly quiz & practice tasks",
      "Instructor feedback session",
      "Mini exercise: apply what you learned",
    ],
  },
  {
    title: topics[1],
    duration: "2-3 Weeks",
    lessons: [
      "Advanced techniques, explained simply",
      "Working like a professional",
      "Efficiency tips, shortcuts & best practices",
      "Real examples from the industry",
      "Weekly quiz & practice tasks",
      "Mini exercise: level up your skills",
    ],
  },
  {
    title: "Real-World Projects",
    duration: "2 Weeks",
    lessons: [
      "Project planning & structure",
      "Building the main project step-by-step",
      "Testing & improving your work",
      "Publishing / presenting your project",
      "Portfolio & CV guidance",
    ],
  },
  {
    title: "Certificate & Career Guidance",
    duration: "1 Week",
    lessons: [
      "Final assessment & certificate",
      "Freelancing & job guidance",
      "Next steps for continued learning",
    ],
  },
];

const reviews = [
  {
    name: "Ayesha R.",
    detail: "Web Development student",
    rating: 5,
    text: "The lessons were practical from day one. I finished with a portfolio I was proud to show employers.",
  },
  {
    name: "Hassan M.",
    detail: "Python Programming student",
    rating: 4,
    text: "A welcoming place to learn at my own pace. The instructor makes even complex topics feel approachable.",
  },
  {
    name: "Fatima K.",
    detail: "UI/UX Design student",
    rating: 5,
    text: "I came to explore design and found a supportive learning community. I would happily recommend it.",
  },
];

const faqs = [
  {
    q: "Do I get a certificate after completing the course?",
    a: "Yes. Every student receives an industry-recognized completion certificate from Ummat IT House after finishing the course and the final assessment.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "Both. You can attend live online classes and also watch the recordings anytime, so you never miss a lesson — even with a busy schedule.",
  },
  {
    q: "Which language is used for teaching?",
    a: "Classes are taught in English with easy explanations. Our instructors also support students in Urdu where needed.",
  },
  {
    q: "Do I need any prior experience to join?",
    a: "No prior experience is required. Courses start from the basics and move step-by-step to an advanced level.",
  },
  {
    q: "What is the fee, and is it a one-time payment?",
    a: "The course fee shown above is a one-time payment that gives you full access to all live classes, recordings, projects and the certificate.",
  },
];

type Props = {
  course: Course;
  related: Course[];
};

export function CourseDetail({ course, related }: Props) {
  const [tab, setTab] = useState("Overview");
  const [openModule, setOpenModule] = useState(0);
  const [inWishlist, setInWishlist] = useState(false);

  const tabs = ["Overview", "Syllabus", "Instructor", "Reviews", "FAQs"];
  const tabIcons = ["▤", "☷", "♧", "☆", "?"];

  const outcomes = outcomesByCategory[course.category] ?? defaultOutcomes;
  const topics = topicsByCategory[course.category] ?? ["Fundamentals & Core Concepts", "Advanced Techniques & Tools"];
  const modules = syllabusModules(topics);

  return (
    <main className={styles.page}>
      {/* BREADCRUMB — dark green strip (same as product page) */}
      <div className={styles.crumb}>
        <Link href="/">⌂ &nbsp; Home</Link>
        <span>›</span>
        <Link href="/courses">IT Courses</Link>
        <span>›</span>
        <span>{course.title}</span>
      </div>

      {/* COURSE SUMMARY ROW — gallery | details | fee box */}
      <section className={styles.course}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={course.image} alt={course.title} />
            <button type="button" className={styles.trailer}>
              <span aria-hidden="true">▶</span> Watch Course Trailer
            </button>
            <span className={styles.trailerTime}>02:35</span>
          </div>
        </div>

        <div className={styles.details}>
          <span className={styles.category}>IT Course</span>
          <h1>{course.title}</h1>
          <div className={styles.rating}>
            <span aria-label={`${course.rating} out of 5 stars`}>★★★★★</span>
            <b>{course.rating}</b>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); setTab("Reviews"); }}>({course.reviews} Reviews)</a>
            <i />
            <b>⌾ {course.students.toLocaleString("en-PK")}+ Students Enrolled</b>
          </div>
          <p className={styles.description}>{course.description}</p>

          <div className={styles.metaRow}>
            {[
              { icon: "▥", label: "Level", value: course.level },
              { icon: "◷", label: "Duration", value: course.duration },
              { icon: "▣", label: "Learning Mode", value: "Online (Live + Recorded)" },
            ].map((item) => (
              <div key={item.label}>
                <span>{item.icon}</span>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.purchase}>
          <span className={styles.priceLabel}>Course Fee</span>
          <strong className={styles.price}>
            <small>PKR</small> {formatPkr(course.price)}
          </strong>
          <div className={styles.availability}>
            <span>✓</span> Enrollment: &nbsp;Open — Limited Seats
          </div>
          <p className={styles.feeNote}>One-time payment • Lifetime access to recordings</p>
          <Link href="/contact" className={styles.addButton}>🛒 &nbsp; Enroll Now &nbsp;→</Link>
          <button
            type="button"
            className={`${styles.wishButton} ${inWishlist ? styles.wished : ""}`}
            onClick={() => setInWishlist(!inWishlist)}
            aria-pressed={inWishlist}
          >
            {inWishlist ? "♥" : "♡"} &nbsp; {inWishlist ? "Added to Wishlist" : "Add to Wishlist"}
          </button>
        </aside>
      </section>

      {/* TABS + PANEL — joined segmented bar (same as product page) */}
      <section className={styles.information}>
        <div className={styles.tabBar} role="tablist">
          {tabs.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={tab === name}
              className={tab === name ? styles.selectedTab : ""}
              onClick={() => setTab(name)}
            >
              <span aria-hidden="true">{tabIcons[tabs.indexOf(name)]}</span>
              {name}
              {name === "Reviews" ? ` (${course.reviews})` : ""}
            </button>
          ))}
        </div>

        <div className={styles.panel} role="tabpanel">
          {tab === "Overview" && (
            <>
              <div>
                <h2>About This Course</h2>
                <p>
                  This comprehensive {course.title} course is designed for those who want to
                  become a professional in this field. You will learn everything step-by-step
                  with practical examples, real projects and personal guidance from experienced
                  instructors — suitable for beginners.
                </p>
                <p>
                  The course is fully project-based: every concept you learn is applied
                  immediately, so by the end you will have real, practical skills and a
                  portfolio to show.
                </p>
                <h2>What You&apos;ll Learn</h2>
                <ul className={styles.checkList}>
                  {outcomes.slice(0, 6).map((outcome) => (
                    <li key={outcome}><b>✓</b>{outcome}</li>
                  ))}
                </ul>
                <div className={styles.projects}>
                  <span aria-hidden="true">▤</span>
                  <p><b>Hands-on Projects:</b> work on real-world projects — such as a portfolio piece, a small business app and a dashboard — to build a strong portfolio while you learn.</p>
                </div>
              </div>

              <div className={styles.glance}>
                <h2>Course at a Glance</h2>
                {[
                  ["Course Level", course.level],
                  ["Duration", course.duration],
                  ["Classes", "Live + Recorded"],
                  ["Projects", "3+ Real Projects"],
                  ["Certificate", "Yes (Completion Certificate)"],
                  ["Language", "English (with easy explanations)"],
                ].map(([key, value]) => (
                  <div key={key}><b>{key}</b><span>{value}</span></div>
                ))}
              </div>
            </>
          )}

          {tab === "Syllabus" && (
            <div className={styles.fullWidth}>
              <h2>Course Syllabus</h2>
              <p>A step-by-step learning path — from your first lesson to your certificate.</p>
              <div className={styles.syllabusList}>
                {modules.map((module, index) => {
                  const isOpen = openModule === index;
                  return (
                    <div key={module.title} className={styles.module}>
                      <button
                        type="button"
                        className={styles.moduleHead}
                        onClick={() => setOpenModule(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.moduleNum}>{String(index + 1).padStart(2, "0")}</span>
                        <span className={styles.moduleMeta}>
                          <strong>{module.title}</strong>
                          <span>{module.lessons.length} Lessons • {module.duration}</span>
                        </span>
                        <i aria-hidden="true">{isOpen ? "⌃" : "⌄"}</i>
                      </button>
                      {isOpen && (
                        <ul className={styles.moduleBody}>
                          {module.lessons.map((lesson) => (
                            <li key={lesson}>▶ &nbsp;{lesson}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === "Instructor" && (
            <div className={styles.fullWidth}>
              <h2>Meet Your Instructor</h2>
              <div className={styles.instructor}>
                <span className={styles.instructorAvatar} aria-hidden="true">BA</span>
                <div className={styles.instructorInfo}>
                  <h3>Bilal Ahmad</h3>
                  <p className={styles.instructorRole}>
                    Senior {course.category} Instructor & Industry Professional
                  </p>
                  <p className={styles.instructorBio}>
                    Bilal has spent more than 8 years working on real client projects and
                    training new learners. His teaching style is simple and practical — every
                    concept is demonstrated live, practiced together, and then applied in a
                    real project so students gain genuine, job-ready skills.
                  </p>
                  <div className={styles.instructorStats}>
                    <div><strong>12+</strong><span>Courses Taught</span></div>
                    <div><strong>8,000+</strong><span>Students</span></div>
                    <div><strong>4.9 ★</strong><span>Avg. Rating</span></div>
                    <div><strong>8+ Yrs</strong><span>Experience</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "Reviews" && (
            <div className={styles.fullWidth} id="reviews">
              <h2>Student Reviews</h2>
              <div className={styles.reviewSummary}>
                <strong>{course.rating} <span>★★★★★</span></strong>
                <p>Based on {course.reviews} verified student reviews</p>
              </div>
              {reviews.map((review) => (
                <article key={review.name} className={styles.review}>
                  <b>{"★".repeat(review.rating)} &nbsp;{review.name} <small>· {review.detail}</small></b>
                  <p>{review.text}</p>
                  <small>Verified student · Recently</small>
                </article>
              ))}
            </div>
          )}

          {tab === "FAQs" && (
            <div className={styles.fullWidth}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {faqs.map((faq) => (
                  <details key={faq.q} className={styles.faqItem}>
                    <summary>
                      {faq.q}
                      <i aria-hidden="true">⌄</i>
                    </summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED COURSES — compact cards (same layout as product page) */}
      <section className={styles.related}>
        <div className={styles.relatedHeading}>
          <h2>Other IT Courses You May Like</h2>
          <Link href="/courses">View All IT Courses &nbsp;→</Link>
        </div>
        <div className={styles.relatedGrid}>
          {related.map((item) => (
            <article key={item.id}>
              <Link className={styles.relatedPhoto} href={`/courses/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
              <div className={styles.relatedCopy}>
                <Link href={`/courses/${item.id}`}>
                  <b>{item.title}</b>
                  <span>{item.category} • {item.duration}</span>
                </Link>
                <strong>PKR {formatPkr(item.price)}</strong>
                <Link href={`/courses/${item.id}`} className={styles.relatedBtn}>View Details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
