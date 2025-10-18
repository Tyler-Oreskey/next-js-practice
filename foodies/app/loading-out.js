import classes from './loading.module.css';
// this is a loading component for all pages that fetch data. Next.js will automatically show this component when the page is loading.
export default function Loading() {
    return <p className={classes.loading}>Fetching data...</p>;
}