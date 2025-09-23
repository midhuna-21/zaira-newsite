"use client"
import home_6_data from "@/data/HomeSixData"
import Image from "next/image"
import Link from "next/link"
import VideoPopup from '@/modals/VideoPopup';
import { useState } from "react";

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

const TodayPost:React.FC<Props> = ({data}) => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="today-post-area pt-50">
        <div className="section-title-wrap">
          <div className="section-title section-title-four">
            <h2 className="title">Today’s Hot Spot</h2>
            <div className="section-title-line"></div>
          </div>
        </div>
        <div className="today-post-wrap">
          <div className="row gutter-40 justify-content-center">
          {data.slice(0, 3).map((item) => (
              <div key={item.slug} className="col-lg-4 col-md-6">
                <div className="banner-post-five banner-post-seven">
                  <div className="banner-post-thumb-five">
                    <Link href="/blog-details"><Image src={item.image} alt={item.title} width={200} height={200} /></Link>
                  
                  </div>
                  <div className="banner-post-content-five">
                    <Link href="blog" className="post-tag-four">{item.category}</Link>
                    <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                    <div className="blog-post-meta">
                      <ul className="list-wrap">
                        <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                        <li><i className="flaticon-calendar"></i>{item.date}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
  )
}

export default TodayPost
