
import random
import yaml
from pathlib import Path
import lorem
import regex as re


data = yaml.load(Path("./data.yaml").open())

# print(data)

words = {}

def rep_word(s: str):
    z = random.choice(lorem.sentence()[1:-1].split())
    if s.istitle():
        z = z.title()
    if s.isupper() and len(s) > 1:
        z = z.upper()
    return z[:len(s)]

def rep_num(s: str):
    return re.sub(r".", lambda m: random.choice("0123456789"), s)

def rep(s: str):
    s = re.sub(r"\p{L}+", lambda m: rep_word(m.group(0)), s)
    s = re.sub(r"[0-9]+", lambda m: rep_num(m.group(0)), s)
    return s

def walk(x):
    if isinstance(x, str):
        return rep(x)
    elif isinstance(x, dict):
        for k, v in list(x.items()):
            x[k] = walk(v)
    elif isinstance(x, list):
        for k, v in enumerate(list(x)):
            x[k] = walk(v)
    return x



print(yaml.dump(walk(data)))

