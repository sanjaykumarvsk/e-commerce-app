import Image from "next/image";
import styles from "./page.module.css";
import ProductCarousel from "./components/ProductCarousel";
import ProductListCarousel from "./components/ProductList";
import NewArrivalProductList from "./components/NewArrivalList";
import TopPicksList from "./components/TopPicksList";

export default function Home() {
  return (
    <div className={styles.page}>
        <ProductCarousel />
        <ProductListCarousel />
        <NewArrivalProductList />
        <TopPicksList />
    </div>
  );
}
