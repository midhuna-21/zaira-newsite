"use client"
import home_6_data from "@/data/HomeSixData";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react";
import AdBannerThree from "./AdBannerThree";
import SportArea from "./SportArea";
import TopNewsSidebar from "./TopNewsSidebar";

import thumb_1 from "@/assets/img/blog/top_news_post01.jpg"

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

const TopNews: React.FC<Props> = ({ data }) => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="top-news-post-area pt-70 pb-70">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-9">
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="section-title-wrap mb-30">
                              <div className="section-title section-title-four">
                                 <h2 className="title">World Top News</h2>
                              </div>
                              <div className="section-title-line"></div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <div className="top-news-post">
                              <div className="top-news-post-thumb">
                                 <Link
                                    href={`/${data[0].category}/${data[0].slug}`}
                                    title={data[0].slug}
                                    className="block w-full"
                                    style={{ color: "inherit" }}
                                 ><Image src={data[0].image} alt={data[0].title} width={200} height={200} /></Link>
                              </div>
                              <div className="top-news-post-content">
                                 <p className="post-tag-four">{data[0].category}</p>
                                 <h2 className="post-title bold-underline">
                                    <Link
                                       href={`/${data[0].category}/${data[0].slug}`}
                                       title={data[0].slug}
                                       className="block w-full"
                                       style={{ color: "inherit" }}
                                    >
                                       {data[0].title}
                                    </Link></h2>
                                 <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                       <li><i className="flaticon-calendar"></i>{data[0].category}</li>
                                       <li><i className="flaticon-history"></i>20 Mins</li>
                                    </ul>
                                 </div>
                                 <p>{data[0].shortdescription}</p>
                                 <div className="view-all-btn">
                                    <Link href="blog" className="link-btn">Read More
                                       <span className="svg-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                             <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                             <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                          </svg>
                                       </span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {data.slice(0, 3).map((item) => (
                           <div key={item.slug} className="col-lg-4">
                              <div className="horizontal-post-four">
                                 <div className="horizontal-post-thumb-four">
                                    <Link
                                       href={`/${item.category}/${item.slug}`}
                                       title={item.slug}
                                       className="block w-full"
                                       style={{ color: "inherit" }}
                                    ><Image src={item.image} alt={item.title} width={200} height={100} /></Link>
                                 </div>
                                 <div className="horizontal-post-content-four">
                                    <p className="post-tag-four">{item.category}</p>
                                    <h4 className="post-title line-clamp-2"> <Link
                                       href={`/${item.category}/${item.slug}`}
                                       title={item.slug}
                                       className="block w-full"
                                       style={{ color: "inherit" }}
                                    >{item.title}</Link></h4>
                                    <div className="blog-post-meta">
                                       <ul className="list-wrap">
                                          <li><i className="flaticon-calendar"></i>{item.date}</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                     <AdBannerThree />
                     <SportArea data={[data[4], data[5], data[6], data[7], data[8]]} />
                  </div>
                  <TopNewsSidebar data={[data[7], data[8], data[9], data[10], data[8]]} />
               </div>
            </div>
         </section>
      </>
   )
}

export default TopNews
