"use client";

import Link from "next/link";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./profile.module.css";

type Profile = { name: string; email: string; phone: string; birth: string; gender: string; country: string; city: string; postal: string; street: string };
const initialProfile: Profile = { name: "Your Name", email: "you@example.com", phone: "", birth: "", gender: "", country: "Pakistan", city: "", postal: "", street: "" };
const iconPaths: Record<string, string> = {
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z", user: "M20 21a8 8 0 0 0-16 0m8-10a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z", laptop: "M4 5h16v12H4zM2 21h20", box: "m12 2 9 5-9 5-9-5 9-5Zm-9 5v10l9 5 9-5V7M12 12v10", heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z", pin: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", shield: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4", logout: "M10 17l5-5-5-5m5 5H3m9-9h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7", cart: "M3 3h2l2.2 12h11.5L22 7H6m3 12h.01M18 19h.01", cap: "m2 9 10-5 10 5-10 5L2 9Zm4 3v5c4 3 8 3 12 0v-5m4-3v6", mail: "M3 5h18v14H3zM3 6l9 7 9-7", gear: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-6v3m0 14v3m10-10h-3M5 12H2m17.1-7.1-2.1 2.1M7 17l-2.1 2.1m14.2 0L17 17M7 7 4.9 4.9", eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z", photo: "M4 6h3l2-2h6l2 2h3v14H4zM12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z", save: "M5 3h12l4 4v14H3V3h2Zm2 0v6h10V3m-5 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z", close: "m18 6-12 12M6 6l12 12", lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4", check: "m5 12 4 4L19 6", arrow: "M5 12h14m-6-6 6 6-6 6", phone: "M5 3h14v18H5zM9 6h6M11 18h2", calendar: "M3 5h18v16H3zM16 3v4M8 3v4M3 10h18"
};
function Icon({ name, size = 20 }: { name: string; size?: number }) { return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={iconPaths[name] ?? iconPaths.user} /></svg>; }

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [saved, setSaved] = useState<Profile>(initialProfile);
  const [photo, setPhoto] = useState("");
  const [visible, setVisible] = useState({ current: false, next: false, confirm: false });
  const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" });
  const [prefs, setPrefs] = useState({ email: true, orders: true, courses: true });
  const [status, setStatus] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  const update = (key: keyof Profile, value: string) => setProfile((p) => ({ ...p, [key]: value }));
  const changePhoto = (event: ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (file) setPhoto(URL.createObjectURL(file)); };
  const save = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSaved(profile); setStatus("Your changes are saved in this session."); };
  const cancel = () => { setProfile(saved); setStatus("Unsaved changes were discarded."); };
  const togglePassword = (key: keyof typeof visible) => setVisible((v) => ({ ...v, [key]: !v[key] }));
  const changePassword = () => {
    if (!passwords.current || !passwords.next || !passwords.confirm) { setStatus("Enter your current password and both new password fields."); return; }
    if (passwords.next.length < 8) { setStatus("Your new password must be at least 8 characters."); return; }
    if (passwords.next !== passwords.confirm) { setStatus("Your new passwords don’t match."); return; }
    setStatus("Password changes aren’t connected to an account service yet.");
  };
  const nav = [{ icon: "grid", label: "Dashboard", href: "/profile#overview" }, { icon: "user", label: "My Profile", href: "/profile", active: true }, { icon: "laptop", label: "My IT Courses", href: "/courses" }, { icon: "box", label: "My Orders", href: "/shopping-cart" }, { icon: "heart", label: "Wishlist", href: "/islamic-shop" }, { icon: "pin", label: "Addresses", href: "/profile#address" }, { icon: "shield", label: "Security", href: "/profile#security" }];
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroInner}><p className={styles.breadcrumb}><Link href="/">Home</Link><span>›</span><span>My Profile</span></p><h1>My <em>Profile</em></h1><p className={styles.subtitle}>Manage your personal information, account settings, and preferences.</p></div>
    </section>
    <div className={styles.dashboard}>
      <aside className={styles.sidebar} aria-label="Account navigation"><nav>{nav.map((item) => <Link key={item.label} href={item.href} className={`${styles.sideLink} ${item.active ? styles.sideActive : ""}`}><Icon name={item.icon}/><span>{item.label}</span></Link>)}<Link href="/login" className={`${styles.sideLink} ${styles.logout}`}><Icon name="logout"/><span>Logout</span></Link></nav><div className={styles.sideMotif} aria-hidden="true">☾</div></aside>
      <div className={styles.content}>
        <section className={styles.topRow} id="overview">
          <div className={`${styles.card} ${styles.overview}`}><div className={styles.avatar}>{photo ? <img src={photo} alt="Your profile"/> : <span>{profile.name.trim().charAt(0).toUpperCase() || "U"}</span>}</div><div className={styles.identity}><h2>{profile.name || "Your Name"}</h2><p><Icon name="calendar" size={16}/> Member Since: <strong>Profile setup</strong></p><button type="button" className={styles.photoButton} onClick={() => fileInput.current?.click()}><Icon name="photo" size={17}/> Change Photo</button><input ref={fileInput} className={styles.fileInput} type="file" accept="image/*" onChange={changePhoto} aria-label="Upload profile photo"/></div></div>
          <div className={`${styles.card} ${styles.stats}`}>
            {[{ icon: "cart", label: "Total Orders", count: "0", href: "/shopping-cart", link: "View Orders" }, { icon: "cap", label: "Enrolled Courses", count: "0", href: "/courses", link: "View Courses" }, { icon: "heart", label: "Wishlist Items", count: "0", href: "/islamic-shop", link: "View Wishlist" }].map((item) => <div className={styles.stat} key={item.label}><span className={styles.statIcon}><Icon name={item.icon} size={24}/></span><div><span className={styles.statLabel}>{item.label}</span><strong className={styles.statCount}>{item.count}</strong><Link href={item.href} className={styles.statLink}>{item.link} <Icon name="arrow" size={14}/></Link></div></div>)}
          </div>
        </section>
        <form onSubmit={save} className={styles.form}>
          <div className={styles.cardsGrid}>
            <section className={styles.card}>
              <header className={styles.cardHeader}><span className={styles.headerIcon}><Icon name="user"/></span><div><h2>Personal Information</h2><p>Update your basic personal details.</p></div></header>
              <div className={styles.fields}><Field label="Full Name" required><input value={profile.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" required/></Field><Field label="Email Address" required><input type="email" value={profile.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" required/></Field><Field label="Phone Number" wide><input type="tel" value={profile.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" placeholder="+92 300 1234567"/></Field><Field label="Date of Birth"><input type="date" value={profile.birth} onChange={(e) => update("birth", e.target.value)}/></Field><Field label="Gender"><select value={profile.gender} onChange={(e) => update("gender", e.target.value)}><option value="">Select gender</option><option>Male</option><option>Female</option><option>Prefer not to say</option></select></Field></div>
            </section>
            <section className={styles.card} id="address">
              <header className={styles.cardHeader}><span className={styles.headerIcon}><Icon name="pin"/></span><div><h2>Address Information</h2><p>Manage your address for orders and communications.</p></div></header>
              <div className={styles.fields}><Field label="Country" required><select value={profile.country} onChange={(e) => update("country", e.target.value)}><option>Pakistan</option><option>United Arab Emirates</option><option>United Kingdom</option><option>United States</option><option>Other</option></select></Field><Field label="City" required><input value={profile.city} onChange={(e) => update("city", e.target.value)} autoComplete="address-level2" required/></Field><Field label="Postal Code"><input value={profile.postal} onChange={(e) => update("postal", e.target.value)} autoComplete="postal-code"/></Field><Field label="Street Address" required><input value={profile.street} onChange={(e) => update("street", e.target.value)} autoComplete="street-address" required/></Field></div>
            </section>
            <section className={styles.card} id="security">
              <header className={styles.cardHeader}><span className={styles.headerIcon}><Icon name="shield"/></span><div><h2>Account Security</h2><p>Update your password to keep your account secure.</p></div></header>
              <div className={styles.passwordFields}>{([ ["current", "Current Password"], ["next", "New Password"], ["confirm", "Confirm New Password"] ] as const).map(([key, label]) => <Field key={key} label={label}><span className={styles.passwordWrap}><Icon name="lock" size={16}/><input type={visible[key] ? "text" : "password"} autoComplete={key === "current" ? "current-password" : "new-password"} minLength={key === "current" ? undefined : 8} placeholder="Enter password" value={passwords[key]} onChange={(e) => setPasswords((p) => ({ ...p, [key]: e.target.value }))}/><button type="button" onClick={() => togglePassword(key)} aria-label={visible[key] ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`} aria-pressed={visible[key]}><Icon name="eye" size={17}/></button></span></Field>)}</div>
              <button type="button" className={styles.changePassword} onClick={changePassword}><Icon name="lock" size={16}/> Change Password</button>
            </section>
            <section className={styles.card}>
              <header className={styles.cardHeader}><span className={styles.headerIcon}><Icon name="gear"/></span><div><h2>Account Settings &amp; Preferences</h2><p>Choose how you’d like to receive updates and stay informed.</p></div></header>
              <div className={styles.preferences}>{([ ["email", "Email Updates", "Receive news, new courses, special offers, and important announcements."], ["orders", "Order Notifications", "Get updates about your orders (confirmation, shipping, delivery)."], ["courses", "Course Reminders", "Receive reminders about your enrolled courses, classes, and deadlines."] ] as const).map(([key, label, hint]) => <label className={styles.preference} key={key}><span className={styles.prefIcon}><Icon name={key === "email" ? "mail" : key === "orders" ? "box" : "cap"} size={18}/></span><span className={styles.prefCopy}><strong>{label}</strong><small>{hint}</small></span><span className={styles.switch}><input type="checkbox" checked={prefs[key]} onChange={(e) => setPrefs((p) => ({ ...p, [key]: e.target.checked }))}/><span/></span></label>)}</div>
            </section>
          </div>
          <div className={styles.actions}><p className={styles.status} role="status" aria-live="polite">{status}</p><button type="submit" className={styles.save}><Icon name="save" size={18}/> Save Changes</button><button type="button" className={styles.cancel} onClick={cancel}><Icon name="close" size={17}/> Cancel</button></div>
        </form>
      </div>
    </div>
    <section className={styles.benefits} aria-label="Account benefits">{[["♧", "Dedicated Support", "Get help whenever you need it."], ["♢", "Secure Account", "Your data is always protected."], ["⌘", "Easy Access", "Manage courses, orders, and more in one place."], ["♙", "A Better Learning Experience", "Learn, shop, and grow with the Ummah."]].map(([icon, title, copy]) => <div className={styles.benefit} key={title}><span>{icon}</span><div><strong>{title}</strong><small>{copy}</small></div></div>)}</section>
  </main>;
}

function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactNode }) { return <label className={`${styles.field} ${wide ? styles.wide : ""}`}><span>{label}{required && <b aria-hidden="true"> *</b>}</span>{children}</label>; }
