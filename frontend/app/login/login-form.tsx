"use client";

import { useState, type FormEvent } from "react";
import styles from "./login.module.css";

export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("This sign-in form is a frontend preview and isn’t connected to an account service.");
  }
  return <>
    <form className={styles.form} onSubmit={submit}>
      <label className={styles.field}>Email Address<span className={styles.input}><span aria-hidden="true">✉</span><input type="email" name="email" autoComplete="email" placeholder="Enter your email address" required/></span></label>
      <label className={styles.field}>Password<span className={styles.input}><span aria-hidden="true">♙</span><input type={visible ? "text" : "password"} name="password" autoComplete="current-password" placeholder="Enter your password" required/><button className={styles.eye} type="button" aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} onClick={()=>setVisible(!visible)}>◉</button></span></label>
      <div className={styles.options}><label><input type="checkbox" defaultChecked/> Remember Me</label><a href="mailto:support@ummatithouse.com?subject=Password%20reset">Forgot Password?</a></div>
      <button className={styles.submit} type="submit"><span aria-hidden="true">↪</span> Sign In</button>
      <div className={styles.divider}><i/>Or Sign In With<i/></div>
      <div className={styles.social}><button type="button" onClick={()=>setStatus("Google sign-in isn’t connected yet.")}><b className={styles.google}>G</b>Continue with Google</button><button type="button" onClick={()=>setStatus("Facebook sign-in isn’t connected yet.")}><b className={styles.facebook}>f</b>Continue with Facebook</button></div>
    </form>
    <p className={styles.status} role="status">{status}</p>
  </>;
}
