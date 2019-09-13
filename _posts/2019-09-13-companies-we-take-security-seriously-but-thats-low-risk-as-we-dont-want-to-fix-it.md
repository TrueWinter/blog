---
layout: post
title: >-
  Companies: “We take security seriously but that’s low risk as we don’t want to
  fix it”
---
As usual, I was looking for subdomain takeovers. And I found a few
so I reported them. For some I got a reply. But it seems like other
companies just don’t care.

As the title says, one company referred to a vulnerability as low
risk after reporting it to them. But more on that one later in the
post.

Note that names of companies and people have been redacted in this
post although I was considering naming them.

So first, let’s start with a subdomain takeover for a website
that doesn’t need much security as they have no login form and do
not handle any customer information. As I expected, no security
contact information anywhere on the website. So I email the one
address that I could find asking for a security email address.

![C1_1](/images/uploads/C1_1.png)

No reply. I try again.

![C1_2](/images/uploads/C1_2.png)

And I get a reply basically saying that the email was ignored as
they thought it was spam.

![C1_3](/images/uploads/C1_3.png)

As requested, I provided the information.

![C1_4](/images/uploads/C1_4.png)

And no reply. So I follow up with another email.

![C1_5](/images/uploads/C1_5.png)

No further reply and at the time of writing, the subdomain is
still up and could possibly be vulnerable to a subdomain takeover. To
be honest, I was partially expecting that they wouldn’t care about
it.

But would a bank care more about their security? The answer to
that is no. I reported the security vulnerability to the only
security contact I could find on their website.

![C2_1](/images/uploads/C2_1.png)

After that, I got an automated response saying that the security
email is only to report phishing and that there is another contact
for fraud. Basically, the bank cares only about phishing and fraud,
not about any security vulnerabilites.

![C2_2](/images/uploads/C2_2.png)

So I sent an email back.

![C2_3](/images/uploads/C2_3.png)

So I contacted them on Twitter. Not sure how they don’t
understand “security vulnerability” or “security issue” or
how they confuse those with fraud.

![C2_5](/images/uploads/C2_5.png)

![C2_6](/images/uploads/C2_6.png)

Yes, they did just ask me to forward emails containing full
details about a security vulnerability to the entire social media
team. Oh, and my phone number and ID NUMBER?! Why the f\*\*\* do they
need my ID number? After refusing to do this, I was again told to
contact the fraud hotline. I was quite annoyed before but at this
point I was getting frustrated that a bank doesn’t care about
security and can’t understand that I need to report a security **vulnerability**. 

![C2_7](/images/uploads/C2_7.png)

They then said that *they *provided
the security email first. I of course told them where I found this
email address.

![C2_8](/images/uploads/C2_8.png)

And they again asked for more
information (which I have already provided). After this, and refusing
to give me an email address, they provided me with the phone number
of their head office even after I made it clear when first sending a
message that I need an email address.

![C2_9](/images/uploads/C2_9.png)

And later another follow-up email.

![C2_4](/images/uploads/C2_4.png)

And, at the time of writing, the PoC is still online on one of the
bank subdomains.

And, the one that you have been waiting for, the company that
believes a subdomain takeover to be low risk.

![C3_1](/images/uploads/C3_1.png)

I actually got a reply.

![C3_2](/images/uploads/C3_2.png)

Wait what? They are aware of the issue. But then say “*based
on the conditions that need to be in place for this to be
successfully exploited,
and the low likelihood of a meaningful real-world attack occurring
within those conditions we”
*consider
it low risk. Someone
didn’t read my email… I have successfully exploited the issue and
created a demonstration of a real-world attack so I would consider it
at least a medium severity issue.

So
I ask them to reconsider.

![C3_3](/images/uploads/C3_3.png)

And
follow up a week later.

![C3_4](/images/uploads/C3_4.png)

And
I receive an email back from the stating that the PoC was down. This
was the last email I received from them.

![C3_5](/images/uploads/C3_5.png)

Around
the time of the email, there was a BGP routing issue that may have
affected their ability to access the PoC however I believe that the
issue here was a different one. All PoCs on my server run on
non-standard ports (not 80 and 443 but high ports such as 12345). I
believe that they didn’t use the port number when checking the
subdomain and this could’ve been a possible reason for them not
being able to access the PoC.

So
I sent some follow-up emails to try to get a response. Nothing
worked.

![C3_6](/images/uploads/C3_6.png)

![C3_7](/images/uploads/C3_7.png)

Then
on 25 July 2019, I sent them another email after finding another
security vulnerability that could increase the severity to high. I
wanted them to reply first before I sent the details. 

![C3_8](/images/uploads/C3_8.png)

But
that didn’t work. So I tried Twitter.

![C3_11](/images/uploads/C3_11.png)

They
really had to ask what department was handling my security
vulnerability report.

![C3_12](/images/uploads/C3_12.png)

Somehow
they forgot that I had a security vulnerability for their website,
not one of their products.

![C3_13](/images/uploads/C3_13.png)

So
I remind them that it’s a vulnerability in their website. And they
sent me a link where I can provide feedback about their website. At
this point, I’m not sure if the support agent can understand
English.

![C3_14](/images/uploads/C3_14.png)

And
after reminding them that it
was a security vulnerability, they sent a message back saying that
their Product Security Incident Response Team needs time to
investigate so they can fix this and provide fixes to customers
\(basically implying security fixes for products, not websites).

![C3_15](/images/uploads/C3_15.png)

On
29 August 2019, more than a month later, I gave them the full PoC
steps as
I wasn’t going to wait any longer. It was obvious that they didn’t
care.

![C3_9](/images/uploads/C3_9.png)

![C3_10](/images/uploads/C3_10.png)

So, in summary,
some companies that really should care about security don’t. Maybe for some companies, money is more important than fixing a security vulnerability reported by a security researcher that is not well known. 
