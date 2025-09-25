import Image from "next/image";
import Link from "next/link";

import politicThumb from "@/assets/img/blog/politics_post01.jpg";

interface NewsData {
   slug: string;
   title: string;
   category: string;
   shortdescription: string;
   description: string;
   date: string;
   image: string;
   author: string;

}

interface Props {
   data: NewsData[];
}

const PoliticsPost: React.FC<Props> = ({ data }) => {
   return (
      <section className="politics-post-area">
         <div className="section-title-wrap">
            <div className="section-title section-title-four">
               <h2 className="title">Politics</h2>
               <div className="section-title-line"></div>
            </div>
         </div>
         <div className="politics-post-wrap">
            <div className="row">
               <div className="col-69">
                  <div className="politics-post">
                     <div className="politics-post-thumb">
                        <Link
                           href={`/${data[0].category}/${data[0].slug}`}
                           title={data[0].slug}
                           className="block w-full"
                           style={{ color: "inherit" }}
                        ><Image src={data[0].image} alt={data[0].title} width={200} height={100} /></Link>
                     </div>
                     <div className="politics-post-content">
                        <p className="post-tag-four">{data[0].category}</p>
                        <h2 className="post-title line-clamp-2">     <Link
                           href={`/${data[0].category}/${data[0].slug}`}
                           title={data[0].slug}
                           className="block w-full"
                           style={{ color: "inherit" }}
                        >
                           {data[0].title}
                        </Link></h2>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-user"></i>by<span>{data[0].author}</span></li>
                              <li><i className="flaticon-calendar"></i>{data[0].date}</li>
                           </ul>
                        </div>
                        <p className="line-clamp-3">{data[0].shortdescription}</p>
                        <div className="view-all-btn">
                           <Link
                              href={`/${data[0].category}/${data[0].slug}`}
                              title={data[0].slug}
                              style={{ color: "inherit" }}
                              className="link-btn">Read More
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
               <div className="col-31">
                  <div className="politics-post-wrap-two">
                     {data.slice(1, 4).map((item, index) => (
                        <div key={index} className="politics-post-two">
                           <div className="politics-post-content-two">
                              <h2 className="post-title line-clamp-2">
                                 <Link
                                    href={`/${item.category}/${item.slug}`}
                                    title={item.slug}
                                    className="block w-full"
                                    style={{ color: "inherit" }}
                                 >{item.title}</Link>
                              </h2>
                              <div className="blog-post-meta">
                                 <ul className="list-wrap">
                                    <li>
                                       <i className="flaticon-calendar"></i>
                                       {item.date}
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PoliticsPost