import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogDetailsArea from "../../../components/BlogDetailsArea"
import businessData from '../../../../public/data/business.json';
import usData from '../../../../public/data/us.json';
import innovationData from '../../../../public/data/innovation.json';
import investingData from '../../../../public/data/investing.json';
import enterpriseData from '../../../../public/data/enterprise.json';
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderSix from "@/layouts/headers/HeaderSix";

export async function generateStaticParams() {
    const allData = [
        { category: 'business', articles: businessData },
        { category: 'us', articles: usData },
        { category: 'innovation', articles: innovationData },
        { category: 'investing', articles: investingData },
        { category: 'enterprise', articles: enterpriseData }
    ];

    const params = allData.flatMap(({ category, articles }) =>
        articles.map((article) => ({
            category,
            slug: article.slug,
        }))
    );

    return params;
}


interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
}

interface DetailPageProps {
    params: Promise<{ category: string, slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
    business: businessData,
    us: usData,
    innovation: innovationData,
    investing: investingData,
    enterprise: enterpriseData
};



export default async function DetailPage({ params }: DetailPageProps) {

    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

    const article = data.find(item => item.slug === slug);

    if (!article) {
        return <div className="p-4">No article found for slug {slug}</div>;
    }

    const otherArticles = data.filter(item => item.slug !== slug);

    return (
        <>
             <HeaderSix />
            <main className="fix">
                {/* <Breadcrumbs page={} style={true} /> */}
                <Breadcrumbs page={data[0].category} title={data[0].title} style={false} />
                <BlogDetailsArea style={false} data={article} otherArticles={otherArticles} />
            </main>
            <FooterThree />
        </>
    )
}

