// bike-crawler
/*
https://www.scott-sports.com/us/en/sports/bike
https://www.canyon.com/en-us/
https://www.trekbikes.com/us/en_US/
https://www.specialized.com/us/en/shop/bikes/c/bikes
https://www.giant-bicycles.com/us
https://www.cannondale.com/en-us
https://www.santacruzbicycles.com/en-US
https://www.merida-bikes.com/en
https://www.orbea.com/us-en/
https://www.bmc-switzerland.com/us_en/
*/

const puppeteer = require('puppeteer');

async function scrape() {
    const browser = await puppeteer.launch({'headless':false});
    const page = await browser.newPage();

    await page.goto('https://www.scott-sports.com/dk/en/products/bike-bikes-road-gravel-cx');
    //var element = await page.waitForSelector('div#content');
    //var text = await page.evaluate(element => element.textContent, element);
    console.log(page.content());
    browser.close();
}

scrape();