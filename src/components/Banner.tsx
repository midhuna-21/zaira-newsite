import Image from "next/image";
import Link from "next/link";
import AdBanner from "./AdBanner";
import PoliticsPost from "./PoliticsPost";
import TodayPost from "./TodayPost";
import BannerSidebar from "./BannerSidebar";

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
  data: NewsData[];
}

const Banner: React.FC<Props> = ({ data }) => {
  if (!data || data.length < 12) return null; 

  const mainPost = data[0];
  const smallPosts = data.slice(1, 3);
  const politicsPosts = data.slice(3, 7);
  const todayPosts = data.slice(7, 11);
  const sidebarPosts = data.slice(11);

  return (
    <section className="banner-post-area-five pt-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="news-banner-post-wrap">
              <div className="row">
                {/* Main Post */}
                <div className="col-67 order-0 order-lg-2">
                  <div className="banner-post-six">
                    <div className="banner-post-thumb-six">
                      <Link
                        href={`/${mainPost.category}/${mainPost.slug}`}
                        className="block w-full"
                        style={{ color: "inherit" }}
                      >
                        <Image
                          src={mainPost.image}
                          alt={mainPost.title}
                          width={200}
                          height={100}
                        />
                      </Link>
                    </div>
                    <div className="banner-post-content-six">
                      <p className="post-tag-two">{mainPost.category}</p>
                      <h2 className="post-title bold-underline">
                        <Link
                          href={`/${mainPost.category}/${mainPost.slug}`}
                          style={{ color: "inherit" }}
                        >
                          {mainPost.title}
                        </Link>
                      </h2>
                      <div className="blog-post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-user"></i> by{" "}
                            <span>{mainPost.author}</span>
                          </li>
                          <li>
                            <i className="flaticon-calendar"></i>
                            {mainPost.date}
                          </li>
                        </ul>
                      </div>
                      <p>{mainPost.shortdescription}</p>
                    </div>
                  </div>
                </div>

                {/* Small Posts */}
                <div className="col-33">
                  <div className="news-banner-small-post">
                    {smallPosts.map((post, i) => (
                      <div className="banner-post-five" key={i}>
                        <div className="banner-post-thumb-five">
                          <Link
                            href={`/${post.category}/${post.slug}`}
                            className="block w-full"
                            style={{ color: "inherit" }}
                          >
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={200}
                              height={100}
                            />
                          </Link>
                        </div>
                        <div className="banner-post-content-five">
                          <p className="post-tag-four">{post.category}</p>
                          <h2 className="post-title">
                            <Link
                              href={`/${post.category}/${post.slug}`}
                              style={{ color: "inherit" }}
                            >
                              {post.title}
                            </Link>
                          </h2>
                          <div className="blog-post-meta">
                            <ul className="list-wrap">
                               <li>
                                                        <i className="flaticon-user"></i>
                                                        by
                                                        <span>
                                                            {post.author}
                                                        </span>
                                                    </li>
                                                        
                              <li>
                                <i className="flaticon-calendar"></i>
                                {post.date}
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

            {/* <AdBanner /> */}
            <PoliticsPost data={politicsPosts} />
            <TodayPost data={todayPosts} />
          </div>

          <BannerSidebar data={sidebarPosts} />
        </div>
      </div>
    </section>
  );
};

export default Banner;