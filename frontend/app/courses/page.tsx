"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import styles from "./courses.module.css";

type Course = {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  description: string;
  image: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Web Development (Full Stack)",
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "3 Months",
    price: 12500,
    description: "Learn to build modern, responsive websites with HTML, CSS and JavaScript.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Programming",
    level: "Beginner",
    duration: "2 Months",
    price: 10000,
    description: "Master Python programming with practical projects.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=700",
  },
  {
    id: 3,
    title: "Graphic Design",
    category: "Graphic Design",
    level: "Beginner to Intermediate",
    duration: "2 Months",
    price: 9000,
    description: "Learn creative design with Photoshop and Illustrator.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700",
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "2 Months",
    price: 8500,
    description: "Learn SEO, social media, advertising and content marketing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
  },
  {
    id: 5,
    title: "Microsoft Office",
    category: "Microsoft Office",
    level: "Beginner",
    duration: "1 Month",
    price: 6500,
    description: "Learn Word, Excel, PowerPoint and essential office skills.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700",
  },
  {
    id: 6,
    title: "Computer Basics",
    category: "Computer Basics",
    level: "Beginner",
    duration: "1 Month",
    price: 5000,
    description: "Learn computer fundamentals and internet skills.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700",
  },
  {
    id: 7,
    title: "UI/UX Design",
    category: "UI/UX Design",
    level: "Beginner to Intermediate",
    duration: "2 Months",
    price: 9500,
    description: "Design modern and user-friendly web and mobile interfaces.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700",
  },
  {
    id: 8,
    title: "Data Analysis with Excel",
    category: "Microsoft Office",
    level: "Beginner",
    duration: "1 Month",
    price: 7500,
    description: "Analyze data, create reports and visualize insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700",
  },
  {
    id: 9,
    title: "Freelancing & Online Earning",
    category: "Computer Basics",
    level: "Beginner",
    duration: "1 Month",
    price: 6500,
    description: "Learn practical skills to start your freelancing career.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700",
  },
  {
    id: 10,
    title: "Java Programming",
    category: "Programming",
    level: "Beginner",
    duration: "3 Months",
    price: 11000,
    description: "Understand Java programming and object-oriented concepts.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700",
  },
  {
    id: 11,
    title: "JavaScript Development",
    category: "Programming",
    level: "Intermediate",
    duration: "2 Months",
    price: 10000,
    description: "Build interactive websites using modern JavaScript.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700",
  },
  {
    id: 12,
    title: "Frontend Development",
    category: "Web Development",
    level: "Beginner",
    duration: "3 Months",
    price: 12500,
    description: "Create responsive interfaces with HTML, CSS and JavaScript.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700",
  },
  {
    id: 13,
    title: "WordPress Development",
    category: "Web Development",
    level: "Beginner",
    duration: "2 Months",
    price: 9000,
    description: "Create professional websites using WordPress.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700",
  },
  {
    id: 14,
    title: "Adobe Photoshop",
    category: "Graphic Design",
    level: "Beginner",
    duration: "2 Months",
    price: 7500,
    description: "Learn photo editing and creative image design.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=700",
  },
  {
    id: 15,
    title: "Artificial Intelligence",
    category: "Programming",
    level: "Beginner",
    duration: "2 Months",
    price: 12500,
    description: "Explore AI fundamentals and practical applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700",
  },
  {
    id: 16,
    title: "Search Engine Optimization",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "1 Month",
    price: 6500,
    description: "Learn SEO techniques to improve website visibility.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700",
  },
  {
    id: 17,
    title: "Advanced Excel",
    category: "Microsoft Office",
    level: "Intermediate",
    duration: "2 Months",
    price: 8500,
    description: "Learn formulas, charts and advanced spreadsheets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
  },
  {
    id: 18,
    title: "Mobile App Design",
    category: "UI/UX Design",
    level: "Beginner",
    duration: "2 Months",
    price: 10000,
    description: "Design attractive and user-friendly mobile interfaces.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?w=700",
  },
];

function formatPkr(amount: number) {
  return amount.toLocaleString("en-PK");
}

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

const SearchIcon = () => (
  <Svg>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);

const BenefitIcons = {
  instructor: (
    <Svg>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </Svg>
  ),
  laptop: (
    <Svg>
      <path d="M20 16V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9m0 0h18m0 0 1.5 3.5a1.2 1.2 0 0 1-1.1 1.5H2.6a1.2 1.2 0 0 1-1.1-1.5L3 16" transform="translate(1 -1)" />
    </Svg>
  ),
  medal: (
    <Svg>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </Svg>
  ),
  pace: (
    <Svg>
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <circle cx="12" cy="14" r="8" />
    </Svg>
  ),
  range: (
    <Svg>
      <path d="M4 6h16" />
      <path d="M4 10h16" />
      <path d="M4 14h16" />
      <path d="M4 18h16" />
      <circle cx="9" cy="6" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="14" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="17" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </Svg>
  ),
  beginner: (
    <Svg>
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
      <path d="M16 3.5a4 4 0 0 1 0 7" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    </Svg>
  ),
  book: (
    <Svg>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </Svg>
  ),
  support: (
    <Svg>
      <path d="M3.85 8.62a8 8 0 0 1 16.3 0" />
      <path d="M20.15 8.62A14 14 0 0 1 22 12a14 14 0 0 1-1.85 3.38" />
      <path d="M3.85 15.38A14 14 0 0 1 2 12a14 14 0 0 1 1.85-3.38" />
      <circle cx="12" cy="15" r="3" />
      <path d="M9 18v3a2 2 0 0 0 6 0v-3" />
    </Svg>
  ),
  badge: (
    <Svg>
      <circle cx="12" cy="10" r="6" />
      <path d="m8.5 14.5-1.8 7L10 20l2 1.5L14 20l3.3 1.5-1.8-7" />
      <path d="m12 7 .9 1.8 2 .3-1.45 1.4.35 2L12 11.6l-1.8.95.35-2L9.1 9.1l2-.3z" fill="currentColor" stroke="none" />
    </Svg>
  ),
};

const categories = [
  {
    name: "All IT Courses",
    value: "All",
    icon: (
      <Svg>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </Svg>
    ),
  },
  {
    name: "Web Development",
    value: "Web Development",
    icon: (
      <Svg>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </Svg>
    ),
  },
  {
    name: "Programming",
    value: "Programming",
    icon: (
      <Svg>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </Svg>
    ),
  },
  {
    name: "Graphic Design",
    value: "Graphic Design",
    icon: (
      <Svg>
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" stroke="none" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </Svg>
    ),
  },
  {
    name: "Digital Marketing",
    value: "Digital Marketing",
    icon: (
      <Svg>
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </Svg>
    ),
  },
  {
    name: "Microsoft Office",
    value: "Microsoft Office",
    icon: (
      <Svg>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </Svg>
    ),
  },
  {
    name: "Computer Basics",
    value: "Computer Basics",
    icon: (
      <Svg>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </Svg>
    ),
  },
  {
    name: "UI/UX Design",
    value: "UI/UX Design",
    icon: (
      <Svg>
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </Svg>
    ),
  },
];

export default function CoursesPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 9;

  const filteredCourses = useMemo(() => {
    const result = courses.filter((course) => {
      const matchesCategory = selectedCat === "All" || course.category === selectedCat;
      const search = searchQuery.toLowerCase().trim();
      const matchesSearch =
        course.title.toLowerCase().includes(search) ||
        course.category.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [selectedCat, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const displayedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

  const changeCategory = (category: string) => {
    setSelectedCat(category);
    setCurrentPage(1);
  };

  const changeSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCat("All");
    setSearchQuery("");
    setCurrentPage(1);
    setSortBy("latest");
  };

  const benefits = [
    { icon: BenefitIcons.instructor, title: "Expert Instructors", desc: "Learn from industry professionals" },
    { icon: BenefitIcons.laptop, title: "Practical Learning", desc: "Hands-on, real-world projects" },
    { icon: BenefitIcons.medal, title: "Certificate of Completion", desc: "Get a recognized certificate" },
    { icon: BenefitIcons.pace, title: "Learn at Your Pace", desc: "Flexible and beginner-friendly" },
  ];

  const bottomBenefits = [
    { icon: BenefitIcons.range, title: "Wide Range of Courses", desc: "From basic to advanced level" },
    { icon: BenefitIcons.beginner, title: "Beginner Friendly", desc: "Start with no prior experience" },
    { icon: BenefitIcons.book, title: "Practical & Hands-on", desc: "Real projects and examples" },
    { icon: BenefitIcons.support, title: "Career Support", desc: "Guidance for jobs and freelancing" },
  ];

  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            &nbsp; › &nbsp;IT Courses
          </p>
          <h1>
            IT <em>Courses</em>
          </h1>
          <p className={styles.heroCopy}>
            Build in-demand digital skills with practical, step-by-step courses. Learn from experienced
            instructors and grow your career with confidence.
          </p>
        </div>
      </section>

      <section className={styles.benefitsTop}>
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

      <section className={styles.listing}>
        <div className={styles.listingRow}>
          <aside className={styles.sidebar}>
            <div className={styles.catCard}>
              <div className={styles.catHead}>
                <h2>
                  <span className={styles.catHeadIcon}>
                    <Svg className={styles.iconMd}>
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </Svg>
                  </span>
                  Course Categories
                </h2>
              </div>

              <div className={styles.catList}>
                {categories.map((category) => {
                  const isActive = selectedCat === category.value;
                  return (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() => changeCategory(category.value)}
                      aria-pressed={isActive}
                      className={`${styles.catBtn} ${isActive ? styles.catBtnActive : ""}`}
                    >
                      <span className={styles.catBtnLabel}>
                        <span className={styles.catIcon}>{category.icon}</span>
                        {category.name}
                      </span>
                      <span className={styles.catArrow} aria-hidden="true">
                        ›
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.certCard}>
              <div className={styles.certBlob} aria-hidden="true" />
              <div className={styles.certContent}>
                <span className={styles.certIcon}>{BenefitIcons.badge}</span>
                <h3>Get Certified</h3>
                <p>Boost your career with industry-recognized certificates.</p>
              </div>
            </div>
          </aside>

          <div className={styles.mainCol}>
            <div className={styles.toolbar}>
              <div className={styles.searchWrap}>
                <span className={styles.searchIcon} aria-hidden="true">
                  ⌕
                </span>
                <input
                  id="course-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => changeSearch(e.target.value)}
                  placeholder="Search IT courses (e.g. Web Development, Python, Graphic Design...)"
                  className={styles.searchInput}
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className={styles.sortSelect}
                aria-label="Sort courses"
              >
                <option value="latest">Sort By: Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            <div className={styles.resultsBar}>
              <p>
                Showing{" "}
                <strong>
                  {filteredCourses.length === 0 ? 0 : startIndex + 1}
                  {" - "}
                  {Math.min(startIndex + coursesPerPage, filteredCourses.length)}
                </strong>{" "}
                of <strong>{filteredCourses.length}</strong>{" "}
                <span className={styles.resultsLabel}>Courses</span>
              </p>
              <button type="button" onClick={clearFilters} className={styles.clearBtn}>
                Clear Filters
              </button>
            </div>

            {displayedCourses.length > 0 ? (
              <div className={styles.courseGrid}>
                {displayedCourses.map((course) => (
                  <article key={course.id} className={styles.courseCard}>
                    <div className={styles.courseImage}>
                      <img src={course.image} alt={course.title} />
                      <span className={styles.categoryBadge}>{course.category}</span>
                    </div>

                    <div className={styles.courseBody}>
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>

                      <div className={styles.metaRow}>
                        <span className={styles.metaItem}>
                          <Svg className={styles.iconSm}>
                            <line x1="12" y1="20" x2="12" y2="10" />
                            <line x1="18" y1="20" x2="18" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="16" />
                          </Svg>
                          {course.level}
                        </span>
                        <span className={styles.metaItem}>
                          <Svg className={styles.iconSm}>
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </Svg>
                          {course.duration}
                        </span>
                      </div>

                      <div className={styles.priceRow}>
                        <p className={styles.price}>
                          <span className={styles.priceCurrency}>PKR</span>{" "}
                          {formatPkr(course.price)}
                        </p>
                        <Link href={`/courses/${course.id}`} className={styles.detailsBtn}>
                          View Details
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>
                  <SearchIcon />
                </span>
                <h3>No Courses Found</h3>
                <p>Try another search or select a different category.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCat("All");
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className={styles.emptyBtn}
                >
                  View All Courses
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={styles.pageBtn}
                  aria-label="Previous page"
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? styles.pageBtnActive : styles.pageBtn}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={styles.pageBtn}
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.benefitsBottom}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsGrid}>
            {bottomBenefits.map((item) => (
              <div key={item.title} className={styles.benefitItem}>
                <span className={styles.benefitIconLight}>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
