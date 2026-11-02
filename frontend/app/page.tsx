import { Navbar } from "./components/Navbar";
import { CategoryCards, CoursesSection, Footer, Hero, ProductsSection, Testimonials } from "./components/Sections";

export default function Home() {
  return <><Navbar /><main><Hero /><CategoryCards /><CoursesSection /><ProductsSection /><Testimonials /></main><Footer /></>;
}
