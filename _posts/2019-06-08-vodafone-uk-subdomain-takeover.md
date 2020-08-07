---
layout: post
title: Vodafone UK Subdomain Takeover
---
At the time of
posting, I have reported 9 security issues to companies all of them
being subdomain takeovers as this is what I am currently focusing on
due to it being an easy vulnerability for me to find and exploit with
the limited time available. One of these actually got me my first
bounty, $500.

Unfortunately, I do
not have permission to disclose most of these. But the one that I do
have permission to disclose is Vodafone UK’s. Unfortunately, I
didn’t get a bounty from this.

I won’t be sharing
exactly how I found the subdomain takeover in this post, only the
disclosure process. All I will say about it is that I have a server
somewhere that I give a list of domains to and it verifies some stuff
for me.

But before I
continue, I would like to say what a subdomain takeover is if anyone
reading this does not already know. A subdomain takeover is where a
subdomain is pointed to a service but the subdomain is not claimed at
that service and someone is able to take control. Let’s use Example
Company as an example. They have used a cloud service (for this
example, let’s call them CloudHosting) to host a website.
CloudHosting requires a CNAME record for a custom domain. After a
while, Example Company no longer needs the services of CloudHosting
on the specific subdomain. So they remove the domain from the
CloudHosting dashboard but forget to remove their DNS record. Someone
then uses their CloudHosting account, adds the subdomain and they
then have control over the subdomain which can lead to many issues
such as phishing, malware distribution and in some cases, taking
control of user accounts if session cookies are scoped to the apex
domain (example.com instead of www.example.com). I hope that made
sense.

I would also like to say that this is my first time publicly disclosing a security vulnerability so I apologise if this isn’t as good as other disclosure posts you’ve read.

After not being able
to find a security email on their website, I decided to use their
live chat to get contact details for their security team. These were
the options available:

![Web Chat Options](/images/uploads/VodafoneUK1_WebChatOptions.png)

Nothing for security
or even a general contact option… So I just chose a random one (I
believe I chose Technical – Broadband). I was first given a phone
number but after explaining that I live in South Africa and therefore
I won’t be able to call, I was given an email address.

![Web Chat 1 Picture 1](/images/uploads/VodafoneUK1_WebChat1-1.png)

![Web Chat 1 Picture 2](/images/uploads/VodafoneUK1_WebChat1-2.png)

![Web Chat 1 Picture 3](/images/uploads/VodafoneUK1_WebChat1-3.png)

![Web Chat 1 Picture 4](/images/uploads/VodafoneUK1_WebChat1-4.png)

So after setting up
a proof of concept on an Azure trial account, I sent them an email.

![Azure Custom Domain](/images/uploads/VodafoneUK1_AzureCustomDomain.png)

![Email 1](/images/uploads/VodafoneUK1_Email1.png)

As you can see from
the email, I did actually get an SSL certificate for the subdomain.
Usually I would not do this but as the subdomain would probably be
quite high traffic (and it was), I set up the PoC to redirect any URL
on the subdomain that I have taken over to the actual careers
subdomain. The SSL certificate was there to ensure that all the
requests would actually be redirected and no one would get an error.

I obtained the
certificate from Let’s Encrypt (I verified the subdomain using the
HTTP method).

![SSL](/images/uploads/VodafoneUK1_SSL.png)

The PoC was set up
on a URL that people would not know about and not on the index page.

![URL](/images/uploads/VodafoneUK1_URL.png)

For the PoC page, I
went with my standard subdomain takeover notice.

![Takeover PoC Page](/images/uploads/VodafoneUK1_Takeover.png)

After a few hours
and not even an acknowledgement of receipt, I contacted Vodafone UK
on Twitter.

![Twitter 1](/images/uploads/VodafoneUK1_Twitter1.png)

My tweet was
ignored. So I went back to the live chat, hoping to get a response
there. And they were not able to help.

![Web Chat 2 Picture 1](/images/uploads/VodafoneUK1_WebChat2-1.png)

![Web Chat 2 Picture 2](/images/uploads/VodafoneUK1_WebChat2-2.png)

![Web Chat 2 Picture 3](/images/uploads/VodafoneUK1_WebChat2-3.png)

![Web Chat 2 Picture 4](/images/uploads/VodafoneUK1_WebChat2-4.png)

![Web Chat 2 Picture 5](/images/uploads/VodafoneUK1_WebChat2-5.png)

Back to Twitter. So
I sent a DM. I was told that the social media team cannot check on
the status of the report. (At the time of writing, the social media
teams of two of the companies I reported to were able to check the
status of reports).

![Twitter 2](/images/uploads/VodafoneUK1_Twitter2.png)

![Twitter 3](/images/uploads/VodafoneUK1_Twitter3.png)

Back to emails then.
I sent a reminder email.

![Email 2](/images/uploads/VodafoneUK1_Email2.png)

Two days later I got
a response but not a helpful one.

![Email 3](/images/uploads/VodafoneUK1_Email3.png)

Seven days later I
sent another reminder email, this time mentioning my Azure trial.

![Email 4](/images/uploads/VodafoneUK1_Email4.png)

And a few days
later, another reminder.

![Email 5](/images/uploads/VodafoneUK1_Email5.png)

A few days after
this, I got a reply back with more details from someone who appears
to be in a more senior position.

![Email 6](/images/uploads/VodafoneUK1_Email6.png)

And I replied
verifying the fix and asking for permission to disclose.

![Email 7](/images/uploads/VodafoneUK1_Email7.png)

I was hoping to
immediately get a yes for the request. But more emails had to be
sent.

![Email 8](/images/uploads/VodafoneUK1_Email8.png)

And so I did send an
email.

![Email 9](/images/uploads/VodafoneUK1_Email9.png)

And another reminder
email.

![Email 10](/images/uploads/VodafoneUK1_Email10.png)

And eight days
later, I received an email granting me permission to disclose after
the 7th of June.

![Email 11](/images/uploads/VodafoneUK1_Email11.png)

I did want to do a
timeline but I edited some photos to blur out names and personal
information and forgot to take note of the date or save a copy.

TL;DR: I found a
subdomain takeover, reported it, and am now publicly disclosing it.
You really should read the full post though.
