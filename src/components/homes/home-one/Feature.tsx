"use client"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";
import React, { useRef } from "react";

const setting = {
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 1   
         }
      },
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 1
         }
      }
   ]
}

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

const Feature:React.FC<Props> = ({data}) => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (

      <section className="featured-post-area pt-60 pb-30">
         <div className="container">
            <div className="featured-post-wrap p-relative">
               <Slider {...setting} ref={sliderRef} className="row featured-post-active">
               {data.map((item) => (
                     <div key={item.slug} className="col-lg-3">
                        <div className="featured-post-item">
                           <div className="featured-post-thumb">
                              <Link href="/blog-details">
                              {/* <Image src={item.image} alt="" /> */}
                              <div style={{ position: "relative", width: "100%", height: 350 }}>
  <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="(max-width: 768px) 100vw, 400px"
    style={{ objectFit: "cover" }}
  />
</div>

                              </Link>
                           </div>
                           <div className="featured-post-content">
                              <Link href="/blog" className="post-tag">{item.category}</Link>
                              <h2 className="post-title line-clamp-2"><Link href="/blog-details">{item.title}</Link></h2>
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
               </Slider>
                  <button onClick={handlePrevClick} type="button" className="slick-prev-btn slick-arrow"><i className="flaticon-next"></i></button>
                  <button onClick={handleNextClick} type="button" className="slick-next-btn slick-arrow"><i className="flaticon-next"></i></button>
            </div>
         </div>
      </section>
   )
}

export default Feature
