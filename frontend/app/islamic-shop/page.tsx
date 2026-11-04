"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import styles from "./shop.module.css";

type Product = {
  title: string;
  category: string;
  description: string;
  price: number;
  rating: string;
  reviews: number;
  image: string;
  badge?: string;
  stock?: boolean;
  viewDetails?: boolean;
};

const products: Product[] = [
  { title: "Premium Prayer Mat", category: "Prayer Mats", description: "Soft, comfortable & durable prayer mat with elegant design.", price: 6999, rating: "4.9", reviews: 128, image: "https://urbanrugs-kw.com/cdn/shop/files/R-M-26_1.jpg?v=1761086810&width=823", badge: "Bestseller" },
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

function productImage(src: string) {
  return src.startsWith("http") ? src : `https://images.unsplash.com/${src}?auto=format&fit=crop&w=700&q=85`;
}

function productSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const SearchIcon = () => (
  <Svg>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);

const BenefitIcons = {
  authentic: (
    <Svg>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  quality: (
    <Svg>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </Svg>
  ),
  checkout: (
    <Svg>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </Svg>
  ),
  delivery: (
    <Svg>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M14 17h2l4-5v5h-2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </Svg>
  ),
  range: (
    <Svg>
      <path d="M4 6h16" />
      <path d="M4 10h16" />
      <path d="M4 14h16" />
      <path d="M4 18h16" />
    </Svg>
  ),
  premium: (
    <Svg>
      <path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
    </Svg>
  ),
  payment: (
    <Svg>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </Svg>
  ),
  support: (
    <Svg>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </Svg>
  ),
  gift: (
    <Svg>
      <rect x="3" y="8" width="18" height="13" rx="1" />
      <path d="M12 8v13M3 12h18M12 8c-2-3-5-3-5-1s2 2 5 1c3 1 5 0 5-1s-3 0-5 1z" />
    </Svg>
  ),
};

const categories = [
  { name: "All Products", value: "All Products", icon: "⌂" },
  { name: "Qurans & Books", value: "Qurans & Books", icon: "▤" },
  { name: "Prayer Mats", value: "Prayer Mats", icon: "▧" },
  { name: "Tasbeeh", value: "Tasbeeh", icon: "◉" },
  { name: "Attar & Perfumes", value: "Attar & Perfumes", icon: "♧" },
  { name: "Islamic Clothing", value: "Islamic Clothing", icon: "♙" },
  { name: "Wall Art", value: "Wall Art", icon: "▧" },
  { name: "Gifts", value: "Gifts", icon: "♔" },
];

export default function IslamicShopPage() {
  const [category, setCategory] = useState("All Products");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const productsPerPage = 9;

  const filtered = useMemo(() => {
    const matches = products.filter(
      (product) =>
        (category === "All Products" || product.category === category) &&
        `${product.title} ${product.category} ${product.description}`.toLowerCase().includes(query.toLowerCase())
    );
    if (sort === "price-low") matches.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") matches.sort((a, b) => b.price - a.price);
    else if (sort === "rating") matches.sort((a, b) => Number(b.rating) - Number(a.rating));
    else if (sort === "name") matches.sort((a, b) => a.title.localeCompare(b.title));
    return matches;
  }, [category, query, sort]);

  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const visible = filtered.slice(startIndex, startIndex + productsPerPage);

  const changeCategory = (item: string) => {
    setCategory(item);
    setPage(1);
  };

  const changeSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const clearFilters = () => {
    setCategory("All Products");
    setQuery("");
    setPage(1);
    setSort("latest");
  };

  const addToCart = (title: string) => {
    if (cart.includes(title)) {
      setNotice(`${title} is already in your cart.`);
      return;
    }
    setCart([...cart, title]);
    setNotice(`${title} added to your cart · ${cart.length + 1} item${cart.length ? "s" : ""}`);
  };

  const benefits = [
    { icon: BenefitIcons.authentic, title: "Authentic Products", desc: "100% Islamic & Shariah-compliant items" },
    { icon: BenefitIcons.quality, title: "Quality Materials", desc: "Durable, premium & long-lasting" },
    { icon: BenefitIcons.checkout, title: "Secure Checkout", desc: "Safe & encrypted payment options" },
    { icon: BenefitIcons.delivery, title: "Fast Delivery", desc: "Reliable shipping across your region" },
  ];

  const bottomBenefits = [
    { icon: BenefitIcons.range, title: "Wide Product Range", desc: "Qurans, books, clothing, gifts and more" },
    { icon: BenefitIcons.premium, title: "Premium Quality", desc: "Carefully selected, durable & authentic" },
    { icon: BenefitIcons.payment, title: "Secure Payment", desc: "Multiple safe & trusted payment options" },
    { icon: BenefitIcons.support, title: "Customer Support", desc: "Friendly help when you need it" },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            &nbsp; › &nbsp;Islamic Shop
          </p>
          <h1>
            Islamic <em>Shop</em>
          </h1>
          <p className={styles.heroCopy}>
            Discover a wide range of authentic Islamic products including Qurans, Islamic books, prayer mats,
            tasbeeh, attar, clothing, wall art, and meaningful gift items.
          </p>
        </div>
      </section>

      <section className={styles.benefitsTop}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefitItem}>
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.listing}>
        <div className={styles.listingRow}>
          <aside className={styles.sidebar}>
            <div className={styles.catCard}>
              <div className={styles.catHead}>
                <h2>
                  <span className={styles.catHeadIcon}>
                    <Svg className={styles.iconMd}>
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </Svg>
                  </span>
                  Shop Categories
                </h2>
              </div>

              <div className={styles.catList}>
                {categories.map((item) => {
                  const isActive = category === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => changeCategory(item.value)}
                      aria-pressed={isActive}
                      className={`${styles.catBtn} ${isActive ? styles.catBtnActive : ""}`}
                    >
                      <span className={styles.catBtnLabel}>
                        <span className={styles.catIcon}>{item.icon}</span>
                        {item.name}
                      </span>
                      <span className={styles.catArrow} aria-hidden="true">
                        ›
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.certCard}>
              <div className={styles.certBlob} aria-hidden="true" />
              <div className={styles.certContent}>
                <span className={styles.certIcon}>{BenefitIcons.gift}</span>
                <h3>Gift Collection</h3>
                <p>Meaningful Islamic gifts for your loved ones.</p>
              </div>
            </div>
          </aside>

          <div className={styles.mainCol}>
            <div className={styles.toolbar}>
              <div className={styles.searchWrap}>
                <span className={styles.searchIcon} aria-hidden="true">
                  ⌕
                </span>
                <input
                  id="shop-search"
                  type="text"
                  value={query}
                  onChange={(e) => changeSearch(e.target.value)}
                  placeholder="Search products (e.g. Quran, Prayer Mat, Tasbeeh, Attar...)"
                  className={styles.searchInput}
                />
              </div>

              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className={styles.sortSelect}
                aria-label="Sort products"
              >
                <option value="latest">Sort By: Latest</option>
                <option value="rating">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            <div className={styles.resultsBar}>
              <p>
                Showing{" "}
                <strong>
                  {filtered.length === 0 ? 0 : startIndex + 1}
                  {" - "}
                  {Math.min(startIndex + productsPerPage, filtered.length)}
                </strong>{" "}
                of <strong>{filtered.length}</strong>{" "}
                <span className={styles.resultsLabel}>Products</span>
              </p>
              <button type="button" onClick={clearFilters} className={styles.clearBtn}>
                Clear Filters
              </button>
            </div>

            {notice && (
              <div className={styles.notice} role="status">
                {notice}
                <button type="button" onClick={() => setNotice("")} aria-label="Dismiss">
                  ×
                </button>
              </div>
            )}

            {visible.length > 0 ? (
              <div className={styles.productGrid}>
                {visible.map((product) => (
                  <article key={product.title} className={styles.productCard}>
                    <div className={styles.productImage}>
                      <img src={productImage(product.image)} alt={product.title} />
                      {product.badge && <span className={styles.badge}>{product.badge}</span>}
                      <span className={styles.categoryBadge}>{product.category}</span>
                    </div>

                    <div className={styles.productBody}>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>

                      <div className={styles.metaRow}>
                        <span className={styles.metaItem}>
                          <Svg className={styles.iconSm}>
                            <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                          </Svg>
                          {product.rating}
                        </span>
                        <span className={styles.metaItem}>
                          <Svg className={styles.iconSm}>
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </Svg>
                          {product.reviews} reviews
                        </span>
                      </div>

                      {product.stock && <span className={styles.stock}>● &nbsp;In Stock</span>}

                      <div className={styles.priceRow}>
                        <p className={styles.price}>
                          <span className={styles.priceCurrency}>PKR</span>{" "}
                          {product.price.toLocaleString("en-PK")}
                        </p>
                        {product.viewDetails ? (
                          <Link href={`/islamic-shop/${productSlug(product.title)}`} className={styles.detailsBtn}>
                            View Details
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <button type="button" className={styles.detailsBtn} onClick={() => addToCart(product.title)}>
                            {cart.includes(product.title) ? "✓ Added" : "Add to Cart"}
                            <span aria-hidden="true">{cart.includes(product.title) ? "" : "→"}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>
                  <SearchIcon />
                </span>
                <h3>No Products Found</h3>
                <p>Try another search or select a different category.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("All Products");
                    setQuery("");
                    setPage(1);
                  }}
                  className={styles.emptyBtn}
                >
                  View All Products
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={styles.pageBtn}
                  aria-label="Previous page"
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setPage(pageNum)}
                    className={page === pageNum ? styles.pageBtnActive : styles.pageBtn}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className={styles.pageBtn}
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.benefitsBottom}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsGrid}>
            {bottomBenefits.map((item) => (
              <div key={item.title} className={styles.benefitItem}>
                <span className={styles.benefitIconLight}>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
