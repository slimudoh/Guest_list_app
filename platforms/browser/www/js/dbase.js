

 //document.addEventListener("deviceready", onDeviceReady, false);

// function onDeviceReady() {
//             var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);    
//             //alert('database guestlist is open');
//             // db.transaction(populateDB, errorCB, successCB); 
//             db.transaction(queryDB, errorCB, successCB); 
// }
 
//          function populateDB(tx) {
//             // create table event
//              tx.executeSql('DROP TABLE IF EXISTS event');
//              tx.executeSql('CREATE TABLE IF NOT EXISTS event (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, eventname TEXT NOT NULL, eventlocation TEXT NOT NULL, expectedguest INTEGER , tableno INTEGER)');
//              tx.executeSql("INSERT INTO event(eventname, eventlocation, expectedguest, tableno) VALUES('birthday', 'Lagos', '500', '500')");
//              alert("event created");

//         //      //create table guest
//         //      tx.executeSql('DROP TABLE IF EXISTS guest');
//         //      tx.executeSql('CREATE TABLE IF NOT EXISTS guest (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, firstname TEXT NOT NULL, lastname TEXT NOT NULL, tableno INTEGER)');
//         //      tx.executeSql("INSERT INTO guest(title, firstname, lastname, tableno) VALUES('Mr', 'Uwem', 'Udoh', '500')");
//         //      alert("guest created");
             
//         //      //create table password
//         //      tx.executeSql('DROP TABLE IF EXISTS password');
//         //      tx.executeSql('CREATE TABLE IF NOT EXISTS password (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)');
//         //      tx.executeSql("INSERT INTO password(firstname, lastname, email, password) VALUES('uwem', 'udoh', 'slimudoh@yahoo.com', 'obalende')");
//         //      alert("password created");

//         //      delete table
//         //       tx.executeSql('DROP TABLE  IF EXISTS invite');
//         //       tx.executeSql('DROP TABLE  IF EXISTS guess');
//         //       tx.executeSql('DROP TABLE  IF EXISTS password');
//         //       tx.executeSql('DROP TABLE  IF EXISTS event');
// }
    

// function errorCB(err) {
//         //alert('table not created ' + err.code);
//alert("error " + err.code);
// }
        

// function successCB() {
//                     //alert('Tables created');
//                     alert('data read');
// } 



// function queryDB(tx) {       


      
//             tx.executeSql('SELECT email, password FROM password  WHERE password=?', [signinPassword], querySuccess,  errCB);
//         }
// }


// function querySuccess(tx, results) {
//             var signinEmail = document.getElementById("signin-email").value;
//             var signinPassword = document.getElementById("signin-password").value; 
            
//             var len = results.rows.length;
//             //for (var i = 0; i < len; i++) {
//                 //console.log(len);
//             if(len > 0) {
//                         //alert(results.rows.item(0)['password']);
//                         if (results.rows.item(0)['password'] === signinPassword && results.rows.item(0)['email'] === signinEmail) {                       
//                                  index.style.animation= "out .3s";
//                                  index.style.WebkitAnimation= "out .3s";
//                                  index.style.right = "0%";
//                                  index.style.left = "0%";                      
//                         } else if (results.rows.item(0)['password'] != signinPassword || results.rows.item(0)['email'] != signinEmail) {
//                                 navigator.notification.alert("Wrong Email and/or Password", null, "Notification", "Ok");
//                         } 

//             } else {
//                                 navigator.notification.alert("Wrong Email and/or Password", null, "Notification", "Ok");
//             }               
// }


// function errCB() {
//         navigator.notification.alert("Wrong Email and/or Password" , null, "Notification", "ok");            
// }

// function onResume() {
//     "use strict";

//     var load = document.getElementById("splash");
//     var home = document.getElementById("hm");
//     var register = document.getElementById("register");
//     var email = document.getElementById("signin-email");
//     var pword = document.getElementById("signin-password");
//     var index = document.getElementById("index");
//     var createPage = document.getElementById("create-page");
//     var invitePage = document.getElementById("invite-page");
//     var searchPage = document.getElementById("search-page");
//     var listPage = document.getElementById("list-page");

//     email.value = "";
//     pword.value = "";

//     index.style.animation= "in .3s";
//     index.style.WebkitAnimation= "in .3s";
//     index.style.right = "-100%";
//     index.style.left = "-100%";

//     createPage.style.animation= "in .3s";
//     createPage.style.WebkitAnimation= "in .3s";
//     createPage.style.right = "-100%";
//     createPage.style.left = "-100%";

//    invitePage.style.animation= "in .3s";
//     invitePage.style.WebkitAnimation= "in .3s";
//     invitePage.style.right = "-100%";
//     invitePage.style.left = "-100%";

//     searchPage.style.animation= "in.3s";
//     searchPage.style.WebkitAnimation= "in .3s";
//     searchPage.style.right = "-100%";
//     searchPage.style.left = "-100%";

//     listPage.style.animation= "in .3s";
//      listPage.style.WebkitAnimation= "in .3s";
//      listPage.style.right = "-100%";
//      listPage.style.left = "-100%";

//     cover.style.display = "none";

//     register.style.display = "none";
//     home.style.display = "block";
//     load.style.display = "none";
// }

      


 

