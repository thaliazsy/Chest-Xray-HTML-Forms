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

    var select;

    //Affected Location
    select = document.getElementsByName("consolidation.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Distribution
    select = document.getElementsByName("consolidation.distribution")[0];
    component[1].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Density
    select = document.getElementsByName("consolidation.density")[0];
    component[2].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="consolidation.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[3].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Length
    select = document.getElementsByName("consolidation.length")[0];
    component[4].valueInteger = parseInt(select.value);

    //Width
    select = document.getElementsByName("consolidation.width")[0];
    component[5].valueInteger = parseInt(select.value);

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Location
    select = document.getElementsByName("ground_glass_opacity.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="ground_glass_opacity.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Length
    select = document.getElementsByName("ground_glass_opacity.length")[0];
    component[2].valueInteger = parseInt(select.value);

    //Width
    select = document.getElementsByName("ground_glass_opacity.width")[0];
    component[3].valueInteger = parseInt(select.value);

    //Types
    select = document.querySelectorAll('input[name="class1"]');
    for (const rb of select) {
        if (rb.checked) {
            component[4].valueCodeableConcept.coding[0].code = rb.value;
            break;
        }
    }

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Location
    select = document.getElementsByName("nodule.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="nodule.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Advanced Location
    select = document.querySelectorAll('input[name="position1"]');
    for (const rb of select) {
        if (rb.checked) {
            component[2].valueCodeableConcept.coding[0].code = rb.value;
            break;
        }
    }

    //Image Position X
    select = document.getElementsByName("nodule.x")[0];
    component[3].valueInteger = parseInt(select.value);

    //ImagePosition Y
    select = document.getElementsByName("nodule.y")[0];
    component[4].valueInteger = parseInt(select.value);

    //Size
    select = document.getElementsByName("nodule.diameter")[0];
    component[5].valueInteger = parseInt(select.value);

    //Calcification
    var checkboxes = document.querySelectorAll('input[name="class2"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[6].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Cavitation
    var checkboxes = document.querySelectorAll('input[name="class3"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[7].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Location
    select = document.getElementsByName("miliary_tb.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Position
    var checkboxes = document.querySelectorAll('input[name="miliary_tb.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Advanced Location
    select = document.querySelectorAll('input[name="position2"]');
    for (const rb of select) {
        if (rb.checked) {
            component[2].valueCodeableConcept.coding[0].code = rb.value;
            break;
        }
    }

    //Width
    select = document.getElementsByName("miliary_tb.diameter")[0];
    component[3].valueInteger = parseInt(select.value);

    //Types
    checkboxes = document.querySelectorAll('input[name="class4"]');
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[4].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Lobe Location
    select = document.getElementsByName("atelectasis.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Position
    var checkboxes = document.querySelectorAll('input[name="atelectasis.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Size
    select = document.getElementsByName("atelectasis.area")[0];
    component[2].valueInteger = parseInt(select.value);

    //Types
    checkboxes = document.querySelectorAll('input[name="class5"]');
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[3].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Types Desc
    checkboxes = document.querySelectorAll('input[name="class6"]');
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[4].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Location
    select = document.getElementsByName("hyperlucency.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="hyperlucency.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Length
    select = document.getElementsByName("hyperlucency.length")[0];
    component[2].valueInteger = parseInt(select.value);

    //Width
    select = document.getElementsByName("hyperlucency.width")[0];
    component[3].valueInteger = parseInt(select.value);

    //Types
    select = document.querySelectorAll('input[name="class7"]');
    for (const rb of select) {
        if (rb.checked) {
            component[4].valueCodeableConcept.coding[0].code = rb.value;
            break;
        }
    }

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Location
    select = document.getElementsByName("lung_abscess.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="lung_abscess.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Size
    select = document.getElementsByName("lung_abscess.pleural_cavity_size")[0];
    component[2].valueInteger = parseInt(select.value);

    //Types
    select = document.querySelectorAll('input[name="class8"]');
    for (const rb of select) {
        if (rb.checked) {
            component[3].valueCodeableConcept.coding[0].code = rb.value;
            break;
        }
    }

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Location
    select = document.getElementsByName("pleural_effusion.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="pleural_effusion.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Size
    select = document.getElementsByName("pleural_effusion.cavity_size")[0];
    component[2].valueInteger = parseInt(select.value);

    //Types
    var checkboxes = document.querySelectorAll('input[name="class9"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[3].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    Observation["component"] = Observation["component"].concat(component);
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

    var select;

    //Affected Location
    select = document.getElementsByName("fibrosis.location")[0];
    component[0].valueCodeableConcept.coding[0].code = select.options[select.selectedIndex].value;

    //Affected Lobe
    var checkboxes = document.querySelectorAll('input[name="fibrosis.position"]'); //ambil smua kotak
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {                   //cek tiap textbox
        var checkbox = checkboxes[i];
        if (checkbox.checked) checked.push(checkbox.value);         //kalo di ceklist, msukin ke array
    }
    var selectedCboxes = checked.join(',');                         //arraynya jadiin string, digabung pake koma
    component[1].valueCodeableConcept.coding[0].code = selectedCboxes;  //masukin ke json nya

    //Length
    select = document.getElementsByName("fibrosis.length")[0];
    component[2].valueInteger = parseInt(select.value);

    //Width
    select = document.getElementsByName("fibrosis.width")[0];
    component[3].valueInteger = parseInt(select.value);

    Observation["component"] = Observation["component"].concat(component);
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