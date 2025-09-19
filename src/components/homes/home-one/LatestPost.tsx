import Image from "next/image"
import Link from "next/link"
import LatestPostSidebar from "@/components/common/LatestPostSidebar";
import SectionTitle from "@/components/common/SectionTitle";

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

const LatestPost: React.FC<Props> = ({ data }) => {
   if (!data || data.length === 0) return null;

   const [firstPost, ...restPosts] = data;

   return (
      <section className="latest-post-area pt-60 pb-60">
         <div className="container">
            <div className="latest-post-inner-wrap">
               <div className="row">
                  <div className="col-70">
                     <SectionTitle title="Explore Latest Recipes" />
                     <div className="latest-post-item-wrap">
                        <div className="row">
                           {/* First Featured Post */}
                           <div className="col-66">
                              <div className="featured-post-item latest-post-item big-post">
                                 <div className="featured-post-thumb">
                                    <Link href={`/blog-details/${firstPost.slug}`}>
                                       <div style={{ position: "relative", width: "100%", height: 400 }}>
                                          <Image
                                             src={firstPost.image}
                                             alt={firstPost.title}
                                             fill
                                             sizes="(max-width: 768px) 100vw, 800px"
                                             style={{ objectFit: "cover" }}
                                          />
                                       </div>
                                    </Link>
                                 </div>
                                 <div className="featured-post-content">
                                    <Link href="/blog" className="post-tag">{firstPost.category}</Link>
                                    <h2 className="post-title bold-underline">
                                       <Link href={`/blog-details/${firstPost.slug}`}>{firstPost.title}</Link>
                                    </h2>
                                    <div className="blog-post-meta">
                                       <ul className="list-wrap">
                                          <li><i className="flaticon-user"></i>by <Link href="/author">Admin</Link></li>
                                          <li><i className="flaticon-calendar"></i>{firstPost.date}</li>
                                       </ul>
                                    </div>
                                    <p>{firstPost.shortdescription}</p>
                                 </div>
                              </div>
                           </div>

                           {/* Next 2 Posts */}
                           <div className="col-34">
                              <div className="latest-post-wrap">
                                 {restPosts.slice(0, 2).map((item) => (
                                    <div key={item.slug} className="featured-post-item latest-post-item small-post">
                                       <div className="featured-post-thumb">
                                          <Link href={`/blog-details/${item.slug}`}>
                                             <div style={{ position: "relative", width: "100%", height: 200 }}>
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
                                          <h2 className="post-title line-clamp-2">
                                             <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
                                          </h2>
                                          <div className="blog-post-meta">
                                             <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by <Link href="/author">Admin</Link></li>
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
                  </div>
                  <LatestPostSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default LatestPost;
