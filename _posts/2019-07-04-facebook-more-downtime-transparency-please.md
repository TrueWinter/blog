---
layout: post
title: 'Facebook, More Downtime Transparency Please'
---
Facebook, Instagram
and WhatsApp were having issues yesterday (3 June 2019). While I can
understand big companies having small issues as their infrastructure
is massive and quite difficult to manage, the one thing that annoyed
me the most is the lack of transparency into the downtime.

**All times in this
post are in SAST (South African Standard Time; GMT\+2).**

To more easily explain this, I will use the recent downtime of
Cloudflare as an example. At 3:42 PM on 2 July 2019, they started
experiencing issues which led to a global outage. Within 10 minutes,
they posted a notice on their status page
\([https://www.cloudflarestatus.com/incidents/tx4pgxs6zxdr](https://www.cloudflarestatus.com/incidents/tx4pgxs6zxdr))
saying that they were aware of the issue and are investigating. About
23 minutes later, they updated the status page again, this time
saying that they have implemented a fix and are monitoring. 35
minutes later, another update on the status page with a brief
description of the cause. 7 minutes after this, they marked this as
resolved. Later that day, they posted on their blog with more details
\([https://blog.cloudflare.com/cloudflare-outage/](https://blog.cloudflare.com/cloudflare-outage/)).
At 10:09 PM, they updated this post with more information. They
identified the root cause of the issue as a bad software deploy where
proper procedures for deploying were not followed properly leading to
a global outage instead of a localised one. They provided more
information into the exact cause and said that there was a “regular
expression that caused CPU to spike to 100%”. They also provided
information about their standard deploying procedure which should’ve
prevented a global outage and as usual, said that they will make
changes to prevent an issue like this happening again.

Cloudflare is one of
the few companies that I use the services of that are not afraid to
admit when they have messed up and provide transparency into
downtime. This was a perfect example of this.

However not all
companies provide this much transparency into downtime. Facebook
\(along with the Facebook owned Instagram and WhatsApp) had issues on
3 July. At this time, I am not aware of a public status page for
Instagram which would allow users to check the status of their
systems and allow Instagram to keep users updated if there are
issues.

Around 2:00 PM,
Instagram started having issues. While trying to use the app, only
old images would load and no new posts or stories would load. I also
tried to access an image from their CDN and got a “5xx server
error” message instead of the image (which loads fine now, after
the outage).

At 6:15 PM, they
Tweeted this:

![Instagram Downtime](/images/uploads/2019-07-04_15-50.png)

It shouldn’t take
4 hours to say “we are aware of the issue”. The next day (4 July)
at 1:45 AM, they Tweeted this:

![Instagram Downtime](/images/uploads/2019-07-04_16-00.png)

Well it’s nice to
know that you are back online after almost 12 hours of downtime. But
what happened?

After a bit of
research, I found this article:
[https://edition.cnn.com/2019/07/03/tech/facebook-instagram-not-working-trnd/index.html](https://edition.cnn.com/2019/07/03/tech/facebook-instagram-not-working-trnd/index.html).

A Facebook
spokesperson said, "Earlier today, some people and businesses
experienced trouble uploading or sending images, videos and other
files on our apps".

We already know of
the issues, but what caused them?

"During one of
our routine maintenance operations, we triggered an issue that is
making it difficult for some people to upload or send photos and
videos"

“We triggered an
issue in a maintenance operation” is as much transparency as
Facebook is willing to give into the downtime.

There is no way to
guarantee 100% uptime (and I can understand that, some of my servers do go down sometimes), but if your systems do go down, keep users
updated. If you messed up, don’t be afraid to say it and include
more details about what went wrong and how you will prevent this. But
after 12 hours downtime with almost no transparency, I would’ve
expected at least a bit more detail such as what happened during the
maintenance operation, what is the root cause of the issue, etc. If
this was a service that I was paying for, and there was lack of
transparency, I would immediately consider switching.

Facebook, I think
you need to look at other companies such as Cloudflare who are very
transparent with the root cause of downtimes.
