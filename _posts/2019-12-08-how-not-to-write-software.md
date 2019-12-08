---
layout: post
title: How NOT to Write Software
---
I was checking our email server for spam one
day and saw a password reset email for software we have installed on some of
our computers and regularly use. So one of the staff forgot the password which
happens often in our business. Only one issue… the email had our password in **plain
text**.

After realising this, I immediately wanted
to see how the software actually authenticates against the server. As it was a
.NET application, I loaded it in ILSpy on a virtual machine specifically for
this, FLARE VM.

Note: This post does contain a lot of the
code used in the program, however, the name of the software and other
information such as database name, server name, passwords, etc. has been
redacted. The program being used is not being used to shame the developer, but
instead to guide other developers to creating more secure programs (hence the
title, “How NOT to Write Software”). Also, I have never developed with .NET, so
the terms that I use may not be correct.

So what does the program do when the login
button is clicked?

```cs

Remote███DataContext remote███DataContext = new Remote███DataContext();

if
(!remote███DataContext.Connection.ConnectionString.Contains("Password"))

{

remote███DataContext.Connection.ConnectionString = frmMain.sConnectionStr;

}

```

Let’s get some more information about
`Remote███DataContext()`

```cs

public Remote███DataContext()
:base(Settings.Default.███ConnectionString, mappingSource)

{

}

```

What is the connection string? Well, here it is:

```

"Data Source=███.co.za,1433;Initial
Catalog=███;User ID=███"

```

So the program is connecting directly to the
database, not using a web API. But that connection string doesn’t have a
password, how can it connect to a database. At this point, I thought there would
be some code to add the logged in user’s password and use that to connect to
the database. But let’s go back to the first code sample. `frmMain.sConnectionStr` could give some information into how it works.

```cs

public static string sConnectionStr = "";

```

Blank… Luckily ILSpy makes it easy to check
what else reads or modifies a string.

It is modified by two functions (apologies
if this is not the correct term, as previously mentioned, I have not developed
with .NET before).

One of them is `███.frmMain.frmMain()`. Not
much going on here

```cs

…

public static string sConnectionStr = "";

…

public static string passphrase = "███";

```

Just setting the connection string to a
blank string. You would’ve also noticed that I included a passphrase. I’ll come
back to that later. So what else is modifying the connection string?
`███.frmMain.tmrStart_Tick` is doing something…

```cs

sConnectionStr = Settings.Default.███ConnectionString + ";Password=███";

```

<video autoplay loop data-src="https://cdn.ndt3.top/i/facepalm.mp4"><source class="lazy" data-src="https://cdn.ndt3.top/i/facepalm.mp4"
type="video/mp4"></video>

There’s the password. And looking at the 75
other functions in the program that read the connection string, I would assume
that the password is used for everything. From the unsecure practices in the
code, I also assume that the password can do anything on the database including
deleting records, which is a major issue for the type of program it is (again,
not revealing much information about the program or its use case, but let’s
just say one specific company can lose a lot of money if records were deleted
in the database).

The developer did try to add a software
registration key that is required to use the program. And asks that a new user
calls them in order to obtain the registration key. But why do that when you
could just create your own key using the code in the program used to verify the
key.

```cs

sEncrSeed = ███.███Name.Trim();

int
num2 = 0;

for
(int i = 0; i < sEncrSeed.Length; i++)

{

num2 += (i + 7) * 432 * Convert.ToInt16(sEncrSeed[i]) / 11;

}

Random
random = new Random(num2);

int
seed = random.Next(1723, 9690);

Random
random2 = new Random(seed);

int
seed2 = random2.Next(345, 1679);

Random
random3 = new Random(seed2);

int
num3 = random3.Next(100876, 923453);

if
(███.SoftwareRegKey.Trim() != num3.ToString())

{

frmRegister
frmRegister = new frmRegister();

frmRegister.ShowDialog();

if
(███.SoftwareRegKey.Trim() != num3.ToString())

{

MessageBox.Show("Incorrect Registration Key! Program will now Terminate...");

Application.Exit();

Close();

}

}

```

Yes, the `sEncrSeed` is just the name of the
company using the software. Let’s use `NdT3` as an example. The registration
key would then be `320524`. And looking at the code, there does not appear to
be any server-side validation to this.

Earlier, I included a passphrase in a code
sample (`public static string passphrase = "███";` which was found in
`███.frmMain.frmMain()`. What is this passphrase used for?

![2019-12-01_13-22](/images/uploads/2019-12-01_13-22.png)

Data encryption. But what is being
encrypted?

![2019-12-01_13-26](/images/uploads/2019-12-01_13-26.png)


So the passphrase is being used to encrypt
something that is used in a login form, password change form, and user creation
form. That’s right, passwords are being encrypted. This means that if an
attacker does get into the database, they have to decrypt the passwords first.
Should be hard enough right? Wrong. A download of the software is available to
download from the same server as the database is on. So if an attacker does get
the database, they probably also have the program and can easily extract the
encryption key.

You are probably now wondering how that
password reset is done? A script on the server decrypting the password then
emailing it? No.

```cs

Remote███DataContext remote███DataContext = new Remote███DataContext();

if
(!remote███DataContext.Connection.ConnectionString.Contains("Password"))

{

remote███DataContext.Connection.ConnectionString = frmMain.sConnectionStr;

}

IQueryable<RDBUser>
source = from u in remote███DataContext.RDBUsers
where u.LoginName.Trim().ToUpper() == tbxUser.Text.Trim().ToUpper() && (long)u.███ID == frmMain.███ID select u;

if
(source.Count() == 1)

{

RDBUser rDBUser = source.Single();

if
(rDBUser.Email.Trim().Length < 5 || !rDBUser.Email.Contains('@'))

{

MessageBox.Show("Invalid
or Missing Email address!");

Close();

}

else

{

MailNow(rDBUser.Email.Trim(),
rDBUser.Password);

}

}

```

So it gets the password from the database.
The code can be easily modified to get another user’s password and send that
password to an attacker’s email address. Then `MailNow()` does something with
it…

```cs

MailMessage mailMessage = new MailMessage();

mailMessage.To.Add(sEmail);

mailMessage.Subject = "███ Password for user: " + tbxUser.Text.Trim();

mailMessage.From = new MailAddress(frmMain.sStatementEmailAddr);

mailMessage.Body = "Your password is: " + frmMain.DecryptString(sPassw);

string host = "mail.███.co.za";

if
(frmMain.sSmtpServer.Trim().Length > 5)

{

host = frmMain.sSmtpServer;

}

SmtpClient smtpClient = new SmtpClient(host);

smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;

smtpClient.UseDefaultCredentials = false;

if
(frmMain.sSmtpServer.Trim().Length > 5)

{

smtpClient.Credentials = new NetworkCredential(frmMain.sMailUser, frmMain.sMailPassword);

}

else

{

smtpClient.Credentials = new NetworkCredential("info@███.co.za", "███");

}

try

{

smtpClient.Send(mailMessage);

tbxEmail.Text = sEmail;

pnlResult.Visible = true;

}

catch
(Exception ex)

{

MessageBox.Show("Email delivery failed:\n\r" + ex.Message);

}

```

<video autoplay loop data-src="https://cdn.ndt3.top/i/facepalm2.mp4"><source class="lazy" data-src="https://cdn.ndt3.top/i/facepalm2.mp4"
type="video/mp4"></video>

Yes, the program, intended to be installed
on computers, takes the password it receives (`sPassw`), connects to the
developer’s email server (with the password hard-coded in) and emails the
password to the given email address (`sEmail`).

So please, if you develop software, do not
do any of the things showed in the above code samples. Instead, create a web
API (and only allow HTTPS connections to this API), use API keys and hash
passwords and store these hashes in the database instead of plain text
passwords. The program should only have access to data that it really needs so
ensure that requests cannot be modified to access other data in the database.



