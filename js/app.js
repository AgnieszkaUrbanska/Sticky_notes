document.addEventListener("DOMContentLoaded", function() {

    var addButton = document.querySelector("#btn");
    var remButton = document.querySelector("#removebtn");
    var newDiv = document.querySelector(".div_note");
    var title = document.getElementById("note_title");
    var content = document.getElementById("note_content");


    addButton.addEventListener("click", function() {
        // event.preventDefault();

        var newTitle = title.value;
        var newContent = content.value;

        //tworzy się div, h1 się nie tworzy
        var newNote = document.createElement("div");
        var newH1 = document.createElement("h1");

        //to działa, wyskakuje alert "wpisz notatkę"
        //tworzy się div z tekstem, ale w jednym ciągu, bez podziału na tytuł i treść notatki
        if (content.value.length >= 1 && content.value.length <=50) {
            newDiv.appendChild(newNote);
            newNote.id = "draggable";
            newH1.innerText = newDiv.value;
            newNote.innerHTML = newTitle+newContent;

            //niestety czyszczenie formularza nie działa(po dodaniu notatki), mogę dodać kolejną notatkę o tej samej treści
            newTitle.value = '';
            newContent.value = '';
        } else {
            window.alert ("Wpisz notatkę!");
            return false;
        }

        // draggable działa tylko na 1 elemencie
        $(function() {
            $( "#draggable" ).draggable();

        });

        remButton.addEventListener("click", function () {

            var noteRemove = document.getElementById("draggable");
            var toRemove = noteRemove;

            toRemove.removeChild(toRemove);

            var remButton = document.createElement("button");
            remButton.innerText = "Delete";
            newDiv.appendChild(remButton);
            remButton.id = "removebtn";


        });

    });

});


