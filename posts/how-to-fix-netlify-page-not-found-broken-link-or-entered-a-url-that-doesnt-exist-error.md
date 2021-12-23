---
title: 'How to fix Netlify "page not found, broken link or entered a URL that doesn''t exist" error'
date: "2019-12-06"
---

I made a simple React app with React router that worked while clicking the links in the nav, but not if you enter those URLs in the location bar.

![](/images/netlify-broken-link-300x137.png)

Netlify - Page Not Found  
Looks like you've followed a broken link or entered a URL that doesn't exist on this site.

TLDR - make a file in the public directory called "\_redirects" with this line in it

`/* /index.html 200`

## What's going on here?

Single page apps have one HTML file and everything is launched via Javascript from there. Routing is handled through the client, not the server so there is no file located at mySPA.com/about (for example). In a traditional HTML site /about would work if there was an index.html file in the /about directory. In an SPA however, something in the router code tells the browser what component/page to display when that route is asked for. So this file basically says "hey, anything you don't find ( the \* character) come back and look at the main index.html file, I've got router info there. Much success! (200)"

I found this page which says netlify only tries to serve the main index.html file [https://community.netlify.com/t/common-issue-i-ve-deployed-my-site-but-i-still-see-page-not-found/125](https://community.netlify.com/t/common-issue-i-ve-deployed-my-site-but-i-still-see-page-not-found/125)

This didn't really solve my problem but it got me looking around through the forums and I found something that said you need to use "redirects" to handle those pages (the ones that look folders with no index page)

First I found something about putting config information in a netlify.toml file in the root directory of the project. For me, putting the reccommened line in that file failed on build. I came across something that said to put the "\_redirects" in my root directory which also didn't do anything. I ended up doing a lot of clicking around before I got my solution.

Eventually I found a page on the netlify blog that said the "\_redirects" file needs to be in the build folder. [https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/](https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/)

My problem here was how my build folder is also in my .gitignore file so it never gets uploaded to github and my site is being built from my git repo! Finally, I realized I could just put the "\_redirects" file into the public directory (same place as the index.html file for the site)

I wrote this blog because it took me 20 minutes or more of searching to figure out how to implement 20 characters of code. I'm not complaining about netlify mind you, they are an amazing product. There are a million different combinations of frameworks and languages that they are trying to support so there may not be a simple answer to my particular case. I just had a hard time finding the short answer so I hope to save someone the time solving the same issue.

Thanks for reading!
