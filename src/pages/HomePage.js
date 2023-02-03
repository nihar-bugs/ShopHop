import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
