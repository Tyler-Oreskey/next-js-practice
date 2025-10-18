'use client';

export default function ArchiveError({ error }) {
    return <div id="error">
        <h2>Error occurred!</h2>
        <p>{error.message}</p>
    </div>
}