// チェックがついていたタスク番号
// var getnum = post
getnum = [0, 10];
//ItemのDB(連想配列)
var task0 = { taskname: "ronaldo", tasknum: "0", itemnum: "1,1" };
var task1 = { taskname: "water", tasknum: "1", itemnum: "1,4,3,4" };
var task2 = { taskname: "waster", tasknum: "1", itemnum: "1,7,6,4" };
var task3 = { taskname: "cliker", tasknum: "1", itemnum: "1,2" };
var task4 = { taskname: "raster", tasknum: "1", itemnum: "2,3" };
var task5 = { taskname: "raster", tasknum: "1", itemnum: "5,6" };
var task6 = { taskname: "raster", tasknum: "1", itemnum: "5,6" };
var task7 = { taskname: "raster", tasknum: "1", itemnum: "5,6" };
var task8 = { taskname: "raster", tasknum: "1", itemnum: "5,6" };
var task9 = { taskname: "raster", tasknum: "1", itemnum: "7,6" };
var task10 = { taskname: "raster", tasknum: "1", itemnum: "6,6,19" };

const tasks = [task0, task1, task2, task3, task4, task5, task6, task7, task8, task9, task10];

//指定のタスクに必要なアイテムを全部結合させる
var itemArray = [];
for (i = 0; i < getnum.length; i++) {
    result = getnum[i]
    result = tasks[result];
    itemArray.push(result['itemnum']);
}
ItemNum = itemArray.join();
ItemNum = ItemNum.split(',')
console.log(ItemNum);

//重複を削除
itemArray = ItemNum;
item = new Set(itemArray);
item = Array.from(item)
item = item.map(Number);
item = item.sort((a, b) => {
    return a < b ? -1 : 1;
});
console.log(item);

// それぞれのアイテムの合計値を導出
var arr = ItemNum;
var count = {};
for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];
    count[elm] = (count[elm] || 0) + 1;
}

arrayAmount = count;
var key = Object.keys(arrayAmount);
console.log(key);

itemName = [];
itemAmount = [];

for (i = 0; i < item.length; i++) {
    itemName.push(key[i]);
    itemAmount.push(arrayAmount[key[i]]);
}

//画像生成
for (i = 0; i < item.length; i++) {
    // 画像生成
    let img_element = document.createElement('img');
    img_element.src = 'item/item' + String(item[i]) + '.png'; // 画像パス
    img_element.width = 100; // 横サイズ（px）
    img_element.height = 100; // 縦サイズ（px）

    // div生成
    let div_element = document.createElement('div');
    div_element.classList.add("imgzone")
    var classvalue = document.getElementsByClassName("imgzone")

    img_element.width = 100; // 横サイズ（px）
    img_element.height = 100; // 縦サイズ（px）

    // アイテム名のtext生成
    let name_element = document.createElement('p');
    name_element.innerHTML = itemName[i] + "「アイテム名」";
    name_element.setAttribute("id", "imgzone" + String(i))

    // アイテム数のtext生成
    let amount_element = document.createElement('p');
    amount_element.innerHTML = String(itemAmount[i]) + "個";
    amount_element.setAttribute("id", "imgzone" + String(i))

    // 指定した要素にimg要素を挿入
    let content_area = document.getElementById("imgarea");
    content_area.appendChild(div_element);
    classvalue[i].setAttribute("id", "imgzone" + String(i))
    let imgzone = document.getElementById("imgzone" + String(i));
    imgzone.appendChild(img_element);
    imgzone.appendChild(name_element);
    imgzone.appendChild(amount_element);
}

// img_element.alt = arrayAmount[i]; // 代替テキスト
