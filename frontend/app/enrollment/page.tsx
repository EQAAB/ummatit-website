"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { courses, formatPkr } from "../courses/courseData";
import styles from "./enrollment.module.css";

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

const GradCapIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </Svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </Svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <line x1="5" y1="20" x2="5" y2="14" />
    <line x1="12" y1="20" x2="12" y2="9" />
    <line x1="19" y1="20" x2="19" y2="4" />
  </Svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
  </Svg>
);

const FileTextIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </Svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </Svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="8.5 12.5 11 15 15.5 9.5" />
  </Svg>
);

const PlayCircleIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </Svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <polyline points="6 9 12 15 18 9" />
  </Svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

const InfinityIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M18.18 8c-2.4 0-4.05 1.8-6.18 4-2.13 2.2-3.78 4-6.18 4A4 4 0 0 1 6 8c2.4 0 4.05 1.8 6.18 4 2.13 2.2 3.78 4 6.18 4A4 4 0 0 0 18.18 8z" />
  </Svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
    <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
  </Svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2 6 12 13 22 6" />
  </Svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
);

const modules = [
  {
    title: "Module 1: HTML & CSS Essentials",
    lessons: "5 Lessons",
    items: ["Web structure & semantic HTML", "Styling with modern CSS", "Flexbox & Grid layouts", "Media queries & responsiveness", "Project: Landing page design"],
  },
  {
    title: "Module 2: JavaScript Fundamentals",
    lessons: "6 Lessons",
    items: ["Variables & data types", "Functions & arrays", "DOM manipulation", "Events & form handling", "ES6+ features", "Project: Interactive quiz app"],
  },
  {
    title: "Module 3: Responsive Web Design",
    lessons: "4 Lessons",
    items: ["Mobile-first approach", "CSS units & breakpoints", "Accessible layouts", "Project: Portfolio website"],
  },
];

const learnItems = [
  "HTML5 & CSS3 fundamentals and core concepts",
  "Structure of modern, responsive layouts",
  "JavaScript DOM & interactivity",
  "API integration and data handling",
  "Performance and best practices",
  "Build and deploy a real-world project",
];

const reviews = [
  { name: "Ahmed Raza", stars: 5, text: "Excellent course — concepts are explained step by step and the projects really helped me build confidence." },
  { name: "Fatima Noor", stars: 5, text: "Bohat acha experience. Instructor ka teaching style bohat clear hai aur support bhi timely milta hai." },
];

const tabs = [
  { id: "overview", label: "Course Overview", icon: <GradCapIcon /> },
  { id: "curriculum", label: "Curriculum", icon: <FileTextIcon /> },
  { id: "instructor", label: "Instructor", icon: <UsersIcon /> },
  { id: "reviews", label: "Reviews", icon: <StarIcon /> },
] as const;

type TabId = (typeof tabs)[number]["id"];

function ModulesAccordion({ open, setOpen }: { open: number | null; setOpen: (n: number | null) => void }) {
  return (
    <div>
      {modules.map((mod, index) => (
        <div key={mod.title} className={styles.moduleRow}>
          <button
            type="button"
            className={styles.moduleHead}
            onClick={() => setOpen(open === index ? null : index)}
            aria-expanded={open === index}
          >
            <PlayCircleIcon className={styles.modulePlay} />
            <strong>{mod.title}</strong>
            <span className={styles.moduleLessons}>{mod.lessons}</span>
            <ChevronDownIcon className={`${styles.moduleChevron} ${open === index ? styles.moduleChevronOpen : ""}`} />
          </button>
          {open === index && (
            <ul className={styles.moduleList}>
              {mod.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function EnrollmentContent() {
  const searchParams = useSearchParams();
  const requestedId = Number(searchParams.get("id"));
  const course = courses.find((c) => c.id === requestedId) ?? courses.find((c) => c.title === "Frontend Development") ?? courses[0];

  const [tab, setTab] = useState<TabId>("overview");
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      {/* HERO — same pattern as the other pages */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.breadcrumb}>
              <Link href="/">⌂ &nbsp;Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/courses">IT Courses</Link>
              <span aria-hidden="true">›</span>
              <Link href="/courses">{course.category}</Link>
              <span aria-hidden="true">›</span>
              <span>Enrollment</span>
            </p>
            <div className={styles.heroTitleRow}>
              <span className={styles.iconBox}>
                <GradCapIcon className={styles.heroIcon} />
              </span>
              <div>
                <h1>
                  IT Course <em>Enrollment</em>
                </h1>
                <p className={styles.heroCopy}>
                  Enroll in your selected IT course and start your learning journey.
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
        <div className={styles.leftCol}>
          {/* Course header card */}
          <div className={styles.courseCard}>
            <div className={styles.courseMedia}>
              <img src={course.image} alt={course.title} />
              <span className={styles.playBtn} aria-hidden="true">▶</span>
            </div>
            <div className={styles.courseInfo}>
              <span className={styles.courseBadge}>IT Course</span>
              <h2>{course.title}</h2>
              <p className={styles.courseDesc}>{course.description}</p>
              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <ClockIcon className={styles.metaIcon} />
                  <div>
                    <small>Duration</small>
                    <strong>{course.duration}</strong>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <ChartIcon className={styles.metaIcon} />
                  <div>
                    <small>Level</small>
                    <strong>{course.level}</strong>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <AwardIcon className={styles.metaIcon} />
                  <div>
                    <small>Certificate</small>
                    <strong>Upon Completion</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs card */}
          <div className={styles.tabsCard}>
            <div className={styles.tabBar} role="tablist" aria-label="Course information">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === item.id}
                  className={`${styles.tab} ${tab === item.id ? styles.tabActive : ""}`}
                  onClick={() => setTab(item.id)}
                >
                  {item.icon}
                  {item.label}
                  {item.id === "reviews" ? ` (${course.reviews})` : ""}
                </button>
              ))}
            </div>

            <div className={styles.tabPanel}>
              {tab === "overview" && (
                <div className={styles.overviewGrid}>
                  <div>
                    <h3>About This Course</h3>
                    <p>{course.description} This practical course will help you learn step by step. You&apos;ll build real projects, understand modern concepts, and be ready for professional development.</p>
                    <h3>What You&apos;ll Learn</h3>
                    <ul className={styles.learnList}>
                      {learnItems.map((item) => (
                        <li key={item}>
                          <CheckCircleIcon className={styles.learnCheck} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.overviewArt} aria-hidden="true">
                    <img src={course.image.replace("w=700", "w=500")} alt="" />
                  </div>
                </div>
              )}

              {tab === "curriculum" && <ModulesAccordion open={openModule} setOpen={setOpenModule} />}

              {tab === "instructor" && (
                <div className={styles.instructorBox}>
                  <span className={styles.instructorAvatar}>MU</span>
                  <div>
                    <strong>Muhammad Ummat</strong>
                    <p>Senior IT Instructor — 8+ years of industry experience, 2,300+ students trained across web development and programming courses.</p>
                  </div>
                </div>
              )}

              {tab === "reviews" && (
                <div>
                  <div className={styles.ratingSummary}>
                    <strong className={styles.ratingNumber}>{course.rating}</strong>
                    <div>
                      <span className={styles.ratingStars} aria-hidden="true">★★★★★</span>
                      <p>{course.reviews} student reviews</p>
                    </div>
                  </div>
                  {reviews.map((review) => (
                    <div key={review.name} className={styles.reviewCard}>
                      <div className={styles.reviewHead}>
                        <strong>{review.name}</strong>
                        <span className={styles.ratingStars} aria-hidden="true">{"★".repeat(review.stars)}</span>
                      </div>
                      <p>{review.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Course curriculum card */}
          <div className={styles.curriculumCard}>
            <h3 className={styles.curriculumTitle}>
              <BookOpenIcon className={styles.curriculumIcon} />
              Course Curriculum
            </h3>
            <ModulesAccordion open={openModule} setOpen={setOpenModule} />
          </div>
        </div>

        {/* Enrollment form */}
        <aside className={styles.formCol}>
          <div className={styles.formCard}>
            <div className={styles.formHead}>
              <span className={styles.formHeadIcon}>
                <FileTextIcon />
              </span>
              <h3>Enroll in This Course</h3>
            </div>
            <p className={styles.formSub}>
              Fill in your details below to enroll in {course.title}.
            </p>

            {submitted ? (
              <div className={styles.successBox}>
                <span className={styles.successSeal}>
                  <Svg className={styles.successCheck}>
                    <polyline points="20 6 9 17 4 12" />
                  </Svg>
                </span>
                <h4>Enrollment Request Sent!</h4>
                <p>
                  We&apos;ve received your enrollment request for <strong>{course.title}</strong>. Our
                  team will contact you within 24 hours to complete your admission.
                </p>
                <button type="button" className={styles.enrollAnotherBtn} onClick={() => setSubmitted(false)}>
                  Enroll Another Student
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.fieldWrap}>
                  <UserIcon className={styles.fieldIcon} />
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                </label>
                <label className={styles.fieldWrap}>
                  <MailIcon className={styles.fieldIcon} />
                  <input type="email" name="email" placeholder="Email Address *" required />
                </label>
                <label className={styles.fieldWrap}>
                  <PhoneIcon className={styles.fieldIcon} />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                </label>
                <label className={styles.fieldWrap}>
                  <GradCapIcon className={styles.fieldIcon} />
                  <select name="education" defaultValue="">
                    <option value="" disabled>
                      Education Level
                    </option>
                    <option value="matric">Matric</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="bachelors">Bachelor&apos;s</option>
                    <option value="masters">Master&apos;s</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDownIcon className={styles.selectChevron} />
                </label>

                <div className={styles.feeRow}>
                  <span>Course Fee</span>
                  <strong>Rs. {formatPkr(course.price)}</strong>
                </div>

                <button type="submit" className={styles.enrollBtn}>
                  <CartIcon className={styles.enrollIcon} />
                  Enroll Now
                </button>
              </form>
            )}

            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <ShieldIcon className={styles.trustIcon} />
                <span>Secure Enrollment</span>
              </div>
              <div className={styles.trustItem}>
                <InfinityIcon className={styles.trustIcon} />
                <span>Lifetime Access</span>
              </div>
              <div className={styles.trustItem}>
                <AwardIcon className={styles.trustIcon} />
                <span>Completion Certificate</span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default function EnrollmentPage() {
  return (
    <Suspense fallback={null}>
      <EnrollmentContent />
    </Suspense>
  );
}
