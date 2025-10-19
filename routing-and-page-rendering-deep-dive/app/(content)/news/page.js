import Link from "next/link"
import Image from "next/image"
import NewsList from "@/components/news-list"

import { DUMMY_NEWS } from "@/dummy-news"

export default function News() {
    return <div>
        <h1>News page</h1>
        <NewsList news={DUMMY_NEWS} />
    </div>
}