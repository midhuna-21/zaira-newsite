import Image from "next/image"
import Link from "next/link"

import thumb_1 from "@/assets/img/blog/nw_banner_post01.jpg";
import thumb_2 from "@/assets/img/images/sidebar_img06.jpg";

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

const TopNewsSidebar: React.FC<Props> = ({ data }) => {
   return (
      <div className="col-xl-3 col-lg-8">
         <div className="sidebar-wrap-three">
            <div className="sidebar-widget-three">
               <div className="sidebar-newsletter sidebar-newsletter-two">
                  <div className="icon"><i className="flaticon-envelope"></i></div>
                  <h4 className="title">Daily Newsletter</h4>
                  <p>Get all the top stories from Blogs to keep track.</p>
                  <div className="sidebar-newsletter-form-two">
                     <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-grp">
                           <input type="text" placeholder="Enter your e-mail" />
                           <button type="submit" className="btn">Subscribe Now</button>
                        </div>
                        <div className="form-check">
                           <input type="checkbox" className="form-check-input" id="checkbox" />
                           <label htmlFor="checkbox">I agree to the terms & conditions</label>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="sidebar-widget-three">
               <div className="widget-title widget-title-three mb-20">
                  <div className="section-title-line"></div>
                  <h2 className="title">{data[0].category}</h2>
               </div>
               <div className="hot-post-wrap">
                  <div className="hot-post-item hot-post-item-two">
                     <div className="hot-post-thumb">
                        <Link
                           href={`/${data[0].category}/${data[0].slug}`}
                           title={data[0].slug}
                           className="block w-full"
                           style={{ color: "inherit" }}
                        ><Image src={data[0].image} alt={data[0].title} width={200} height={200} /></Link>
                     </div>
                     <div className="hot-post-content">
                        <p className="post-tag-four">Audit</p>
                        <h4 className="post-title">
                           <Link
                              href={`/${data[0].category}/${data[0].slug}`}
                              title={data[0].slug}
                              className="block w-full"
                              style={{ color: "inherit" }}
                           >
                              {data[0].title}
                           </Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{data[0].date}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item hot-post-item-two">
                     <div className="hot-post-content">
                        <p className="post-tag-four">{data[0].category}</p>
                        <h4 className="post-title">
                           <Link
                              href={`/${data[0].category}/${data[0].slug}`}
                              title={data[0].slug}
                              className="block w-full"
                              style={{ color: "inherit" }}
                           >
                              {data[0].title}
                           </Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{data[0].date}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item hot-post-item-two">
                     <div className="hot-post-content">
                        <p className="post-tag-four">{data[1].category}</p>
                        <h4 className="post-title"> <Link
                                    href={`/${data[1].category}/${data[1].slug}`}
                                    title={data[1].slug}
                                    className="block w-full"
                                    style={{ color: "inherit" }}
                                 >{data[1].title}</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{data[1].date}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <div className="sidebar-img">
                  <Link href="#">
                     <Image src={thumb_2} alt="" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TopNewsSidebar
