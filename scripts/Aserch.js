
var taskAmount = 284;

var serchbox = document.getElementById("serchbox");
var serchbox02 = document.getElementById("serchbox02");
function Serch() {

    // imgarea(土台)を再生成
    document.getElementById("imgarea").remove();
    var imgarea = document.getElementById("imgareaOuter");
    var base_element = document.createElement("div");
    base_element.setAttribute("id", "imgarea");
    imgarea.appendChild(base_element);

    let lastResult = [];
    value = serchbox.value;
    value = String(value).toLowerCase();
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
    value = String(value).toLowerCase();
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
    "debut",
    "search mission",
    "checking",
    "shootout picnic",
    "delivery from the past",
    "bp depot", "the bunker - part 1",
    "the bunker - part 2",
    "bad rep evidence",
    "ice cream cones",
    "no place for renegades",
    "documents",
    "postman pat - part 1",
    "you've got mail",
    "glory to cpsu",
    "shaking up teller",
    "the punisher - part 1",
    "the punisher - part 2",
    "the punisher - part 3",
    "the punisher - part 4",
    "the punisher - part 5",
    "kings of the rooftops",
    "best job in the world",
    "the punisher - part 6",
    "anesthesia",
    "grenadier",
    "insomnia",
    "test drive - part 1",
    "perfect mediator",
    "polikhim hobo",
    "regulated materials",
    "big customer",
    "no offence",
    "capturing outposts",
    "intimidator",
    "escort",
    "easy job - part 1",
    "easy job - part 2",
    "our own land",
    "reconnaissance",
    // therapist
    "shortage",
    "operation aquarius - part 1",
    "operation aquarius - part 2",
    "sanitary standards - part 1",
    "sanitary standards - part 2",
    "painkiller",
    "pharmacist",
    "population census",
    "urban medicine",
    "car repair",
    "hippocratic oath",
    "disease history",
    "supply plans",
    "dangerous road",
    "health care privacy - part 1",
    "health care privacy - part 2",
    "health care privacy - part 3",
    "an apple a day keeps the doctor away",
    "health care privacy - part 4",
    "athlete",
    "private clinic",
    "health care privacy - part 5",
    "decontamination service",
    "general wares",
    "colleagues - part 1",
    "colleagues - part 2",
    "colleagues - part 3",
    "postman pat - part 2",
    "out of curiosity",
    "trust regain",
    "crisis",
    "seaside vacation",
    "lost contact",
    "drug trafficking",
    // fence
    "collector",
    "the choice",
    // skier
    "supplier",
    "the extortionist",
    "stirrup",
    "what's on the flash drive?",
    "golden swag",
    "chemical - part 1",
    "chemical - part 2",
    "chemical - part 3",
    "chemical - part 4",
    "loyalty buyout",
    "vitamins - part 1",
    "vitamins - part 2",
    "friend from the west - part 1",
    "friend from the west - part 2",
    "informed means armed",
    "chumming",
    "debtor",
    "house arrest - part 1",
    "silent caliber",
    "bullshit",
    "setup",
    "flint",
    "lend-lease - part 1",
    "kind of sabotage",
    "rigged game",
    "safe corridor",
    "night sweep",
    "long road",
    "missing cargo",
    "top secret",
    // peacekeeper
    "fishing gear",
    "tigr safari",
    "scrap metal",
    "eagle eye",
    "humanitarian supplies",
    "the cult - part 1",
    "the cult - part 2",
    "spa tour - part 1",
    "spa tour - part 2",
    "spa tour - part 3",
    "spa tour - part 4",
    "spa tour - part 5",
    "spa tour - part 6",
    "spa tour - part 7",
    "road closed",
    "cargo x - part 1",
    "cargo x - part 2",
    "cargo x - part 3",
    "cargo x - part 4",
    "wet job - part 1",
    "wet job - part 2",
    "wet job - part 3",
    "wet job - part 4",
    "wet job - part 5",
    "worst job in the world",
    "mentor",
    "wet job - part 6",
    "the guide",
    "samples",
    "terragroup employee",
    "lend-lease - part 2",
    "peacekeeping mission",
    "classified technologies",
    "revision - reserve",
    "revision - lighthouse",
    "revision - streets of tarkov",
    "the cleaner",
    "special equipment",
    "counteraction",
    "overpopulation",
    "trophies",
    // mechanic
    "introduction",
    "gunsmith - part 1",
    "gunsmith - part 2",
    "gunsmith - part 3",
    "gunsmith - part 4",
    "gunsmith - part 5",
    "gunsmith - part 6",
    "gunsmith - part 7",
    "gunsmith - part 8",
    "gunsmith - part 9",
    "gunsmith - part 10",
    "gunsmith - part 11",
    "gunsmith - part 12",
    "gunsmith - part 13",
    "gunsmith - part 14",
    "gunsmith - part 15",
    "gunsmith - part 16",
    "gunsmith - part 17",
    "gunsmith - part 19",
    "gunsmith - part 20",
    "gunsmith - part 21",
    "gunsmith - part 22",
    "signal - part 1",
    "insider",
    "signal - part 2",
    "scout",
    "surplus goods",
    "back door",
    "signal - part 3",
    "signal - part 4",
    "farming - part 1",
    "farming - part 2",
    "farming - part 3",
    "farming - part 4",
    "bad habit",
    "psycho sniper",
    "a shooter born in heaven",
    "fertilizers",
    "import",
    "chemistry closet",
    "calibration",
    "the courier",
    "corporate secrets",
    "energy crisis",
    "broadcast - part 1",
    "broadcast - part 2",
    "watching you",
    "surveillance",
    "network provider - part 1",
    "network provider - part 2",
    "assessment - part 1",
    "assessment - part 2",
    "assessment - part 3",
    // ragman
    "only business",
    "audit",
    "ballet lover",
    "audiophile",
    "harley forever",
    "make ultra great again",
    "big sale",
    "a fuel matter",
    "inventory check",
    "the blood of war - part 1",
    "dressed to kill",
    "gratitude",
    "hot delivery",
    "scavenger",
    "sales night",
    "database - part 1",
    "database - part 2",
    "minibus",
    "sew it good - part 1",
    "the blood of war - part 2",
    "the blood of war - part 3",
    "living high is not a crime - part 2",
    "sew it good - part 2",
    "the key to success",
    "no fuss needed",
    "the stylish one",
    "supervisor",
    "sew it good - part 3",
    "living high is not a crime - part 1",
    "sew it good - part 4",
    "charisma brings success",
    "textile - part 1",
    "textile - part 2",
    "long line",
    "booze",
    // jaeger
    "acquaintance",
    "the survivalist path - unprotected but dangerous",
    "the survivalist path - thrifty",
    "the delicious sausage",
    "cease fire!",
    "the survivalist path - zhivchik",
    "the survivalist path - wounded beast",
    "the survivalist path - tough guy",
    "courtesy visit",
    "nostalgia",
    "the survivalist path - cold blooded",
    "the survivalist path - junkie",
    "the survivalist path - eagle-owl",
    "the survivalist path - combat medic",
    "ambulance",
    "the huntsman path - secured perimeter",
    "reserve",
    "the huntsman path - forest cleaning",
    "the huntsman path - administrator",
    "the huntsman path - controller",
    "the huntsman path - evil watchman",
    "fishing place",
    "the huntsman path - trophy",
    "the huntsman path - justice",
    "the huntsman path - sellout",
    "the huntsman path - woods keeper",
    "hunting trip",
    "the huntsman path - factory chief",
    "the huntsman path - eraser - part 1",
    "the huntsman path - eraser - part 2",
    "the tarkov shooter - part 1",
    "the tarkov shooter - part 2",
    "the tarkov shooter - part 3",
    "the tarkov shooter - part 4",
    "the tarkov shooter - part 5",
    "the tarkov shooter - part 6",
    "the tarkov shooter - part 7",
    "the tarkov shooter - part 8",
    "shady business",
    "the huntsman path - sadist",
    "hunter",
    "pest control",
    "swift one",
    "the huntsman path - relentless",
    "the hermit",
    "the huntsman path - outcasts",
    "stray dogs",
    "broadcast - part 3",
    "broadcast - part 4"
];

