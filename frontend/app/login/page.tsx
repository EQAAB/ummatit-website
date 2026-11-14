import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./login-form";
import styles from "./login.module.css";

export const metadata: Metadata = {
  title: "Login | Ummat IT House",
  description: "Sign in to access your IT courses, orders, and account.",
};

function Icon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    course: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4M8 11l2.5 2.5L16 8"/></>,
    cart: <><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.5L22 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="1"/><path d="M2 20h20l-2-4H4l-2 4Z"/></>,
    support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="12" width="4" height="7" rx="2"/><rect x="17" y="12" width="4" height="7" rx="2"/><path d="M19 19a5 5 0 0 1-5 3h-2"/></>,
    bolt: <path d="m13 2-3 8H5l6 12 3-8h5L13 2Z"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[kind] ?? paths.user}</svg>;
}

const benefits = [
  ["course", "Access Your IT Courses", "Continue your enrolled courses, track your progress, and learn new skills."],
  ["cart", "Track Orders", "View your shop orders, delivery status, and purchase history."],
  ["user", "Manage Your Profile", "Update your personal information, password, and account preferences."],
];
const features = [
  ["shield", "Secure Login", "Your data is safe and protected."],
  ["laptop", "Easy Access", "Quickly reach your courses and orders."],
  ["support", "Student Support", "Get help whenever you need it."],
  ["bolt", "Fast Assistance", "Quick and reliable support for your account."],
];

export default function LoginPage() {
  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="login-heading">
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Ummat IT House</p><h1 id="login-heading">Login</h1>
        <p className={styles.lede}>Sign in to access your IT courses, orders, and account.</p><span className={styles.rule}/>
        <div className={styles.heroScene} aria-hidden="true"><span className={styles.lantern}>✧</span><div className={styles.mosque}><i/><i/><b/></div><div className={styles.screen}><b>۞</b><small>UMMAT IT HOUSE</small></div><div className={styles.books}><i>IT COURSES</i><i>WEB DEVELOPMENT</i><i>PROGRAMMING</i></div></div>
      </div>
    </section>
    <section className={styles.content} aria-label="Ummat IT House account login">
      <article className={styles.formCard}>
        <div className={styles.intro}><span className={styles.introIcon}><Icon kind="laptop"/></span><div><h2>Welcome Back</h2><p>Sign in to your Ummat IT House account to continue learning, manage your orders, and more.</p></div></div>
        <LoginForm/>
        <p className={styles.signup}>Don’t have an account? <Link href="/signup">Sign Up</Link></p>
      </article>
      <aside className={styles.infoCard}>
        <h2>Your Learning, Orders<br/> and Account — In One Place</h2><span className={styles.goldRule}/>
        <div className={styles.benefits}>{benefits.map(([icon,title,text])=><div className={styles.benefit} key={title}><span className={styles.benefitIcon}><Icon kind={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        <div className={styles.skyline} aria-hidden="true"><span>♜　♜　۞　♜　♜</span></div>
      </aside>
    </section>
    <section className={styles.featureStrip} aria-label="Account benefits">{features.map(([icon,title,text])=><div className={styles.feature} key={title}><span><Icon kind={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</section>
  </main>;
}
