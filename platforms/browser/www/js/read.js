

// document.addEventListener("deviceready", guestDB, false)



// function guestDB() {
//     'use  strict';   
     
//     var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);    
//     alert('database guestlist is open');
//     db.transaction(populateGuest, errorGuest, successGuest); 
    
// };


// function populateGuest(tx) {
//             'use strict'   
//             tx.executeSql('DROP TABLE IF EXISTS guest');
//             tx.executeSql('CREATE TABLE IF NOT EXISTS guest (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, firstname TEXT NOT NULL, lastname TEXT NOT NULL, tableno INTEGER, eventname TEXT NOT NULL)');
//             tx.executeSql('INSERT INTO guest(title, firstname, lastname, tableno, eventname) VALUES ("Mr", "slim", "Udoh", 500, "birthday")');            
//             alert("table created");
// }

// function errorGuest(err) {        
//         alert("error " + err.code);
//         //navigator.notification.alert("Error creating an account", null, "Alert", "Ok");

// }       

// function successGuest() {            
//            alert("Record created")                   
// }
