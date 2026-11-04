import { courses, products, testimonials } from "../data";
import { CardImage } from "./CardImage";

const islamicHref = "https://qurancoaching.com/";

const photos = {
  quran: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80",
  laptop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  shop: "https://images.unsplash.com/photo-1773213075043-86954c638a98?auto=format&fit=crop&w=600&q=80",
  course: [
    "photo-1498050108023-c5249f4df085",
    "photo-1515879218367-8466d910aaa4",
    "photo-1561070791-2526d30994b5",
    "photo-1460925895917-afdab827c52f",
  ],
  product: [
    "photo-1609599006353-e629aaabfeae",
    "photo-1761958150507-7bcc80840cf9",
    "photo-1752900385454-7876eec9c326",
    "photo-1598193681146-3835eeaea11f",
    "photo-1773213075043-86954c638a98",
    "photo-1513201099705-a9746e1e201f",
  ],
};

const img = (id: string, width = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Knowledge for a Brighter Dunya and Akhirah</p>
        <h1>
          Learn Quran, Build IT Skills
          <br className="hero-break" />
          and Explore <em>Islamic Products</em>
        </h1>
        <p className="hero-lede">
          A complete platform for modern IT skills and authentic Islamic products — all in one place.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/courses">
            <span aria-hidden="true">▣</span> Start Learning <span aria-hidden="true">→</span>
          </a>
          <a className="button button-secondary" href="#shop">
            <span aria-hidden="true">🛒</span> Visit Shop
          </a>
        </div>
        <div className="hero-trust">
          <span>
            <b aria-hidden="true">♧</b> Qualified Teachers
          </span>
          <span>
            <b aria-hidden="true">◉</b> Flexible Learning
          </span>
          <span>
            <b aria-hidden="true">✓</b> Trusted Products
          </span>
        </div>
      </div>
      <div className="hero-art" role="img" aria-label="Peaceful Islamic learning space">
        <p className="hero-caption">Knowledge · Faith · Growth</p>
      </div>
    </section>
  );
}

export function CategoryCards() {
  const items = [
    {
      title: "Islamic Studies",
      desc: "Learn Quran with qualified teachers from anywhere in the world.",
      link: islamicHref,
      label: "Explore Quran Coaching",
      image: photos.quran,
      external: true,
    },
    {
      title: "IT Courses",
      desc: "Build in-demand skills with practical IT courses.",
      link: "/courses",
      label: "Explore IT Courses",
      image: photos.laptop,
    },
    {
      title: "Islamic Products",
      desc: "Discover a wide range of authentic Islamic products.",
      link: "#shop",
      label: "Visit Islamic Shop",
      image: photos.shop,
    },
  ];

  return (
    <section className="category-wrap" aria-label="Explore categories">
      <div className="category-grid">
        {items.map((item) => (
          <article className="category-card" key={item.title}>
            <CardImage className="category-art" src={item.image} alt={item.title} />
            <div className="category-copy">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a
                href={item.link}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  icon,
  title,
  note,
  href,
  link,
}: {
  icon: string;
  title: string;
  note: string;
  href: string;
  link: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-title">
        <span className="section-icon" aria-hidden="true">
          {icon}
        </span>
        <div>
          <h2>{title}</h2>
          <p>{note}</p>
        </div>
      </div>
      <a className="view-link" href={href}>
        {link}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export function CoursesSection() {
  return (
    <section className="section" id="courses">
      <SectionHeading
        icon="◧"
        title="Featured IT Courses"
        note="Gain practical skills for a successful career in the digital world."
        href="/courses"
        link="View All Courses"
      />
      <div className="course-grid">
        {courses.slice(0, 4).map((course, index) => (
          <article className="course-card" key={course.title}>
            <CardImage
              className="course-visual"
              src={img(photos.course[index])}
              alt={course.title}
            />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <a className="card-action" href="#courses">
                View Details →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section className="section" id="shop">
      <SectionHeading
        icon="🛒"
        title="Islamic Products Shop"
        note="High-quality Islamic products for your spiritual journey."
        href="#shop"
        link="View All Products"
      />
      <div className="product-grid">
        {products.slice(0, 6).map((product, index) => (
          <article className="product-card" key={product.title}>
            <CardImage
              className="product-visual"
              src={img(photos.product[index])}
              alt={product.title}
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <strong>{product.price}</strong>
              <a className="add-cart" href="#shop">
                View Product
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials" id="about">
      <div className="testimonials-head">
        <h2>What Our Students Say</h2>
        <p>Real stories from our global community</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="testimonial-avatar" aria-hidden="true">
              {item.initials}
            </div>
            <div className="testimonial-body">
              <p>“{item.quote}”</p>
              <div className="testimonial-meta">
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.detail}</small>
                </div>
                <span className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

