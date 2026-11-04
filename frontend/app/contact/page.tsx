import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Ummat IT House",
  description: "Contact Ummat IT House for help with courses, Islamic learning, and products.",
};

const heroImage = "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1400&q=85";

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    phone: <path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 2a13 13 0 0 1-6-6l2-2-3-5Z"/>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    headset: <><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="12" width="4" height="7" rx="2"/><rect x="17" y="12" width="4" height="7" rx="2"/><path d="M19 19a5 5 0 0 1-5 3h-2"/></>,
    chat: <><path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></>,
    question: <><circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.4 1.6c-1.2 1.2-2 1.5-2 3M12 17h.01"/></>,
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 0-2 2V5Z"/><path d="M4 18a2 2 0 0 1 2-2h13M9 7h6M9 10h6"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name] ?? paths.mail}</svg>;
}

function ContactFooter() {
  return <footer className={styles.footer}>
    <div className={styles.footerGrid}>
      <div className={styles.footerBrand}><a className={styles.footerLogo} href="/"><span>U</span><strong>Ummat IT House<small>Islamic Learning · IT Skills · Islamic Products</small></strong></a><p>A trusted platform for Islamic learning, modern IT education, and authentic Islamic products. Learn, grow and serve the Ummah with us.</p></div>
      <div className={styles.footerColumn}><h2>Quick Links</h2><a href="/">Home</a><a href="https://qurancoaching.com/" target="_blank" rel="noopener noreferrer">Islamic Studies ↗</a><a href="/#courses">IT Courses</a><a href="/#shop">Islamic Shop</a><a href="/about">About Us</a><a href="/contact">Contact</a></div>
      <div className={styles.footerColumn}><h2>Useful Links</h2><a href="mailto:support@ummatithouse.com?subject=FAQs">FAQs</a><a href="mailto:support@ummatithouse.com?subject=Privacy%20Policy">Privacy Policy</a><a href="mailto:support@ummatithouse.com?subject=Terms%20and%20Conditions">Terms &amp; Conditions</a><a href="mailto:support@ummatithouse.com?subject=Refund%20Policy">Refund Policy</a><a href="mailto:support@ummatithouse.com?subject=Shipping%20Policy">Shipping Policy</a></div>
      <div className={styles.footerColumn}><h2>Contact Us</h2><a href="tel:+923338130214">☎ &nbsp;+92 333 8130214</a><a href="mailto:support@ummatithouse.com">✉ &nbsp;support@ummatithouse.com</a><a href="https://maps.app.goo.gl/ABSrFoVzceRJPmLY9" target="_blank" rel="noopener noreferrer">⌖ &nbsp;Street 70, MPCHS E-11/3, E-11, Islamabad, Pakistan</a></div>
      <div className={styles.footerColumn}><h2>Follow Us</h2><div className={styles.socials}><a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a><a href="https://youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">▶</a><a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">◎</a><a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a></div></div>
    </div>
    <div className={styles.footerBottom}><span>© 2026 Ummat IT House. All Rights Reserved.</span><strong>Learn &nbsp; | &nbsp; Grow &nbsp; | &nbsp; Earn &nbsp; | &nbsp; Serve the Ummah</strong></div>
  </footer>;
}

export default function ContactPage() {
  const contactMethods = [
    { icon: "mail", title: "Email Us", detail: "support@ummatithouse.com", href: "mailto:support@ummatithouse.com" },
    { icon: "phone", title: "Call / WhatsApp", detail: "+92 333 8130214", href: "https://wa.me/923338130214" },
    { icon: "pin", title: "Our Location", detail: "Street 70, MPCHS E-11/3, E-11, Islamabad, Pakistan", href: "https://maps.app.goo.gl/ABSrFoVzceRJPmLY9" },
    { icon: "clock", title: "Working Hours", detail: "Mon – Sat: 9:00 AM – 6:00 PM (PKT)" },
  ];
  const ways = [
    { icon: "chat", title: "WhatsApp Support", description: "Get quick assistance on WhatsApp.", action: "Chat on WhatsApp", href: "https://wa.me/923338130214", external: true },
    { icon: "mail", title: "Email Support", description: "Send us an email for any inquiry.", action: "Send Email", href: "mailto:support@ummatithouse.com", external: true },
    { icon: "question", title: "FAQs", description: "No FAQ page is available yet. Ask us directly.", action: "Ask a Question", href: "mailto:support@ummatithouse.com?subject=FAQs", external: true },
    { icon: "book", title: "Course Guidance", description: "Need help choosing a course?", action: "Explore Courses", href: "/#courses", external: false },
  ];

  return <><Navbar/><main className={styles.page}>
    <section className={styles.hero} style={{ "--hero-image": `url("${heroImage}")` } as React.CSSProperties}>
      <div className={styles.heroInner}><p className={styles.breadcrumb}><a href="/">⌂ &nbsp;Home</a><span>›</span>Contact Us</p><h1>Contact <em>Us</em></h1><p>We’re here to help you. Get in touch with our team for any<br className={styles.desktopBreak}/> questions about our IT courses, Islamic products, or services.</p></div>
    </section>

    <section className={styles.contactLayout} aria-label="Contact Ummat IT House">
      <article className={styles.formCard} id="contact-form">
        <div className={styles.cardHeading}><span className={styles.headingIcon}><Icon name="mail"/></span><div><h2>Send Us a Message</h2><p>Have a question or need support? Fill out the form below and we’ll get back to you soon.</p></div></div>
        <ContactForm/>
      </article>
      <div className={styles.sideColumn}>
        <article className={styles.infoCard}>
          <div className={styles.infoHeading}><Icon name="headset"/><div><h2>Contact Information</h2><p>Reach out to us through any of the following channels.</p></div></div>
          <div className={styles.contactList}>{contactMethods.map((item)=><div className={styles.contactItem} key={item.title}><span><Icon name={item.icon}/></span><div><h3>{item.title}</h3>{item.href?<a href={item.href} {...(item.href.startsWith("https")?{target:"_blank",rel:"noopener noreferrer"}:{})}>{item.detail}</a>:<p>{item.detail}</p>}</div></div>)}</div>
          <div className={styles.archArt} aria-hidden="true">۞</div>
        </article>
        <article className={styles.mapCard} aria-label="Map showing Ummat IT House in Islamabad"><iframe title="Map showing Ummat IT House, Islamabad, Pakistan" src="https://maps.google.com/maps?q=Street%2070%2C%20MPCHS%20E-11%2F3%2C%20E-11%2C%20Islamabad%2C%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className={styles.mapLabel} href="https://maps.app.goo.gl/ABSrFoVzceRJPmLY9" target="_blank" rel="noopener noreferrer"><Icon name="pin"/><span><strong>Ummat IT House</strong><small>Street 70, MPCHS E-11/3, E-11, Islamabad</small></span></a></article>
      </div>
    </section>

    <section className={styles.otherWays}>
      <div className={styles.sectionTitle}><h2>Other Ways to Get in Touch</h2><span><i/>◇<i/></span></div>
      <div className={styles.waysGrid}>{ways.map((item)=><article className={styles.wayCard} key={item.title}><span className={styles.wayIcon}><Icon name={item.icon}/></span><div className={styles.wayContent}><h3>{item.title}</h3><p>{item.description}</p><a href={item.href} {...(item.external?{target:"_blank",rel:"noopener noreferrer"}:{})}>{item.action}<span aria-hidden="true">↗</span></a></div></article>)}</div>
    </section>
  </main><ContactFooter/></>;
}
