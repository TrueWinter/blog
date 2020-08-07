---
layout: post
title: My Software Releases
---
If you don't know, I create open source software mostly in Node.js. This article will be about the software that I have released as open source software giving a brief description of how they work. 

**Please note** that software released without a license will not be listed here as you should not be using these. They are not meant to be used either due to their bugs/security issues or because they were released for other reasons such as proof of concepts.

Before I do that, I have to say that: *I haven't posted in a while, simply because I forgot about this.*

### Let's start with some of the older ones:

**[My Discord Bot:](https://github.com/NdT3Development/DiscordBot)** This is a bot that I made for the chat application for gamers, [Discord](https://discordapp.com). It has quite a few features, including moderation commands, and a few public fun commands such as 8ball and reminder commands and even includes a dashboard. This bot is in active development.

**[NodeUpload](https://github.com/NdT3Development/NodeUpload):** A file uploader and server. This is a retry of my previous attempts which can still be found on my GitHub (these unsuccessful attempts are however unlicensed and you will need to contact me to use those but you can use NodeUpload as it is released with a license). Development on this has slowed down due to other projects and personal things.

**[Random Number Between](https://github.com/NdT3Development/nodejs-random-number-between) ([npm](https://www.npmjs.com/package/random-number-between)):** This is a really simple module that lets you easily generate an array of random numbers between specified numbers. An example of the code would be:
```js
var rand = randnum(1, 10, 5);
console.log(rand);
```
which would return an array containing 5 numbers between 1 and 10. This module contains only 15 lines of code.

**[NdT3Links](https://github.com/NdT3Development/NdT3Links):** This is a simple Node.js link shortener using [Knex.js](http://knexjs.org/) for creating database query strings and [sqlite3](https://www.npmjs.com/package/SQLite3) as the database.

**[CloudFlare DDNS](https://github.com/NdT3Development/CF-DDNS):** This will allow you to use CloudFlare as a DDNS. It will request an external website to get your IP address and update an A record on CloudFlare with the IP.

### Then there are some upcoming releases such as:

**NdT3Utils:** A utility program that includes some useful tools such as an easy way to make a post request. **NOTE:** This may not be released due to issues with the code with some utilities that can't easily be fixed.

**Status Page** *(Name not yet decided)*: After much searching for a Node.js open source status page for monitoring my (private) APIs, I have decided to attempt to create my own. Unfortunately, it isn't as easy as one might think. There are many issues that you will face if you try to make one of these, some of them not that easy to fix.

Do you have any ideas for open source software that I could make with Node.js? Please leave them in the comments and I may choose one of them as my next project.

Before I end off this article, I just want to say that I have social media accounts if you want to follow me on those.

**GitHub:** [NdT3Development](https://github.com/NdT3Development)

**Twitter:** [NdT3\_](https://twitter.com/NdT3_)

**Support Server on [Discord](https://discordapp.com)** *(Multiple links given, all go to the invite link)*:

[https://ndt3.me/r/discord](https://ndt3.me/r/discord) or
[https://l.ndt3.me/ndt3-discord](https://l.ndt3.me/ndt3-discord) or
[https://discord.gg/scHhZcK](https://discord.gg/scHhZcK)

I also accept donations on Patreon: [My Patreon Page](https://patreon.com/NdT3)






