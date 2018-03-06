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
        //wpisywana treść wychodzi poza diva
        /* --- answer ---
           zobacz jak zawijać tekst w css, przyda sie wlasnosc text-wrap
        */
        if (content.value.length >= 1 && content.value.length <=50) {
            newDiv.appendChild(newNote);
            newNote.id = "draggable";
            newH1.innerText = newDiv.value;
            newNote.innerHTML = newTitle+newContent;

            //czyszczenie formularza, działa
            $("#note_form")[0].reset();

        } else {
            window.alert ("Wpisz notatkę!");
            return false;
        }

        // draggable działa tylko na pierwszym utworzonym elemencie
        /* --- answer ---
           zgadza się :)
            bo w momencie inicjowania draggable() masz tylko jeden element - powinnaś inicjować bibliotekę za każdym razem
        */
        $(function() {
            $( "#draggable" ).draggable();

        });

        var remButton = document.createElement("button");
        remButton.innerText = "Delete";
        newDiv.appendChild(remButton);
        remButton.id = "removebtn";

        remButton.addEventListener("click", function () {

            //usuwa notatkę, ale button "Delete" zostaje, chciałabym żebby usuwał się razem z notatką
            /* --- answer ---
           za na pewno ten button jest wewnątrz tego diva?
             */
            newNote.parentElement.removeChild(newNote);



        });

    });

});
// Drobna wskazówka - ogólnie piszesz w czystym js, moze łątwiej będzie w jquery, skoro już podpięłaś tą bibliotekę?

