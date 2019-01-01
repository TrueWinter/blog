---
layout: post
title: Flameshot Review
---
There are many times when you need to take a screenshot of something on your laptop or computer. Most people will press the print screen button and then paste that and crop it as needed or take a picture with their phone. I prefer to use software to take my screenshots.

Usually, I will use [ShareX](https://getsharex.com) due to it being packed with features. In my opinion, ShareX is the best screenshotting software available. However, there is one small problem: it is only available for Windows.

I personally dislike Windows (for reasons that I will not share here). At one point, I had 3 Linux distros dual booted with Windows on my old laptop. (My new laptop will not have enough space for that). I wanted to switch to using Linux again as my main operating system but the software that I need for school (only available for Windows, Mac, Android, iOS and Windows Phone), and other software not available for Linux, prevented me from switching.

On the 20th of December 2018, I basically said f\*\*\* it and dual booted with Ubuntu 16.04 (as I had the image already). I would use the school software on my phone and tablet. After a while, I realised that some software was not available for Ubuntu 16.04 and I had to upgrade. (I had to reinstall Ubuntu and format the partitions as I messed up with the upgrade wizard).

But enough of writing about switching operating systems, this is supposed to be a software review post.

I was initially going to use software used by some people that use the same file host that I do, however, I felt that it lacked some features and the UI wasn’t that good. While looking for alternatives, I came across [Flameshot](https://github.com/lupoDharkael/flameshot). *(Sorry if some of the information here is not up to date, I started the review using Flameshot 0.5.1-1 and finished it using Flameshot 0.6.0 after downloading the latest release from GitHub instead of apt).*

The UI is quite nice and it has a few features that I need. Although it doesn’t have all the features that ShareX has, it should work fine most of the time I need a screenshot.
![Flameshot UI](/images/uploads/Screenshot from 2019-01-01 16-46-02.png)

There are some things that I dislike about it:
* By default, it can only upload to Imgur. You can write a script that will upload it to another host when you press the save button.
* Unless I’m missing something, the configuration app doesn’t allow for setting global keyboard shortcuts. You will need to set the keyboard shortcuts from your OS’ settings to run a command:
 * `flameshot gui`: for taking screenshots with the GUI
 *  `/path/to/your/custom/script`: if you need it to upload to another host, or need to do something with the picture after capturing it
 * Other commands: [https://github.com/lupoDharkael/flameshot#usage](https://github.com/lupoDharkael/flameshot#usage)
* It isn’t as feature rich as ShareX
* The blur feature doesn’t hide all the text. You need to blur something twice for it to actually hide sensitive information (found that out after I screenshotted a copying bug in Ubuntu and the filename was visible)
* There isn’t a way to move objects you added to the screenshot (like arrows) so you will have to undo if you make a mistake

Even with the list above, Flameshot is still quite a good software for taking screenshots on Linux and appears to be under active development with new features in development.

If you need to take screenshots in Linux, I recommend to try Flameshot.
