
var taskAmount = 284;

var serchbox = document.getElementById("serchbox");
var serchbox02 = document.getElementById("serchbox02");
function Serch() {
    document.getElementById("task-card" + String(lastResult[i])).style.display = "none";

    // imgarea(土台)を再生成
    document.getElementById("imgarea").remove();
    var imgarea = document.getElementById("imgareaOuter");
    var base_element = document.createElement("div");
    base_element.setAttribute("id", "imgarea");
    imgarea.appendChild(base_element);

    let lastResult = [];
    value = serchbox.value;
    //全タスク非表示
    for (let i = 0; i < taskAmount; i++) {
        document.getElementById("task-card" + String(i)).style.display = "none";
    }
    //全トレーダー名非表示
    for (let i = 0; i < 8; i++) {
        document.getElementById("trader-name" + String(i)).style.display = "none";
    }
    //検索結果導出
    for (i = 0; i < taskAmount; i++) {
        state = task[i].indexOf(value);
        if (state == 0) {
            console.log(task[i]);
            result = task.indexOf(task[i]);
            lastResult.push(result);
        }
    }
    console.log(lastResult);
    for (i = 0; i < lastResult.length; i++) {
        document.getElementById("task-card" + String(lastResult[i])).style.display = "block";
    }
}

function SerchtoHeader() {
    // imgarea(土台)を再生成
    document.getElementById("imgarea").remove();
    var imgarea = document.getElementById("imgareaOuter");
    var base_element = document.createElement("div");
    base_element.setAttribute("id", "imgarea");
    imgarea.appendChild(base_element);

    let lastResult = [];
    value = serchbox02.value;
    //全タスク非表示
    for (let i = 0; i < taskAmount; i++) {
        document.getElementById("task-card" + String(i)).style.display = "none";
    }
    //全トレーダー名非表示
    for (let i = 0; i < 8; i++) {
        document.getElementById("trader-name" + String(i)).style.display = "none";
    }
    //検索結果導出
    for (i = 0; i < taskAmount; i++) {
        state = task[i].indexOf(value);
        if (state == 0) {
            console.log(task[i]);
            result = task.indexOf(task[i]);
            lastResult.push(result);
        }
    }
    console.log(lastResult);
    for (i = 0; i < lastResult.length; i++) {
        document.getElementById("task-card" + String(lastResult[i])).style.display = "block";
    }
}



var task = [
    // praper
    "Debut",
    "Search mission",
    "Checking",
    "Shootout picnic",
    "Delivery from the past",
    "BP depot", "The bunker - Part 1",
    "The bunker - Part 2",
    "Bad rep evidence",
    "Ice cream cones",
    "No place for renegades",
    "Documents",
    "Postman Pat - Part 1",
    "You've Got Mail",
    "Glory to CPSU",
    "Shaking up teller",
    "The Punisher - Part 1",
    "The Punisher - Part 2",
    "The Punisher - Part 3",
    "The Punisher - Part 4",
    "The Punisher - Part 5",
    "Kings of the Rooftops",
    "Best Job in the World",
    "The Punisher - Part 6",
    "Anesthesia",
    "Grenadier",
    "Insomnia",
    "Test drive - Part 1",
    "Perfect mediator",
    "Polikhim hobo",
    "Regulated materials",
    "Big customer",
    "No offence",
    "Capturing Outposts",
    "Intimidator",
    "Escort",
    "Easy Job - Part 1",
    "Easy Job - Part 2",
    "Our Own Land",
    "Reconnaissance",
    // Therapist
    "Shortage",
    "Operation Aquarius - Part 1",
    "Operation Aquarius - Part 2",
    "Sanitary Standards - Part 1",
    "Sanitary Standards - Part 2",
    "Painkiller",
    "Pharmacist",
    "Population Census",
    "Urban Medicine",
    "Car repair",
    "Hippocratic Oath",
    "Disease history",
    "Supply plans",
    "Dangerous Road",
    "Health Care Privacy - Part 1",
    "Health Care Privacy - Part 2",
    "Health Care Privacy - Part 3",
    "An Apple a Day Keeps the Doctor Away",
    "Health Care Privacy - Part 4",
    "Athlete",
    "Private clinic",
    "Health Care Privacy - Part 5",
    "Decontamination service",
    "General wares",
    "Colleagues - Part 1",
    "Colleagues - Part 2",
    "Colleagues - Part 3",
    "Postman Pat - Part 2",
    "Out of curiosity",
    "Trust regain",
    "Crisis",
    "Seaside Vacation",
    "Lost Contact",
    "Drug Trafficking",
    // Fence
    "Collector",
    "The Choice",
    // Skier
    "Supplier",
    "The Extortionist",
    "Stirrup",
    "What's on the flash drive?",
    "Golden Swag",
    "Chemical - Part 1",
    "Chemical - Part 2",
    "Chemical - Part 3",
    "Chemical - Part 4",
    "Loyalty buyout",
    "Vitamins - Part 1",
    "Vitamins - Part 2",
    "Friend from the West - Part 1",
    "Friend from the West - Part 2",
    "Informed means armed",
    "Chumming",
    "Debtor",
    "House Arrest - Part 1",
    "Silent caliber",
    "Bullshit",
    "Setup",
    "Flint",
    "Lend-Lease - Part 1",
    "Kind of sabotage",
    "Rigged game",
    "Safe corridor",
    "Night Sweep",
    "Long Road",
    "Missing Cargo",
    "Top Secret",
    // PeaceKeeper
    "Fishing Gear",
    "Tigr Safari",
    "Scrap Metal",
    "Eagle Eye",
    "Humanitarian Supplies",
    "The Cult - Part 1",
    "The Cult - Part 2",
    "Spa Tour - Part 1",
    "Spa Tour - Part 2",
    "Spa Tour - Part 3",
    "Spa Tour - Part 4",
    "Spa Tour - Part 5",
    "Spa Tour - Part 6",
    "Spa Tour - Part 7",
    "Road Closed",
    "Cargo X - Part 1",
    "Cargo X - Part 2",
    "Cargo X - Part 3",
    "Cargo X - Part 4",
    "Wet Job - Part 1",
    "Wet Job - Part 2",
    "Wet Job - Part 3",
    "Wet Job - Part 4",
    "Wet Job - Part 5",
    "Worst Job in the World",
    "Mentor",
    "Wet Job - Part 6",
    "The guide",
    "Samples",
    "TerraGroup employee",
    "Lend-Lease - Part 2",
    "Peacekeeping mission",
    "Classified Technologies",
    "Revision - Reserve",
    "Revision - Lighthouse",
    "Revision - Streets of Tarkov",
    "The Cleaner",
    "Special Equipment",
    "Counteraction",
    "Overpopulation",
    "Trophies",
    // Mechanic
    "Introduction",
    "Gunsmith - Part 1",
    "Gunsmith - Part 2",
    "Gunsmith - Part 3",
    "Gunsmith - Part 4",
    "Gunsmith - Part 5",
    "Gunsmith - Part 6",
    "Gunsmith - Part 7",
    "Gunsmith - Part 8",
    "Gunsmith - Part 9",
    "Gunsmith - Part 10",
    "Gunsmith - Part 11",
    "Gunsmith - Part 12",
    "Gunsmith - Part 13",
    "Gunsmith - Part 14",
    "Gunsmith - Part 15",
    "Gunsmith - Part 16",
    "Gunsmith - Part 17",
    "Gunsmith - Part 19",
    "Gunsmith - Part 20",
    "Gunsmith - Part 21",
    "Gunsmith - Part 22",
    "Signal - Part 1",
    "Insider",
    "Signal - Part 2",
    "Scout",
    "Surplus goods",
    "Back door",
    "Signal - Part 3",
    "Signal - Part 4",
    "Farming - Part 1",
    "Farming - Part 2",
    "Farming - Part 3",
    "Farming - Part 4",
    "Bad habit",
    "Psycho Sniper",
    "A Shooter Born in Heaven",
    "Fertilizers",
    "Import",
    "Chemistry closet",
    "Calibration",
    "The Courier",
    "Corporate Secrets",
    "Energy Crisis",
    "Broadcast - Part 1",
    "Broadcast - Part 2",
    "Watching You",
    "Surveillance",
    "Network Provider - Part 1",
    "Network Provider - Part 2",
    "Assessment - Part 1",
    "Assessment - Part 2",
    "Assessment - Part 3",
    // Ragman
    "Only business",
    "Audit",
    "Ballet Lover",
    "Audiophile",
    "Harley Forever",
    "Make ULTRA Great Again",
    "Big sale",
    "A Fuel Matter",
    "Inventory Check",
    "The Blood of War - Part 1",
    "Dressed to kill",
    "Gratitude",
    "Hot delivery",
    "Scavenger",
    "Sales Night",
    "Database - Part 1",
    "Database - Part 2",
    "Minibus",
    "Sew it good - Part 1",
    "The Blood of War - Part 2",
    "The Blood of War - Part 3",
    "Living High is Not a Crime - Part 2",
    "Sew it good - Part 2",
    "The key to success",
    "No fuss needed",
    "The stylish one",
    "Supervisor",
    "Sew it good - Part 3",
    "Living High is Not a Crime - Part 1",
    "Sew it good - Part 4",
    "Charisma brings success",
    "Textile - Part 1",
    "Textile - Part 2",
    "Long Line",
    "Booze",
    // Jaeger
    "Acquaintance",
    "The Survivalist Path - Unprotected but Dangerous",
    "The survivalist path - Thrifty",
    "The Delicious Sausage",
    "Cease Fire!",
    "The survivalist path - Zhivchik",
    "The survivalist path - Wounded beast",
    "The survivalist path - Tough guy",
    "Courtesy visit",
    "Nostalgia",
    "The survivalist path - Cold blooded",
    "The survivalist path - Junkie",
    "The survivalist path - Eagle-owl",
    "The survivalist path - Combat medic",
    "Ambulance",
    "The Huntsman Path - Secured Perimeter",
    "Reserve",
    "The Huntsman Path - Forest Cleaning",
    "The Huntsman Path - Administrator",
    "The Huntsman Path - Controller",
    "The Huntsman Path - Evil Watchman",
    "Fishing place",
    "The Huntsman Path - Trophy",
    "The Huntsman Path - Justice",
    "The Huntsman Path - Sellout",
    "The Huntsman Path - Woods Keeper",
    "Hunting trip",
    "The Huntsman Path - Factory Chief",
    "The Huntsman Path - Eraser - Part 1",
    "The Huntsman Path - Eraser - Part 2",
    "The Tarkov shooter - Part 1",
    "The Tarkov shooter - Part 2",
    "The Tarkov shooter - Part 3",
    "The Tarkov shooter - Part 4",
    "The Tarkov shooter - Part 5",
    "The Tarkov shooter - Part 6",
    "The Tarkov shooter - Part 7",
    "The Tarkov shooter - Part 8",
    "Shady business",
    "The Huntsman Path - Sadist",
    "Hunter",
    "Pest control",
    "Swift One",
    "The Huntsman Path - Relentless",
    "The Hermit",
    "The Huntsman Path - Outcasts",
    "Stray Dogs",
    "Broadcast - Part 3",
    "Broadcast - Part 4"
];

