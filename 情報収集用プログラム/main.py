import lxml.html
import requests

####

# wikiURL.txt
# 1-40 40個 Praper
# 41-74 34個 Therapist
# 75-76 2個 Fence
# 77-106 30個 Skier
# 107-147 41個 PeaceKeeper
# 148-204 58個 Mechanic  最初は148-148 Gunsmith Pt1～22 149-170 その後 171-204
# 205-239 35個 Ragman
# 240-288 49個 Jaeger
#####
path = "wikiURL.txt"
outpath = "htmlOUT.txt"
start = 240
amount = 288
#####

f = open(path)
allresult = ""
task = ""
trader = ""
kappa = ""

f = open(outpath, 'w', encoding='UTF-8')
f.write("")
f.close()

for num in range(start - 1, amount):
    print(num)
    with open(path) as f:
        l_strip = [s.strip() for s in f.readlines()]
        url = l_strip[num]

    req = requests.get(url)
    html = req.text
    dom = lxml.html.fromstring(html)

    # タスク名 task
    target_xpath = '//*[@id="content"]/div[2]/table/tbody/tr[1]/th'
    scraped_data = dom.xpath(target_xpath)
    for index, news in enumerate(scraped_data):
        for line in news.text_content().split(";"):
            print(line)
            task = line

    # マップ map
    target_xpath = '//*[@id="content"]/div[2]/table/tbody/tr[5]/td[2]'
    scraped_data = dom.xpath(target_xpath)
    for index, news in enumerate(scraped_data):
        for line in news.text_content().split(";"):
            print(line)
            map = line

    # トレーダー trader
    target_xpath = '//*[@id="content"]/div[2]/table/tbody/tr[6]/td[2]/a'
    scraped_data = dom.xpath(target_xpath)
    for index, news in enumerate(scraped_data):
        for line in news.text_content().split(";"):
            print(line)
            trader = line

    # カッパ kappa
    target_xpath = '//*[@id="content"]/div[2]/table/tbody/tr[7]/td[2]/span'
    scraped_data = dom.xpath(target_xpath)
    for index, news in enumerate(scraped_data):
        for line in news.text_content().split(";"):
            print(line)
            kappa = line

    # URL
    print(url)

    allresult = '<div class="task-card" id="task-card' + str(num) + '"><div class="task-card-child">' + '\n' + '<input type="checkbox" class="task-checkbox" id="checkbox' + str(num) + '" name="chk_sample" value="checkbox' + str(num) + '">' + '\n' + '<label for="checkbox' + str(num) + '"><p class="task-card-content">Name : <span class="ftitle">' + str(task) + \
        '</span></p><p class="task-card-content">Trader : ' + str(trader) + '</p><p class="task-card-content">Map : ' + str(map) + '</p><p class="task-card-content">Kappa : <span class="stitle">' + \
        str(kappa) + '</span></p><p class="task-card-content">' + '\n' + '<a href="' + str(url) + \
        '" target="_blank">Wikiを別ウィンドウで開く</a></p></label>' + \
        '\n' + '</div></div>' + '\n' + '<!--  -->'

    f = open(outpath, 'a', encoding='UTF-8')

    f.write(allresult)

    f.close()
f.close()
