import Banner from "./Banner";
import EditorPost from "./EditorPost";
import AdBannerTwo from "./AdBannerTwo";
import TopNews from "./TopNews";
import Newsletter from "./Newsletter";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderSix from "@/layouts/headers/HeaderSix";
import businessData from "../../public/data/business.json";
import usData from "../../public/data/us.json";
import enterpriseData from "../../public/data/enterprise.json";
import innovationData from "../../public/data/innovation.json";
import investingData from "../../public/data/investing.json";

const Home = () => {
   return (
      <>
         <HeaderSix />
         <Banner data={[businessData[2],innovationData[0],investingData[0],enterpriseData[0],usData[0],innovationData[1],enterpriseData[1],innovationData[9],businessData[9],usData[9],innovationData[6],usData[6],enterpriseData[6],enterpriseData[8],businessData[8],usData[8],investingData[9],investingData[1],enterpriseData[4],investingData[2]]}/>
         <AdBannerTwo />
         <EditorPost data={[businessData[0],innovationData[2],enterpriseData[2],usData[1]]}/>
         <TopNews data={[businessData[4],innovationData[4],investingData[4],enterpriseData[5],usData[14],usData[5],usData[12],usData[16],investingData[5],investingData[6],investingData[7]]}  />
         <Newsletter />
         <FooterThree />
      </>
   )
}

export default Home
