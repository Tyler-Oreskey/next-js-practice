import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';

import ModalBackdrop from '@/components/modal-backdrop';

// this will intercept the /image route when opened as a modal
export default async function InterceptedImagePage({ params }) {
    const newsItem = await getNewsItem(params.id);

    if (!newsItem) {
        notFound();
    }

    return <>
        <ModalBackdrop />
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
    </>
}