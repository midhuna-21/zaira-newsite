import Image from "next/image";
import Link from "next/link";
import bannerThumb_1 from "@/assets/img/blog/nw_banner_post03.jpg";
import bannerThumb_2 from "@/assets/img/blog/nw_banner_post01.jpg";
import bannerThumb_3 from "@/assets/img/blog/nw_banner_post02.jpg";
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
}

interface Props {
    data: NewsData[];
}

const Banner: React.FC<Props> = ({ data }) => {
    return (
        <section className="banner-post-area-five pt-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="news-banner-post-wrap">
                            <div className="row">
                                <div className="col-67 order-0 order-lg-2">
                                    <div className="banner-post-six">
                                        <div className="banner-post-thumb-six">
                                            <Link
                                                href={`/${data[0].category}/${data[0].slug}`}
                                                title={data[0].slug}
                                                className="block w-full"
                                                style={{ color: "inherit" }}
                                            >
                                                <Image
                                                    src={data[0].image}
                                                    alt={data[0].title}
                                                    width={200}
                                                    height={100}
                                                />
                                            </Link>
                                            {/* <Image
                                     src={data[0].image}
                                     alt={data[0].title}
                                     fill
                                     sizes="(max-width: 768px) 100vw, 400px"
                                     style={{ objectFit: "cover" }}
                                   /> */}

                                        </div>
                                        <div className="banner-post-content-six">
                                            <p
                                                className="post-tag-two">
                                                {data[0].category}
                                            </p>
                                            <h2 className="post-title bold-underline">
                                                <Link
                                                    href={`/${data[0].category}/${data[0].slug}`}
                                                    title={data[0].slug}
                                                    className="block w-full"
                                                    style={{ color: "inherit" }}
                                                >
                                                    {data[0].title}
                                                </Link>
                                            </h2>
                                            <div className="blog-post-meta">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <i className="flaticon-user"></i>
                                                        by
                                                        <span>
                                                            Admin
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-calendar"></i>
                                                        {data[0].date}
                                                    </li>
                                                    {/* <li><i className="flaticon-history"></i>20 Mins</li> */}
                                                </ul>
                                            </div>
                                            <p>{data[0].shortdescription}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-33">
                                    <div className="news-banner-small-post">

                                        <div className="banner-post-five">

                                            <div className="banner-post-thumb-five">
                                                <Link
                                                    href={`/${data[1].category}/${data[1].slug}`}
                                                    title={data[1].slug}
                                                    className="block w-full"
                                                    style={{ color: "inherit" }}
                                                >

                                                    <Image
                                                        src={data[1].image}
                                                        alt={data[1].title}
                                                        width={200}
                                                        height={100}
                                                    />
                                                </Link>

                                                {/* <Image src={bannerThumb_2} alt="" /> */}

                                            </div>
                                            <div className="banner-post-content-five">
                                                <p
                                                    className="post-tag-four">
                                                    {data[1].category}
                                                </p>
                                                <h2 className="post-title">
                                                    <Link
                                                        href={`/${data[1].category}/${data[1].slug}`}
                                                        title={data[1].slug}
                                                        className="block w-full"
                                                        style={{ color: "inherit" }}
                                                    >

                                                        {data[1].title}
                                                    </Link>
                                                </h2>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="flaticon-user"></i>
                                                            by
                                                            <span>
                                                                Admin
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-calendar"></i>
                                                            {data[1].date}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-post-five">
                                            <div className="banner-post-thumb-five">
                                                <Link
                                                    href={`/${data[2].category}/${data[2].slug}`}
                                                    title={data[2].slug}
                                                    className="block w-full"
                                                    style={{ color: "inherit" }}
                                                >
                                                    {/* <Image src={bannerThumb_3} alt="" /> */}
                                                    <Image
                                                        src={data[2].image}
                                                        alt={data[2].title}
                                                        width={200}
                                                        height={100}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="banner-post-content-five">
                                                <p
                                                    className="post-tag-four">
                                                    {data[2].category}
                                                </p>
                                                <h2 className="post-title">
                                                    <Link
                                                        href={`/${data[2].category}/${data[2].slug}`}
                                                        title={data[2].slug}
                                                        className="block w-full"
                                                        style={{ color: "inherit" }}
                                                    >
                                                        {data[2].title}
                                                    </Link>
                                                </h2>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="flaticon-user"></i>
                                                            by
                                                            <span>
                                                                Admin
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-calendar"></i>
                                                            {data[2].date}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AdBanner />
                        <PoliticsPost data={[data[3], data[4], data[5], data[6]]} />
                        <TodayPost data={[data[7], data[8], data[9], data[10]]} />
                    </div>
                    <BannerSidebar data={[data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20]]} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
