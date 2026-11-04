"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

import "./../globals.css";

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
    price: 99,
    description: "Learn to build modern, responsive websites with HTML, CSS and JavaScript.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Programming",
    level: "Beginner",
    duration: "2 Months",
    price: 79,
    description: "Master Python programming with practical projects.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=700"
  },
  {
    id: 3,
    title: "Graphic Design",
    category: "Graphic Design",
    level: "Beginner to Intermediate",
    duration: "2 Months",
    price: 69,
    description: "Learn creative design with Photoshop and Illustrator.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700"
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "2 Months",
    price: 79,
    description: "Learn SEO, social media, advertising and content marketing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700"
  },
  {
    id: 5,
    title: "Microsoft Office",
    category: "Microsoft Office",
    level: "Beginner",
    duration: "1 Month",
    price: 49,
    description: "Learn Word, Excel, PowerPoint and essential office skills.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
  },
  {
    id: 6,
    title: "Computer Basics",
    category: "Computer Basics",
    level: "Beginner",
    duration: "1 Month",
    price: 39,
    description: "Learn computer fundamentals and internet skills.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700"
  },
  {
    id: 7,
    title: "UI/UX Design",
    category: "UI/UX Design",
    level: "Beginner to Intermediate",
    duration: "2 Months",
    price: 89,
    description: "Design modern and user-friendly web and mobile interfaces.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700"
  },
  {
    id: 8,
    title: "Data Analysis with Excel",
    category: "Microsoft Office",
    level: "Beginner",
    duration: "1 Month",
    price: 59,
    description: "Analyze data, create reports and visualize insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700"
  },
  {
    id: 9,
    title: "Freelancing & Online Earning",
    category: "Computer Basics",
    level: "Beginner",
    duration: "1 Month",
    price: 49,
    description: "Learn practical skills to start your freelancing career.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700"
  },
  {
    id: 10,
    title: "Java Programming",
    category: "Programming",
    level: "Beginner",
    duration: "3 Months",
    price: 89,
    description: "Understand Java programming and object-oriented concepts.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700"
  },
  {
    id: 11,
    title: "JavaScript Development",
    category: "Programming",
    level: "Intermediate",
    duration: "2 Months",
    price: 79,
    description: "Build interactive websites using modern JavaScript.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700"
  },
  {
    id: 12,
    title: "Frontend Development",
    category: "Web Development",
    level: "Beginner",
    duration: "3 Months",
    price: 99,
    description: "Create responsive interfaces with HTML, CSS and JavaScript.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700"
  },
  {
    id: 13,
    title: "WordPress Development",
    category: "Web Development",
    level: "Beginner",
    duration: "2 Months",
    price: 69,
    description: "Create professional websites using WordPress.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700"
  },
  {
    id: 14,
    title: "Adobe Photoshop",
    category: "Graphic Design",
    level: "Beginner",
    duration: "2 Months",
    price: 59,
    description: "Learn photo editing and creative image design.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=700"
  },
  {
    id: 15,
    title: "Artificial Intelligence",
    category: "Programming",
    level: "Beginner",
    duration: "2 Months",
    price: 99,
    description: "Explore AI fundamentals and practical applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700"
  },
  {
    id: 16,
    title: "Search Engine Optimization",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "1 Month",
    price: 49,
    description: "Learn SEO techniques to improve website visibility.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700"
  },
  {
    id: 17,
    title: "Advanced Excel",
    category: "Microsoft Office",
    level: "Intermediate",
    duration: "2 Months",
    price: 69,
    description: "Learn formulas, charts and advanced spreadsheets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700"
  },
  {
    id: 18,
    title: "Mobile App Design",
    category: "UI/UX Design",
    level: "Beginner",
    duration: "2 Months",
    price: 79,
    description: "Design attractive and user-friendly mobile interfaces.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?w=700"
  }
];

function Svg({ children, className = "w-[18px] h-[18px]" }: { children: React.ReactNode; className?: string }) {
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

const GraduationIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </Svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
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
  }
];

export default function CoursesPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const coursesPerPage = 9;

  const filteredCourses = useMemo(() => {
    const result = courses.filter((course) => {
      const matchesCategory =
        selectedCat === "All" ||
        course.category === selectedCat;

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

  const totalPages = Math.ceil(
    filteredCourses.length / coursesPerPage
  );

  const startIndex = (currentPage - 1) * coursesPerPage;

  const displayedCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const changeCategory = (category: string) => {
    setSelectedCat(category);
    setCurrentPage(1);
  };

  const changeSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const benefits = [
    {
      icon: BenefitIcons.instructor,
      title: "Expert Instructors",
      desc: "Learn from industry professionals"
    },
    {
      icon: BenefitIcons.laptop,
      title: "Practical Learning",
      desc: "Hands-on, real-world projects"
    },
    {
      icon: BenefitIcons.medal,
      title: "Certificate of Completion",
      desc: "Get a recognized certificate"
    },
    {
      icon: BenefitIcons.pace,
      title: "Learn at Your Pace",
      desc: "Flexible and beginner-friendly"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-800">
    {/* NAVBAR */}

      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0A6A4A] to-[#043D2D] text-white flex items-center justify-center shadow-md shadow-green-900/20 group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all">
                <GraduationIcon className="w-6 h-6" />
              </span>
              <span>
                <h2 className="font-serif text-xl font-bold text-[#064B35] leading-tight">
                  Ummat IT House
                </h2>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Islamic Learning • IT Skills • Islamic Products
                </p>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold">
              <Link href="/" className="hover:text-[#08734F]">Home</Link>
              <Link href="#" className="hover:text-[#08734F]">Islamic Studies ↗</Link>
              <Link href="/courses" className="text-[#07543D] border-b-2 border-[#07543D] py-3">
                IT Courses
              </Link>
              <Link href="#" className="hover:text-[#08734F]">Islamic Shop</Link>
              <Link href="#" className="hover:text-[#08734F]">About Us</Link>
              <Link href="#" className="hover:text-[#08734F]">Contact</Link>
            </nav>

            <div className="hidden md:flex items-center gap-2.5">
              <button
                aria-label="Search courses"
                title="Search courses"
                onClick={() => document.getElementById("course-search")?.focus()}
                className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:text-[#07543D] hover:border-[#07543D]/40 hover:bg-green-50 hover:shadow-sm active:scale-95 transition-all"
              >
                <SearchIcon className="w-[18px] h-[18px]" />
              </button>

              <button
                aria-label="Shopping cart"
                title="Cart"
                className="relative w-10 h-10 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:text-[#07543D] hover:border-[#07543D]/40 hover:bg-green-50 hover:shadow-sm active:scale-95 transition-all"
              >
                <CartIcon className="w-[18px] h-[18px]" />
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#07543D] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                  0
                </span>
              </button>

              <span className="w-px h-7 bg-gray-200 mx-1" aria-hidden="true" />

              <Link
                href="#"
                className="flex items-center gap-2 text-[13px] font-bold text-[#064B35] px-3.5 py-2.5 rounded-lg hover:bg-green-50 hover:text-[#07543D] transition-colors"
              >
                <UserIcon className="w-[18px] h-[18px]" />
                Login
              </Link>

              <Link
                href="#"
                className="bg-[#07543D] hover:bg-[#043D2D] text-white text-[13px] font-bold px-6 py-2.5 rounded-lg shadow-md shadow-green-900/20 hover:shadow-lg hover:-translate-y-px active:translate-y-0 transition-all"
              >
                Sign Up
              </Link>
            </div>

            <button
              className="lg:hidden text-2xl text-[#064B35] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <nav className="lg:hidden flex flex-col gap-4 py-5 border-t text-sm font-semibold">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Islamic Studies</Link>
              <Link href="/courses" onClick={() => setMenuOpen(false)}>IT Courses</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Islamic Shop</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link href="#" onClick={() => setMenuOpen(false)} className="bg-[#07543D] text-white text-center p-3 rounded-lg">
                Sign Up
              </Link>
            </nav>
          )}
        </div>
      </header>


      {/* HERO BANNER */}

      <section
        className="relative bg-cover bg-center min-h-[190px] md:min-h-[220px] flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003C2B] via-[#003C2B]/90 to-[#003C2B]/30"></div>

        <div className="relative z-10 max-w-[1450px] w-full mx-auto px-6 lg:px-10 py-8">
          <p className="text-xs text-green-100 mb-4">
            Home&nbsp; › &nbsp;IT Courses
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            IT <span className="text-[#E7BD69]">Courses</span>
          </h1>
          <p className="text-sm md:text-base text-gray-100 max-w-[480px] leading-relaxed">
            Build in-demand digital skills with practical,
            step-by-step courses. Learn from experienced
            instructors and grow your career with confidence.
          </p>
        </div>
      </section>


      {/* TOP BENEFITS */}

      <section className="bg-[#FAF7EF] border-b border-[#eee8d9]">
        <div className="max-w-[1450px] mx-auto px-5 lg:px-10 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 lg:border-r last:border-r-0 border-[#e5dfd2] px-2"
              >
                <span className="w-11 h-11 rounded-full bg-[#07543D]/10 text-[#07543D] flex items-center justify-center shrink-0 [&_svg]:w-5 [&_svg]:h-5">
                  {benefit.icon}
                </span>
                <div>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MAIN COURSE LISTING */}

      <section className="max-w-[1450px] mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-7">

          {/* LEFT SIDEBAR */}

          <aside className="w-full lg:w-[245px] shrink-0 space-y-5">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

              <div className="bg-gradient-to-r from-[#07543D] to-[#0A6A4A] text-white px-5 py-4">
                <h2 className="font-serif text-lg font-bold flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Svg className="w-[18px] h-[18px]">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </Svg>
                  </span>
                  Course Categories
                </h2>
              </div>

              <div className="p-3">
                {categories.map((category) => {
                  const isActive = selectedCat === category.value;
                  return (
                    <button
                      key={category.value}
                      onClick={() => changeCategory(category.value)}
                      aria-pressed={isActive}
                      className={`group w-full flex items-center justify-between gap-2 px-3.5 py-3 text-left text-[13px] border-b border-gray-100 last:border-0 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#07543D] to-[#0A6A4A] text-white font-bold shadow-md shadow-green-900/20"
                          : "text-gray-700 hover:bg-green-50/80 hover:pl-4"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? "bg-white/15 text-[#E7BD69]"
                              : "bg-[#07543D]/8 text-[#07543D] group-hover:bg-[#07543D]/15"
                          }`}
                        >
                          {category.icon}
                        </span>
                        {category.name}
                      </span>

                      <span
                        className={`transition-all ${
                          isActive
                            ? "text-[#E7BD69] translate-x-0 opacity-100"
                            : "text-gray-300 -translate-x-1 opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>


            {/* GET CERTIFIED CARD */}

            <div className="relative overflow-hidden rounded-xl border border-[#e9dfc7] bg-gradient-to-br from-[#FFFDF7] to-[#F1E5C6] p-5 min-h-[150px]">
              <div className="absolute -bottom-8 -right-7 w-28 h-28 rounded-full bg-[#07543D]"></div>

              <div className="relative z-10">
                <span className="w-11 h-11 rounded-full bg-[#A47B32]/15 text-[#A47B32] flex items-center justify-center">
                  {BenefitIcons.badge}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#064B35] mt-2.5">
                  Get Certified
                </h3>
                <p className="text-xs text-gray-600 mt-1 max-w-[170px] leading-relaxed">
                  Boost your career with industry-recognized certificates.
                </p>
              </div>
            </div>
          </aside>


          {/* RIGHT COURSE AREA */}

          <div className="flex-1 min-w-0">

            {/* SEARCH AND SORT */}

            <div className="flex flex-col md:flex-row gap-3 justify-between mb-5">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#07543D]">
                  ⌕
                </span>

                <input
                  id="course-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => changeSearch(e.target.value)}
                  placeholder="Search IT courses (e.g. Web Development, Python, Graphic Design...)"
                  className="w-full h-11 pl-11 pr-4 border border-gray-200 rounded-lg bg-white text-sm outline-none focus:border-[#07543D] focus:ring-2 focus:ring-green-100"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-11 px-4 border border-gray-200 rounded-lg bg-white text-sm font-semibold outline-none focus:border-[#07543D] min-w-[180px]"
                aria-label="Sort courses"
              >
                <option value="latest">Sort By: Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>


            {/* RESULTS COUNT */}

            <div className="flex justify-between items-center mb-4">
              <p className="text-xs md:text-sm text-gray-500">
                Showing{" "}
                <strong className="text-[#064B35] font-extrabold">
                  {filteredCourses.length === 0 ? 0 : startIndex + 1}
                  {" - "}
                  {Math.min(startIndex + coursesPerPage, filteredCourses.length)}
                </strong>
                {" "}of{" "}
                <strong className="text-[#064B35] font-extrabold">
                  {filteredCourses.length}
                </strong>
                {" "}
                <span className="font-semibold text-gray-600 uppercase tracking-wide text-[11px]">Courses</span>
              </p>

              <button
                onClick={() => {
                  setSelectedCat("All");
                  setSearchQuery("");
                  setCurrentPage(1);
                  setSortBy("latest");
                }}
                className="text-xs text-[#07543D] font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>


            {/* COURSE CARDS */}

            {displayedCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                {displayedCourses.map((course) => (
                  <article
                    key={course.id}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#07543D]/30 transition-all duration-300 flex flex-col"
                  >

                    {/* COURSE IMAGE */}

                    <div className="relative h-[150px] overflow-hidden bg-gray-100">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <span className="absolute bottom-3 left-3 bg-blue-600/95 text-white text-[10px] font-bold tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                        {course.category}
                      </span>
                    </div>


                    {/* COURSE INFORMATION */}

                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-extrabold text-[15px] tracking-tight text-gray-900 leading-snug mb-1.5 group-hover:text-[#07543D] transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-[13px] text-gray-600 leading-relaxed min-h-[42px]">
                        {course.description}
                      </p>

                      <div className="flex items-center justify-between gap-2 border-b border-gray-100 py-3 mt-auto">
                        <span className="flex items-center gap-1.5 text-[10.5px] font-semibold text-gray-600">
                          <Svg className="w-3.5 h-3.5 text-[#A47B32]">
                            <line x1="12" y1="20" x2="12" y2="10" />
                            <line x1="18" y1="20" x2="18" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="16" />
                          </Svg>
                          {course.level}
                        </span>

                        <span className="flex items-center gap-1.5 text-[10.5px] font-semibold text-gray-600 whitespace-nowrap">
                          <Svg className="w-3.5 h-3.5 text-[#A47B32]">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </Svg>
                          {course.duration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-3.5">
                        <p className="text-xl font-extrabold tracking-tight text-[#07543D]">
                          <span className="text-sm font-bold text-[#A47B32]">$</span>
                          {course.price}
                        </p>

                        <Link
                          href={`/courses/${course.id}`}
                          className="group/btn bg-[#07543D] hover:bg-[#043D2D] text-white text-[11px] font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                        >
                          View Details
                          <span className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                <span className="w-16 h-16 rounded-full bg-green-50 text-[#07543D] flex items-center justify-center mx-auto [&_svg]:w-7 [&_svg]:h-7">
                  <SearchIcon />
                </span>
                <h3 className="font-extrabold text-lg text-gray-900 mt-4">
                  No Courses Found
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Try another search or select a different category.
                </p>

                <button
                  onClick={() => {
                    setSelectedCat("All");
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="mt-5 bg-[#07543D] text-white px-5 py-2 rounded-lg text-sm"
                >
                  View All Courses
                </button>
              </div>
            )}
            {/* PAGINATION */}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">

                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 rounded-lg border border-gray-200 hover:bg-green-50 disabled:opacity-30"
                  aria-label="Previous page"
                >
                  ‹
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-[#07543D] text-white shadow"
                        : "border border-gray-200 hover:bg-green-50 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 rounded-lg border border-gray-200 hover:bg-green-50 disabled:opacity-30"
                  aria-label="Next page"
                >
                  ›
                </button>

              </div>
            )}

          </div>
        </div>
      </section>


      {/* BOTTOM BENEFITS */}

      <section className="bg-[#FAF7EF] border-y border-[#eee8d9] mt-5">
        <div className="max-w-[1450px] mx-auto px-5 lg:px-10 py-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: BenefitIcons.range,
                title: "Wide Range of Courses",
                desc: "From basic to advanced level"
              },
              {
                icon: BenefitIcons.beginner,
                title: "Beginner Friendly",
                desc: "Start with no prior experience"
              },
              {
                icon: BenefitIcons.book,
                title: "Practical & Hands-on",
                desc: "Real projects and examples"
              },
              {
                icon: BenefitIcons.support,
                title: "Career Support",
                desc: "Guidance for jobs and freelancing"
              }
            ].map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-center gap-3"
              >
                <span className="w-11 h-11 rounded-full bg-white shadow-sm text-[#07543D] flex items-center justify-center shrink-0 [&_svg]:w-5 [&_svg]:h-5">
                  {item.icon}
                </span>

                <div>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>


      {/* FOOTER */}

      <footer className="bg-[#003B2C] text-white">

        <div className="max-w-[1450px] mx-auto px-6 lg:px-10 py-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* LOGO AND DESCRIPTION */}

            <div className="lg:col-span-1">

              <Link href="/" className="flex items-center gap-3 mb-4">

                <span className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-[#E6C16C] flex items-center justify-center shrink-0">
                  <GraduationIcon className="w-7 h-7" />
                </span>

                <div>
                  <h2 className="font-serif text-xl font-bold">
                    Ummat IT House
                  </h2>

                  <p className="text-[9px] text-green-100">
                    Islamic Learning • IT Skills • Islamic Products
                  </p>
                </div>

              </Link>

              <p className="text-xs text-green-100 leading-relaxed">
                An all-in-one platform for Islamic learning,
                modern IT skills and authentic Islamic products.
                Learn, grow and stay connected to your Deen.
              </p>

            </div>


            {/* QUICK LINKS */}

            <div>
              <h3 className="font-bold text-base mb-4">
                Quick Links
              </h3>

              <ul className="space-y-2 text-xs text-green-100">

                <li>
                  <Link href="/" className="hover:text-[#E6C16C]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-[#E6C16C]">
                    Islamic Studies ↗
                  </Link>
                </li>

                <li>
                  <Link href="/courses" className="hover:text-[#E6C16C]">
                    IT Courses
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-[#E6C16C]">
                    Islamic Shop
                  </Link>
                </li>

              </ul>
            </div>


            {/* USEFUL LINKS */}

            <div>
              <h3 className="font-bold text-base mb-4">
                Useful Links
              </h3>

              <ul className="space-y-2 text-xs text-green-100">

                <li>
                  <Link href="#" className="hover:text-[#E6C16C]">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-[#E6C16C]">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-[#E6C16C]">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-[#E6C16C]">
                    Privacy Policy
                  </Link>
                </li>

              </ul>
            </div>


            {/* CONTACT */}

            <div>
              <h3 className="font-bold text-base mb-4">
                Contact Us
              </h3>

              <ul className="space-y-3 text-xs text-green-100">

                <li>
                  ☎ &nbsp; +92 300 1234567
                </li>

                <li>
                  ✉ &nbsp; support@ummatithouse.com
                </li>

                <li>
                  ⌖ &nbsp; Lahore, Pakistan
                </li>

              </ul>
            </div>


            {/* SOCIAL MEDIA */}

            <div>
              <h3 className="font-bold text-base mb-4">
                Follow Us
              </h3>

              <div className="flex gap-2">

                {[
                  { name: "f", color: "bg-blue-600" },
                  { name: "▶", color: "bg-red-600" },
                  { name: "◎", color: "bg-pink-600" },
                  { name: "in", color: "bg-blue-700" }
                ].map((social, index) => (

                  <a
                    href="#"
                    key={index}
                    aria-label={`Social media ${social.name}`}
                    className={`${social.color} w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold hover:scale-110 transition`}
                  >
                    {social.name}
                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-white/20">

          <div className="max-w-[1450px] mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-green-100">

            <p>
              © 2026 Ummat IT House. All Rights Reserved.
            </p>

            <p className="text-[#E6C16C]">
              Learn &nbsp; | &nbsp; Grow &nbsp; | &nbsp; Earn &nbsp; | &nbsp; Serve the Ummah
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}