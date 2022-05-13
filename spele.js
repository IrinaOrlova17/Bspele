var vards;
var pVards;
var rezultatsIndex = 0;
var startsLaiks;
var izmantotiBurti = [];

function startSpele() {

    startsLaiks = Date.now();
    rezultatsIndex = 0;
    document.getElementById("rezultats").textContent = "";

    fetch('https://replit.com/@IrinaOrlova3/BSpele/random-vards')
        .then((response) => {
            return response.text().then((text) => {
                pVards = text;
                vards = text.split('').sort(function(){return 0.5-Math.random()}).join('');

                let vardsCode = '';
                let rVardsCode = '';
                for (var i=0; i<vards.length; i++) {
            
                    vardsCode += '<div id="b' + i + '" class="block" onclick="izveleBurta(this);">' + vards[i] + '</div>';
                    rVardsCode += '<div id="rb' + i + '" class="block" onclick="notirit(' + i + ');"></div>';
            
                }
            
                document.querySelector("#sakumVards").innerHTML = vardsCode;
                document.querySelector("#resultVards").innerHTML = rVardsCode;
                
                document.querySelector("#sakumVards").style.display = "inline-block";
                document.querySelector("#resultVards").style.display = "inline-block";
                document.querySelector("#resultatsLabel").style.display = "block";
            });
        });
    
}

function izveleBurta(element) {

    if (!element.classList.contains("izmantotsBurts")) {        
        var elementTeksts = element.textContent;
        document.getElementById("rb"+rezultatsIndex).textContent = elementTeksts;
        izmantotiBurti[rezultatsIndex++] = element.getAttribute("id");
        element.classList.add("izmantotsBurts");

        if (rezultatsIndex == pVards.length) {
            beigaSpele();
        }
    }

}

function notirit(rbIndex){
    console.log(rbIndex, rezultatsIndex, izmantotiBurti);
    if (rbIndex == rezultatsIndex - 1){
        document.getElementById("rb"+ -- rezultatsIndex).textContent = "";
        document.getElementById(izmantotiBurti[rezultatsIndex]).classList.remove("izmantotsBurts");
    }
}

function beigaSpele() {

    var iegVards = "";
    for (var i=0; i<pVards.length; i++) {
        iegVards += document.getElementById("rb"+i).textContent;
    }

    var rezultatsTeksts;
    if (pVards == iegVards) {
        var rezultatsLaiks = (Date.now() - startsLaiks) / 1000;
        rezultatsTeksts = "Uzminēji vārdu " + rezultatsLaiks + " sek.";
        var speletajs = document.getElementById("speletajs").textContent;
        if(speletajs == '#'){
            speletajs += "speletajs";
        }
        let spelesRezultats = {
            vards: speletajs,
            laiks: rezultatsLaiks
        };

        fetch('https://replit.com/@IrinaOrlova3/BSpele/speletaja-rezultats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(spelesRezultats)
        });
        
    } else {
        rezultatsTeksts = "Neuzminēji vārdu";
    }
    document.getElementById("rezultats").textContent = rezultatsTeksts;

}