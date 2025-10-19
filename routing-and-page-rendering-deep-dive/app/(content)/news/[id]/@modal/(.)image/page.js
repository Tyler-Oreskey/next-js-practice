'use client';

import { notFound, useRouter } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';

// this will intercept the /image route when opened as a modal
export default function InterceptedImagePage({ params }) {
    const router = useRouter();

    const { id } = params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === id);

    if (!newsItem) {
        notFound();
    }

    return <>
        <div className="modal-backdrop" onClick={router.back}>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </div>
    </>
}