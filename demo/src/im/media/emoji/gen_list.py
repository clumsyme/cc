import re
import json

pattern = re.compile(r'Tag="(.*?)" File="(.*?)"')

with open('emoji.xml', 'r', encoding='utf-8') as xml:
	s = ''.join(xml.readlines())

el = [
    {"tag":tag, "file": file} for (tag, file) in re.findall(pattern, s)
]

with open('emoji.json', 'w', encoding='utf-8') as ejson:
    json.dump(el, ejson, ensure_ascii=False, indent=4)
