import Image from "next/image"
import Link from "next/link"

import comment_1 from "../../public/images/jenna-collins.webp";
import comment_2 from "../../public/images/ryan-caldwell.webp";

const BlogComment = () => {
   return (
      <div className="comments-wrap">
         <h3 className="comments-wrap-title">02 Comments</h3>
         <div className="latest-comments">
            <ul className="list-wrap">
               <li>
                  <div className="comments-box">
                     <div className="comments-avatar">
                        <Image src={comment_1} alt="img" />
                     </div>
                     <div className="comments-text">
                        <div className="avatar-name">
                           <h6 className="name">Jenna Collins</h6>
                           <span className="date">25 September, 2025</span>
                        </div>
                        <p>Thanks for the detailed coverage! Really helps me understand what’s going on</p>
                        {/* <Link href="#" className="reply-btn">Reply</Link> */}
                     </div>
                  </div>
                  <ul className="children">
                     <li>
                        <div className="comments-box">
                           <div className="comments-avatar">
                              <Image src={comment_2} alt="img" />
                           </div>
                           <div className="comments-text">
                              <div className="avatar-name">
                                 <h6 className="name">Ryan Caldwell</h6>
                                 <span className="date">25 September, 2025</span>
                              </div>
                              <p>This is a really well-written article. I appreciate how clearly it explains the topic and backs up the information with facts.</p>
                              {/* <Link href="#" className="reply-btn">Reply</Link> */}
                           </div>
                        </div>
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
         
      </div>
   )
}

export default BlogComment
