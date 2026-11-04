"use client";

import { useState, type FormEvent } from "react";
import styles from "./contact.module.css";

export function ContactForm() {
  const [handoff, setHandoff] = useState<{ subject: string; body: string } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get("name") ?? "");
    const email = String(values.get("email") ?? "");
    const phone = String(values.get("phone") ?? "");
    const subject = String(values.get("subject") ?? "Contact request");
    const message = String(values.get("message") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`;
    setHandoff({ subject, body });
    window.location.href = `mailto:support@ummatithouse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.fields}>
      <label>Full Name <b>*</b><input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required minLength={2} /></label>
      <label>Email Address <b>*</b><input name="email" type="email" autoComplete="email" placeholder="Enter your email" required /></label>
      <label>Phone Number<input name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" /></label>
      <label>Subject <b>*</b><select name="subject" required defaultValue=""><option value="" disabled>Select a subject</option><option>General Inquiry</option><option>IT Courses</option><option>Islamic Studies</option><option>Islamic Products</option><option>Technical Support</option><option>Other</option></select></label>
      <label className={styles.messageField}>Your Message <b>*</b><textarea name="message" placeholder="Write your message here..." required minLength={10} rows={4} /></label>
    </div>
    <button className={styles.submit} type="submit"><span aria-hidden="true">➤</span> Send Message</button>
    {handoff && <p className={styles.formStatus} role="status">Your email app should open with this message. If it doesn’t, <a href={`mailto:support@ummatithouse.com?subject=${encodeURIComponent(handoff.subject)}&body=${encodeURIComponent(handoff.body)}`}>send it by email</a>.</p>}
  </form>;
}
