$(function() {

    var addButton = $("#btn");
    // var remButton = document.querySelector("#removebtn");
    var newDiv = document.querySelector(".div_note");
    var title = document.getElementById("note_title");
    var content = document.getElementById("note_content");


    addButton.on("click", function() {
        event.preventDefault();

        var newTitle = title.value;
        var newContent = content.value;

        var newNote = document.createElement("div");
        var newH1 = document.createElement("h1");
        var newText = document.createElement("p");

        if (newContent.length >= 5 && newContent.length <=50) {

            newDiv.appendChild(newNote);
            newNote.appendChild(newH1);
            newNote.appendChild(newText);

            newNote.id = "draggable";
            newH1.innerText = newTitle;
            newText.innerText = newContent;

            $("#note_form")[0].reset();

        } else {
            window.alert ("Wpisz notatkę!");
            return false;
        }

        $("div").each(function() {
            $(this).draggable();

        });


        var remButton = document.createElement("button");
        remButton.innerText = "X";
        newNote.appendChild(remButton);
        remButton.id = "removebtn";

        remButton.addEventListener("click", function () {

            var x = confirm("Are you sure?");
            if (x)
                newNote.parentElement.removeChild(newNote);
            else
                return false;

        });

    });

});


