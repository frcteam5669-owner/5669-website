# Vercel Hosting
For hosting our website, we use Vercel. Vercel itself is a complicated service, and offers a lot (i mean a LOT) of advanced features that we simply do not use for our website. In reality, we could probably get by without using Vercel and just use server-side rendering, but we don't. Future project?

What we use at 5669 from Vercel is their web hosting capabilities. They link on to GitHub repositories and automatically build and deploy the latest changes to our code to the web. It simplifies a lot of our work, but we have to do some workarounds to get the service for free. That will all be detailed later, though.

## Managing Hosting
To keep this simple, there is really only ever one thing you will need to do with Vercel, and its something you likely will never need to log in to the service itself to ever do. 

### Managing Deployments
A deployment of our website can be simplified into two major steps:
1. Committing code.
2. Pulling code into the owner account.

The first step should be simple enough for those familiar with GitHub. Simply commit any changes to the codebase on our Organization on GitHub. The second is not as straightforward, though.

Because Vercel is a paid service for teams, we cannot link a Vercel project to the GitHub repository on our Organization. This is no problem, though, as we have the `FRC-Team-5669-Owner` account.
1. Obtain the login information for the owner account from the software officer or president.
2. Log in to GitHub using the credentials, and navigate to the [5669-website fork on the account](https://github.com/frcteam5669-owner/5669-website).
3. You may notice at the top a message saying "This branch is 1 commit ahead, X commits behind". Underneath that, there should be a button saying "Sync fork". Click this, and click "Update Branch".

![syncfork](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/syncfork.png)

4. This should automatically pull any changes into the fork of the repository. At this point, your work in GitHub is done, and assuming all goes well in the build process, Vercel should do the rest.

### Monitoring Deployment Status
Should you want to make sure everything with your deployment goes well, or if there is an issue that you need to address, you can monitor the status of a deployment through Vercel.

1. Log into [Vercel](https://vercel.com) using the GitHub button on the log in screen, as our Vercel is connected to our GitHub.
2. You will see the following screen, the Vercel Dashboard. Navigate to the `frc-website` project.

![verceldashboard](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/verceldashboard.png)

3. You will then see the dashboard for the project. To view and manage deployments, navigate to the `Deployments` tab on the top. The screen you see should look something like this:

![deployments](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/deployments.png)

4. We can see several different deployments, ordered from newest to oldest. In this image, we can see a few different statuses for deployments: Building, Ready, and Error.
5. Clicking on one of the deployments will show the details of that deployment, including how long it took, urls to view it live, and the build logs. If the deployment failed, view the build logs to see what went wrong and how to possibly fix it.

![deploymentdetails](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/deploymentdetails.png)

### Manual Deployments
If you, for whatever reason, want to manually deploy a certain commit or the latest commit to the project, you can do that simply.
1. First, navigate back to the deployments tab. Click on the three dots towards the top left, and click on `Create deployment`

![createbutton](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/createbutton.png)

2. In the new window, you can paste the URL for a specific commit, or just click `main` to redeploy the latest version of the main branch.

![createwindow](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/createwindow.png)