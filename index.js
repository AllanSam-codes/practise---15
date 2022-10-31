var output = document.querySelector("#output-txt");
var button = document.querySelector("#btn")

var ramData = {
    name: "Ram",
    age: 20,
    yuga: "Treta",
    power: 8000
};

var KrishnaData = {
    name: "Krishna",
    age: 8,
    yuga: "Dwapar",
    power: 4000
};

function checkPower(ramData, KrishnaData) {
    if (ramData.power > KrishnaData.KrishnaData) {
        output.innerText = ramData.name
    } else {
        output.innerText = KrishnaData.name
    }
}


button.addEventListener('click', function() {
    checkPower(ramData, KrishnaData)
})