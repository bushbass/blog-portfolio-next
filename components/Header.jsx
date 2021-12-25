import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <p>I am the header</p>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/plain">
            <a>A plain page</a>
          </Link>
        </li>
        <li>
          <Link href="/withProps">
            <a>A page with simple props</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/withPropsFromAPI">
            <a>with props from api</a>
          </Link>
        </li>
        <li>
          <Link href="/withSSRPropsFromAPI">
            <a>SSR with props from api</a>
          </Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}

export default Header;
