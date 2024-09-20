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
The way that the Hygraph system has been set up is one intended to make it as simple as possible to modify certain aspects of the website. For the most part, everything on the site can be edited through Hygraph, with a few exceptions being the `Branding` and `Contact` page.

### Changing The Home Page
The home page of the website is a unique page that does not follow the same format as the other pages. 
1. To modify it, click on `HomePage` under the `Default Views` section on the left.
2. A new page should show up that has little information, other than one entry in the HomePage view. Click on this entry.
3. You should now see a screen that looks something like the following:

![homepage in hygraph](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/homepage.png)

4. The following graphic shows what properties in Hygraph connect to on the home page. 

![homepage in hygraph](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/homepageexplainer.png)

5. Once you are done modifying the content on the home page, click `Save` or `Save & Publish` at the top right.
   1. Hygraph gives you the option to Save, so that you may publish your changes at a later date. It also gives you the option to schedule a publishing date. Make sure you do not publish anything until you are ready for it to be live.

### Modifying A Page
Modifying a page itself is simpler than on the home page.
1. Go to the `Page` view under `Default Views`
2. You will now see several entries, each with their title visible. Click on the page you'd like to modify.
3. You will see the following screen, with two fields: `Title` and `Content`

![individual page](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/individualpage.png)

4. These two fields are pretty self explanatory:
   1. **Title** is simply what the page is called. It displays at a heading at the top of the page.
   2. **Content** is the textual content that will be displayed on the page. It is formatted using Markdown and can contain images, videos, and other fancy content.
5. Simply modify anything in this page, and publish or save when complete.


### Adding A Page & Modifying Website Navigation
If you would like to add pages on top of what already exists in the websites navigation, you will have to follow several steps in order to accomplish this.

First, we need to understand the concept of the navigation. This is what displays at the top of the page, and contains two different types of elements:
- **NavigationPage:** An element that links to an individual page. It has the following properties:
  - Title: The display name of the navigation page
  - Slug: The URL that this page is located at. For example: for `https://example.com/slug`, the slug is `slug`. Furthermore, for `https://example.com/more/slug`, the slug is still `slug`.
  - Page [optional]: A link to the Hygraph page element you want to display at this location
  - Redirect URL [optional]: Alternatively, an external URL that this page can go to. Useful for linking Google Drives or Calendars.
- **NavigationPageGroup:** An element that contains several other navigation pages, for dropdown menus in the navigation bar. It has the following properties:
  - Title: The display title of this group
  - Pages: An array of NavigationPage
  - Slug: The slug for this navigation page group. This is necessary, because any pages that are underneath this group will have it added on to their slug, like so: 
    - Group slug: `group`
    - Page slug: `pageslug`
    - Resulting URL: `https://example.com/group/pageslug`

Now that we have gone over this terminology, we can begin editing the sites navigation.

1. Go to `Navigation` under `Default Views`
2. There will be one entry that shows up. Click on it
3. You will see the following screen, with the previously described `NavigationPage`s and `NavigationPageGroup`s. 

![navigation](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/navigation.png)

4. To modify any of the pages currently on the website, you can easily do this by opening up any of the components and modifying them. To add a new page, click on the `Add another component` button on the bottom. It will ask you to select either a `NavigationPage` or `NavigationPageGroup`. Add what you need.
5. For each `NavigationPage`, you may need to add a new `Page` component to direct to. You can easily do this through the current page using the buttons below:
   - Alternatively, you do not need to add a new page if you want to link to an external site. You can do this by defining the redirect URL field.

![add page](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/addpage.png)

6. You can either link to an existing page in Hygraph, or directly create a new page. Creating a new page will open up the `Page` component as discussed before, with the same exact input fields.
7. Remember to save and publish once you are done!

### Adding Pictures
The pictures page also follows a separate format from other pages. 
1. Select `PicturesPage` from `DefaultViews` and select the only entry that shows up.
2. You will see the following:

![picturespage](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/picturespage.png)

3. The pictures page is simply an array of photos underneath a certain title. For us, we separate our photos by Year. To add a new year, you can simply `Add new PictureGroup` on the bottom.
4. Fill out the `Title` field, and click on `Add existing Asset`
5. Hygraph will now prompt you to pick a photo from our library of assets. You can either select one that has already been uploaded, or upload new ones using the button on the bottom
6. **IMPORTANT:** Like other content on Hygraph, PHOTOS WILL NOT DISPLAY LIVE IF THEY HAVE NOT BEEN PUBLISHED. Make sure to publish photos when you want them to show up on the live website.