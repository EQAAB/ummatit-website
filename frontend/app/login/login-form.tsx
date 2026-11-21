"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    if (!email || !password) {
      setStatus("Enter your email address and password to continue.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Enter a valid email address.");
      return;
    }

    setStatus("Your details are ready, but sign-in isn’t connected to an account service yet.");
  }
  return <>
    <form className={styles.form} onSubmit={submit} noValidate>
      <label className={styles.field}>Email Address<span className={styles.input}><span aria-hidden="true">✉</span><input type="email" name="email" autoComplete="email" placeholder="Enter your email address" required/></span></label>
      <label className={styles.field}>Password<span className={styles.input}><span aria-hidden="true">♙</span><input type={visible ? "text" : "password"} name="password" autoComplete="current-password" placeholder="Enter your password" required/><button className={styles.eye} type="button" aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} onClick={()=>setVisible(!visible)}>◉</button></span></label>
      <div className={styles.options}><label><input type="checkbox" defaultChecked/> Remember Me</label><Link href="/forgot-password">Forgot Password?</Link></div>
      <button className={styles.submit} type="submit"><span aria-hidden="true">↪</span> Sign In</button>
      <p className={styles.status} role="status" aria-live="polite">{status}</p>
      <div className={styles.divider}><i/>Or Sign In With<i/></div>
      <div className={styles.social}><button type="button" onClick={()=>setStatus("Google sign-in isn’t connected yet.")}><b className={styles.google}>G</b>Continue with Google</button><button type="button" onClick={()=>setStatus("Facebook sign-in isn’t connected yet.")}><b className={styles.facebook}>f</b>Continue with Facebook</button></div>
    </form>
  </>;
}
