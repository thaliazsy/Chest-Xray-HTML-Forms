//FHIR server
var fhir = {
    "url": "https://hapi.fhir.org/baseR4/"
}

//FHIR Observation JSON Object
//ini templatenya
var Observation = 
{
    "resourceType": "Observation",
    "subject": {
        "reference": "Patient/1479506"
    },
    "component": []
}

function HTTPPostData(urlStr, dataStr) {
    var HttpObj = new XMLHttpRequest();
    HttpObj.open("POST", urlStr, true);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
    HttpObj.onreadystatechange = function () {
            if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            alert(ret);
        }   
    }
    HttpObj.send(dataStr);
}

function addComponentsType1() {
    var component = //Tempat simpan hasil observation
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "PulmonaryConsolidation", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "PulmonaryConsolidation/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": "" // value (yg kita input di website)
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "PulmonaryConsolidation", 
                "code": "AffectedSide/Distribution"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "PulmonaryConsolidation/AffectedSide/Distribution",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "PulmonaryConsolidation", 
                "code": "AffectedSide/Density"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "PulmonaryConsolidation/AffectedSide/Density",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "PulmonaryConsolidation", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "PulmonaryConsolidation/AffectedLobe",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "PulmonaryConsolidation", 
                "code": "Size/Length"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "PulmonaryConsolidation", 
                "code": "Size/Width"
            }]},
        "valueInteger": 0
        }
    ];


}

function addComponentsType2() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "GroundGlassOpacity", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
        }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "GroundGlassOpacity/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
        }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "GroundGlassOpacity", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "GroundGlassOpacity/AffectedLobe",
                "code": ""
        }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "GroundGlassOpacity", 
                "code": "Size/Length"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "GroundGlassOpacity", 
                "code": "Size/Width"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "GroundGlassOpacity", 
                "code": "Types"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "GroundGlassOpacity/Types",
                "code": ""
            }]}
        }
    ];


}

function addComponentsType3() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "NodularMassPattern", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "NodularMassPattern/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "NodularMassPattern", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "NodularMassPattern/AffectedLobe",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "NodularMassPattern", 
                "code": "AdvancedLocation"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "NodularMassPattern/AdvancedLocation",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "NodularMassPattern", 
                "code": "ImagePosition/X"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "NodularMassPattern", 
                "code": "ImagePosition/Y"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "NodularMassPattern", 
                "code": "Size/Diameter"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "NodularMassPattern", 
                "code": "Types/Calcification"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "NodularMassPattern/Types/Calcification",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "NodularMassPattern", 
                "code": "Types/Cavitation"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "NodularMassPattern/Types/Cavitation",
                "code": ""
            }]}
        }
    ];


}

function addComponentsType4() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "MiliaryTuberculosis", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedLobe/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "MiliaryTuberculosis/AffectedLobe/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "MiliaryTuberculosis", 
                "code": "Position"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "MiliaryTuberculosis/Position",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "MiliaryTuberculosis", 
                "code": "AdvancedLocation"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "MiliaryTuberculosis/AdvancedLocation",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "MiliaryTuberculosis", 
                "code": "Size/Diameter"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "MiliaryTuberculosis", 
                "code": "Types"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "MiliaryTuberculosis/Types",
                "code": ""
            }]}
        }
    ];


}

function addComponentsType5() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "Atelectasis", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedLobe/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "Atelectasis/AffectedLobe/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "Atelectasis", 
                "code": "Position"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "Atelectasis/Position",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "Atelectasis", 
                "code": "Size/Area"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "Atelectasis", 
                "code": "Types/SolidDistress"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "Atelectasis/Types/SolidDistress",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "Atelectasis", 
                "code": "Types/SolidDistressDesc"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "Atelectasis/Types/SolidDistressDesc",
                "code": ""
            }]}
        }
    ];

    
}

function addComponentsType6() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "HyperlucenctLung", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "HyperlucenctLung/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": "" // value (yg kita input di website)
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "HyperlucenctLung", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "HyperlucenctLung/AffectedLobe",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "HyperlucenctLung", 
                "code": "Size/Length"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "HyperlucenctLung", 
                "code": "Size/Width"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "HyperlucenctLung", 
                "code": "Types"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "HyperlucenctLung/Types",
                "code": ""
            }]}
        }
    ];


}

function addComponentsType7() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "ThoracicEmpyema", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "ThoracicEmpyema/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "ThoracicEmpyema", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "ThoracicEmpyema/AffectedLobe",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "ThoracicEmpyema", 
                "code": "PleuralCavitySize"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "ThoracicEmpyema", 
                "code": "Types"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "ThoracicEmpyema/Types",
                "code": ""
            }]}
        }
    ];


}

function addComponentsType8() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "PleuralEffusion", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "PleuralEffusion/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "PleuralEffusion", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "PleuralEffusion/AffectedLobe",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "PleuralEffusion", 
                "code": "CavitySize"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "PleuralEffusion", 
                "code": "Types"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "PleuralEffusion/Types",
                "code": ""
            }]}
        }
    ];

    
}

function addComponentsType9() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "Fibrosis", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "Fibrosis/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "Fibrosis", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "Fibrosis/AffectedLobe",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "Fibrosis", 
                "code": "Size/Length"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "Fibrosis", 
                "code": "Size/Width"
            }]},
        "valueInteger": 0
        }
    ];


}

function addComponentsType10() {
    var component =
    [{
        "code": {  //Kode Observasinya
            "coding": [{ 
                "system": "Bronchiectasis", //Definisi (sistem) kodenya, format: nama formnya
                "code": "AffectedSide/Location" //simpan kodenya->format: observation/kolom
            }]},
        "valueCodeableConcept": { //simpan value observasinya (yang di input)
            "coding": [{
                "system": "Bronchiectasis/AffectedSide/Location", //definisi kode ->format: NamaForm/Kolom/Kolom
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "Bronchiectasis", 
                "code": "AffectedLobe"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "Bronchiectasis/AffectedLobe",
                "code": ""
            }]}
        },
        {"code": { 
            "coding": [{ 
                "system": "Bronchiectasis", 
                "code": "Expansion"
            }]},
        "valueInteger": 0
        },
        {"code": { 
            "coding": [{ 
                "system": "Bronchiectasis", 
                "code": "Types"
            }]},
        "valueCodeableConcept": {
            "coding": [{
                "system": "Bronchiectasis/Types",
                "code": ""
            }]}
        }
    ];
    
    var select;

    //Affected Location
    select = document.getElementsByName("bronchiectasis.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="bronchiectasis.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Size
    select = document.getElementsByName("bronchiectasis.expansion")[0];
    component[2].valueInteger = parseInt(select.value);

    //Types
    var checkboxes = document.querySelectorAll('input[name="class10"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[3].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya    
    
    Observation["component"] = Observation["component"].concat(component);
}