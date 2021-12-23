import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

function ProjectPage({ frontmatter: { title, date, type }, slug, content }) {
  return (
    <>
      <h1>project template</h1>

      <h3>{title}</h3>
      <p> {date}</p>
      <p> {type}</p>
      <p> {slug}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </>
  );
}

// we are creating pages based on our md files so we need to tell next what
// routes to actually make as well
// so, read the directory 'projects' which returns an array of filenames.
// map through files array which returns a new array of objects that each have the form
// {params:{slug: filename}} without the .md extensions
//  this uses 'slug' because we called the file [slug].jsx
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));
  const paths = files.map((filename) => ({
    params: { project: filename.replace(".md", "") },
  }));
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

// DON'T FORGET!!!  params: {project}  needs to match the term
// in the [filename].jsx !!!
export async function getStaticProps({ params: { project } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", project + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  console.log({ project });
  return { props: { frontmatter, project, content } };
}

export default ProjectPage;
