---
layout: post
title: Lenovo Says Subdomain Takeovers Are Low Risk
---
Some
companies just don’t care about security. I wrote about three of
these in my [last post](https://blog.ndt3.me/2019/09/13/companies-we-take-security-seriously-but-thats-low-risk-as-we-dont-want-to-fix-it). But in this post, I will be talking more about
one of the companies I wrote about in that post.

If you
have been following me on Twitter, you may have seen Tweets like
these:

![Twitter1](/images/uploads/lenovo1_Twitter1.png)

![Twitter2](/images/uploads/lenovo1_Twitter2.png)

![Twitter3](/images/uploads/lenovo1_Twitter3.png)

![Twitter4](/images/uploads/lenovo1_Twitter4.png)

![Twitter5](/images/uploads/lenovo1_Twitter5.png)

![Twitter6](/images/uploads/lenovo1_Twitter6.png)

![Twitter7](/images/uploads/lenovo1_Twitter7.png)

Or
these:

![Twitter8](/images/uploads/lenovo1_Twitter8.png)

![Twitter9](/images/uploads/lenovo1_Twitter9.png)

![Twitter10](/images/uploads/lenovo1_Twitter10.png)

![Twitter11](/images/uploads/lenovo1_Twitter11.png)

Yes, I
am referring to Lenovo’s security.

So I
found a subdomain takeover on Lenovo’s domain. The subdomain is
smartoffice.csw.lenovo.com and the domain it is pointed to is
smartoffice-csw-lenovo.com. And that domain was available for
registration so I bought it and pointed it to my PoC server. Note
that the domain is no longer pointed to my server as I am doing
public disclosure and don’t really want anyone to access the PoCs
or have my server IP address.

![DNS](/images/uploads/lenovo1_dns1.png)

At this
time, I thought it was just a normal subdomain takeover, a medium
severity vulnerability. So I reported it.

Note
that in the PoC URLs below, a non-standard port is used as there are
other PoCs and scripts running on the server.

![Email1](/images/uploads/lenovo1_Email1.png)

![Email2](/images/uploads/lenovo1_Email2.png)

They
are aware of the issue. But they feel that “based on the conditions
that need to be in place for this to be successfully exploited, and
the low likelihood of a meaningful real-world attack occurring within
those conditions, we have concluded that this is currently a low risk
for us as a security issue”. What? Lenovo, do you realise that I
have a “real-world attack” set up, just not in a malicious way.
And a subdomain takeover is not low risk. Other people in information
security also see the risk.

![Twitter12](/images/uploads/lenovo1_Twitter12.png)

![Twitter13](/images/uploads/lenovo1_Twitter13.png)

So I
ask them to reconsider.

![Email3](/images/uploads/lenovo1_Email3.png)

![Email4](/images/uploads/lenovo1_Email4.png)

And
they email back for the last time saying that the PoC is not
accessible. At the time, there was networking issues which may have
affected the PoC server. But I believe that the issue here was that
they used the wrong URL to try to access the PoC (I think they tried
[http://smartoffice.csw.lenovo.com](http://smartoffice.csw.lenovo.com/)
instead of
[http://smartoffice.csw.lenovo.com:15580/subdomain-takeover-by-ndt3](http://smartoffice.csw.lenovo.com:15580/subdomain-takeover-by-ndt3)).

![Email5](/images/uploads/lenovo1_Email5.png)

I sent
them an email providing the PoC link again and later, another
follow-up email.

![Email6](/images/uploads/lenovo1_Email6.png)

![Email7](/images/uploads/lenovo1_Email7.png)

A few
weeks later, I found another issue which would turn this
vulnerability into a high severity one. As I was getting tired of not
getting a response, I asked for a reply before releasing the details.

![Email8](/images/uploads/lenovo1_Email8.png)

This
attempt at getting a reply failed so I had no choice but to provide
the details and hope they read the email.

![Email9](/images/uploads/lenovo1_Email9.png)

![Email10](/images/uploads/lenovo1_Email10.png)

Note
that in the above emails, the PoC URLs are now using SSL and are
running on a different port. The SSL allows me to access the secure
session cookies.

And
after a month of waiting, I sent them an email stating my intention
to publicly disclose this vulnerability due to their lack of replies.

![Email11](/images/uploads/lenovo1_Email11.png)

I also
contacted them on Twitter (DMs), however these screenshots have been left
out of this post and can be found in the previous post (Lenovo is the
third company I wrote about in that post).

Now,
for the demonstration of the vulnerability. Note that the screenshots
below may look slightly different than what you would normally see on
the Lenovo website as I am using a browser extension called Dark
Reader.

I
logged into my Lenovo account.

![PoC1](/images/uploads/lenovo1_PoC1.png)

![PoC2](/images/uploads/lenovo1_PoC2.png)

I got
my cookies from the PoC.

![PoC3](/images/uploads/lenovo1_PoC3.png)

Now, I
open an incognito browser window and go to the Lenovo login page.
Notice that I am not logged in.

![PoC4](/images/uploads/lenovo1_PoC4.png)

I open
the PoC page to set the cookies I copied from a previous step for the domain.

![PoC5](/images/uploads/lenovo1_PoC5.png)

And, in
the same incognito browser window, I am now logged in.

![PoC6](/images/uploads/lenovo1_PoC6.png)

So
how can this be used in a “meaningful
real-world attack”. Quite easily
actually.

* Injecting
  	an image or frame into a comment system on a blog vulnerable to XSS.
* Phishing
  	campaign

There
are other attack methods, not just the ones listed above.

So
Lenovo, if you are reading this, please fix this if you haven’t
already and while you are doing that, have a meeting with your
security team to discuss the manner in which this report was handled
so other people wanting to report a security vulnerability don’t
have to go through what I had to. Until then, don’t expect any
future reports from me.
