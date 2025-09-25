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
  
  const prevArticle = otherArticles[0];
  const nextArticle = otherArticles[1];

  if (!prevArticle && !nextArticle) return null;

  return (
    <div className="pev-next-post-wrap">
      <div className="row">
        {prevArticle && (
          <div className="col-md-6">
            <div className="post-item">
              <div className="thumb">
                <Link
                  href={`/${prevArticle.category}/${prevArticle.slug}`}
                  title={prevArticle.slug}
                  className="block w-full"
                  style={{ color: "inherit" }}
                >
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
                  <Link
                    href={`/${prevArticle.category}/${prevArticle.slug}`}
                    title={prevArticle.slug}
                    className="block w-full"
                    style={{ color: "inherit" }}
                  >
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
                <Link
                  href={`/${nextArticle.category}/${nextArticle.slug}`}
                  title={nextArticle.slug}
                  className="block w-full"
                  style={{ color: "inherit" }}
                >
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
                  <Link
                    href={`/${nextArticle.category}/${nextArticle.slug}`}
                    title={nextArticle.slug}
                    className="block w-full"
                    style={{ color: "inherit" }}
                  >
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
