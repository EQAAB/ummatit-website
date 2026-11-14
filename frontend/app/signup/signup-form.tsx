"use client";

import { useState, type FormEvent } from "react";
import styles from "./signup.module.css";

export default function SignupForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("confirmPassword")) {
      setStatus("Your passwords do not match. Please check and try again.");
      return;
    }
    setStatus("Your details are ready. Account creation is not connected to a service yet.");
  }

  return <>
    <form className={styles.form} onSubmit={submit}>
      <label className={styles.field}>Full Name<span className={styles.input}><span aria-hidden="true">♙</span><input type="text" name="name" autoComplete="name" placeholder="Enter your full name" required/></span></label>
      <label className={styles.field}>Email Address<span className={styles.input}><span aria-hidden="true">✉</span><input type="email" name="email" autoComplete="email" placeholder="Enter your email address" required/></span></label>
      <label className={styles.field}>Phone Number<span className={styles.input}><span aria-hidden="true">⌕</span><input type="tel" name="phone" autoComplete="tel" placeholder="Enter your phone number (e.g., +92 300 1234567)" required/></span></label>
      <label className={styles.field}>Password<span className={styles.input}><span aria-hidden="true">♙</span><input type={passwordVisible ? "text" : "password"} name="password" autoComplete="new-password" placeholder="Create a password" minLength={8} required/><button className={styles.eye} type="button" aria-label={passwordVisible ? "Hide password" : "Show password"} aria-pressed={passwordVisible} onClick={()=>setPasswordVisible(!passwordVisible)}>◉</button></span></label>
      <label className={styles.field}>Confirm Password<span className={styles.input}><span aria-hidden="true">♙</span><input type={confirmVisible ? "text" : "password"} name="confirmPassword" autoComplete="new-password" placeholder="Confirm your password" minLength={8} required/><button className={styles.eye} type="button" aria-label={confirmVisible ? "Hide confirm password" : "Show confirm password"} aria-pressed={confirmVisible} onClick={()=>setConfirmVisible(!confirmVisible)}>◉</button></span></label>
      <label className={styles.terms}><input type="checkbox" name="terms" required/><span>I agree to the <a href="#terms" onClick={(event)=>event.preventDefault()}>Terms of Service</a> and <a href="#privacy" onClick={(event)=>event.preventDefault()}>Privacy Policy</a>.</span></label>
      <button className={styles.submit} type="submit"><span aria-hidden="true">♙</span> Create Account</button>
      <div className={styles.divider}><i/>Or Sign Up With<i/></div>
      <div className={styles.social}><a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer"><b className={styles.google}>G</b>Continue with Google</a><a href="https://www.facebook.com/register/" target="_blank" rel="noopener noreferrer"><b className={styles.facebook}>f</b>Continue with Facebook</a></div>
    </form>
    <p className={styles.status} role="status">{status}</p>
  </>;
}
