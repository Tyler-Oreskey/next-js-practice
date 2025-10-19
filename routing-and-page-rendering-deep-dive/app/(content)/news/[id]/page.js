import Link from "next/link";

import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function NewsItem({ params }) {
    const { id } = params;
    const newsItem = await getNewsItem(id);

    if (!newsItem) {
        notFound();
    }

    return <article className="news-article">
        <header>
            <Link href={`/news/${newsItem.slug}/image`}>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </Link>
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>This is the detail page for news item "{id}".</p>
    </article>
}