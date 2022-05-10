var fontFamily = document.getElementById("fontFamily");
var fontSize = document.getElementById("fontSize");
var edit = document.getElementById("edit");
        

function editMode(){
    editor_area.document.designMode = "On";
}

function editCommand(command){
    editor_area.document.execCommand(command, false, null);
}

function fontFormate(command, arg){
    editor_area.document.execCommand(command, false, arg);
}
