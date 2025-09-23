import Image from "next/image";
import Link from "next/link";

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
  otherArticles: NewsData[];
}

const BlogPrevNext: React.FC<Props> = ({ otherArticles }) => {
  // Ensure we have at least two articles
  const prevArticle = otherArticles[0];
  const nextArticle = otherArticles[1];

  if (!prevArticle && !nextArticle) return null; // Nothing to render

  return (
    <div className="pev-next-post-wrap">
      <div className="row">
        {prevArticle && (
          <div className="col-md-6">
            <div className="post-item">
              <div className="thumb">
                <Link href={`/blog-details/${prevArticle.slug}`}>
                  <Image
                    src={prevArticle.image}
                    alt={prevArticle.title}
                    width={200}
                    height={150}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="content">
                <span>Previous Post</span>
                <h5 className="post-title">
                  <Link href={`/blog-details/${prevArticle.slug}`}>
                    {prevArticle.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        )}

        {nextArticle && (
          <div className="col-md-6">
            <div className="post-item next-post">
              <div className="thumb">
                <Link href={`/blog-details/${nextArticle.slug}`}>
                  <Image
                    src={nextArticle.image}
                    alt={nextArticle.title}
                    width={200}
                    height={150}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="content">
                <span>Next Post</span>
                <h5 className="post-title">
                  <Link href={`/blog-details/${nextArticle.slug}`}>
                    {nextArticle.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPrevNext;
