import Link from "next/link";

function TimePage({ time }) {
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <ul>
        <li>Current time: {currentTime}</li>
        <li>Last refresh time: {time}</li>
      </ul>

      <Link href="/">
        <h3>Go home &rarr;</h3>
      </Link>
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const time = new Date().toLocaleTimeString();

  return {
    props: {
      time,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
// export async function getStaticPaths() {
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// }

export default TimePage;
