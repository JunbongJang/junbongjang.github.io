import Head from 'next/head';
import { Client } from '@notionhq/client';
import Link from 'next/link';
import styles from '../styles/blog.module.css';

import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";


function formatText(text: string, limitLength = 50) {
  const textArr = text.split(" ")
  const newText = textArr.map((string, index) => {
      if (index < limitLength) return string
  }).filter(string => string !== undefined
  )
  return `${newText.toString().replaceAll(",", " ")}...`
}

export default function Blog({ blogs }) {

  // console.log('blogs', blogs);
  
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Junbong Jang's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.blog_container}>
        <div className={styles.blog_content}>

          <p></p>

          <h1 className={styles.title}>
            Embarrassing Blog
          </h1>

          <div className={styles.search_section}>
            <div >
              <span>Search Posts (Not implemented) </span>
              {/* <small>{postsCounter} total posts</small> */}
            </div>
            <input
              type="text"
              // onBlur={(e) => fetchPosts(e.target.value)}
              placeholder="Search a Post"
            />
          </div>

          <div className={styles.list_section}>
            {blogs &&
              blogs.map((book) => (
                <Link 
                  key={book.id}
                  href={{
                    pathname: `/blogs/${book.id}`,
                  }}
                  className={styles.card}
                >
                  <header>
                    <h3>{book.properties.이름.title[0].plain_text}</h3>
                    <span>{
                    formatDistanceToNow(new Date(book.created_time), {  // book.properties.생성일.date.start
                      locale: enUS,
                      addSuffix: true,
                    })
                    }</span>
                  </header>
                  <main>
                    {/* <p>{formatText(body, 80)}</p> */}
                  </main>
                </Link>
              ))}
          </div>

        </div>
        
        
      </main>

    </>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response_blogs = await notion.databases.query({
    database_id: process.env.NOTION_DATABSE_ID,
  });
  
  // const response_a_blog = await notion.blocks.children.list({
  //   block_id: response_blogs.results[0].id,
  // });

  
  return {
    props: {
      blogs: response_blogs.results,
      // first_blog: response_a_blog.results
    },
    revalidate: 1,
  };

}