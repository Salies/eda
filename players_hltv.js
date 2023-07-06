const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;

// Load data/hltv/players.html
const file = fs.readFileSync("data/hltv/players.html", "utf-8");
const { document } = new JSDOM(fs.readFileSync("data/hltv/players.html", "utf-8")).window;

const playersTr = document.querySelectorAll("body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section > table > tbody > tr");
const n = playersTr.length;

let links = [];

for (let i = 0; i < n; i++) {
    const player = playersTr[i];
    const link = player.querySelector("td.playerCol > a").href;
    links.push(link);
}

// write to txt
fs.writeFileSync("data/hltv/players_links.txt", links.join("\n"));