---
layout: post
title: Colour Based on IPv6 Addresses
---
I recently went through the process of getting an ASN and some IPv6 prefixes (see [as211869.net](https://as211869.net) for more info) and while waiting for emails from my transit providers, decided to read many IPv6-related blog posts.

One of which was a post by [Hampton Moore](https://hamptonmoore.com/) titled “[Dynamic Page Background Color by Encoding RGB into IPv6 Addresses](https://hamptonmoore.com/posts/ipv6-color/)”. Unfortunately, his demo was down at the time of writing, but I found his post to be quite interesting, and now that I have enough IPv6 space to do projects like these, decided to try to create a similar project.

*Note: Due to network migrations, the IPv6 prefix allocated to this project has changed. Some images in this post may not be up to date.*

But instead of just copying what he has done, I wanted to make my project different. While looking at the available space in a /64, I noticed that 2 hex colour codes could fit so wrote my code around having a user-set background and text colours. While writing the code for that, I also noticed that a /64 allows me to use the last 16 characters of an IPv6 address which, after taking into account the two hex colours, would leave me with 4 characters for something else.

I spent a few minutes coming up with ideas for those 4 characters and settled on having multiple text files and allowing the user to select a specific one, or a random one. For the next few hours, I looked for text to add to the project and at the time of writing, there are 10 text files.

At this point, you probably want to know how it all works. Below is the prefix allocated to this project:

2a0e:8f02:2151:2c1::/64

If we expand that, we get 2a0e:8f02:2151:02c1:0000:0000:0000:0000. Let’s look at the last 4 groups. The first 4 characters are for the text ID, allowing the user to select which text they’d like. If the selected ID doesn’t exist, a random text file will be chosen. The next 6 characters are for the background colour, and the final 6 are for the text colour.

![Project IPv6 Prefix](/images/uploads/colour-based-on-ipv6-addresses-EXCEL_seAOiSFpBk.png)

I have an iptables rule to redirect all requests to this prefix to a Node.js app which checks the hostname and changes the displayed page accordingly.

Here’s the opening lyrics to Bohemian Rhapsody in blue on a cyan background.

![Bohemian Rhapsody](/images/uploads/colour-based-on-ipv6-addresses-firefox_qDeb6MkJsS.png)

Want to see that for yourself? It’s available at [2a0e:8f02:2151:2c1:555:ff:ff00:ff](http://[2a0e:8f02:2151:2c1:555:ff:ff00:ff]). The background colour is #00ffff and text colour is #0000ff.

The source code for this project is available on GitHub at [https://github.com/AS211869/ipv6-colour](https://github.com/AS211869/ipv6-colour).



