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

export function Footer() {
  const socials = [
    { label: "Facebook", href: "#contact" },
    { label: "Instagram", href: "#contact" },
    { label: "YouTube", href: "#contact" },
    { label: "LinkedIn", href: "#contact" },
    { label: "Pinterest", href: "#contact" },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand brand-footer" href="#home">
            <span className="brand-mark">
              <span>U</span>
            </span>
            <span className="brand-copy">
              <strong>UMMAT</strong>
              <small>IT HOUSE</small>
            </span>
          </a>
          <p>
            An all-in-one platform for modern IT skills and authentic Islamic products. Learn, grow
            and stay connected to your deen.
          </p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href={islamicHref} target="_blank" rel="noopener noreferrer">
            Islamic Studies
            <span className="external" aria-hidden="true">
              ↗
            </span>
          </a>
          <a href="#courses">IT Courses</a>
          <a href="#shop">Islamic Shop</a>
          <a href="#about">About Us</a>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <a className="footer-contact" href="tel:+923338130214">
            +92 333 8130214
          </a>
          <a href="mailto:support@ummatithouse.com">support@ummatithouse.com</a>
          <a
            href="https://maps.app.goo.gl/omCVRYg1mKbgzPcU8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Street 70, MPCHS E-11/3, E-11, Islamabad, Pakistan
          </a>
          <span>Mon - Sat (9AM - 6PM)</span>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-socials" aria-label="Social media">
            {socials.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <h3 className="footer-subhead">Stay connected</h3>
          <span>Knowledge Today · A Better Tomorrow</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ummat IT House. All rights reserved.</span>
        <span>Privacy Policy &nbsp; | &nbsp; Terms of Service</span>
        <span>Insha’Allah</span>
      </div>
    </footer>
  );
}
