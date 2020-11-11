/*var msg = []
var index = 0;
var database;
database = firebase.database();


function send(){
    if(document.getElementById("input").value !== ""){
        msg.push(document.getElementById("input").value);
    
        
            var messages = document.getElementById("messages");
            
            var name = document.createElement("p");
            name.className = "msg";
            name.innerText = msg[index];
            console.log(document.getElementById("input").value);
            messages.appendChild(name);
        index++;
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }
    window.scrollTo(0, document.body.clientHeight);
}

function getIdRef(name, password){
    var IdRef = database.ref('Person');
    IdRef.on("value", (data) => {
        all
    })
}*/