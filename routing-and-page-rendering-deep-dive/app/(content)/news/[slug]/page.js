import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getNewsItem } from '@/lib/news';

export async function generateMetadata({ params }) {
  const newsSlug = params.slug;
  const newsItem = getNewsItem(newsSlug);

  if (!newsItem) {
    return {
      title: 'News Item Not Found',
    };
  }

  return {
    title: newsItem.title,
    description: newsItem.content,
  };
}

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = getNewsItem(newsSlug)

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
