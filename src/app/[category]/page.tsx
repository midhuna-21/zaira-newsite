import Breadcrumbs from "@/components/common/Breadcrumbs";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import BlogArea from "../../components/BlogArea";
import FooterNews from "@/components/common/FooterNews";
import businessData from "../../../public/data/business.json";
import usData from "../../../public/data/us.json";
import enterpriseData from "../../../public/data/enterprise.json";
import innovationData from "../../../public/data/innovation.json";
import investingData from "../../../public/data/investing.json";
import { Metadata } from "next";

interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
}

const allData: Record<string, NewsItem[]> = {
    business: businessData,
    us: usData,
    innovation: innovationData,
    investing: investingData,
    enterprise: enterpriseData,
};

export async function generateStaticParams() {
    return Object.keys(allData).map((category) => ({
        category,
    }));
}

// export async function generateMetadata({
//     params,
// }: {
//     params: Promise<{ category: string }>;
// }): Promise<Metadata> {
//     const { category } = await params;

//     const categoryMeta: Record<string, { title: string; description: string }> =
//         {
//             business: {
//                 title: "Business Updates, Finance & Market Trends – News",
//                 description:
//                     "Stay ahead with detailed coverage of business developments, stock markets, corporate affairs, startups, and smart investment ideas driving the global economy.",
//             },
//             us: {
//                 title: "US Latest News & Breaking Headlines – News",
//                 description:
//                     "Catch up on fresh stories and breaking updates from across the United States, including politics, economy, culture, and society.",
//             },
//             enterprise: {
//                 title: "Enterprise News & Industry Developments – News",
//                 description:
//                     "Gain insights into major companies, fast-growing sectors, and the latest innovations transforming industries worldwide.",
//             },
//             investing: {
//                 title: "Investment Insights & Market Trends – News",
//                 description:
//                     "Discover expert perspectives, market movements, portfolio tips, and global opportunities to make informed financial choices.",
//             },
//             innovation: {
//                 title: "Technology & Innovation News – News",
//                 description:
//                     "Track emerging technologies, AI breakthroughs, digital revolutions, and forward-thinking ideas shaping the future.",
//             },
//         };

//    //  const siteUrl = "";
//    //  const categoryUrl = `${siteUrl}/${category}`;
//    //  const meta = categoryMeta[category] || {
//    //      title: `${
//    //          category.charAt(0).toUpperCase() + category.slice(1)
//    //      } News – News`,
//    //      description: `Latest updates and breaking stories in ${category}.`,
//    //  };

//    //  const firstArticle = allData[category]?.[0];
//    //  const firstArticleImage = firstArticle?.image?.startsWith("http")
//    //      ? firstArticle.image
//    //      : `${siteUrl}${
//    //            firstArticle?.image || "logo of news site"
//    //        }`;

//    //  return {
//    //      title: meta.title,
//    //      description: meta.description,
//    //      alternates: { canonical: categoryUrl },
//    //      openGraph: {
//    //          title: meta.title,
//    //          description: meta.description,
//    //          url: categoryUrl,
//    //          siteName: "",
//    //          images: [
//    //              {
//    //                  url: firstArticleImage,
//    //                  width: 1200,
//    //                  height: 630,
//    //                  alt: `${category} news`,
//    //              },
//    //          ],
//    //          locale: "en_US",
//    //          type: "website",
//    //      },
//    //      twitter: {
//    //          card: "summary_large_image",
//    //          title: meta.title,
//    //          description: meta.description,
//    //          images: [firstArticleImage],
//    //          site: "@sitenametwitter",
//    //      },
//    //  };
// }

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;
    const data = allData[category];

    console.log(data,'dataa')
    if (!data) {
        return (
            <div className="container py-5">
                <h2>Category not found</h2>
            </div>
        );
    }

    return (
        <>
            <HeaderOne />
            <main className="fix">
              <Breadcrumbs page={data[0].category} style={false} />

                <BlogArea style={true} data={data}/>
                <FooterNews />
            </main>
            <FooterOne style={false} style_2={true} />
        </>
    );
}
