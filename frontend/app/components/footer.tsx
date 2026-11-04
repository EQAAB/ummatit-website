import Link from "next/link";

const islamicHref = "https://qurancoaching.com/";

const socials = [
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Pinterest", href: "https://pinterest.com/" },
];

export function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark">
              <span>U</span>
            </span>
            <span className="brand-copy">
              <strong>UMMAT</strong>
              <small>IT HOUSE</small>
            </span>
          </Link>
          <p>
            An all-in-one platform for modern IT skills and authentic Islamic products. Learn, grow
            and stay connected to your deen.
          </p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <a href={islamicHref} target="_blank" rel="noopener noreferrer">
            Islamic Studies
            <span className="external" aria-hidden="true">
              ↗
            </span>
          </a>
          <Link href="/courses">IT Courses</Link>
          <Link href="/islamic-shop">Islamic Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <a className="footer-contact" href="tel:+923338130214">
            +92 333 8130214
          </a>
          <a href="mailto:support@ummatithouse.com">support@ummatithouse.com</a>
          <a
            href="https://maps.app.goo.gl/omCVRYg1mKbgzPcU8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Street 70, MPCHS E-11/3, E-11, Islamabad, Pakistan
          </a>
          <span>Mon - Sat (9AM - 6PM)</span>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-socials" aria-label="Social media">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </div>
          <h3 className="footer-subhead">Stay connected</h3>
          <span>Knowledge Today · A Better Tomorrow</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ummat IT House. All rights reserved.</span>
        <span>Privacy Policy &nbsp; | &nbsp; Terms of Service</span>
        <span>Insha’Allah</span>
      </div>
    </footer>
  );
}
