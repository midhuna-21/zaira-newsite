import BlogDetailsContent from "./BlogArea"
import BlogAvatar from "./BlogAvatar"
import BlogPrevNext from "./BlogPrevNext"
import BlogComment from "./BlogComment"
import BlogForm from "@/components/forms/BlogForm"
import BlogSidebar from "../components/blogs/common-blog/BlogSidebar"


const BlogDetailsArea = ({ style, data,otherArticles}: any) => {
   console.log(data,'data')
   return (
      <section className="blog-details-area pt-60 pb-60">
         <div className="container">
            <div className="author-inner-wrap">
               <div className="row justify-content-center">
                  <div className={`col-70 ${style ? "order-0 order-xl-2" : ""}`}>
                     <div className="blog-details-wrap">
                        <BlogDetailsContent single_blog={data}/>
                        <BlogAvatar />
                        <BlogPrevNext otherArticles={[otherArticles[0],otherArticles[1]]}/>
                        <BlogComment />
                        <BlogForm />
                     </div>
                  </div>
                  <BlogSidebar otherArticles={[otherArticles[2],otherArticles[3],otherArticles[4],otherArticles[5]]}/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
