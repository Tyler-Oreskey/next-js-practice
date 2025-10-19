import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';

// this page displays the fullscreen image normally and gets intercepted when opened as a modal
export default function ImagePage({ params }) {
    const { id } = params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === id);

    if (!newsItem) {
        notFound();
    }

    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
}