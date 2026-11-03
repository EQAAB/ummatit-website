import { Navbar } from "../components/Navbar";
import styles from "./about.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ummat IT House",
  description: "Learn about Ummat IT House, our mission, vision, services, and values.",
};

const heroImage = "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1400&q=85";
const mosqueImage = "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85";
const serviceImages = {
  quran: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=700&q=85",
  laptop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85",
  products: "https://images.unsplash.com/photo-1773213075043-86954c638a98?auto=format&fit=crop&w=700&q=85",
};

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, React.ReactNode> = {
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="m12 12 7-7M16 5h3v3"/></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,
    book: <><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v17H5.5A2.5 2.5 0 0 0 3 22V5.5ZM21 5.5A2.5 2.5 0 0 0 18.5 3H12v17h6.5A2.5 2.5 0 0 1 21 22V5.5Z"/></>,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="1.5"/><path d="M2 20h20M9 20l1-4h4l1 4"/></>,
    cart: <><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 1.9-1.4L22 8H6"/><circle cx="10" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></>,
    cap: <><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c4 3 8 3 12 0v-5M22 9v6"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    people: <><circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M17 4a4 4 0 0 1 0 8M22 21v-2a7 7 0 0 0-4-6.3"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    bag: <><path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{paths[name] ?? paths.book}</svg>;
}

const services = [
  { title: "Islamic Studies", desc: "Learn Quran and Islamic education through our dedicated platform.", image: serviceImages.quran, icon: "book", href: "https://qurancoaching.com/", action: "Visit Quran Coaching" },
  { title: "IT Courses", desc: "Build in-demand skills with practical, industry-focused IT courses.", image: serviceImages.laptop, icon: "laptop", href: "/#courses", action: "Explore IT Courses" },
  { title: "Islamic Products", desc: "Discover a wide range of authentic and high-quality Islamic products.", image: serviceImages.products, icon: "cart", href: "/#shop", action: "Shop Now" },
];
const benefits = [
  { icon: "cap", title: "Quality Education", text: "Learn from qualified and experienced instructors." },
  { icon: "laptop", title: "Practical IT Skills", text: "Industry-relevant and hands-on training." },
  { icon: "shield", title: "Trusted Products", text: "Authentic, high-quality Islamic products." },
  { icon: "people", title: "Learner Support", text: "Dedicated support for students and customers." },
];
const values = ["Authenticity|Based on Islamic values", "Quality|In learning and products", "Accessibility|For everyone, everywhere", "Integrity|Honest and transparent", "Community|Serving the Ummah"];

function AboutFooter() {
  return <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerBrand}><a className={styles.brand} href="/"><span className={styles.brandMark}>U</span><span><strong>Ummat IT House</strong><small>Islamic Learning · IT Skills · Islamic Products</small></span></a><p>A trusted platform for Islamic learning, modern IT education, and authentic Islamic products. Learn, grow and serve the Ummah with us.</p></div>
      <div><h3>Quick Links</h3><a href="/">Home</a><a href="https://qurancoaching.com/">Islamic Studies ↗</a><a href="/#courses">IT Courses</a><a href="/#shop">Islamic Shop</a><a href="/about">About Us</a></div>
      <div><h3>Useful Links</h3><a href="/#contact">FAQs</a><a href="/#contact">Privacy Policy</a><a href="/#contact">Terms &amp; Conditions</a><a href="/#contact">Refund Policy</a><a href="/#contact">Shipping Policy</a></div>
      <div><h3>Contact Us</h3><a href="tel:+923001234567">☎ &nbsp;+92 300 1234567</a><a href="mailto:support@ummatithouse.com">✉ &nbsp;support@ummatithouse.com</a><span>⌖ &nbsp;Lahore, Pakistan</span></div>
      <div><h3>Follow Us</h3><div className={styles.socials}><a href="/#contact" aria-label="Facebook">f</a><a href="/#contact" aria-label="YouTube">▶</a><a href="/#contact" aria-label="Instagram">◎</a><a href="/#contact" aria-label="LinkedIn">in</a></div></div>
    </div>
    <div className={styles.footerBottom}><span>© 2026 Ummat IT House. All Rights Reserved.</span><strong>Learn&nbsp;&nbsp; | &nbsp;&nbsp;Grow&nbsp;&nbsp; | &nbsp;&nbsp;Earn&nbsp;&nbsp; | &nbsp;&nbsp;Serve the Ummah</strong></div>
  </footer>;
}

export default function AboutPage() {
  return <><Navbar/><main className={styles.page}>
    <section className={styles.hero} style={{ "--hero-image": `url("${heroImage}")` } as React.CSSProperties}>
      <div className={styles.heroInner}><p className={styles.breadcrumb}><a href="/">⌂ &nbsp;Home</a><span>›</span>About Us</p><h1>About <em>Us</em></h1><p className={styles.tagline}>Learn · Grow · Serve the Ummah</p><p className={styles.heroCopy}>Ummat IT House is a platform that combines Islamic learning, modern IT education, and authentic Islamic products to help individuals grow in faith, skills, and daily life.</p></div>
    </section>

    <section className={styles.missionVision}>
      <div className={styles.mosque}><img src={mosqueImage} alt="Mosque at sunset" loading="lazy"/></div>
      <article className={styles.statement}><span className={styles.iconTile}><Icon name="target"/></span><div><h2>Our Mission</h2><p>To provide high-quality Islamic education, practical IT skills, and authentic Islamic products, making beneficial knowledge and resources accessible for everyone.</p></div></article>
      <article className={styles.statement}><span className={styles.iconTile}><Icon name="eye"/></span><div><h2>Our Vision</h2><p>To be a trusted and leading platform for Islamic learning, technology education, and Islamic lifestyle products, serving individuals and the wider Ummah globally.</p></div></article>
    </section>

    <section className={styles.services}>
      <div className={styles.sectionTitle}><h2>Our Services</h2><span><i/>◇<i/></span></div>
      <div className={styles.serviceGrid}>{services.map((item, i)=><article className={`${styles.serviceCard} ${i===0?styles.featured:""}`} key={item.title}><img src={item.image} alt="" loading="lazy"/><div className={styles.serviceCopy}><h3><Icon name={item.icon}/>{item.title}</h3><p>{item.desc}</p><a href={item.href} {...(item.href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{})}>{item.action}<span>↗</span></a></div></article>)}</div>
    </section>

    <section className={styles.why}>
      <div className={styles.whyLead}><h2>Why Choose<br/>Ummat IT House?</h2><i/><p>We bring together authentic Islamic values, modern education, and quality products in one trusted platform.</p></div>
      {benefits.map((item)=><article className={styles.benefit} key={item.title}><Icon name={item.icon}/><h3>{item.title}</h3><p>{item.text}</p></article>)}
    </section>

    <section className={styles.bottomGrid}>
      <article className={styles.valuesCard}><img src={serviceImages.products} alt="Islamic books and lantern" loading="lazy"/><div className={styles.valuesContent}><h2>Our Core Values</h2><ul>{values.map((value)=><li key={value}><span>✓</span><p><strong>{value.split("|")[0]}</strong> ({value.split("|")[1]})</p></li>)}</ul></div></article>
      <div className={styles.stats}>{[{icon:"people",number:"10,000+",label:"Learners",sub:"(Combined Platforms)"},{icon:"layers",number:"50+",label:"IT Courses"},{icon:"bag",number:"500+",label:"Islamic Products"},{icon:"globe",number:"Global",label:"Online Learning",sub:"Community"}].map((stat)=><article key={stat.number}><Icon name={stat.icon}/><strong>{stat.number}</strong><span>{stat.label}</span>{stat.sub&&<small>{stat.sub}</small>}</article>)}</div>
    </section>
  </main><AboutFooter/></>;
}
