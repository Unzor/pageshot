# Pageshot
A tool to take screenshots of webpages using Puppeteer.

# Supported browsers
- Chrome 
- Microsoft Edge
- Firefox

# Installation/Setup
## Dependencies (Needed to work)
- [NodeJS](https://nodejs.org)
- [npm](https://npmjs.com)
- [Git](https://git-scm.com)
- [Express](https://expressjs.com)
- [Playwright](https://playwright.dev)

Download/install the most important (Git, NodeJS, npm) dependencies with this command: (Debian/Debian-based Linux distributions only, like Ubuntu. You can download all of these on Windows or other operating systems by clicking on the links)
```
sudo apt install git nodejs npm
```
# Setup
Create a new folder, and run this script in Terminal/Bash/PowerShell/cmd to get the NPM dependencies: (Express, Playwright)
```
npm init -y
npm install express playwright
```
After the installation is done, run this in Terminal/Bash/PowerShell/cmd to run Pageshot:
```
git clone https://github.com/Unzor/pageshot.git
cd pageshot
node index.js
```
Navigate to [http://localhost:1024](http://localhost:1024) to open up Pageshot. Insert a URL to take a screenshot of, wait a few seconds, and a screenshot of your desired site will be displayed!

#### [Online demo](http://8d941020b343.ngrok.io/)
