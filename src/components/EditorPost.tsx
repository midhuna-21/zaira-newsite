"use client"
import home_6_data from "@/data/HomeSixData"
import VideoPopup from "@/modals/VideoPopup"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import Slider from "react-slick";

const setting = {
   infinite: true,
   speed: 1000,
   slidesToShow: 4,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: false,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
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

const EditorPost:React.FC<Props> = ({data}) => {

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

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="editor-post-area-three">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title-wrap mb-30">
                        <div className="section-title section-title-four">
                           <h2 className="title">Editors&apos; Picks</h2>
                           <div className="editor-nav-two">
                              <button onClick={handlePrevClick} type="button" className="slick-prev-btn slick-arrow">
                                 <i className="fas fa-arrow-left"></i>
                              </button>
                              <button onClick={handleNextClick} type="button" className="slick-next-btn slick-arrow">
                                 <i className="fas fa-arrow-right"></i>
                              </button>
                           </div>
                        </div>
                        <div className="section-title-line"></div>
                     </div>
                  </div>
               </div>
               <Slider {...setting} ref={sliderRef} className="row gutter-40 editor-post-active-two">
                  {(data).map((item) => (
                     <div key={item.slug} className="col-lg-3">
                        <div className="editor-post-three">
                           <div className="editor-post-thumb-three">
                              <Link href="/blog-details"><Image src={item.image} alt={item.title} width={300} height={200} /></Link>
                                                        </div>
                           <div className="editor-post-content-three">
                              <Link href="/blog" className="post-tag-four">{item.category}</Link>
                              <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                    {/* <li><i className="flaticon-history"></i>{item.time}</li> */}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </section>
      </>
   )
}

export default EditorPost
