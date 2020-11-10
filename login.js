var Id = 0;
var name;
var password;

var msg = []
var index = 0;
var database;
database = firebase.database();
var index = 1;
var count;
var PreMessages;

//fetch data
var username;

(function() {
    getCount();
    getMsgIndex();
    console.log("print");
    getMsg();
    console.log(PreMessages);
}())

function getUserInfo(){
    var userId = "Id";
    database.ref(userId).on("value", (data) => {
        username = data.val();
    })
}

function updateCount(){
    database.ref("Count").set({
        count: count["count"],
    })
}

function getCount(){
    database.ref("Count").on("value", (data) => {
        count = data.val();
    })
}

function updateMsgIndex(){
    database.ref("MsgIndex").set({
        Index: index,
    })
}
function getMsgIndex(){
    database.ref("MsgIndex\Index").on("value", (data) => {
        index = data.val();
    })
}

function CheckLog(){
    if(username === name){
        getElementById("chat").style.display = "visible";
    }
}

function information(){
    name = document.getElementById("name").value;
    password = document.getElementById("password").value;
    if(name !== "" && password !== ""){
        count["count"]++;
        updateCount();
        addId();
        Idref();
        //getMsgIndex();
        console.log(PreMessages);
        if(PreMessages !== null){
            index = PreMessages.length - 1;
        }
        console.log(index);
        console.log(count["count"])
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
        document.getElementById("name").focus();
        document.getElementById("login").style.display = "none";
        document.getElementById("name").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("loginbutton").style.display = "none";
        document.getElementById("chat").style.display = "block";
        //CheckLog();
        ArrangeMsg();
        //setInterval(ArrangeMsg(), 5000);
    }
    else if(name === ""){
        document.getElementById("name").focus();
    }
    else if(password === ""){
        document.getElementById("password").focus();
    }
    CheckLog();

}

function Idref(){
    var idref = firebase.database().ref("Id");
    idref.on("value", (data) => {
        Id = data.val();
    })
}
function addId(){
    database.ref("Id/" + count["count"]).set({
        nme: name,
        pasword: password
    })
}

setInterval(value, 1000);
function value(){
    getMsg();
    console.log(msg.length);
    console.log(PreMessages.length);
    if(msg.length !== PreMessages.length - 1 && msg.length !== 0){
        msg.push(PreMessages[PreMessages.length - 1]["Msg"])
        var messages = document.getElementById("messages");
        var msgContaner = document.createElement("p");
        msgContaner.className = "msg";
        msgContaner.innerText = PreMessages[PreMessages.length - 1]["Msg"];
        messages.appendChild(msgContaner);
    }
    index = PreMessages.length - 1;
    window.scrollTo(0, document.body.clientHeight);
}

function send(){

    if(document.getElementById("input").value !== ""){
        msg.push(document.getElementById("input").value + " : " + name);
        
        var messages = document.getElementById("messages");
            
        var box = document.createElement("p");
        box.className = "msg";
        box.innerText = msg[index];
        console.log(index);
        index++;
        updateMsgIndex();
        console.log(document.getElementById("input").value);
        messages.appendChild(box);
        msgRef(document.getElementById("input").value+" : "+ name);
    
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }
    window.scrollTo(0, document.body.clientHeight);
    
}

function msgRef(msg){
    database.ref("Messages/"+index).set({
        Msg: msg
    })
}

function getMsg(){
    database.ref("Messages/").on("value", (data) => {
        PreMessages = (data.val());
    })
}

function ArrangeMsg(){
    for(var i = 1; i < PreMessages.length; i++){
        msg.push(PreMessages[i]["Msg"]);
        console.log(PreMessages[i]["Msg"])
        var messages = document.getElementById("messages");

        var msgContaner = document.createElement("p");
        msgContaner.className = "msg";
        msgContaner.innerText = PreMessages[i]["Msg"];
        messages.appendChild(msgContaner);
        console.log("Arrange")
    }
}

var MsgRef = database.ref("Messages/");
MsgRef.on("value", ArrangeMsg());