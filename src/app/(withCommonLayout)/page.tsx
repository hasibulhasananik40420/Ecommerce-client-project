import Discount from "@/components/ui/Discount/Discount";
import HomePageSlider from "@/components/ui/HomePageSlider/HomePageSlider";
import Policy from "@/components/ui/Policy/Policy";
import NewProducts from "@/components/ui/NewProducts/page";
import BestSellers from "@/components/ui/Best Sellers/page";
import BeautyPersonalCare from "@/components/ui/BeautyPersonalCare/page";

const HomePage = () => {
  return (
    <div>
      <HomePageSlider />
      <Policy />
      <NewProducts />
      <Discount />
      <BestSellers />
      <BeautyPersonalCare />
    </div>
  );
};

export default HomePage;
