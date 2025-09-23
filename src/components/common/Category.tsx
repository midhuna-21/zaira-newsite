import Link from "next/link"

import businessPicture from "../../../public/images/business.webp"
import usPicture from "../../../public/images/us.webp"
import innovationPicture from "../../../public/images/innovation.webp"
import investingPictue from "../../../public/images/investing.webp"
import enterprisePictue from "../../../public/images/enterprise.webp"
import { buildInversePrefetchSegmentDataRoute } from "next/dist/server/lib/router-utils/build-prefetch-segment-data-route"

const Category = () => {
   return (
      <>
         <div className="widget-title mb-30">
            <h6 className="title">Hot Categories</h6>
            <div className="section-title-line"></div>
         </div>
         <div className="sidebar-categories">
            <ul className="list-wrap">
                   <li>
                  <Link href="/blog" style={{ backgroundImage: `url(${businessPicture.src})` }}>
                     <span className="post-tag post-tag-three">Business</span>
                     <span className="right-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                        </svg>
                     </span>
                  </Link>
               </li> 
               <li>
                  <Link href="/blog" style={{ backgroundImage: `url(${innovationPicture.src})` }}>
                     <span className="post-tag post-tag-three">         Innovation</span>
                     <span className="right-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                        </svg>
                     </span>
                  </Link>
               </li>
           
               <li>
                  <Link href="/blog" style={{ backgroundImage: `url(${enterprisePictue.src})` }}>
                     <span className="post-tag post-tag-three">Enterprise</span>
                     <span className="right-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                        </svg>
                     </span>
                  </Link>
               </li>
               <li>
                  <Link href="/blog" style={{ backgroundImage: `url(${investingPictue.src})` }}>
                     <span className="post-tag post-tag-three">Investing</span>
                     <span className="right-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                        </svg>
                     </span>
                  </Link>
               </li>
                <li>
                  <Link href="/blog" style={{ backgroundImage: `url(${usPicture.src})` }}>
                     <span className="post-tag post-tag-three">US </span>
                     <span className="right-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                           <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                        </svg>
                     </span>
                  </Link>
               </li>
            </ul>
         </div>
      </>
   )
}

export default Category
