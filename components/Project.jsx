import React from "react";
import Link from "next/link";

function Project({ project }) {
  return (
    <div>
      <ul>
        <li>
          <Link href={`/projects/${project.slug}`}>
            <a>
              <h3>{project.frontmatter.title}</h3>
            </a>
          </Link>
          <p>{project.frontmatter.date}</p>
          <p>{project.frontmatter.type}</p>
        </li>
      </ul>
    </div>
  );
}

export default Project;
