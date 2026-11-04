"use client";

import { useMemo, useState } from "react";
import styles from "./shop.module.css";

const categories = ["All Products", "Qurans & Books", "Prayer Mats", "Tasbeeh", "Attar & Perfumes", "Islamic Clothing", "Wall Art", "Gifts"];
const products = [
  { title: "Premium Prayer Mat", category: "Prayer Mats", description: "Soft, comfortable & durable prayer mat with elegant design.", price: 6999, rating: "4.9", reviews: 128, image: "photo-1609599006353-e629aaabfeae", badge: "Bestseller" },
  { title: "Wooden Tasbeeh (99 Beads)", category: "Tasbeeh", description: "High-quality wooden tasbeeh with smooth, natural beads.", price: 3599, rating: "4.8", reviews: 94, image: "photo-1603006905003-be475563bc59" },
  { title: "Islamic Books Set", category: "Qurans & Books", description: "A curated collection of essential Islamic books for every home.", price: 5299, rating: "4.9", reviews: 76, image: "photo-1544947950-fa07a98d237f", viewDetails: true },
  { title: "Attar - Oudh", category: "Attar & Perfumes", description: "Premium long-lasting Oudh attar with a rich, traditional fragrance.", price: 8499, rating: "4.7", reviews: 112, image: "photo-1594035910387-fea47794261f", badge: "Popular" },
  { title: "Elegant Abaya", category: "Islamic Clothing", description: "Modest, stylish and comfortable abaya for everyday wear.", price: 13999, rating: "4.9", reviews: 58, image: "https://images.pexels.com/photos/13791264/pexels-photo-13791264.jpeg?auto=compress&cs=tinysrgb&w=600", viewDetails: true },
  { title: "Arabic Calligraphy Wall Art", category: "Wall Art", description: "Beautiful Islamic calligraphy artwork to enhance your home decor.", price: 9999, rating: "4.8", reviews: 67, image: "photo-1579783902614-a3fb3927b6a5" },
  { title: "Quran (Uthmani Script)", category: "Qurans & Books", description: "Holy Quran with Uthmani script, clear print and premium binding.", price: 5599, rating: "5.0", reviews: 203, image: "photo-1609599006353-e629aaabfeae", badge: "Bestseller", viewDetails: true },
  { title: "Kids Prayer Set", category: "Prayer Mats", description: "Complete prayer set for kids (prayer mat, cap & tasbeeh).", price: 6499, rating: "4.9", reviews: 81, image: "https://www.mymodefa.com/cdn/shop/files/modefa-prayer-rug-kids-ramadan-gift-box-set-with-prayer-mat-blue-32595894337670.jpg?width=600", stock: true },
  { title: "Ramadan Gift Box", category: "Gifts", description: "A special gift box with selected Islamic items for Ramadan.", price: 11499, rating: "4.9", reviews: 46, image: "photo-1513883049090-d0b7439799bf", stock: true, viewDetails: true },
  { title: "Pocket Quran", category: "Qurans & Books", description: "A beautifully printed compact Quran for your daily journey.", price: 4199, rating: "4.8", reviews: 39, image: "photo-1544947950-fa07a98d237f" },
  { title: "Classic Prayer Mat", category: "Prayer Mats", description: "A timeless woven mat with a soft, supportive finish.", price: 5299, rating: "4.7", reviews: 52, image: "photo-1609599006353-e629aaabfeae" },
  { title: "Musk Attar Set", category: "Attar & Perfumes", description: "Three alcohol-free scents inspired by tradition.", price: 7599, rating: "4.8", reviews: 44, image: "photo-1594035910387-fea47794261f" },
];
const features = [
  ["✧", "Authentic Products", "100% Islamic & Shariah-compliant items"],
  ["▱", "Quality Materials", "Durable, premium & long-lasting"],
  ["♢", "Secure Checkout", "Safe & encrypted payment options"],
  ["♧", "Fast Delivery", "Reliable shipping across your region"],
];

export default function IslamicShopPage() {
  const [category, setCategory] = useState("All Products");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Latest");
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const filtered = useMemo(() => {
    const matches = products.filter((product) => (category === "All Products" || product.category === category) && `${product.title} ${product.category} ${product.description}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "Price: low to high") matches.sort((a, b) => a.price - b.price);
    if (sort === "Price: high to low") matches.sort((a, b) => b.price - a.price);
    if (sort === "Top rated") matches.sort((a, b) => Number(b.rating) - Number(a.rating));
    return matches;
  }, [category, query, sort]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / 9));
  const visible = filtered.slice((page - 1) * 9, page * 9);
  const selectCategory = (item: string) => { setCategory(item); setPage(1); };

  return <main className={styles.shopPage}>
    <section className={styles.hero} aria-labelledby="shop-title">
      <div className={styles.heroImage} />
      <div className={styles.heroShade} />
      <div className={styles.heroCopy}>
        <div className={styles.breadcrumb}><a href="/">⌂ &nbsp; Home</a><span>›</span><span>Islamic Shop</span></div>
        <h1 id="shop-title">Islamic <em>Shop</em></h1>
        <p>Discover a wide range of authentic Islamic products including Qurans, Islamic books, prayer mats, tasbeeh, attar, clothing, wall art, and meaningful gift items.</p>
      </div>
    </section>
    <section className={styles.features} aria-label="Shop benefits">{features.map(([icon, title, copy]) => <div className={styles.feature} key={title}><span className={styles.featureIcon}>{icon}</span><span><strong>{title}</strong><small>{copy}</small></span></div>)}</section>
    <section className={styles.catalog} aria-label="Shop products">
      <aside className={styles.sidebar}>
        <div className={styles.categoryBox}><h2>Shop Categories</h2>{categories.map((item, index) => <button className={`${styles.categoryButton} ${category === item ? styles.selected : ""}`} key={item} onClick={() => selectCategory(item)}><span className={styles.categoryIcon}>{["⌂", "▤", "▧", "◉", "♧", "♙", "▧", "♔"][index]}</span>{item}<span className={styles.categoryArrow}>{category === item ? "›" : ""}</span></button>)}</div>
        <div className={styles.giftCard}><div><span className={styles.giftEyebrow}>Thoughtful giving</span><h2>Gift Collection</h2><p>Meaningful Islamic gifts for your loved ones.</p><button onClick={() => selectCategory("Gifts")}>Explore Gifts <span>→</span></button></div><span className={styles.giftArt} aria-hidden="true">🎁</span></div>
      </aside>
      <div className={styles.productsArea}>
        <div className={styles.toolbar}><label className={styles.search}><span>⌕</span><input aria-label="Search products" placeholder="Search products (e.g. Quran, Prayer Mat, Tasbeeh, Attar...)" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} />{query && <button aria-label="Clear search" onClick={() => setQuery("")}>×</button>}</label><label className={styles.sort}>Sort By: <select value={sort} onChange={(event) => setSort(event.target.value)}><option>Latest</option><option>Top rated</option><option>Price: low to high</option><option>Price: high to low</option></select></label></div>
        <p className={styles.resultCount}>Showing <strong>{visible.length ? (page - 1) * 9 + 1 : 0}–{Math.min(page * 9, filtered.length)} of {filtered.length}</strong> Products</p>
        {notice && <div className={styles.notice} role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss">×</button></div>}
        {visible.length ? <div className={styles.productGrid}>{visible.map((product) => <article className={styles.productCard} key={product.title}><div className={styles.productPhoto}><img src={product.image.startsWith("http") ? product.image : `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=600&q=85`} alt={product.title} />{product.badge && <span className={styles.badge}>{product.badge}</span>}</div><div className={styles.productInfo}><span className={styles.pill}>{product.category}</span><h3>{product.title}</h3><p>{product.description}</p><div className={styles.priceRow}><strong>Rs. {product.price.toLocaleString("en-PK")}</strong><span className={styles.rating}>★★★★★ <small>({product.reviews})</small></span></div>{product.stock && <span className={styles.stock}>● &nbsp;In Stock</span>}<button className={styles.action} onClick={() => { if (product.viewDetails) setNotice(`Details for ${product.title} selected.`); else if (cart.includes(product.title)) setNotice(`${product.title} is already in your cart.`); else { setCart([...cart, product.title]); setNotice(`${product.title} added to your cart · ${cart.length + 1} item${cart.length ? "s" : ""}`); } }}>{product.viewDetails ? "View Details" : cart.includes(product.title) ? "✓ Added to Cart" : "🛒  Add to Cart"}</button></div></article>)}</div> : <div className={styles.empty}>No products found. Try another search or category.</div>}
        {filtered.length > 9 && <nav className={styles.pagination} aria-label="Product pages"><button aria-label="Previous page" disabled={page === 1} onClick={() => setPage(page - 1)}>‹</button>{Array.from({ length: pageCount }, (_, i) => <button key={i + 1} className={page === i + 1 ? styles.pageActive : ""} aria-current={page === i + 1 ? "page" : undefined} onClick={() => setPage(i + 1)}>{i + 1}</button>)}<button aria-label="Next page" disabled={page === pageCount} onClick={() => setPage(page + 1)}>›</button></nav>}
      </div>
    </section>
    <section className={styles.trustStrip}>{[["🛍", "Wide Product Range", "Qurans, books, clothing, gifts and more"], ["♧", "Premium Quality", "Carefully selected, durable & authentic"], ["▱", "Secure Payment", "Multiple safe & trusted payment options"], ["☏", "Customer Support", "Friendly help when you need it"]].map(([icon, title, copy]) => <div className={styles.trustItem} key={title}><span>{icon}</span><div><strong>{title}</strong><small>{copy}</small></div></div>)}</section>
  </main>;
}
