"use client"
import inner_blog_data from "@/data/InnerBlogData"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogSidebar from "./BlogSidebar"

interface StyleType {
  style: boolean;
}
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

interface Props extends StyleType {
  data: NewsData[];
}

const BlogArea: React.FC<Props> = ({ style, data }) => {

  // All blog items
  const blog = data;

  // Pagination setup
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = blog.slice(itemOffset, endOffset); // main items
  const pageCount = Math.ceil(blog.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % blog.length;
    setItemOffset(newOffset);
  };

  // ✅ Take last 3 items for sidebar but ensure they’re not already shown in currentItems
  const currentSlugs = new Set(currentItems.map(i => i.slug));
  const sidebarItems = blog
    .filter(item => !currentSlugs.has(item.slug)) // remove duplicates from main items
    .slice(-3); // last 3 items from the rest

  return (
    <section className="blog-area pt-60 pb-60">
      <div className="container">
        <div className={`${style ? "author-inner-wrap" : "author-inner-wrap blog-inner-wrap"}`}>
          <div className="row justify-content-center">
            <div className={style ? "col-70" : "col-70 order-0 order-xl-2"}>
              <div className="weekly-post-item-wrap">
                {currentItems.map((item) => (
                  <div key={item.slug} className="weekly-post-item weekly-post-four">
                    <div className="weekly-post-thumb">
                      <Link
                        href={`/${item.category}/${item.slug}`}
                        title={item.slug}
                        className="block w-full"
                        style={{ color: "inherit" }}
                      >
                        <Image src={item.image} alt={item.title} width={200} height={200} />
                      </Link>
                    </div>
                    <div className="weekly-post-content">
                      <p className="post-tag">{item.category}</p>
                      <h2 className="post-title">
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
                            <i className="flaticon-user"></i> by{" "}
                            <span>{item.author}</span>
                          </li>
                          <li>
                            <i className="flaticon-calendar"></i>
                            {item.date}
                          </li>
                        </ul>
                      </div>
                      <p className="line-clamp-3">{item.shortdescription}</p>
                      <div className="view-all-btn">
                        <Link
                          href={`/${item.category}/${item.slug}`}
                          title={item.slug}
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
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-wrap mt-60">
                <nav aria-label="Page navigation example">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    renderOnZeroPageCount={null}
                    className="pagination list-wrap"
                  />
                </nav>
              </div>
            </div>

            <BlogSidebar data={sidebarItems} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogArea
