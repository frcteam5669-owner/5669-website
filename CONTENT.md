# Content Management
Content management uses a separate service, called Hygraph. To learn how to manage content on the website, such as the video that plays on the home and about page, or the contents of any page, you are in the right place.

## Introduction
Before you begin to modify the content of the website, you first need to understand a bit of terminology surrounding content management systems and how our website works.

Firstly, the content and our website can be considered as two separate entities entirely. Updating the content through Hygraph does not require you to modify the code of the website, and vice versa. Modifications to the content do not require new deployments on Vercel, because the live website already pulls the latest content from our database when a new user views it, so anything you update gets put live instantaneously. This is important to note for two reasons:

1. **Content management is simple.** It does not require any programming knowledge. The way that our system has been set up is one that was intended on being as manageable as possible for the average person.
2. **Everything is public.** While there are backups, and you can always revert changes, never publish anything until you are absolutely sure it can be public. Never publish without saving a draft and revising it before.

Secondly, defining content management systems as a whole: 
A Content Management System (CMS) acts as a way to manage and modify content and media for our website. Through this service, we can modify textual content, as well as images and other media that can be viewed and displayed on our website.

To do this, we use Hygraph as mentioned previously. Hygraph is a GraphQL based CMS, which, for most, you don't need to understand, but if you'd like to do some deeper modifications on the website it is necessary to know. GraphQL operates on the idea of Schema, which is essentially the format your content must follow.

Text content is based around the Markdown system, which is a way of styling text based content through text itself. Discord uses Markdown, as well as Google Docs, but it is not necessary to understand the fine grained syntax of Markdown, as Hygraph manages it for you. Please take a look at Markdown nonetheless if you are interested in more advanced features.

## Managing content
It is now time to manage our content. 
1. To do this, please get the Hygraph login information from your president or officer, and go to [hygraph.com](https://hygraph.com). Login using the login information given to you.
2. Once logged in, you will be redirected to the dashboard, which will have two different projects: Website, and Documentation. Website is where we are going to modify our content for this repository, Documentation is linked to our handbook.

![dashboard](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/dashboard.png)

3. Once logged in, you should see something like this:

![studio](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/studio.png)

4. We will mostly be dealing with the `Schema` and `Content` tabs on the left. First, open up the `Schema` tab. It should look like this once you've navigated to it:

![schema](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/schema.png)

5. We will not go too in-depth on Schema for now, but if you want to modify how data is formatted in our system, this is where you would do it. Do NOT MODIFY ANYTHING WITHOUT DISCUSSING WITH A WEB DEVELOPER BEFOREHAND. IT **WILL BREAK THE WEBSITE**
6. Navigate to the Content tab on the left hand side. 

![content](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/content.png)

Now that you are on the Content page, we will go in depth on some of the things you may want to do to the website.

## Modifying Content

### Modifying A Page

### Adding A Page

### Adding A Redirect

### Changing The Home Video

### Adding Pictures