import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
    </Layout>
  );
}
