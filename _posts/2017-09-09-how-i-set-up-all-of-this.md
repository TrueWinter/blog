---
layout: post
title: How I Set Up All of This
---
This is my first post on this blog. I have decided that in this post, I will give more details about how I have set up my website and blog.

### *Some information in this article is outdated. I may make an updated version soon:*

#### - *I do not use GitHub Pages anymore for my website (https://ndt3.ml), I now use Netlify for it (This was done to be able to use NetlifyCMS to easily manage redirects and possibly update content if needed in the future.*

Firstly, all domains I use are free domains (I know, it’s unprofessional). This is to save money as I do not have much money to use for things like this.

All of my domains use CloudFlare as this gives security and has a nice user interface.

My development website ([https://ndt3.ml](https://ndt3.ml))
was made with Jekyll and is hosted on GitHub. This is the website I refer to when I say “my website”. This domain name does not host just a single website. It is used for multiple services (such as my [Bitly](https://bitly.com) link shortener at [https://l.ndt3.ml](https://l.ndt3.ml)) and testing server software. My web development website ([https://ndtweb.cf](https://ndtweb.cf)) which is no longer maintained due to not having access to the source code anymore is hosted on surge.sh.

You may have noticed that my website has a contact form. As you may know, static sites can’t process data in forms. For this, I use a virtual machine that was kindly set up for me to use. As this is not an actual server and relies on someone else’s server to be online all the time, there may be downtime that is out of my control.

This blog has its content hosted on GitHub but is served from [Netlify ](https://netlify.com). *Just trying something new…* To post on this blog, I use the [NetlifyCMS](https://www.netlifycms.org/). This allows me to easily post without having to worry about pushing to GitHub or writing in markdown.
