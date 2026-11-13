export type ShopProduct = {
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

export const shopProducts: ShopProduct[] = [
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

export const productImage = (src: string) => src.startsWith("http") ? src : `https://images.unsplash.com/${src}?auto=format&fit=crop&w=700&q=85`;
export const productSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
