function validate(){
    var name = document.getElementById("nameText");
    var age = document.getElementById("ageText");
    var sex = document.getElementById("sexText");
    var tel = document.getElementById("telText");
    var adr = document.getElementById("addressText");
    if(name.value == null||name.value == ""||
    age.value == null||age.value == ""||
    sex.value == null||sex.value == ""||
    tel.value == null||tel.value == ""||
    adr.value == null||adr.value == ""){
        alert("有项目为空");
        return false;
    }
    addRow();
}

function addRow() {
    var name = document.getElementById("nameText");
    var age = document.getElementById("ageText");
    var sex = document.getElementById("sexText");
    var tel = document.getElementById("telText");
    var adr = document.getElementById("addressText");
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    var array = [name.value, age.value, sex.value, tel.value, adr.value];
    for (i = 0; i < 5; i++) {
        var td = document.createElement("td");
        var txt = document.createTextNode(array[i]);
        td.appendChild(txt);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    return true;
}
function deleteRow() {

}