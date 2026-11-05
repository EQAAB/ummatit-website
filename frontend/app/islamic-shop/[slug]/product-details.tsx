"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import styles from "./product.module.css";
import { shopProducts } from "../catalog";
import { useCart } from "../../components/CartProvider";

type Product = { title: string; category: string; price: number; rating: string; reviews: number; sold: number; description: string; images: string[]; features: string[] };
const imageUrl = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=90`;
const related = [
  { name: "Sahih Bukhari (Complete Set)", price: 5299, image: "photo-1544947950-fa07a98d237f", slug: "islamic-books-set" },
  { name: "Premium Prayer Mat (Janamaz)", price: 6999, image: "photo-1519817650390-64a93db51149", slug: "premium-prayer-mat" },
  { name: "Tasbeeh (99 Beads)", price: 3599, image: "photo-1603006905003-be475563bc59", slug: "wooden-tasbeeh-99-beads" },
  { name: "Attar Al Oud (12 ml)", price: 8499, image: "photo-1594035910387-fea47794261f", slug: "attar-oudh" },
];

export default function ProductDetails({ product }: { product: Product }) {
  const { slug } = useParams<{ slug: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("Description");
  const [notice, setNotice] = useState("");
  const { items, add } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [zoom, setZoom] = useState(false);
  const tabs = ["Description", "Specifications", "Shipping & Delivery", "Reviews"];

  const addToCart = (name = product.title, amount = quantity) => {
    const item = shopProducts.find((candidate) => candidate.title === name || (name.includes("Tasbeeh") && candidate.title.includes("Tasbeeh")) || (name.includes("Attar") && candidate.title.includes("Attar")))
      ?? { title: name, category: product.category, description: product.description, price: product.price, rating: product.rating, reviews: product.reviews, image: product.images[0] };
    add(item, amount);
    setNotice(`${amount} × ${name} added to your cart.`);
  };
  return <main className={styles.page}>
    <div className={styles.crumb}><a href="/">⌂ &nbsp; Home</a><span>›</span><a href="/islamic-shop">Islamic Shop</a><span>›</span><a href="/islamic-shop">Quran &amp; Islamic Books</a><span>›</span><span>{product.title}</span></div>
    <section className={styles.product}>
      <div className={styles.gallery}>
        <div className={styles.thumbs}>{product.images.map((image, index) => <button key={`${image}-${index}`} onClick={() => setActiveImage(index)} className={activeImage === index ? styles.thumbActive : ""} aria-label={`Show product image ${index + 1}`}><img src={imageUrl(image, 180)} alt="" /></button>)}<span aria-hidden="true">⌄</span></div>
        <div className={styles.mainImage}><img src={imageUrl(product.images[activeImage])} alt={product.title} /><button className={styles.zoom} onClick={() => setZoom(true)} aria-label="View image fullscreen">⛶</button></div>
      </div>
      <div className={styles.details}><span className={styles.category}>{product.category}</span><h1>{product.title}</h1><div className={styles.rating}><span aria-label={`${product.rating} out of 5 stars`}>★★★★★</span><b>{product.rating}</b><a href="#reviews">({product.reviews} Reviews)</a><i />{product.sold}+ Sold</div><p className={styles.description}>{product.description}</p>
        <div className={styles.featureRow}>{product.features.map((feature, index) => <div key={feature}><span>{["♧", "▱", "♙", "♔"][index % 4]}</span>{feature}</div>)}</div>
      </div>
      <aside className={styles.purchase}><span className={styles.priceLabel}>Price {quantity > 1 ? <small>(Rs. {product.price.toLocaleString("en-PK")} each)</small> : null}</span><strong className={styles.price}>Rs. {(product.price * quantity).toLocaleString("en-PK")}</strong><div className={styles.availability}><span>✓</span> Availability: &nbsp;In Stock</div><div className={styles.quantity}><b>Quantity:</b><div><button onClick={() => setQuantity((n) => Math.max(1, n - 1))} aria-label="Decrease quantity">−</button><span>{quantity}</span><button onClick={() => setQuantity((n) => n + 1)} aria-label="Increase quantity">+</button></div></div><button className={styles.addButton} onClick={() => addToCart()}>🛒 &nbsp; Add to Cart</button><button className={`${styles.wishButton} ${wishlisted ? styles.wished : ""}`} onClick={() => { setWishlisted(!wishlisted); setNotice(wishlisted ? "Removed from your wishlist." : "Added to your wishlist."); }}>{wishlisted ? "♥" : "♡"} &nbsp; {wishlisted ? "Added to Wishlist" : "Add to Wishlist"}</button>{items.length > 0 && <small className={styles.cartStatus}>Cart: {items.reduce((total, item) => total + item.quantity, 0)} items</small>}</aside>
    </section>
    {notice && <div className={styles.notice} role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
    <section className={styles.information}>
      <div className={styles.tabBar} role="tablist">{tabs.map((name, index) => <button key={name} className={tab === name ? styles.selectedTab : ""} role="tab" aria-selected={tab === name} onClick={() => setTab(name)}><span>{["♧", "☷", "♧", "☆"][index]}</span>{name}{name === "Reviews" ? ` (${product.reviews})` : ""}</button>)}</div>
      <div className={styles.panel} role="tabpanel">
        {tab === "Description" && <><div><h2>Product Description</h2><p>{product.description} This carefully selected item is suitable for personal use, study, and as a meaningful gift.</p></div><div className={styles.keyFeatures}><h2>Key Features:</h2>{product.features.map((item) => <p key={item}><b>✓</b>{item}</p>)}</div></>}
        {tab === "Specifications" && <div className={styles.specs}><h2>Product Specifications</h2>{[["Category", product.category], ["Script / Style", "Uthmani Arabic script"], ["Cover", "Premium hardcover"], ["Availability", "In stock"], ["SKU", `UIH-${slug.toUpperCase().slice(0, 10)}`]].map(([key, value]) => <div key={key}><b>{key}</b><span>{value}</span></div>)}</div>}
        {tab === "Shipping & Delivery" && <div><h2>Shipping &amp; Delivery</h2><p>We deliver across Pakistan. Orders are carefully packed and usually dispatched within 1–2 business days. Delivery typically takes 3–5 business days, depending on your location. Shipping charges are calculated at checkout.</p><p>For help with an order, contact our support team at support@ummatithouse.com.</p></div>}
        {tab === "Reviews" && <div id="reviews"><h2>Customer Reviews</h2><div className={styles.reviewSummary}><strong>{product.rating} <span>★★★★★</span></strong><p>Based on {product.reviews} customer reviews</p></div><article className={styles.review}><b>★★★★★ &nbsp;A beautiful, clear edition</b><p>Excellent print quality and a lovely binding. It arrived safely packaged and is wonderful for daily reading.</p><small>Verified customer · Recently</small></article></div>}
      </div>
    </section>
    <section className={styles.related}><div className={styles.relatedHeading}><h2>Related Products</h2><a href="/islamic-shop">View All Products &nbsp;→</a></div><div className={styles.relatedGrid}>{related.map((item) => <article key={item.name}><a className={styles.relatedPhoto} href={`/islamic-shop/${item.slug}`}><img src={imageUrl(item.image, 360)} alt={item.name} /></a><div className={styles.relatedCopy}><a href={`/islamic-shop/${item.slug}`}><b>{item.name.split(" (")[0]}</b>{item.name.includes(" (") && <span>({item.name.split(" (")[1]}</span>}</a><strong>Rs. {item.price.toLocaleString("en-PK")}</strong><button onClick={() => addToCart(item.name, 1)}>🛒 &nbsp; Add to Cart</button></div></article>)}</div></section>
    {zoom && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Product image"><button onClick={() => setZoom(false)} aria-label="Close fullscreen image">×</button><img src={imageUrl(product.images[activeImage], 1600)} alt={product.title} /></div>}
  </main>;
}
