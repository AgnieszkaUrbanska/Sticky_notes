document.addEventListener("DOMContentLoaded", function() {

    var addButton = document.querySelector("#btn");
    var remButton = document.querySelector("#removebtn");
    var newDiv = document.querySelector(".div_note");
    var title = document.getElementById("note_title");
    var content = document.getElementById("note_content");


    addButton.addEventListener("click", function() {
        event.preventDefault();

        var newTitle = title.value;
        var newContent = content.value;

        //tworzy się div, h1 się nie tworzy
        /* --- answer ---
           pamiętaj, że po stworzeniu elementu i przypisaniu do zmiennej, musimy go dodać dod DOM.
           zrobiłaś to w linijce newDiv.appendChild(newNote);
        */
        var newNote = document.createElement("div");
        var newH1 = document.createElement("h1");

        //tworzy się div z tekstem, ale w jednym ciągu, bez podziału na tytuł i treść notatki-chciałabym to jakoś podzielić
        /* --- answer ---
           myśle ze odpowiednia kolejność dodawania zalątwi sprawę
           jak na razie h1 nie dodaje do DOM
        */
        if (content.value.length >= 1 && content.value.length <=50) {
            newDiv.appendChild(newNote);
            newNote.appendChild(newH1);
            newNote.id = "draggable";
            newH1.id = "newH1Note";
            newH1.innerText = newDiv.value;
            newNote.innerHTML = newTitle+newContent;

            //czyszczenie formularza, działa
            $("#note_form")[0].reset();

        } else {
            window.alert ("Wpisz notatkę!");
            return false;
        }

        // draggable działa :)
        $("div").each(function() {
            $(this).draggable();

        });

        var remButton = document.createElement("button");
        remButton.innerText = "Delete";
        newNote.appendChild(remButton); //zmiana newDiv na newNote wrzuciła remButton do odpowiedniego diva
        remButton.id = "removebtn";

        remButton.addEventListener("click", function () {

            newNote.parentElement.removeChild(newNote);


        });


    });

});


