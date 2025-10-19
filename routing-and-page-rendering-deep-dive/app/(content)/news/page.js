import NewsList from "@/components/news-list"
import { getAllNews } from "@/lib/news";

export default async function News() {
    const news = await getAllNews();

    return <div>
        <h1>News page</h1>
        <NewsList news={news} />
    </div>
}