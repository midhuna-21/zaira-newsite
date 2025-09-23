import Banner from "./Banner";
import EditorPost from "./EditorPost";
import AdBannerTwo from "./AdBannerTwo";
import TopNews from "./TopNews";
import Newsletter from "./Newsletter";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderSix from "@/layouts/headers/HeaderSix";
import businessData from "../../public/data/business.json";
import usData from "../../public/data/business.json";
import enterpriseData from "../../public/data/business.json";
import innovationData from "../../public/data/business.json";
import investingData from "../../public/data/business.json";

const Home = () => {
   return (
      <>
         <HeaderSix />
         <Banner data={[businessData[0],innovationData[0],investingData[0],enterpriseData[0],usData[0],innovationData[1],enterpriseData[1],investingData[1],usData[1],businessData[1],innovationData[6],usData[6],enterpriseData[6],investingData[6],businessData[6],usData[7],investingData[7],innovationData[7],enterpriseData[7],investingData[8],innovationData[8],enterpriseData[8],businessData[8],usData[8],investingData[9],innovationData[9],businessData[9],usData[9]]}/>
         <AdBannerTwo />
         <EditorPost data={[businessData[2],innovationData[2],investingData[2],enterpriseData[4]]}/>
         <TopNews data={[businessData[4],innovationData[4],investingData[4],enterpriseData[4],usData[4],innovationData[5],enterpriseData[5],investingData[5],usData[5],businessData[5]]}  />
         <Newsletter />
         <FooterThree />
      </>
   )
}

export default Home
