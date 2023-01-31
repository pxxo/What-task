var taskAmount = 284;

for (let i = 0; i < taskAmount; i++) {
    var stait = document.getElementById("checkbox" + String(i)).checked;
    if (String(stait) == "false") {
        document.getElementById("task-card" + String(i)).style.display = "none";
    }
}