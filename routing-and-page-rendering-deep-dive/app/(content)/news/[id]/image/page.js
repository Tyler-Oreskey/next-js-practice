import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';

// this page displays the fullscreen image normally and gets intercepted when opened as a modal
export default async function ImagePage({ params }) {
    const newsItem = await getNewsItem(params.id);

    if (!newsItem) {
        notFound();
    }

    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
}