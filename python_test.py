import scrapy
import pandas as pd

# load data/hltv/players_links.txt
links = pd.read_csv('data/hltv/players_links.txt', header=None)
links = links[0].tolist()

class HLTVSpider(scrapy.Spider):
    name = 'ratings'
    start_urls = links

    custom_settings = {
        'DOWNLOAD_DELAY': 1,
    }


    def parse(self, response):
        yield {
            'player': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[1]/h1/text()').get(),
            'ratingVersion': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[1]/div[1]/text()').get(),
            'rating': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[1]/div[2]/div[1]/text()').get(),
            'kast': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[3]/div[2]/div[1]/text()').get(),
            'kpr': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[3]/div[3]/div[2]/div[1]/text()').get(),
            'dpr': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[2]/div[2]/div[1]/text()').get(),
            'impact': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[3]/div[1]/div[2]/div[1]/text()').get(),
            'adr': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[3]/div[2]/div[2]/div[1]/text()').get(),
        }