"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./orders.module.css";

type Status = "Processing" | "Shipped" | "Delivered" | "Cancelled";
type Product = { name: string; description: string; image: string; quantity: number; price: number };
type Order = { id: string; date: string; status: Status; total: number; payment: string; address: string; eta: string; delivered?: string; products: Product[] };

const products: Product[] = [
  { name: "The Noble Qur'an (English Translation)", description: "Hardcover · English translation", image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=180&q=80", quantity: 1, price: 34.99 },
  { name: "Premium Prayer Mat", description: "Soft & durable · Emerald", image: "https://urbanrugs-kw.com/cdn/shop/files/R-M-26_1.jpg?v=1761086810&width=220", quantity: 1, price: 24.99 },
  { name: "Wooden Tasbeeh (99 Beads)", description: "High-quality · Natural wood", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=180&q=80", quantity: 1, price: 12.99 },
];
const orders: Order[] = [
  { id: "#UITH-10587", date: "Jan 18, 2025", status: "Delivered", total: 87.97, payment: "Credit Card (Visa)", address: "House 24, Street 6, Gulberg III, Lahore, Pakistan", eta: "Jan 20 – Jan 23, 2025", delivered: "Jan 22, 2025", products },
  { id: "#UITH-10586", date: "Jan 17, 2025", status: "Processing", total: 59.98, payment: "JazzCash", address: "Flat 8, Block B, Gulshan-e-Iqbal, Karachi, Pakistan", eta: "Jan 22 – Jan 25, 2025", products: [products[0], products[2]] },
  { id: "#UITH-10575", date: "Jan 14, 2025", status: "Shipped", total: 129.96, payment: "Bank Transfer", address: "Street 12, F-8/2, Islamabad, Pakistan", eta: "Jan 21 – Jan 24, 2025", products: [products[0], products[1], products[2], products[1]] },
  { id: "#UITH-10568", date: "Jan 10, 2025", status: "Cancelled", total: 34.99, payment: "Credit Card (Mastercard)", address: "Model Town, Lahore, Pakistan", eta: "Cancelled", products: [products[0]] },
  { id: "#UITH-10542", date: "Jan 06, 2025", status: "Delivered", total: 24.99, payment: "Cash on Delivery", address: "DHA Phase 5, Lahore, Pakistan", eta: "Jan 10 – Jan 12, 2025", delivered: "Jan 11, 2025", products: [products[1]] },
];
const tabs = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"] as const;
const counts: Record<string, number> = { "All Orders": 12, Processing: 2, Shipped: 1, Delivered: 8, Cancelled: 2 };
const nav = [ ["⌂", "Dashboard", "/profile"], ["♙", "My Profile", "/profile"], ["⌑", "My IT Courses", "/courses"], ["🛒", "My Orders", "/orders"], ["♡", "Wishlist", "/islamic-shop"], ["♧", "Addresses", "/profile#address"], ["♢", "Security", "/profile#security"] ];
const money = (value: number) => `$${value.toFixed(2)}`;

function Icon({ children }: { children: string }) { return <span className={styles.icon} aria-hidden="true">{children}</span>; }

export default function OrdersPage() {
  const [tab, setTab] = useState<string>("All Orders");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All Statuses");
  const [range, setRange] = useState("All Time");
  const [sort, setSort] = useState("Newest First");
  const [expanded, setExpanded] = useState("#UITH-10587");
  const [tracking, setTracking] = useState<Order | null>(null);
  const [notice, setNotice] = useState("");
  const filtered = useMemo(() => {
    const found = orders.filter((order) => (tab === "All Orders" || order.status === tab) && (status === "All Statuses" || order.status === status) && order.id.toLowerCase().includes(query.toLowerCase()) && (range !== "Last 30 Days" || order.date.includes("Jan")));
    return [...found].sort((a, b) => sort === "Oldest First" ? a.date.localeCompare(b.date) : sort === "Highest Amount" ? b.total - a.total : b.date.localeCompare(a.date));
  }, [tab, status, query, range, sort]);
  const toast = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(""), 3200); };
  const downloadInvoice = (order: Order) => {
    const text = `UMMAT IT HOUSE\nINVOICE ${order.id}\nOrder date: ${order.date}\nPayment: ${order.payment}\n\n${order.products.map((product) => `${product.name} x${product.quantity} — ${money(product.price)}`).join("\n")}\n\nTotal: ${money(order.total)}\nShip to: ${order.address}`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const link = document.createElement("a"); link.href = url; link.download = `invoice-${order.id.slice(1)}.txt`; link.click(); URL.revokeObjectURL(url);
    toast("Your sample invoice has been downloaded.");
  };
  return <main className={styles.page}>
    <section className={styles.hero}><div className={styles.heroInner}><p className={styles.breadcrumb}><Link href="/">Home</Link><span>›</span>Your Account</p><h1>My <em>Orders</em></h1><p className={styles.subtitle}>View your purchase history, track order progress,<br className={styles.desktopBreak}/> and manage your purchases.</p></div></section>
    <div className={styles.dashboard}>
      <aside className={styles.sidebar} aria-label="Account navigation">
        <div className={styles.userCard}><div className={styles.avatar}>♙</div><div><small>Assalamu Alaikum,</small><strong>Muhammad Ahmed</strong><span>Member since Apr 2024</span></div></div>
        <nav>{nav.map(([icon,label,href]) => <Link key={label} href={href} aria-current={label === "My Orders" ? "page" : undefined} className={`${styles.sideLink} ${label === "My Orders" ? styles.sideActive : ""}`}><span aria-hidden="true">{icon}</span>{label}{label === "My Orders" && <b>›</b>}</Link>)}<Link href="/login" className={`${styles.sideLink} ${styles.logout}`}><span aria-hidden="true">⇥</span>Logout</Link></nav>
      </aside>
      <div className={styles.content}>
        <section className={styles.stats} aria-label="Order summary">
          {[["▣","Total Orders","12","All your purchases"],["◇","Processing Orders","2","Currently being prepared"],["▱","Delivered Orders","8","Successfully delivered"],["↶","Cancelled / Returned","2","Cancelled or returned orders"]].map(([icon,label,value,caption]) => <article className={styles.stat} key={label}><span className={styles.statIcon}>{icon}</span><div><span>{label}</span><strong>{value}</strong><small>{caption}</small></div></article>)}
        </section>
        <section className={styles.orderPanel}>
          <div className={styles.tabs} role="tablist" aria-label="Filter orders">{tabs.map((item) => <button key={item} role="tab" aria-selected={tab === item} className={tab === item ? styles.tabActive : ""} onClick={() => setTab(item)}>{item} <span>({counts[item]})</span></button>)}</div>
          <div className={styles.filters}><label className={styles.search}>⌕<input aria-label="Search order number" placeholder="Search Order Number (e.g. #UITH-10587)" value={query} onChange={(event) => setQuery(event.target.value)}/></label><label>Status<select value={status} onChange={(event) => setStatus(event.target.value)}><option>All Statuses</option>{tabs.slice(1).map((item) => <option key={item}>{item}</option>)}</select></label><label>Date Range<select value={range} onChange={(event) => setRange(event.target.value)}><option>All Time</option><option>Last 30 Days</option></select></label><label>Sort By<select value={sort} onChange={(event) => setSort(event.target.value)}><option>Newest First</option><option>Oldest First</option><option>Highest Amount</option></select></label></div>
          <div className={styles.orders}>{filtered.map((order) => { const isOpen = expanded === order.id; return <article className={`${styles.orderCard} ${isOpen ? styles.open : ""}`} key={order.id}>
            <div className={styles.orderSummary}><div className={styles.orderId}><Icon>◇</Icon><strong>Order {order.id}</strong></div><div><small>Ordered on</small><strong>{order.date}</strong></div><div><small>Items</small><strong>{order.products.length} Items</strong></div><div><small>Total Amount</small><strong>{money(order.total)}</strong></div><div className={styles.payment}><small>Payment Method</small><strong>{order.payment}</strong></div><div><small>Order Status</small><span className={`${styles.badge} ${styles[order.status.toLowerCase()]}`}>{order.status === "Delivered" ? "✓" : order.status === "Cancelled" ? "×" : "◷"} &nbsp;{order.status}</span></div><button className={styles.expand} aria-label={`${isOpen ? "Collapse" : "View"} details for ${order.id}`} onClick={() => setExpanded(isOpen ? "" : order.id)}>{isOpen ? "⌃" : "⌄"}</button></div>
            {isOpen ? <div className={styles.details}><section className={styles.delivery}><div className={`${styles.deliveryState} ${styles[order.status.toLowerCase()]}`}><b>{order.status === "Delivered" ? "✓" : order.status === "Cancelled" ? "×" : "◷"}</b><span><strong>{order.status === "Delivered" ? "Delivered Successfully" : order.status === "Cancelled" ? "Order Cancelled" : order.status === "Shipped" ? "On the way" : "Order being prepared"}</strong><small>{order.delivered ? `Your order was delivered on ${order.delivered}.` : order.status === "Cancelled" ? "This order has been cancelled." : "We’ll keep you updated on its progress."}</small></span></div>{order.status !== "Cancelled" && <><p><b>▱</b><span><strong>{order.delivered ? "Delivery Date" : "Estimated Delivery"}</strong><small>{order.delivered ?? order.eta}</small></span></p><p><b>♧</b><span><strong>Shipping Address</strong><small>{order.address}</small></span></p></>}</section>
              <section className={styles.purchased}><h3>Purchased Items ({order.products.length})</h3>{order.products.map((product,index)=><div className={styles.product} key={`${product.name}-${index}`}><img src={product.image} alt=""/><span><strong>{product.name}</strong><small>{product.description} · {product.quantity} × {money(product.price)}</small></span><b>{money(product.price)}</b></div>)}</section>
              <div className={styles.actions}>{order.status !== "Cancelled" && <button className={styles.primaryAction} onClick={() => setTracking(order)}>♧ &nbsp; Track Order</button>}<button onClick={() => downloadInvoice(order)}>⇩ &nbsp; Download Invoice</button>{order.status !== "Cancelled" && <button onClick={() => toast("These items have been added to your basket.")}>⟳ &nbsp; Buy Again</button>}<button className={styles.mobileDetails} onClick={() => setExpanded("")}>Close Details</button></div>
            </div> : <div className={styles.compact}><div>{order.products.slice(0,3).map((product,index)=><img key={index} src={product.image} alt=""/>)}<span>View order summary</span></div><button onClick={() => setExpanded(order.id)}>View Details</button></div>}
          </article>; })}{filtered.length === 0 && <div className={styles.empty}><strong>No orders found</strong><span>Try changing your search or filters.</span><button onClick={() => { setQuery(""); setStatus("All Statuses"); setTab("All Orders"); }}>Clear filters</button></div>}</div>
        </section>
      </div>
    </div>
    <section className={styles.benefits}>{[["☏","Dedicated Support","Get help from our friendly team anytime."],["♢","Secure Orders","Your purchases are safe and fully protected."],["↶","Easy Returns","Hassle-free returns within 7 days."],["♧","Fast Delivery","Reliable and timely delivery to your doorstep."]].map(([icon,title,caption])=><div className={styles.benefit} key={title}><span>{icon}</span><div><strong>{title}</strong><small>{caption}</small></div></div>)}</section>
    {notice && <div role="status" className={styles.toast}>{notice}</div>}
    {tracking && <div className={styles.modalBackdrop} onMouseDown={(event) => { if(event.target === event.currentTarget) setTracking(null); }}><section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="track-title"><button className={styles.modalClose} onClick={() => setTracking(null)} aria-label="Close tracking details">×</button><span className={styles.modalIcon}>♧</span><h2 id="track-title">Track order {tracking.id}</h2><p>Here’s the latest progress for your order.</p><ol className={styles.timeline}><li className={styles.complete}><i>✓</i><span><strong>Order confirmed</strong><small>{tracking.date}</small></span></li><li className={tracking.status !== "Processing" ? styles.complete : ""}><i>{tracking.status !== "Processing" ? "✓" : "2"}</i><span><strong>Preparing your order</strong><small>We’re carefully packing your items.</small></span></li><li className={tracking.status === "Delivered" ? styles.complete : ""}><i>{tracking.status === "Delivered" ? "✓" : "3"}</i><span><strong>{tracking.status === "Delivered" ? "Delivered" : "On the way"}</strong><small>{tracking.delivered ?? tracking.eta}</small></span></li></ol><button className={styles.primaryAction} onClick={() => setTracking(null)}>Done</button></section></div>}
  </main>;
}
