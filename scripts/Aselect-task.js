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
    // trader[8].style.display = "block";
    for (let i = 0; i < 8; i++) {
        document.getElementById("trader-name" + String(i)).style.display = "none";
    }
    for (let i = 0; i < taskAmount; i++) {
        var stait = document.getElementById("checkbox" + String(i)).checked;
        if (String(stait) == "false") {
            document.getElementById("task-card" + String(i)).style.display = "none";
        }
    }
}

function AllTasks() {
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
        document.getElementById("task-card" + String(i)).style.display = "inline-block";
    }
}
