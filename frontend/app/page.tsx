import { CategoryCards, CoursesSection, Hero, ProductsSection, Testimonials } from "./components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryCards />
      <CoursesSection />
      <ProductsSection />
      <Testimonials />
    </main>
  );
}
