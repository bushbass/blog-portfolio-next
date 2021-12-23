import React from "react";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import Project from "../../components/Project";

function ProjectsHome({ projects }) {
  return (
    <div>
      {" "}
      {console.log(projects)}
      {projects.map((project) => (
        <Project key={project.frontmatter.title} project={project} />
      ))}
    </div>
  );
}

export default ProjectsHome;

export async function getStaticProps() {
  // get files from the posts dir
  // filters out directories so we only get md files ignoring images directory
  // returns array of filenames
  const dirents = fs.readdirSync(path.join("projects"), {
    withFileTypes: true,
  });
  const filesNames = dirents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  // get slug and frontmatter from markdown files
  // maps over the array of filenames returned in the last step

  const projects = filesNames.map((filename) => {
    // create slug by removing extension from filename
    const slug = filename.replace(".md", "");

    // get frontmatter from each file
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    // use gray-matter to convert the markdown/frontmatter
    const { data: frontmatter } = matter(markdownWithMeta);
    // return projects array that has each post's slug and frontmatter
    return { slug, frontmatter };
  });

  // now send that projects array as a prop to be used in the page
  return {
    props: {
      projects: projects.sort(sortByDate),
    },
  };
  // btw, this whole thing could be from an API or something instead of .md files
}
