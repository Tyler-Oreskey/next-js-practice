// this is the layout which will output the parallel routes
// page.js will be available through the child prop

export default function NewsItemDetailsLayout({ children, modal }) {
    return <>
        {modal}
        {children}
    </>
}