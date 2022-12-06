#%%%
import json

filename = 'SaveMyChatExamples/chatgpt_2022-12-06.json'
with open(filename, 'r') as f:
    d = json.load(f)

d
# %%
o = ''
for entry in d:
    print(entry['agent'])
    print(entry['innerText'])
    o += f"**** {entry['agent']} **** \n"
    o += f"{entry['innerText']} \n"
# %%
with open(filename.replace('.json', '.txt'), 'w') as f:
    f.write(o)
# %%
