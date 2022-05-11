var fontFamily = document.getElementById("fontFamily");
var fontSize = document.getElementById("fontSize");
var edit = document.getElementById("edit");
        

function editMode(){
    editor_area.document.designMode = "On";
}

function editCommand(command){
    document.execCommand(command, false, null);
}

function fontFormate(command, arg){
    document.execCommand(command, false, arg);
}
