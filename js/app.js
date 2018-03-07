document.addEventListener("DOMContentLoaded", function() {

    var addButton = document.querySelector("#btn");
    var remButton = document.querySelector("#removebtn");
    // var editButton = document.querySelector("editButton");
    var newDiv = document.querySelector(".div_note");
    var title = document.getElementById("note_title");
    var content = document.getElementById("note_content");


    addButton.addEventListener("click", function() {
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
            // newH1.append(newTitle);
            // newText.append(newContent);
            // newH1.innerText = newDiv.value;
            // newNote.innerHTML = newTitle+newContent;
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
        newNote.appendChild(remButton); //zmiana newDiv na newNote wrzuciła remButton do odpowiedniego diva
        remButton.id = "removebtn";

        remButton.addEventListener("click", function () {

            newNote.parentElement.removeChild(newNote);


        });

    });

});
// Drobna wskazówka - ogólnie piszesz w czystym js, moze łątwiej będzie w jquery, skoro już podpięłaś tą bibliotekę?

