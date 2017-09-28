function addRow() {
    var name = document.getElementById("nameText");
    var age = document.getElementById("ageText");
    var sex = document.getElementById("sexText");
    var tel = document.getElementById("telText");
    var adr = document.getElementById("addressText");
    var table = document.getElementById("addressList");
    var tr = document.createElement("tr");
    var num = getTableRowsLength("addressList");
    var array = [name.value, age.value, sex.value, tel.value, adr.value];
    for (i = 0; i < 5; i++) {
        var td = document.createElement("td");
        var txt = document.createTextNode(array[i]);
        table.appendChild(tr);
        tr.appendChild(td);
        td.appendChild(txt);
    }

    //生成删除按钮
    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "删除";
    deleteButton.onclick = function () {
        delRow(this);
    }

    //生成修改按钮
    var modifyButton = document.createElement("input");
    modifyButton.type = "button";
    modifyButton.value = "修改"
    modifyButton.onclick = function () {
        displayModifyForm(this);
    }

    var td = document.createElement("td");
    td.appendChild(deleteButton);    
    td.appendChild(modifyButton);    
    tr.appendChild(td);
    
}

function displayModifyForm(obj){
    document.getElementById("mDiv").style.display="inline";
    document.getElementById("modify").onsubmit= function(){
        modify(obj);
    }
}
function modify(obj){
    var name = document.getElementById("mnameText");
    var age = document.getElementById("mageText");
    var sex = document.getElementById("msexText");
    var tel = document.getElementById("mtelText");
    var adr = document.getElementById("maddressText");
    var table = document.getElementById("addressList");
    var array = [name.value, age.value, sex.value, tel.value, adr.value];
    for (i = 0; i < 5; i++) {
        obj.parentNode.parentNode.cells[i].innerHTML = array[i];
    }
    document.getElementById("mDiv").style.display="none";
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
 * 删除按钮所在行的信息
 */
function delRow(obj) {
    var Row = obj.parentNode.parentNode; //获取按钮所在行
    Row.parentNode.removeChild(Row); //删除行
}

/** 
 * 验证电话号码 
 * @param phoneValue 要验证的电话号码 
 * @returns 匹配返回true 不匹配返回false 
 */
function validatePhone(phoneValue) {
    phoneValue = valueTrim(phoneValue);
    var reg = /^[1][0-9]{10}$/;
    return reg.test(phoneValue);
}