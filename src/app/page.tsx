import NavBar from "@/components/navBar/navBar";
import HomePage from "@/components/home/home";
import Interest from "@/components/interest/interest";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main> 
      <NavBar />
      <HomePage />
      <About />
      <Interest />
      <Contact />
    </main>
  );
}
