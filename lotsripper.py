import json

from jinja2 import Template
from lxml import html
import requests

page = requests.get('http://theglenatmaplefalls.com/main-pages/lotsforsale.htm')
# print page.text
tree = html.fromstring(page.text)
lots = []
i = 0
for table in tree.xpath('/html/body/div/table | /html/body/div/center/table'):
    divlots = []
    f = True
    for row in table.xpath('tr'):
        if f:
            if row.text_content().find('TRAILER') == -1:
                break
            f = False
            i += 1
            continue
        lot = {}
        cells = row.xpath('td')
        lot['sold'] = cells[6].text_content().strip() == 'SOLD'
        if lot['sold']:
            continue
        lot['new'] = len(cells[0].getchildren()) != 0
        lot['number'] = int(cells[1].text_content().strip()[3:])
        lot['trailer'] = cells[3].text_content().strip() == 'yes'
        lot['shed'] = cells[4].text_content().strip() == 'yes'
        lot['gazebo'] = cells[5].text_content().strip() == 'yes'
        pricestring = cells[6].text_content().strip()
        lot['price'] = -1 if pricestring == 'Pending' else int(
            pricestring[1:max(pricestring.find('U'), pricestring.find('C'))].replace(',', ''))
        if lot['price'] >= 0:
            lot['currency'] = pricestring[max(pricestring.find('U'), pricestring.find('C')):]
            if lot['currency'] == 'US':
                lot['currency'] = 'USD'
        lot['contact'] = cells[7].text_content().strip().replace('\t', '').replace('\r', '').replace('\n', '<br/>')
        divlots.append(lot)
    if not f:
        lots.append({'number': i, 'lots': divlots})

lotsjson = open('lots.json', 'w')
lotsjson.write(json.dumps(lots, indent=4))

lfspage = Template(open('lotstemplate.html', 'r').read())
open('lots.html', 'w').write(lfspage.render(lots=lots).encode('ascii', 'replace'))
