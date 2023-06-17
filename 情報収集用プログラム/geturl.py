
import requests
from bs4 import BeautifulSoup

#########################
# トレーダーのURL
findaURL = "https://wikiwiki.jp/eft/Jaeger"
# タスクの数
taskamountPtrader = 49
#########################

html = requests.get(findaURL)

soup = BeautifulSoup(html.content, "html.parser")

for num in range(taskamountPtrader + 1):
    for element in soup.select("#content > ul > li:nth-of-type(" + str(num) + ") > a"):
        findaURL = element.get("href")
        findaURL = "https://wikiwiki.jp" + findaURL
        print(findaURL)
