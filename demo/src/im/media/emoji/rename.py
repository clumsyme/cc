import os
import json

path = os.getcwd()

for filename in os.listdir(path):
    if '.png' in filename:
        new_filename = filename.replace('@2x', '')
        os.rename(os.path.join(path, filename), os.path.join(path, new_filename))

