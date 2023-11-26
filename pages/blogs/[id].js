import { Client } from '@notionhq/client';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import styles from '../../styles/blog_detail.module.css';
import { Fragment } from 'react';

// import bookmarkPlugin from "@notion-render/bookmark-plugin";
// import { NotionRenderer } from "@notion-render/client";
// import hljsPlugin from "@notion-render/hljs-plugin";
// import { notFound } from "next/navigation";
// import { Render } from '@9gustin/react-notion-render'
import { renderBlock } from '../../components/notion_renderer';


export default function BlogPage({ blog_data }) {
  // console.log('page_response', blog_data.page_response)
  // console.log('list_of_blocks', ...blog_data.list_of_blocks);
  // console.log(blog_data.list_of_blocks.length);

  // const blocks = fetchPageBlocks(blog_data.page_response.id);

  // const renderer = new NotionRenderer({
  //   client: notion,
  // });

  // renderer.use(hljsPlugin());
  // renderer.use(bookmarkPlugin());

  return (
    <>
        
        <Head>
            <title>Blog - {blog_data.page_response.properties.이름.title[0].plain_text}</title>
            <meta name="description" content="junbong jang's blog" />
        </Head>
        

      <div className={styles.PostDetailContainer}>
        <div className={styles.PostDetailCard}>
          <header>
            <Link href="/blog" type="button">
              <i className="fas fa-solid fa-chevron-left"></i>
              Back
            </Link>
            {/* <a target="_blank" rel="noreferrer">
              See on Github
              <i className="fas fa-solid fa-arrow-up-right-from-square"></i>
            </a> */}
          </header>
          <div>
            
            <h1>{blog_data.page_response.properties.이름.title[0].plain_text}</h1>
            
          </div>
          <footer>
            <span>
              <i className="fas fa-solid fa-calendar"></i>
              
              {/* <small>Last Edited Date: <Date dateString={blog_data.page_response.last_edited_time} /> </small> */}
              <small>Created Date: <Date dateString={blog_data.page_response.created_time} /></small>
            </span>
            {/* <span>
              <i className="fas fa-solid fa-comment"></i>
              {post.comments} Comments
            </span> */}
          </footer>
        </div>
        <div className={styles.PostDetailContent}>
          <div>
            {blog_data.list_of_blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            {/* <Render blocks={blog_data.list_of_blocks} emptyBlocks /> */}
          </div>
        </div>

      </div>

    </>
  );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response_blogs = await notion.databases.query({
        database_id: process.env.NOTION_DATABSE_ID,
    });

    const paths = response_blogs.results.map((blog) => {
        return {
          params: {
            id: blog.id
          },
        };
    });  // cannot pass other properties to params

    return {
        paths,
        fallback: false,
      };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response_blog = await notion.blocks.children.list({
        block_id: params.id,
    });


    let total_response_blog;
    if (response_blog.has_more) {  // If the response exceeds the 100 block limit of notion api 

      const response_blog2 = await notion.blocks.children.list({
        block_id: params.id,
        start_cursor: response_blog.next_cursor
      });

      total_response_blog = response_blog.results.concat(response_blog2.results);
    } 
    else {
      total_response_blog = response_blog.results;
    }


    const page_response = await notion.pages.retrieve({ page_id: params.id });

    const blog_data = {
      list_of_blocks: total_response_blog,
      page_response: page_response
    }
    return {
        props: {
            blog_data
        },
    };

}