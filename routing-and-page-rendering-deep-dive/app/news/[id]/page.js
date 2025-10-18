import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export async function generateMetadata({ params }) {
    const { id } = params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === id);

    if (!newsItem) {
        notFound();
    }

    return {
        title: newsItem.title,
        description: newsItem.content,
    };
}

export default function NewsItem({ params }) {
    const { id } = params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === id);

    if (!newsItem) {
        notFound();
    }

    return <article className="news-article">
        <header>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>This is the detail page for news item "{id}".</p>
    </article>
}