import numpy as np
import pandas as pd
import json

df = pd.read_csv("nfl_pass_rush_receive_raw_data.csv")

f = open('data2.json',)
data = json.load(f)

del df['comb_pass_rush_play']
del df['comb_pass_play']
del df['comb_rush_play']
del df['rec_long']
del df['pass_long']
del df['rush_long']
del df['game_id']
del df['player_id']
del df['pos']
del df['team']
del df['Team_abbrev']
del df['Opponent_abbrev']
del df['Total_DKP']
del df['Off_DKP']
del df['Total_FDP']
del df['Off_FDP']
del df['Total_SDP']
del df['Off_SDP']
del df['vis_team']
del df['home_team']
del df['vis_score']
del df['home_score']
del df['OT']
del df['Roof']
del df['Surface']
del df['Temperature']
del df['Humidity']
del df['Wind_Speed']
del df['Vegas_Line']
del df['Vegas_Favorite']
del df['Over_Under']
del df['game_date']

with open('data3.json', 'w') as file:

    file.writelines('{\n"players":[\n')

    for i in data['players']:
        this = df.loc[df['player'] == i['name']]
        del this['player']
        this = this.sum()
        writeToFile = '\t{"name":"' + i['name']
        + '", "points":"' + i['points']
        + '", "team":"' + i['team']
        + '", "position":"' + i['position']
        + '", "pass_cmp":"' + str(this['pass_cmp'])
        + '", "pass_att":"' + str(this['pass_att'])
        + '", "pass_yds":"' + str(this['pass_yds'])
        + '", "pass_td":"' + str(this['pass_td'])
        + '", "pass_int":"' + str(this['pass_int'])
        + '", "pass_sacked":"' + str(this['pass_sacked'])
        + '", "pass_sacked_yds":"' + str(this['pass_sacked_yds'])
        + '", "pass_rating":"' + str(this['pass_rating'])
        + '", "rush_att":"' + str(this['rush_att'])
        + '", "rush_yds":"' + str(this['rush_yds'])
        + '", "rush_td":"' + str(this['rush_td'])
        + '", "targets":"' + str(this['targets'])
        + '", "rec":"' + str(this['rec'])
        + '", "rec_yds":"' + str(this['rec_yds'])
        + '", "rec_td":"' + str(this['rec_td'])
        + '", "fumbles_lost":"' + str(this['fumbles_lost'])
        + '", "rush_scrambles":"' + str(this['rush_scrambles'])
        + '", "designed_rush_att":"' + str(this['designed_rush_att'])
        + '", "two_point_conv":"' + str(this['two_point_conv'])
        + '", "total_ret_td":"' + str(this['total_ret_td'])
        + '", "offensive_fumble_recovery_td":"' + str(this['offensive_fumble_recovery_td'])
        + '", "pass_yds_bonus":"' + str(this['pass_yds_bonus'])
        + '", "rush_yds_bonus":"' + str(this['rush_yds_bonus'])
        + '", "rec_yds_bonus":"' + str(this['rec_yds_bonus'])
        + '", "pass_target_yds":"' + str(this['pass_target_yds'])
        + '", "pass_poor_throws":"' + str(this['pass_poor_throws'])
        + '", "pass_blitzed":"' + str(this['pass_blitzed'])
        + '", "pass_hurried":"' + str(this['pass_hurried'])
        + '", "rush_yds_before_contact":"' + str(this['rush_yds_before_contact'])
        + '", "rush_yac":"' + str(this['rush_yac'])
        + '", "rush_broken_tackles":"' + str(this['rush_broken_tackles'])
        + '", "rec_air_yds":"' + str(this['rec_air_yds'])
        + '", "rec_yac":"' + str(this['rec_yac'])
        + '", "rec_drops":"' + str(this['rec_drops'])
        + '", "offense":"' + str(this['offense'])
        + '", "off_pct":"' + str(this['off_pct'])
        + '"},\n'
        file.writelines(writeToFile)

    file.writelines(']\n}')

"""
for i in data['players']:
    this = df.loc[df['player'] == i['name']]
    del this['player']
    this.sum()

"""

"""
    
this = df.loc[df['player'] == "Tom Brady"]

del this['player']

print(this.sum())

"""

"""

with open('data3.json', 'w') as file:

    file.writelines('{\n"players":[\n')

    for i in range(0, len(points)):
        this = '\t{"name":"' + players[i].text.strip() + '", "points":"' + points[i].text.strip() + '"},\n'
        file.writelines(this)

    file.writelines(']\n}')

"""
