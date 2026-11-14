import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "./signup-form";
import styles from "./signup.module.css";

export const metadata: Metadata = {
  title: "Sign Up | Ummat IT House",
  description: "Create your Ummat IT House account and begin your learning journey.",
};

function Icon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    course: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4M8 11l2.5 2.5L16 8"/></>,
    cart: <><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.5L22 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    book: <><path d="M12 7v14M3 5.5A2.5 2.5 0 0 1 5.5 3H12v18H5.5A2.5 2.5 0 0 0 3 23.5zM21 5.5A2.5 2.5 0 0 0 18.5 3H12v18h6.5a2.5 2.5 0 0 1 2.5 2.5z"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="1"/><path d="M2 20h20l-2-4H4l-2 4Z"/></>,
    support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="12" width="4" height="7" rx="2"/><rect x="17" y="12" width="4" height="7" rx="2"/><path d="M19 19a5 5 0 0 1-5 3h-2"/></>,
    learn: <><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[kind] ?? paths.user}</svg>;
}

const benefits = [
  ["course", "Access IT Courses", "Get full access to IT courses, learning materials, and skill development programs."],
  ["cart", "Track Orders", "View shop orders, delivery status, and purchase history."],
  ["user", "Manage Profile", "Keep personal information and account preferences up to date."],
  ["book", "Start Learning", "Begin your learning journey and build practical skills."],
];
const features = [
  ["shield", "Secure Registration", "Your details stay safe and private."],
  ["laptop", "Quick Access", "Create your account in just a few minutes."],
  ["support", "Student Support", "Get professional help whenever you need it."],
  ["learn", "Easy Learning", "Access courses and start learning right away."],
];

export default function SignupPage() {
  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="signup-heading">
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Ummat IT House</p><h1 id="signup-heading">Sign Up</h1>
        <p className={styles.lede}>This page allows new users to register for an account.</p><span className={styles.rule}/>
        <div className={styles.heroScene} aria-hidden="true"><span className={styles.lantern}>✧</span><div className={styles.mosque}><i/><i/><b/></div><div className={styles.screen}><b>۞</b><small>UMMAT IT HOUSE</small></div><div className={styles.books}><i>IT COURSES</i><i>WEB DEVELOPMENT</i><i>PROGRAMMING</i></div></div>
      </div>
    </section>
    <section className={styles.content} aria-label="Create a Ummat IT House account">
      <article className={styles.formCard}>
        <div className={styles.intro}><span className={styles.introIcon}><Icon kind="user"/></span><div><h2>Create Your Account</h2><p>Join Ummat IT House today and start your learning journey with our IT courses and digital resources.</p></div></div>
        <SignupForm/>
        <p className={styles.signup}>Already have an account? <Link href="/login">Login</Link></p>
      </article>
      <aside className={styles.infoCard}>
        <h2>Benefits of Registering with Ummat IT House</h2><span className={styles.goldRule}/>
        <div className={styles.benefits}>{benefits.map(([icon,title,text])=><div className={styles.benefit} key={title}><span className={styles.benefitIcon}><Icon kind={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        <div className={styles.skyline} aria-hidden="true"><span>♜　♜　۞　♜　♜</span></div>
      </aside>
    </section>
    <section className={styles.featureStrip} aria-label="Registration benefits">{features.map(([icon,title,text])=><div className={styles.feature} key={title}><span><Icon kind={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</section>
  </main>;
}
