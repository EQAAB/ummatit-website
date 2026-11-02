import { courses, products, testimonials } from "../data";

const islamicHref = "https://qurancoaching.com";
const photos = {
  quran: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=500&q=80",
  laptop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
  shop: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&q=80",
  course: ["photo-1498050108023-c5249f4df085", "photo-1558655146-d09347e92766", "photo-1515879218367-8466d910aaa4", "photo-1519389950473-47ba0277781c"],
  product: ["photo-1609599006353-e629aaabfeae", "photo-1603006905003-be475563bc59", "photo-1519682337058-a94d519337bc", "photo-1602874801007-bd458bb1b8b6", "photo-1590736969955-71cc94901144", "photo-1579783902614-a3fb3927b6a5"],
};
const img = (id: string, width = 500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export function Hero() {
  return <section className="hero" id="home"><div className="hero-content"><p className="eyebrow">Knowledge for a Brighter Dunya and Akhirah</p><h1>Learn Quran, Build IT Skills,<br />and Explore <span>Islamic Products</span></h1><p className="hero-lede">A complete platform for modern IT skills and authentic Islamic products — all in one place.</p><div className="hero-actions"><a className="button button-primary" href="#courses">▣ &nbsp; Start Learning <span>→</span></a><a className="button button-secondary" href="#shop">🛒 &nbsp; Visit Shop</a></div><div className="hero-trust"><span><b>♧</b> Qualified Teachers</span><span><b>◉</b> Flexible Learning</span><span><b>✓</b> Trusted Products</span></div></div><div className="hero-art" role="img" aria-label="Peaceful Islamic learning space" /></section>;
}

export function CategoryCards() {
  const items = [
    { title: "Islamic Studies", desc: "Learn Quran with qualified teachers from anywhere in the world.", link: islamicHref, label: "Explore Quran Coaching", image: photos.quran, external: true },
    { title: "IT Courses", desc: "Build in-demand skills with practical IT courses.", link: "#courses", label: "Explore IT Courses", image: photos.laptop },
    { title: "Islamic Products", desc: "Discover a wide range of authentic Islamic products.", link: "#shop", label: "Visit Islamic Shop", image: photos.shop },
  ];
  return <section className="category-wrap" aria-label="Explore categories"><div className="category-grid">{items.map(item => <article className="category-card" key={item.title}><div className="category-art" style={{ backgroundImage: `url('${item.image}')` }} /><div className="category-copy"><h2>{item.title}</h2><p>{item.desc}</p><a href={item.link} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{item.label}<span>→</span></a></div></article>)}</div></section>;
}

function SectionHeading({ icon, title, note, href, link }: { icon: string; title: string; note: string; href: string; link: string }) {
  return <div className="section-heading"><div className="section-title"><span className="section-icon">{icon}</span><div><h2>{title}</h2><p>{note}</p></div></div><a className="view-link" href={href}>{link}<span>→</span></a></div>;
}

export function CoursesSection() {
  return <section className="section" id="courses"><SectionHeading icon="◧" title="Featured IT Courses" note="Gain practical skills for a successful career in the digital world." href="#courses" link="View All Courses"/><div className="course-grid">{courses.slice(0, 4).map((course, index) => <article className="course-card" key={course.title}><div className="course-visual" style={{ backgroundImage: `url('${img(photos.course[index])}')` }} /><div className="course-info"><h3>{course.title}</h3><p>{course.description}</p><a className="card-action" href="#courses">View Details →</a></div></article>)}</div></section>;
}

export function ProductsSection() {
  return <section className="section" id="shop"><SectionHeading icon="🛒" title="Islamic Products Shop" note="High-quality Islamic products for your spiritual journey." href="#shop" link="View All Products"/><div className="product-grid">{products.slice(0, 6).map((product, index) => <article className="product-card" key={product.title}><div className="product-visual" style={{ backgroundImage: `url('${img(photos.product[index])}')` }}/><div className="product-info"><h3>{product.title}</h3><strong>{product.price}</strong><a className="add-cart" href="#shop">＋ &nbsp; Explore Product</a></div></article>)}</div></section>;
}

export function Testimonials() {
  return <section className="testimonials" id="about"><div className="testimonials-head"><h2>What Our Students Say</h2><p>Real stories from our global community</p></div><div className="testimonial-grid">{testimonials.map(item => <article className="testimonial-card" key={item.name}><div className="testimonial-avatar">{item.initials}</div><div><p>“{item.quote}”</p><strong>{item.name}</strong><small>{item.detail}<span className="stars">★★★★★</span></small></div></article>)}</div></section>;
}

export function Footer() {
  return <footer className="footer" id="contact"><div className="footer-main"><div className="footer-brand-block"><a className="brand" href="#home"><span className="brand-mark">♧</span><span className="brand-copy"><strong>Ummat IT House</strong><small>Faith · Knowledge · A Better Tomorrow</small></span></a><p>An all-in-one platform for modern IT skills and authentic Islamic products. Learn, grow and stay connected to your deen.</p></div><div className="footer-col"><h3>Quick Links</h3><a href="#home">Home</a><a href={islamicHref} target="_blank" rel="noopener noreferrer">Islamic Studies ↗</a><a href="#courses">IT Courses</a><a href="#shop">Islamic Shop</a><a href="#about">About Us</a></div><div className="footer-col"><h3>Contact Us</h3><a className="footer-contact" href="tel:+923001234567">+92 300 1234567</a><a href="mailto:support@ummatithouse.com">support@ummatithouse.com</a><span>Lahore, Pakistan</span><span>Mon - Sat (9AM - 6PM)</span></div><div className="footer-col"><h3>Follow Us</h3><a href="#contact">Facebook · Instagram · YouTube</a><a href="#contact">LinkedIn · Pinterest</a><h3>Stay connected</h3><span>Knowledge Today · A Better Tomorrow</span></div></div><div className="footer-bottom"><span>© 2026 Ummat IT House. All rights reserved.</span><span>Privacy Policy &nbsp; | &nbsp; Terms of Service</span><span>Insha’Allah</span></div></footer>;
}
