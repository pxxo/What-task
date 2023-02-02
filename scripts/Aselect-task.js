var taskAmount = 284;

var trader = document.getElementsByClassName("trader");
function SelectTasks() {
    trader[0].style.display = "block";
    trader[1].style.display = "block";
    trader[2].style.display = "block";
    trader[3].style.display = "block";
    trader[4].style.display = "block";
    trader[5].style.display = "block";
    trader[6].style.display = "block";
    trader[7].style.display = "block";

    for (let i = 0; i < 8; i++) {
        document.getElementById("trader-name" + String(i)).style.display = "none";
    }
    // var staitArray = [];
    // for (let i = 0; i < taskAmount; i++) {
    //     var stait = document.getElementById("checkbox" + String(i)).checked;
    //     // console.log(stait);
    //     if (stait) {
    //         staitArray.push(i);
    //     }
    // }

    var post = [];
    var itemArray = [];

    for (i = 0; i < taskAmount; i++) {
        var stait = document.getElementById("checkbox" + String(i)).checked;
        if (String(stait) == "false") {
            document.getElementById("task-card" + String(i)).style.display = "none";
        } else if (stait) {
            post.push(i);
        }
    }
    if (post.length == 0) {
        document.getElementById("imgarea").remove();
        var imgarea = document.getElementById("imgareaOuter");
        var base_element = document.createElement("div");
        base_element.setAttribute("id", "imgarea");
        imgarea.appendChild(base_element);
        document.getElementById("unfindAlert").style.display = "block";
        return;
    }

    // ここからarray.js
    var getnum = post
    //ItemのDB(連想配列)

    //指定のタスクに必要なアイテムを全部結合させる

    for (i = 0; i < getnum.length; i++) {
        result = getnum[i]
        taskResult = tasks[result];
        if (taskResult['itemnum']) {
            itemArray.push(taskResult['itemnum']);
        }
    }

    ItemNum = itemArray.join();
    ItemNum = ItemNum.split(',')

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
    for (i = 0; i < arr.length; i++) {
        var elm = arr[i];
        count[elm] = (count[elm] || 0) + 1;
    }

    arrayAmount = count;
    var key = Object.keys(arrayAmount);

    var itemName = [];
    var itemAmount = [];

    for (i = 0; i < item.length; i++) {
        itemName.push(key[i]);
        itemAmount.push(arrayAmount[key[i]]);
    }

    console.log(itemName);
    console.log(itemAmount);

    // imgarea(土台)を再生成
    document.getElementById("imgarea").remove();
    var imgarea = document.getElementById("imgareaOuter");
    var base_element = document.createElement("div");
    base_element.setAttribute("id", "imgarea");
    imgarea.appendChild(base_element);

    for (i = 0; i < itemName.length; i++) {
        // 画像生成
        var img_element = document.createElement('img');
        if (String(item[i]) != "NaN" && itemName.join() != "") {
            img_element.src = 'item/item' + String(item[i]) + '.png'; // 画像パス
            // img_element.width = 100; // 横サイズ（px）
            // img_element.height = 100; // 縦サイズ（px）

            // div生成
            var div_element = document.createElement('div');
            div_element.classList.add("imgzone");
            div_element.setAttribute("id", "imgzone" + String(i))

            // img_element.width = 100; // 横サイズ（px）
            // img_element.height = 100; // 縦サイズ（px）

            //改行
            let new_element = document.createElement('br');

            // アイテム名のtext生成
            let name_element = document.createElement('span');
            name_element.classList.add("itemName");
            name_element.innerHTML = itemNameArr[Number(itemName[i]) - 1];
            name_element.setAttribute("id", "ItemNameText" + String(i))

            // アイテム数のtext生成
            let amount_element = document.createElement('span');
            amount_element.classList.add("itemAmount");
            amount_element.innerHTML = "x" + String(itemAmount[i]) + "個";
            amount_element.setAttribute("id", "ItemAmountText" + String(i))

            // 要素を挿入
            let content_area = document.getElementById("imgarea");
            content_area.appendChild(div_element);
            var imgzone = document.getElementById("imgzone" + String(i));
            imgzone.appendChild(img_element);
            imgzone.appendChild(new_element);
            imgzone.appendChild(name_element);
            imgzone.appendChild(amount_element);
            post.pop();
        }
    }
    // ここまで array.js


    // for (let i = 0; i < taskAmount; i++) {

    // }
}


function AllTasks() {
    document.getElementById("unfindAlert").style.display = "none";
    // imgarea(土台)を再生成
    document.getElementById("imgarea").remove();
    var imgarea = document.getElementById("imgareaOuter");
    var base_element = document.createElement("div");
    base_element.setAttribute("id", "imgarea");
    imgarea.appendChild(base_element);

    trader[0].style.display = "block";
    trader[1].style.display = "block";
    trader[2].style.display = "block";
    trader[3].style.display = "block";
    trader[4].style.display = "block";
    trader[5].style.display = "block";
    trader[6].style.display = "block";
    trader[7].style.display = "block";
    for (let i = 0; i < 8; i++) {
        document.getElementById("trader-name" + String(i)).style.display = "block";
    }
    for (let i = 0; i < taskAmount; i++) {
        document.getElementById("task-card" + String(i)).style.display = "block";
    }
}

function slideChange() {
    var checkStait = document.getElementById("cb_toggle_switch").checked;
    if (String(checkStait) == "false") {
        AllTasks();
    } else if (checkStait) {
        SelectTasks();
    }
}