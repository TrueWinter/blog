---
layout: post
title: Some Website Changes
---
If you looked at my website's [GitHub repository](https://github.com/NdT3Development/NdT3Development.github.io) you may have noticed that I have been a bit busy changing some things there. In this post, I will be explaining some of these changes.

First of all, I am no longer using [GitHub Pages](https://pages.github.com/) to host my website, I now use [Netlify](https://www.netlify.com).

I also added some new code for redirects. Now, instead of having to change JavaScript in one file, I just add a new file, build the site, and push to the GitHub repository. This was done for multiple reasons: 
- I did not want to have to look through a single file's JavaScript code to find, change or add more redirects.
- I also didn't like the old redirects, the URLs used to look like `https://ndt3.me/out?to=blog`. With the new redirect system, the URLs will look like `https://ndt3.me/r/blog`. That looks a lot better.

Reasons for the switch to Netlify:
- I wanted to be able to use NetlifyCMS to easily change or add new redirects.
- Netlify has support for SSL for custom domains. It may not be a feature that I will be using for now as I use CloudFlare for this but it may come in helpful in the future.


There may have been other changes that I missed out and I don't really know if these changes were worth a blog post but here it is.

