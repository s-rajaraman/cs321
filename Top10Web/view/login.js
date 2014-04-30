/**
 * Created by Sriram on 4/29/14.
 */
var json =
    [
        {
            name: "jsmith",
            password: "passy"
        }
    ]
localStorage['users'] = JSON.stringify(json);
localStorage['quiz'] = JSON.stringify([]);

function createLoginDisplay(){
    $(function () {
        var background = "background-color: #88C8F3;";
        $('#myLayout').w2layout({
            name: 'myLayout',
            panels: [
                { type: 'top', size: 80, style: background},
                { type: 'main', style: background, overflow:'auto'}

            ]
        });

        w2ui['myLayout'].load('top', 'panel/title.html');
        w2ui['myLayout'].load('main', 'panel/login.html');

    });
}
createLoginDisplay();

function runScript(e) {
    if (e.keyCode == 13) {
        loginUser();
    }
}

function loginUser(){
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var users = JSON.parse(localStorage['users']);

    for(var x =0; x<users.length; x++){
       if(users[x].name === username && users[x].password === password){
         loggedin();
       }
        else{
           console.log("should show wrong thing")
           var $wrong = $('#wrong_password');
           console.log($wrong);
           $wrong.hide(200);
           $wrong.show(200);
       }
    }
}

function loggedin(){
    w2ui['myLayout'].load('main', 'panel/option.html','flip-left');
}


