import Discount from "@/components/ui/Discount/Discount"
import HomePageSlider from "@/components/ui/HomePageSlider/HomePageSlider"
import Policy from "@/components/ui/Policy/Policy"
import Products from "@/components/ui/Products/page"

const HomePage = () => {
    return (
      <div>
       
        <HomePageSlider/>
        <Policy/>
        <Products/>
        <Discount/>
      </div>
    )
  }
  
  export default HomePage