"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"

import blogThumb_1 from "@/assets/img/blog/blog_details01.jpg"
import blogThumb_2 from "@/assets/img/blog/blog_details02.jpg"
import blogThumb_3 from "@/assets/img/blog/blog_details03.jpg"

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  author:string;

}

interface Props {
  article: NewsData;
}

const BlogDetailsContent = ({ article }: Props) => {

  const sentences = article.description.split(/(?<=[.!?])\s+/); 
const insertIndex = 1;

const firstPart = sentences.slice(0, insertIndex).join(" ");
const secondPart = sentences.slice(insertIndex).join(" ");

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="blog-details-content">
            <div className="blog-details-content-top">
               {/* <Link href="/blog" className="post-tag">{article?.tag ? article.tag : "Appitizer"}</Link> */}
               <h2 className="title">{article?.title}</h2>
               <div className="bd-content-inner">
                  <div className="blog-post-meta">
                     <ul className="list-wrap">
                        <li><i className="flaticon-user"></i>by<Link href="/author">{article.author}</Link></li>
                        <li><i className="flaticon-calendar"></i>{article.date}</li>
                        {/* <li><i className="flaticon-chat"></i><Link href="/blog-details">05 Comments</Link></li> */}
                        {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                     </ul>
                  </div>
                  <div className="blog-details-social">
                     <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="blog-details-thumb">
             <Image src={article.image} alt={article.title} width={200} height={200} /> 
            </div>
           <p className="first-info">{firstPart}</p>
            
          <blockquote>
               <p>{article.shortdescription}</p>
            </blockquote>
          
          <p>{secondPart}</p>
         </div>
         {/* video modal start */}
         <VideoPopup
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            videoId="Ml4XCF-JS0k"
         />
         {/* video modal end */}
      </>
   )
}

export default BlogDetailsContent
