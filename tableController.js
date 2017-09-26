
function addRow() {
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    var name = document.getElementById("nameText");
    var age = document.getElementById("ageText");
    var sex = document.getElementById("sexText");
    var tel = document.getElementById("telText");
    var adr = document.getElementById("addressText");
    var array = [name.value, age.value, sex.value, tel.value, adr.value];
    for (i = 0; i < 5; i++) {
        var td = document.createElement("td");
        var txt = document.createTextNode(array[i]);
        td.appendChild(txt);
        tr.appendChild(td);
        table.appendChild(tr);
    }
}
function deleteRow() {

}