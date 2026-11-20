import Link from "next/link";
import type { Metadata } from "next";
import styles from "./why.module.css";

export const metadata: Metadata = { title: "Why Choose Us | Ummat IT House", description: "Discover what makes Ummat IT House a trusted home for Islamic learning, IT education, and quality products." };

const features = [
  ["cap", "Diverse Learning Options", "Islamic studies and modern IT courses on one platform."],
  ["award", "Trusted & Authentic Content", "Courses and resources reviewed by qualified scholars and industry experts."],
  ["laptop", "Learn Anytime, Anywhere", "Flexible online learning at your own pace, from any device."],
  ["users", "Experienced Instructors", "Learn from qualified Islamic scholars and professional IT trainers."],
  ["shield", "Secure & Reliable", "A safe, user-friendly platform with secure payments and data protection."],
  ["headset", "Dedicated Support", "Our friendly team is always here to help you with your queries."],
];
const stats = [["users", "10,000+", "Happy Learners"], ["cap", "50+", "Courses"], ["cart", "1,000+", "Islamic Products"], ["star", "4.8/5", "Learner Rating"]];
function Icon({ name }: { name: string }) {
  const p: Record<string, React.ReactNode> = {
    cap: <><path d="m2 9 10-6 10 6-10 6L2 9Z"/><path d="M6 11v5c4 3 8 3 12 0v-5m4-2v7"/></>, award: <><path d="M12 3 15 5l4-.2.2 4L22 12l-2.8 3.2-.2 4-4-.2L12 21l-3-2-4 .2-.2-4L2 12l2.8-3.2L5 4.8 9 5l3-2Z"/><path d="m9 12 2 2 4-4"/></>, laptop: <><rect x="4" y="4" width="16" height="13" rx="2"/><path d="M2 21h20M9 17l-1 4m7-4 1 4"/></>, users: <><circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2m1-13a4 4 0 0 1 0 8m2 2a6 6 0 0 1 3 5"/></>, shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>, headset: <><path d="M3 13v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="12" width="4" height="7" rx="2"/><rect x="18" y="12" width="4" height="7" rx="2"/><path d="M18 20c-1 2-4 2-6 2"/></>, cart: <><path d="M3 4h2l2 12h12l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></>, star: <path d="m12 2 3 6 7 1-5 5 1 8-6-3-6 3 1-8-5-5 7-1 3-6Z"/>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{p[name]}</svg>;
}
export default function WhyChooseUs() {
  return <main className={styles.page}>
    <section className={styles.hero}><div className={styles.heroInner}><div className={styles.crumb}><Link href="/">⌂ &nbsp;Home</Link><span>›</span> Why Choose Us</div><div className={styles.heroTitle}><span className={styles.badge}><Icon name="award"/></span><div><h1>Why <em>Choose Us</em></h1><p>A trusted platform for Islamic learning, IT education, and quality Islamic products.</p></div></div></div></section>
    <section className={styles.intro}><div className={styles.photo}><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85" alt="A calm, modern workspace for online learning"/><span className={styles.photoLabel}>Learn with purpose</span></div><div className={styles.content}><h2>Why Choose Ummat IT House?</h2><p className={styles.lede}>We combine authentic Islamic knowledge with modern IT education and trusted products to help you learn, grow, and stay connected with your faith.</p><div className={styles.grid}>{features.map(([icon,title,desc])=><article className={styles.card} key={title}><span className={styles.icon}><Icon name={icon}/></span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></div></section>
    <section className={styles.stats}>{stats.map(([icon,value,label])=><div className={styles.stat} key={label}><Icon name={icon}/><div><strong>{value}</strong><span>{label}</span></div></div>)}</section>
    <section className={styles.cta}><div className={styles.motif}>۞</div><h2>Start Your <em>Learning Journey</em> Today</h2><p>Join thousands of learners who trust Ummat IT House for Islamic knowledge, IT skills, and quality Islamic products.</p><Link href="/courses">Explore Our Courses <span>→</span></Link></section>
  </main>;
}
