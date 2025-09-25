import Image from "next/image"
import Link from "next/link"

import avatarThumb_1 from "@/assets/img/images/avatar.png"

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  author:string;
  authorImage:string;
  role:string;
}

interface Props {
  article: NewsData;
}

const BlogAvatar:React.FC<Props> = ({article}) => {
   return (
      <div className="blog-avatar-wrap mb-50">
         <div className="blog-avatar-img">
            <Link href="#"><Image src={article.authorImage} alt={article.author} width={200} height={200} /></Link>
         </div>
         <div className="blog-avatar-info">
            {/* <span className="designation">
 By</span> */}
            <h4 className="name"><Link href="#">{article.author}</Link></h4>
            <p>{article.role}</p>
         </div>
      </div>
   )
}

export default BlogAvatar
