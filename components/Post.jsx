import React from "react";
import Link from "next/link";

function Post({ post }) {
  return (
    <div>
      <ul>
        <li>
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h3>{post.frontmatter.title}</h3>
            </a>
          </Link>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.type}</p>
        </li>
      </ul>
    </div>
  );
}

export default Post;
