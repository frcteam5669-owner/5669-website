# Creating a development environment
In order to develop and maintain the code of this website, there are several steps one must follow to ensure a smooth experience.

## Installations
[NodeJS](https://nodejs.org/en)
- Download the Node.js runtime from the website above and install it. There shouldn't be many steps involved, and it should be pretty straightforward

[VSCode](https://code.visualstudio.com/)
- Unless you are working on a personal computer, VSCode should already be installed for work on Robot code. Use that version of VSCode if it is available

[GitHub Desktop](https://desktop.github.com/download/)
- Again, this should be installed already if you have been working on Robot code. Ensure that GitHub desktop is installed and that you are logged in to your personal account. If you are not a part of the FRC-Team-5669-Techmen organization, ask your software officer to invite you.

Once you have ensured all of the above are installed, we can begin setting up a development environment for the website.

## Getting Started
This repository will not teach you GitHub. For a decent tutorial, see the following: [Learn-Github](https://github.com/FRC-Team-5669-Techmen/Learn-GitHub)

1. Pull this repository from GitHub into GitHub Desktop
![Pulling Repository](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/github-desktop.png)

2. Open the repository in VSCode. It should look something like the following when complete:
![vscode](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/vscode.png)

3. Open VSCode's terminal:
![terminal](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/terminal.png)

4. In the terminal, run the following command:
```bash
# install all dependencies
npm install
```

5. Lastly, you need to add an environment variable that connects the website to the content backend. To do this, have your software officer give you the login information for [Hygraph](https://github.com/FRC-Team-5669-Techmen/5669-website/blob/main/HOSTING.md) 
    1. Once logged in to Hygraph, open the `Website` project and navigate to the settings page.
![website-hygraph](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/hygraph-website-page.png)
![settings](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/settings.png)
    2. Navigate to the `Endpoints` page under `ACCESS`
![endpoints](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/endpoints.png)
    1. Copy the URL under `High Performance Content API`
![url](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/api-url.png)

1. Once you have that URL copied, create a `.env` file in the root of your project. It should look like this once completed:
![env](https://raw.githubusercontent.com/FRC-Team-5669-Techmen/5669-website/main/static/env.png)

1. Place the following into the file and save:
```js
VITE_GRAPHQL_API=[URL YOU COPIED WITHOUT THESE SURROUNDING BRACKETS]
```

1. Assuming everything went correctly, which it hopefully did, run the following in the terminal. It should spit out a few lines of code, but eventually tell you a URL you can navigate to to see the website!

```bash
npm run dev
```

## Deployments
All of our deployments are handled by [Vercel](https://github.com/FRC-Team-5669-Techmen/5669-website/blob/main/HOSTING.md).
To update the live website, simply push a commit to the repository, and assuming everything builds correctly, it will be propagated globally within minutes.

Happy coding!