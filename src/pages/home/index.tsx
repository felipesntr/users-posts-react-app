import { useEffect, useState } from "react";
import { findAllPosts } from "../../services/posts/posts.service";
import { Card } from "../../components/card";
import { Error } from "../../components/error";
import "./styles.scss";

export type Post_t = {
  id: string;
  title: string;
  body: string;
  company: string;
  author: string;
  user: any;
};

export const Home = () => {
  const [posts, setPosts] = useState<Post_t[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      const posts = await findAllPosts();
      if (posts.error) {
        setError(posts.error);
      } else {
        setPosts(posts.data);
      }
    })()
  }, []);

  return (
    <>
      <div className="home">
        <div className="header">
          <h1>All posts online</h1>
        </div>
        <div className="posts-container">
          {posts && error == "" ? (
            posts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                body={post.body}
                author={"by " + post.user.name}
                company={"from " + post.user.company.name + " company"}
              />
            ))
          ) : (
            <Error message={error} />
          )}
        </div>
      </div>
    </>
  );
};
