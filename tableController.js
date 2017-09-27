function addRow() {
    var name = document.getElementById("nameText");
    var age = document.getElementById("ageText");
    var sex = document.getElementById("sexText");
    var tel = document.getElementById("telText");
    var adr = document.getElementById("addressText");
    var table = document.getElementById("addressList");
    var tr = document.createElement("tr");
    var array = [name.value, age.value, sex.value, tel.value, adr.value];
    for (i = 0; i < 5; i++) {
        var td = document.createElement("td");
        var txt = document.createTextNode(array[i]);
        td.appendChild(txt);
        tr.appendChild(td);
        table.appendChild(tr);
    }

}

/** 
 * 遍历表格内容返回数组
 * @param  Int   id 表格id
 * @return Array
 */
function getTableContent(id) {
    var mytable = document.getElementById(id);
    var data = [];
    for (var i = 0, rows = mytable.rows.length; i < rows; i++) {
        for (var j = 0, cells = mytable.rows[i].cells.length; j < cells; j++) {
            if (!data[i]) {
                data[i] = new Array();
            }
            data[i][j] = mytable.rows[i].cells[j].innerHTML;
        }
    }
    return data;
}

/**
 * 获得表格长度
 * @param id 表格ID
 * @return 表格长度
 */
function getTableRowsLength(id) {
    var mytable = document.getElementById(id);
    return mytable.rows.length;
}
/**
 * 删除一行信息
 */
function deleteRow() {
    var data = getTableContent("addressList");
    var rowNum = getTableRowsLength("addressList");
    for (i = rowNum-1; i > 0; i--) {
        if (data[i][0] == document.getElementById("deleteName").value){
            document.getElementById('addressList').deleteRow(i);
            var flag = true;
        }
    }
    if(!flag){
        alert("未找到相应信息！");
    }
}