from bs4 import BeautifulSoup

html = open("html.txt", "r")

soup = BeautifulSoup(html)

teams = soup.find('table', {'id': "stats_grid"})

print(teams)


"""
with open('data.json', 'w') as file:

    file.writelines('{\n"players":[\n')

    for i in range(0, len(points)):
        this = '\t{"name":"' + players[i].text.strip() + '", "points":"' + points[i].text.strip() + '"},\n'
        file.writelines(this)

    file.writelines(']\n}')

"""
