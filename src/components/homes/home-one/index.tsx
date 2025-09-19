import HeaderOne from "@/layouts/headers/HeaderOne"
import Feature from "./Feature"
import Newsletter from "./Newsletter"
import LatestPost from "./LatestPost"
import Category from "./Category"
import Recipe from "./Recipe"
import AdBanner from "./AdBanner"
import Healthy from "./Healthy"
import AdBannerTwo from "./AdBannerTwo"
import FooterOne from "@/layouts/footers/FooterOne"
import businessData from "../../../../public/data/business.json";
import usData from "../../../../public/data/business.json";
import enterpriseData from "../../../../public/data/business.json";
import innovationData from "../../../../public/data/business.json";
import investingData from "../../../../public/data/business.json";



const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <main className="fix">
            <Feature data={[businessData[0],innovationData[0],investingData[0],enterpriseData[0],usData[0],innovationData[1],enterpriseData[1],investingData[1],usData[1],businessData[1]]}/>
            <Newsletter />
          
            <LatestPost data={[businessData[2],innovationData[2],investingData[2]]}/>
            <Category />
          
            <Recipe data={[businessData[4],innovationData[4],investingData[4],enterpriseData[4],usData[4],innovationData[5],enterpriseData[5],investingData[5],usData[5],businessData[5]]}/>
            <AdBanner />
          
            <Healthy data={[businessData[6],innovationData[6],investingData[6],enterpriseData[6],usData[6],innovationData[7],enterpriseData[7],investingData[7],usData[7],businessData[7]]}/>
            <AdBannerTwo />
         </main>
         <FooterOne style={true} style_2={false} />
      </>
   )
}

export default HomeOne
