import Link from "next/link"
import Image from "next/image"

import thumb_1 from "@/assets/img/blog/sports_post01.jpg";
import home_6_data from "@/data/HomeSixData";

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

const SportArea:React.FC<Props> = ({data}) => {
   return (
      <div className="sports-post-wrap">
         <div className="section-title-wrap mb-30">
            <div className="section-title section-title-four">
               <h2 className="title">{data[0].category}</h2>
            </div>
            <div className="section-title-line"></div>
         </div>
         <div className="row">
            <div className="col-lg-8">
               <div className="sports-post">
                  <div className="sports-post-thumb">
                  <Link href="/blog-details"><Image src={data[0].image} alt={data[0].title} width={200} height={200} /></Link>
                  </div>
                  <div className="sports-post-content">
                     <Link href="/blog" className="post-tag-four">{data[0].category}</Link>
                     <h4 className="post-title bold-underline"><Link href="/blog-details">{data[0].title}</Link></h4>
                     <div className="blog-post-meta">
                        <ul className="list-wrap">
                           <li><i className="flaticon-calendar"></i>{data[0].date}</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="sidebar-wrap sidebar-wrap-four">
                               {data.slice(1, 4).map((item) => (

                     <div key={item.slug} className="horizontal-post-four horizontal-post-five">
                        <div className="horizontal-post-thumb-four">
                           <Link href="/blog-details"><Image src={item.image} alt={item.title} width={200} height={200} /></Link>
                        </div>
                        <div className="horizontal-post-content-four">
                           <Link href="/blog" className="post-tag-four">{item.category}</Link>
                           <h4 className="post-title line-clamp-2"><Link href="/blog-details">{item.title}</Link></h4>
                           <div className="blog-post-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default SportArea
