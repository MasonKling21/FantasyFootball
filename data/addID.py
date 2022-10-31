import json

x = 1

with open("data3.json", "r") as f:
    with open("data4.json", "w") as write_file:
        write_file.write("[")
        for player in f:
            val = {"id": x}
            player = player[:-2]
            data = json.loads(player)
            data.update(val)
            x += 1
            data = json.dumps(data)
            write_file.write(data + "\n")
            write_file.write(",")
        write_file.write("]")
            
