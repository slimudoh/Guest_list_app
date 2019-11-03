
//loading onload
function init() {
    "use strict";

    var load = document.getElementById("loading");
    var home = document.getElementById("hm");

    load.style.WebkitAnimation = "load 5s";
    load.style.animation = "load 5s";
    load.style.width = "100%";

    setTimeout(function() {
        home.style.display = "block";
    }, 5000);
}
document.addEventListener("deviceready", init);


//cordova events#################################################################################
function runOnLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);    
}

runOnLoad();

function onDeviceReady() {
    document.addEventListener("backbutton", onBackButton, false); 
     //document.addEventListener("deviceready", openEvent, false);    
}

function onBackButton() {
     'use strict';
        var index = document.getElementById("index");
        var createPage = document.getElementById("create-page");
        var listPage = document.getElementById("list-page");
        var invitePage = document.getElementById("invite-page");
        var searchPage = document.getElementById("search-page");
        var cover = document.getElementById("cover");        
        var selectEvent = document.getElementById("select-event"); 
        var searchCover = document.getElementById("select-cover");       

       

     if (createPage.style.right === "0%" && createPage.style.left === "0%") {
            createPage.style.animation= "in .5s";
            createPage.style.WebkitAnimation= "in .5s";
            createPage.style.right = "-100%";
            createPage.style.left = "-100%";
            setTimeout(function() {
                 cover.style.display = "none";
             }, 200);
     } else if (listPage.style.right === "0%" && listPage.style.left === "0%") {
            listPage.style.animation= "in .5s";
            listPage.style.WebkitAnimation= "in .5s";
            listPage.style.right = "-100%";
            listPage.style.left = "-100%";
            setTimeout(function() {
                 cover.style.display = "none";
             }, 200);
     } else if (searchCover.style.display === "block") {
            selectEvent.style.animation= "eventin .5s";
            selectEvent.style.WebkitAnimation= "eventin .5s";
            selectEvent.style.bottom= "-100%"; 
            searchCover.style.display = "none";       
        // setTimeout(function() {
        //      cover.style.display = "none";
        //  }, 200);
        //alert("back pressed");
     } else if (invitePage.style.right === "0%" && invitePage.style.left === "0%") {
            invitePage.style.animation= "in .5s";
            invitePage.style.WebkitAnimation= "in .5s";
            invitePage.style.right = "-100%";
            invitePage.style.left = "-100%";
            setTimeout(function() {
                 cover.style.display = "none";
             }, 200);
     } else if (searchPage.style.right === "0%" && searchPage.style.left === "0%") {
            searchPage.style.animation= "in .5s";
            searchPage.style.WebkitAnimation= "in .5s";
            searchPage.style.right = "-100%";
            searchPage.style.left = "-100%";
            setTimeout(function() {
                 cover.style.display = "none";
             }, 200);
     } else {
        cover.style.display = "none";
        navigator.app.exitApp();
     }
}

//open create account page#########################################################################
document.getElementById("create-account").addEventListener("mouseup", function() {
    "use strict";

    var load = document.getElementById("splash");
    var home = document.getElementById("hm");
    var register = document.getElementById("register");
    var firstname = document.getElementById("signup-fn");
    var lastname = document.getElementById("signup-ln");
    var email = document.getElementById("signup-em");
    var pword = document.getElementById("signup-pw");

    firstname.value = "";
    lastname.value = 
    email.value = "";
    pword.value = "";


    register.style.display = "block";
    home.style.display = "none";
    load.style.display = "none";
})


//open create account page#####################################################################
document.getElementById("hf").addEventListener("mouseup", function() {
    "use strict";

    var load = document.getElementById("splash");
    var home = document.getElementById("hm");
    var register = document.getElementById("register");
    var email = document.getElementById("signin-email");
    var pword = document.getElementById("signin-password");

    email.value = "";
    pword.value = "";

    register.style.display = "none";
    home.style.display = "block";
    load.style.display = "none";
});

//open sign in page***********************************************************************
document.getElementById("signin").addEventListener("mouseup", function(e) {
    'use strict';
    var index = document.getElementById("index");       

    e.preventDefault(); 

    var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000); 
    db.transaction(queryDB, errCB);     
 });

function queryDB(tx) {
        var signinEmail = document.getElementById("signin-email").value;
        var signinPassword = document.getElementById("signin-password").value;   



        if (signinEmail === "" || signinPassword === "") {
                navigator.notification.alert("Please enter you email and password", null, "Alert", "Ok");
        } else {
            tx.executeSql('SELECT email, password FROM password  WHERE password=?', [signinPassword], querySuccess,  errCB);
        }
}


function querySuccess(tx, results) {
            var signinEmail = document.getElementById("signin-email").value;
            var signinPassword = document.getElementById("signin-password").value; 
            
            var len = results.rows.length;
            //for (var i = 0; i < len; i++) {
                //console.log(len);
            if(len > 0) {
                        //alert(results.rows.item(0)['password']);
                        if (results.rows.item(0)['password'] === signinPassword && results.rows.item(0)['email'] === signinEmail) {                       
                                 index.style.animation= "out .5s";
                                 index.style.WebkitAnimation= "out .5s";
                                 index.style.right = "0%";
                                 index.style.left = "0%";                      
                        } else if (results.rows.item(0)['password'] != signinPassword || results.rows.item(0)['email'] != signinEmail) {
                                navigator.notification.alert("Wrong Email and/or Password", null, "Alert", "Ok");
                        } 

            } else {
                                navigator.notification.alert("Wrong Email and/or Password", null, "Alert", "Ok");
            }               
}

function errCB() {
        navigator.notification.alert("DB is empty, please create a new account." , null, "Alert", "ok");            
}


//event for register button*********************************************************************
document.getElementById("register-btn").addEventListener("mouseup", function(e) {
    'use  strict';    

     e.preventDefault();
    var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);    
    //alert('database guestlist is open');
    db.transaction(populateRegister, errorRgister, successRegister); 
    //db.transaction(queryDB, errorCB, successCB); 
});


function populateRegister(tx) {
            'use strict'
            var firstname = document.getElementById("signup-fn").value;
            var lastname = document.getElementById("signup-ln").value;
            var email = document.getElementById("signup-em").value;
            var password = document.getElementById("signup-pw").value; 
            var index = document.getElementById("index");                  
            var executeQuery = "INSERT INTO password(firstname, lastname, email, password) VALUES(?, ?, ?, ?)"; 

            tx.executeSql('DROP TABLE IF EXISTS password');
            tx.executeSql('CREATE TABLE IF NOT EXISTS password (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)');
            tx.executeSql(executeQuery, [firstname, lastname, email, password]);
            //alert("record created");
}

function errorRgister(err) {        
        //alert("error " + err.code);
        navigator.notification.alert("Error creating an account", null, "Alert", "Ok");

}       

function successRegister() {            
            index.style.animation= "out .5s";
            index.style.WebkitAnimation= "out .5s";
            index.style.right = "0%";
            index.style.left = "0%";                     
}

//open search event*********************************************************************
function searchEvent() {
    'use  strict';    

     //e.preventDefault();
    var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);      
    db.transaction(populateInvite, errorInvite); 
}

function populateInvite(tx) {        
            tx.executeSql('SELECT * FROM event', [], successInvite,  errorInvite);   
}

function errorInvite(err) {
        navigator.notification.alert("Error retrieving events", null, "Alert", "Ok");       
}

function successInvite(tx, results) { 
            //var cover = document.getElementById("cover"); 
            var selectEvent = document.getElementById("select-event"); 
            var eventList = document.getElementById("eventlist");                     
            var len = results.rows.length;
            var div;

            eventList.innerHTML = "";


            for (var i = 0; i < len; i++) { 
                    div = document.createElement("div");
                    eventList.appendChild(div);
                    div.setAttribute('class', 'event-list');                    
                    div.innerHTML = results.rows.item(i)['eventname'];                                             
            }

            // cover.style.display = "block";
            selectEvent.style.animation= "eventout .5s";
            selectEvent.style.WebkitAnimation= "eventout .5s";           
            selectEvent.style.bottom= "0%";                
}

//select event###################################################################
document.getElementById("select-event").addEventListener("mouseup", function(e) {
            var eventList = document.getElementsByClassName("event-list"), tableName;            
           
            for(var i=0; i < eventList.length; i++) {                       
                //eventList[i].addEventListener("mouseup", function(e) {
                     

                                if (event.target === eventList[i]) {
                                         e.stopImmediatePropagation();
                                         tableName = localStorage.getData;

                                       //navigator.notification.alert("You clicked on " + tableName + " and you want to open " +  eventList[i].innerHTML + " list.");
                                            localStorage.eventname = eventList[i].innerHTML;

                                            if (tableName === "view") {
                                                    viewList();
                                            } else if (tableName === "search") {
                                                    searchList();
                                            } else if (tableName === "invite") {
                                                    inviteList();
                                            };
                                };                           
                };
        }, false);      



//remove select event ################################################################
document.getElementById("select-cover").addEventListener("mouseup", function(e) {
            var selectEvent = document.getElementById("select-event"); 
            var searchCover = document.getElementById("select-cover");

            if (event.target !== selectEvent) {
                    if (selectEvent.style.bottom === "0%") {
                            selectEvent.style.animation= "eventin .5s";
                            selectEvent.style.WebkitAnimation= "eventin .5s";
                            selectEvent.style.bottom= "-100%"; 
                            searchCover.style.display = "none";
                    } else {
                            selectEvent.style.bottom= "-100%"; 
                    }
            };
}, true);


//close create page############################################################################
document.getElementById("close-create").addEventListener("mouseup", function() {
    'use strict';
    var createPage = document.getElementById("create-page");
    var cover = document.getElementById("cover");
   
    createPage.style.animation= "in .5s";
    createPage.style.WebkitAnimation= "in .5s";
     createPage.style.right = "-100%";
    createPage.style.left = "-100%";

     setTimeout(function() {
         cover.style.display = "none";
     }, 200);
});

//close invite page###############################################################################
document.getElementById("close-invite").addEventListener("mouseup", function() {
    'use strict';
    var invitePage = document.getElementById("invite-page");
    var cover = document.getElementById("cover");
   
    invitePage.style.animation= "in .5s";
    invitePage.style.WebkitAnimation= "in .5s";
    invitePage.style.right = "-100%";
    invitePage.style.left = "-100%";

     setTimeout(function() {
         cover.style.display = "none";
     }, 200);
});

//close search page########################################################################
document.getElementById("close-search").addEventListener("mouseup", function() {
    'use strict';
    var searchPage = document.getElementById("search-page");
    var cover = document.getElementById("cover");
   
    searchPage.style.animation= "in .5s";
    searchPage.style.WebkitAnimation= "in .5s";
    searchPage.style.right = "-100%";
    searchPage.style.left = "-100%";

     setTimeout(function() {
         cover.style.display = "none";
     }, 200);
});

//close list page########################################################################
document.getElementById("close-list").addEventListener("mouseup", function() {
    'use strict';
    var listPage = document.getElementById("list-page");
    var cover = document.getElementById("cover");
   
    listPage.style.animation= "in .5s";
    listPage.style.WebkitAnimation= "in .5s";
    listPage.style.right = "-100%";
    listPage.style.left = "-100%";

     setTimeout(function() {
         cover.style.display = "none";
     }, 200);
});


//open create event####################################################################
document.getElementById("create-btn").addEventListener("mouseup", function() {
    'use strict';
    var createPage = document.getElementById("create-page");
    var cover = document.getElementById("cover");    

    cover.style.display = "block";
    createPage.style.animation= "out .5s";
     createPage.style.WebkitAnimation= "out .5s";
     createPage.style.right = "0%";
     createPage.style.left = "0%";
 });

//create new events ###################################################################
document.getElementById("createnew-event").addEventListener("mouseup", function(e) {
     'use  strict';    

     e.preventDefault();
    var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);    
    //alert('database guestlist is open');
    db.transaction(populateEvent, errorEvent, successEvent); 
    //db.transaction(queryDB, errorCB, successCB); 
});

function populateEvent(tx) {
            'use strict'
            var eventName = document.getElementById("event-name").value;
            var eventLocation= document.getElementById("event-location").value;
            var eventGuest = document.getElementById("event-guest").value;
            var eventTable = document.getElementById("event-table").value; 
            //var index = document.getElementById("index");                  
            var executeQuery = "INSERT INTO event(eventname, eventlocation, expectedguest, tableno) VALUES(?, ?, ?, ?)"; 

            //tx.executeSql('DROP TABLE IF EXISTS password');
            //tx.executeSql('CREATE TABLE IF NOT EXISTS password (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)');
            tx.executeSql(executeQuery, [eventName, eventLocation, eventGuest, eventTable]);
            //alert("event created");
}

function errorEvent(err) {        
        //alert("error " + err.code);
        avigator.notification.alert("New event not created", null, "Alert", "Ok");

}       

function successEvent() {
            navigator.notification.alert("New event have been created.", null, "Alert", "Ok");                               
} 

//open invite guest##########################################################################
document.getElementById("invite-btn").addEventListener("mouseup", function() {
    'use strict';
    var invitePage = document.getElementById("invite-page");
    var cover = document.getElementById("cover");  

    localStorage.getData = "invite";


    cover.style.display = "block";  
    invitePage.style.animation= "out .5s";
    invitePage.style.WebkitAnimation= "out .5s";
    invitePage.style.right = "0%";
    invitePage.style.left = "0%";
 });


//invite a guest #############################################################
document.getElementById("invitebtn").addEventListener("mouseup", inviteGuest, false);

function inviteGuest(e) {
    'use strict';

    var searchCover = document.getElementById("select-cover");

    searchCover.style.display = "block";
    e.preventDefault();
    searchEvent();
}

//open search guest#########################################################################
document.getElementById("search-btn").addEventListener("mouseup", function() {
    'use strict';
    var searchPage = document.getElementById("search-page");
    var cover = document.getElementById("cover"); 
     var searchList = document.getElementById("searchlist"); 
     var searchValue = document.getElementById("search-list");   

    localStorage.getData = "search";  

    searchList.innerHTML = ""; 
    searchValue.value = "";  

    cover.style.display = "block";
    searchPage.style.animation= "out .5s";
    searchPage.style.WebkitAnimation= "out .5s";
    searchPage.style.right = "0%";
    searchPage.style.left = "0%";
 });

//search for a guest #############################################################
document.getElementById("search-list").addEventListener("keyup", searchList, false);


function searchList() {
       'use  strict';    

        var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);      
        db.transaction(populateSearch, errorSearch); 
};


function populateSearch(tx) {  
            var guestName = document.getElementById("search-list").value;           
            tx.executeSql('SELECT * FROM guest WHERE firstname =?', [guestName], successSearch,  errorSearch);   
}

function errorSearch(err) {
        var  tablename = localStorage.eventname;
        navigator.notification.alert("Error retrieving guestlist for " + tablename, null, "Alert", "Ok");       
}

function successSearch(tx, results) { 
            var len = results.rows.length;
            var div, eventDiv, tableDiv;
            var searchList = document.getElementById("searchlist");
            var  tablename = localStorage.eventname;
             var selectEvent = document.getElementById("select-event"); 
             var searchCover = document.getElementById("select-cover"); 

            searchList.innerHTML = ""; 

            if(len > 0) {
                    for (var i = 0; i < len; i++) { 
                            div = document.createElement("div");
                            guestDiv = document.createElement("div");
                            eventDiv = document.createElement("div");
                            tableDiv = document.createElement("div");
                            searchList.appendChild(div);
                            div.appendChild(guestDiv);
                            div.appendChild(eventDiv);
                             div.appendChild(tableDiv);
                            div.setAttribute('class', 'search-data');
                            guestDiv.setAttribute('class', 'guest-data');
                            eventDiv.setAttribute('class', 'event-data');
                            tableDiv.setAttribute('class', 'table-data');
                             guestDiv.innerHTML = results.rows.item(i)['title'] + " " + results.rows.item(i)['firstname'] + " " + results.rows.item(i)['lastname'];
                            tableDiv.innerHTML = results.rows.item(i)['tableno'];
                            eventDiv.innerHTML = results.rows.item(i)['eventname'];
                    }; 
            } else {
                            div = document.createElement("div");
                            searchList.appendChild(div);
                            div.innerHTML = "You have no guest with that name on all your events list";
            }
                       
}

//edit guest for search ################################################################################
document.getElementById("search-page").addEventListener("mouseup", function(e) {
            'use strict';

            var searchData = document.getElementsByClassName("search-data");
            var eventData = document.getElementsByClassName("event-data");
            var guestData = document.getElementsByClassName("guest-data");
             var tableData = document.getElementsByClassName("table-data");
             var editGuest = document.getElementById("edit-page");

            for (var i = 0; i < searchData.length; i++) {
                        if (event.target === searchData[i] || event.target === eventData[i] || event.target === guestData[i]  || event.target === tableData[i]) {
                                e.stopImmediatePropagation();
                                //alert(" Editing event for " + eventData[i].innerHTML + " " +tableData[i].innerHTML);  
                                editGuest.style.display = "block"; 
                                editGuest.style.animation= "editfull 1s";
                                editGuest.style.WebkitAnimation= "editfull 1s";                             
                        };
            };

});

//open list guest#################################################################
document.getElementById("list-btn").addEventListener("mouseup", function() {
    'use strict';
    var listPage = document.getElementById("list-page");
    var cover = document.getElementById("cover"); 

    localStorage.getData = "view";   

    cover.style.display = "block";
    listPage.style.animation= "out .5s";
    listPage.style.WebkitAnimation= "out .5s";
    listPage.style.right = "0%";
    listPage.style.left = "0%";

     listGuest();
 });

//full list #############################################################
function listGuest() {
    'use strict';

    var searchCover = document.getElementById("select-cover");
    var fullList = document.getElementById("fulllist");
    var header = document.getElementById("fulllist-header");

    fullList.innerHTML = "";
    header.innerHTML = "";

    searchCover.style.display = "block";
    searchEvent();    
}

// take picture for the home page###########################################################
function pickPictureCallBall(pictureURL) {
    var image = document.getElementById("pic");
    image.src = pictureURL;
}

function cameraFailed() {
    console.log("Camera not available");
}

document.getElementById("pic").addEventListener("mouseup", function() {
        navigator.camera.getPicture( pickPictureCallBall, cameraFailed, 
        {
            quality : 80,
            destinationType : Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit : true,
            encodingType : Camera.EncodingType.JPEG,
            correcrOrientaion : true
        });
    });

//DB operation###########################################################################

//view########################################################################################
function viewList() {
         'use  strict';    

        var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);      
        db.transaction(populateView, errorView); 
};

function populateView(tx) {  
            var  tablename = localStorage.eventname;           
            tx.executeSql('SELECT * FROM guest WHERE eventname =?', [tablename], successView,  errorView);   
}

function errorView(err) {
        var  tablename = localStorage.eventname;
        navigator.notification.alert("Error retrieving guestlist for " + tablename, null, "Alert", "Ok");       
}

function successView(tx, results) { 
            var len = results.rows.length;
            var div, guestDiv, tableDiv;
            var fullList = document.getElementById("fulllist");
            var  tablename = localStorage.eventname;
             var selectEvent = document.getElementById("select-event"); 
             var searchCover = document.getElementById("select-cover"); 
             var header = document.getElementById("fulllist-header");

           fullList.innerHTML = ""; 
           header.innerHTML = "";

            if(len > 0) {         
                    header.innerHTML =    tablename + " EVENT";             
                    for (var i = 0; i < len; i++) { 
                            div = document.createElement("div");                           
                            guestDiv = document.createElement("div");
                             tableDiv = document.createElement("div");
                            fullList.appendChild(div);                            
                            div.appendChild(guestDiv);
                            div.appendChild(tableDiv);
                            div.setAttribute('class', 'search-data');  
                            guestDiv.setAttribute('class', 'guest-data');  
                            tableDiv.setAttribute('class', 'table-data');                    
                            guestDiv.innerHTML = results.rows.item(i)['title'] + " " + results.rows.item(i)['firstname'] + " " + results.rows.item(i)['lastname'] ;
                             tableDiv.innerHTML = results.rows.item(i)['tableno'];
                    }; 
            } else {
                    //navigator.notification.alert("You have no guest for " + tablename, null, "Alert", "Ok");
                        div = document.createElement("div");                        
                        fullList.appendChild(div);  
                        div.setAttribute('class', 'search-data');  
                       div.innerHTML = "You have no guest for " + tablename;
            }

                        selectEvent.style.animation= "eventin .5s";
                        selectEvent.style.WebkitAnimation= "eventin .5s";
                        selectEvent.style.bottom= "-100%"; 
                        searchCover.style.display = "none"; 
}


//edit guest for view################################################################################
document.getElementById("list-page").addEventListener("mouseup", function(e) {
            'use strict';

            var searchData = document.getElementsByClassName("search-data");
            var guestData = document.getElementsByClassName("guest-data");
            var tableData = document.getElementsByClassName("table-data");
            var editGuest = document.getElementById("edit-page");
            var eventname = localStorage.eventname

            var editTitle = document.getElementById("edit-title");
            var editFirstname = document.getElementById("edit-firstname");
            var editLastname= document.getElementById("edit-lastname");
            var editNo = document.getElementById("edit-no");

            for (var i = 0; i < searchData.length; i++) {
                        if (event.target === searchData[i] || event.target === guestData[i]  || event.target === tableData[i]) {
                                e.stopImmediatePropagation();
                                //alert(" Editing event for " + tableData[i].innerHTML + " " + eventname);     
                                editGuest.style.display = "block";                           
                        };
            };

});


//invite#####################################################################################
function inviteList() {
        'use  strict';    
        
         var db = window.openDatabase("guestlist", "1.0", "database for guestlist", 1000000);    
        db.transaction(populateIv, errorIv, successIv); 
};

function populateIv(tx) {
            'use strict';
            var title = document.getElementById("guest-title").value;
            var firstname = document.getElementById("guest-firstname").value;
            var lastname = document.getElementById("guest-lastname").value;
            var tableno = document.getElementById("guest-no").value;             
            var  tablename = localStorage.eventname;                  
            var executeQuery = "INSERT INTO guest(title, firstname, lastname, tableno, eventname) VALUES(?, ?, ?, ?, ?)";            
          
            tx.executeSql(executeQuery, [title, firstname, lastname, tableno, tablename]);
}

function errorIv(err) {        
        //alert("error " + err.code);
        navigator.notification.alert("Error creating an account", null, "Alert", "Ok");
}; 


function successIv() {
            'use strict';
            var selectEvent = document.getElementById("select-event"); 
             var searchCover = document.getElementById("select-cover"); 
            var  tablename = localStorage.eventname;

            navigator.notification.alert("New guest invited for " + tablename + " event.", null, "Alert", "Ok");
            selectEvent.style.animation= "eventin .5s";
            selectEvent.style.WebkitAnimation= "eventin .5s";
            selectEvent.style.bottom= "-100%"; 
            searchCover.style.display = "none";
};    


