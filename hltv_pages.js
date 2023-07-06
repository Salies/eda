import fs from 'fs';
import puppeteer from 'puppeteer';

const file = fs.readFileSync("data/hltv/players_links.txt", "utf-8");
const links = file.split("\n");

const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
page.setJavaScriptEnabled(false);

let i = 0;
for(const link of links) {
    await page.goto(link);
    // save whole page to data/hltv/players/playerName.html
    const playerName = link.split("/")[6];
    const body = await page.content();
    fs.writeFileSync(`data/hltv/players/${playerName}.html`, body);
    console.log(`Done ${++i}/${links.length}`);
    // 3 seconds delay
    await new Promise(resolve => setTimeout(resolve, 3000));
}