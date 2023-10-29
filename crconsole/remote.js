// https://medium.com/@trivedidarshan30/remote-debugging-in-puppeteer-to-debug-browser-automation-709b6a578d
const puppeteer = require('puppeteer');

async function start() {
    const browser = await puppeteer.launch({
     executablePath: "google-chrome",
     headless: true,
     args: ['--remote-debugging-port=9222', '--remote-debugging-address=0.0.0.0', '--no-sandbox'],
    });

    const page = await browser.newPage();

    eval(require('locus'));

    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);

    // start crconsole
    await page.goto( "http://player:3000/breakpoint.html" );
    // await page.goto( "http://player:3000/" );
    // await page.reload();

    const version = await browser.version();
    console.log(version)

    // Close browser.
    await browser.close();
}

start();
