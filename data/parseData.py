from bs4 import BeautifulSoup

html = open("html1.txt", "r")

soup = BeautifulSoup(html)
rows = soup.findAll('tr', {'class': "row0 right"})


rows += soup.findAll('tr', {'class': "row1 right"})

players = soup.findAll('span', {'class': "hidden-xs"})
points = soup.findAll('td', {'class': "hilite"})

with open('data.json', 'w') as file:

    file.writelines('{\n"players":[\n')

    for i in range(0, len(points)):
        this = '\t{"name":"' + players[i].text.strip() + '", "points":"' + points[i].text.strip() + '"},\n'
        file.writelines(this)

    file.writelines(']\n}')



