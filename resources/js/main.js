loadIds();
loadNames();
changeNames();

document.querySelector("#create").addEventListener("click", (e)=>{
    saveIds();
    createCodes();
    document.querySelector("#create").innerHTML = "Created - Click to create again";

});

function createCodes(){
        let date = new Date;

        // CLEAR QR CODE
        for (let index = 1; index <= 4; index++) {
            document.querySelector("#titleqr").style.display = "none";
            document.querySelector("#qrcode"+index).innerHTML= "";
        }

        // MAKE NEW QR CODE
        for (let index = 1; index <= 4; index++) {
            if (document.querySelector("#id"+index).value != ""){
                document.querySelector("#titleqr").style.display = "block";
                document.querySelector("#textqr"+index).style.display = "inline-block";
                document.querySelector("#change"+index).style.display = "inline-block";

                let time = date.getTime() + 5184000000;
                var qrcode = new QRCode("qrcode"+index, {
                    text: document.querySelector("#id"+index).value +"." + time,
                    width: 256,
                    height: 256,
                    colorDark: "black",
                    colorLight: "white",
                    correctLevel : QRCode.CorrectLevel.H
                });
            } else {
                document.querySelector("#change"+index).style.display = "none";
                document.querySelector("#textqr"+index).style.display = "none";
            }
        }
}

function changeNames(){
    for (let index = 1; index <= 4; index++) {
        document.querySelector("#change"+index).addEventListener("click",(e)=>{
            localStorage.setItem("textqr"+index, document.querySelector("#textqr"+index).value);
            document.querySelector("#change"+index).innerHTML = "Saved - Click to edit";
        });
    }
}

function loadNames(){
    for (let index = 1; index <= 4; index++) {
        document.querySelector("#textqr"+index).value = localStorage.getItem("textqr"+index);
    }
}

function saveIds() {
    for (let index = 1; index <= 4; index++) {
        localStorage.setItem("id"+index, document.querySelector("#id"+index).value);
    }
}

function loadIds() {
    for (let index = 1; index <= 4; index++) {
        document.querySelector("#id"+index).value = localStorage.getItem("id"+index);
    }
}
