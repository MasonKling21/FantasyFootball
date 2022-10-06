from bs4 import BeautifulSoup

import urllib.request

header= {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) ' 
      'AppleWebKit/537.11 (KHTML, like Gecko) '
      'Chrome/23.0.1271.64 Safari/537.11',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
      'Accept-Encoding': 'none',
      'Accept-Language': 'en-US,en;q=0.8',
      'Connection': 'keep-alive'}

req = urllib.request.Request(url="https://www.footballdb.com/fantasy-football/index.html?pos=OFF&yr=2021&wk=all&key=48ca46aa7d721af4d58dccc0c249a1c4", headers=header)
page = urllib.request.urlopen(req).read()


soup = BeautifulSoup(page, 'html.parser')

with open('html1.txt', 'w') as file:
    file.write(soup.prettify())
