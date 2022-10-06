import json
import requests
from bs4 import BeautifulSoup

#https://www.nfl.com/players/active/all?query=matt%20ryan
#https://www.nfl.com/players/active/all?query=tom%20brady

"""
with open('playerErr.txt', 'r') as f:
    html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    soup.prettify()
    vals = soup.find('section', attrs={'class':'d3-l-grid--outer d3-l-section-row'})
    ret = vals.find_all('td')
    if(ret):
        print("Hi")
    else:
        print("GG")
    for val in ret:
        print(val.text.strip())

"""

"""
with open('player.txt', 'r') as f:
    html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    soup.prettify()
    vals = soup.find('section', attrs={'class':'d3-l-grid--outer d3-l-section-row'})
    ret = vals.find_all('td')
    for val in ret:
        print(val.text.strip())

"""

"""

with open('data.json', 'w') as file:

    file.writelines('{\n"players":[\n')

    for i in range(0, len(points)):
        this = '\t{"name":"' + players[i].text.strip() + '", "points":"' + points[i].text.strip() + '"},\n'
        file.writelines(this)

    file.writelines(']\n}')

"""

with open('data.json', 'r') as read_file:
    data = json.load(read_file)

with open('data2.json', 'w') as file:

    file.writelines('{\n"players":[\n')

    for player in data:
        name = player["name"].split(' ')
        fname = name[0]
        lname = name[1]
        link = "https://www.nfl.com/players/active/all?query=" + fname + "%20" + lname
        print(link)
        html = requests.get(link)
        soup = BeautifulSoup(html.text, 'html.parser')
        soup.prettify()
        vals = soup.find('section', attrs={'class':'d3-l-grid--outer d3-l-section-row'})
        ret = vals.find_all('td')
        if(ret):
            this = '\t{"name":"' + ret[0].text.strip() + '", "points":"' + player["points"] + '", "team":"' + ret[1].text.strip() + '", "position":"' + ret[2].text.strip() + '", "status":"' + ret[3].text.strip() + '"},\n'
            file.writelines(this)
        else:
            this = '\t{"name":"' + player["name"] + '", "points":"' + player["points"] + '", "team":"' + "N/A" + '", "position":"' + "N/A" + '", "status":"' + "RET" + '"},\n'
            file.writelines(this)

    file.writelines(']\n}')
