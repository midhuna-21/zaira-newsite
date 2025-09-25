"use client"
import Category from "@/components/common/Category"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"
import Link from "next/link";

import sidebarThumb from "@/assets/img/blog/blog_rc_post.jpg";
import NewsletterSubscribe from "./NewsletterSubscribe";

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

const BlogSidebar: React.FC<Props> = ({ data }) => {
   return (
      <div className="col-30">
         <div className="sidebar-wrap">
            <div className="sidebar-widget">
               <div className="sidebar-search">
                  <form onSubmit={(e) => e.preventDefault()}>
                     <input type="text" placeholder="Search . . ." />
                     <button type="submit"><i className="flaticon-search"></i></button>
                  </form>
               </div>
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <Category />
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-25">
                  <h2 className="title">Subscribe & Followers</h2>
                  <div className="section-title-line"></div>
               </div>
               <div className="sidebar-social-wrap">
                  <SocialIcon />
               </div>
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-30">
                  <h6 className="title">Recent News</h6>
                  <div className="section-title-line"></div>
               </div>
               <div className="hot-post-wrap">
                  <div className="hot-post-item">
                     <div className="hot-post-thumb">
                        <Link
                           href={`/${data[0].category}/${data[0].slug}`}
                           title={data[0].slug}
                           className="block w-full"
                           style={{ color: "inherit" }}
                        ><Image src={data[0].image} alt={data[0].title} width={200} height={200} /></Link>
                     </div>
                     <div className="hot-post-content">
                        {/* <p className="post-tag">{data[0].category}</p> */}
                        <h4 className="post-title">
                           <Link
                              href={`/${data[0].category}/${data[0].slug}`}
                              title={data[0].slug}
                              className="block w-full"
                              style={{ color: "inherit" }}
                           >{data[0].title}</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{data[0].date}</li>
                              {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item">
                     <div className="hot-post-content">
                        {/* <p className="post-tag">{data[1].category}</p> */}
                        <h4 className="post-title"> <Link
                           href={`/${data[1].category}/${data[1].slug}`}
                           title={data[1].slug}
                           className="block w-full"
                           style={{ color: "inherit" }}
                        >{data[1].title}</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{data[1].date}</li>
                              {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item">
                     <div className="hot-post-content">
                        {/* <p className="post-tag">{data[2].category}</p> */}
                        <h4 className="post-title"> <Link
                           href={`/${data[2].category}/${data[2].slug}`}
                           title={data[2].slug}
                           className="block w-full"
                           style={{ color: "inherit" }}
                        >{data[2].title}</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{data[2].date}</li>
                              {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
           <NewsletterSubscribe/>
         </div>
      </div>
   )
}

export default BlogSidebar
