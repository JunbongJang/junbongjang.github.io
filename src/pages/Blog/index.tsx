import React, { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PersonInfo } from "./PersonInfo";
import { PostCard } from "./PostCard";
import {
  BlogContainer,
  BlogContent,
  ListSection,
  SearchSection,
} from "./styles";

import { HeaderContainer } from "../../components/Header/styles";
import techBg from "../../assets/tech-bg.svg";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  const [postsCounter, setPostsCounter] = useState(0);

  async function fetchPosts(query = "") {
    const response = await api.get(
      `search/issues?q=${
        query ? query : ""
      }%20repo:${"JunbongJang"}/contour-tracking`
    );
    setPosts(response.data.items);
    setPostsCounter(response.data.total_count);
  }
  
  console.log("posts", posts)
  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    
    <React.Fragment>
      <HeaderContainer>
        <img src={techBg} alt="GITHUB BLOG LOGO"></img>
      </HeaderContainer>
      
      <BlogContainer>
        <p style={{color: 'white'}}>Blog section is under construction</p>

        <PersonInfo></PersonInfo>
        <BlogContent>
          <SearchSection>
            <div>
              <span>Posts</span>
              <small>{postsCounter} posts</small>
            </div>
            <input
              type="text"
              onBlur={(e) => fetchPosts(e.target.value)}
              placeholder="Search a Post"
            />
          </SearchSection>
          <ListSection>
            {posts &&
              posts.map((post) => (
                <PostCard
                  key={`${post.title}-${post.number}`}
                  post={post}
                ></PostCard>
              ))}
          </ListSection>
        </BlogContent>
      </BlogContainer>
    </React.Fragment>
  );
}
