import jsdom from "jsdom";
import { promises as fs } from "fs";
const { JSDOM } = jsdom;

const n = 852;
const selectors = {
    'dpr': 'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.statistics > div > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)',
    'kast': 'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.playerSummaryStatBox > div.summaryBreakdownContainer > div:nth-child(2) > div:nth-child(3) > div.summaryStatBreakdownData > div.summaryStatBreakdownDataValue',
    'impact':'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.playerSummaryStatBox > div.summaryBreakdownContainer > div:nth-child(3) > div:nth-child(1) > div.summaryStatBreakdownData > div.summaryStatBreakdownDataValue',
    'adr':'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.playerSummaryStatBox > div.summaryBreakdownContainer > div:nth-child(3) > div:nth-child(2) > div.summaryStatBreakdownData > div.summaryStatBreakdownDataValue',
    'kpr':'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.playerSummaryStatBox > div.summaryBreakdownContainer > div:nth-child(3) > div:nth-child(3) > div.summaryStatBreakdownData > div.summaryStatBreakdownDataValue',
    'rating_version': 'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.statistics > div > div:nth-child(2) > div:nth-child(7) > span:nth-child(1)',
    'rating': 'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.statistics > div > div:nth-child(2) > div:nth-child(7) > span.strong',
    'assists_per_round': 'body > div.bgPadding > div.widthControl > div:nth-child(2) > div.contentCol > div.stats-section.stats-player.stats-player-overview > div.statistics > div > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)'
}

// get filenames from data/hltv/players
const filenames = await fs.readdir("data/hltv/players");

let players = [];
let i = 0;

for(const filename of filenames) {
    const file = await fs.readFile(`data/hltv/players/${filename}`, 'utf-8');

    const { document } = new JSDOM(file).window;

    const rating_version = document.querySelector(selectors.rating_version).textContent;
    if(rating_version == "Rating 1.0") {
        console.log(`{${++i}/${n}} ${filename.split(".")[0]} is Rating 1.0`);
        continue;
    };

    const player = {
        'name': filename.split(".")[0],
        'dpr': document.querySelector(selectors.dpr).textContent,
        // remove last character from kast
        'kast': document.querySelector(selectors.kast).textContent.slice(0, -1),
        'impact': document.querySelector(selectors.impact).textContent,
        'adr': document.querySelector(selectors.adr).textContent,
        'kpr': document.querySelector(selectors.kpr).textContent,
        'rating': document.querySelector(selectors.rating).textContent,
        'assists_per_round': document.querySelector(selectors.assists_per_round).textContent
    }

    players.push(player);
    console.log(`{${++i}/${n}} ${player.name}`);
}

// players to csv
// name, dpr, kast, impact, adr, kpr, assists_per_round, rating
let csv = "name,dpr,kast,impact,adr,kpr,assists_per_round,rating\n";
players.map(player => {
    csv += `${player.name},${player.dpr},${player.kast},${player.impact},${player.adr},${player.kpr},${player.assists_per_round},${player.rating}\n`;
});

await fs.writeFile("data/hltv/players.csv", csv);