import Image from "next/image"
import StorySidebarOne from "./SidebarStoryOne"
import SidebarStoryTwo from "./SidebarStoryTwo"
import Link from "next/link"

import thumb_1 from "@/assets/img/images/sidebar_img05.jpg"

interface NewsData {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    date: string;
    image: string;
}

interface Props {
    data: NewsData[];
}
const BannerSidebar:React.FC<Props> = ({data}) => {
   return (
      <div className="col-xl-3 col-lg-8">
         <div className="sidebar-wrap-three">
            <StorySidebarOne data={[data[0],data[1],data[2],data[3]]}/>
            <div className="sidebar-widget-three">
               <div className="sidebar-img-two">
                  <Link href="#"><Image src={thumb_1} alt="" /></Link>
               </div>
            </div>
            <SidebarStoryTwo data={[data[4],data[5],data[6],data[7],data[8]]}/>
         </div>
      </div>
   )
}

export default BannerSidebar
