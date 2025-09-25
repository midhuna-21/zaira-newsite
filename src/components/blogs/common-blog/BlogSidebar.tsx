"use client"
import Category from "@/components/common/Category"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"
import Link from "next/link";

import sidebarThumb from "@/assets/img/blog/blog_rc_post.jpg";

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
  otherArticles: NewsData[];
}

const BlogSidebar:React.FC<Props> = ({otherArticles}) => {
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
                        <Link href="/blog-details"><Image src={otherArticles[0].image} alt={otherArticles[0].title} width={200} height={200} /></Link>
                     </div>
                     <div className="hot-post-content">
                        {/* <Link href="/blog" className="post-tag">{otherArticles[0].category}</Link> */}
                        <h4 className="post-title">
                           <Link
                          href={`/${otherArticles[0].category}/${otherArticles[0].slug}`}
                          title={otherArticles[0].slug}
                          className="block w-full"
                          style={{ color: "inherit" }}
                        >{otherArticles[0].title}</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{otherArticles[0].date}</li>
                              {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item">
                     <div className="hot-post-content">
                        {/* <Link href="/blog" className="post-tag">{otherArticles[1].category}</Link> */}
                        <h4 className="post-title">
                           <Link
                          href={`/${otherArticles[1].category}/${otherArticles[1].slug}`}
                          title={otherArticles[1].slug}
                          className="block w-full"
                          style={{ color: "inherit" }}
                        >{otherArticles[1].title}</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{otherArticles[1].date}</li>
                              {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item">
                     <div className="hot-post-content">
                        {/* <Link href="/blog" className="post-tag">{otherArticles[2].category}</Link> */}
                        <h4 className="post-title"> <Link
                          href={`/${otherArticles[2].category}/${otherArticles[2].slug}`}
                          title={otherArticles[2].slug}
                          className="block w-full"
                          style={{ color: "inherit" }}
                        >{otherArticles[2].title}</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>{otherArticles[2].date}</li>
                              {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <div className="sidebar-newsletter">
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
         </div>
      </div>
   )
}

export default BlogSidebar
