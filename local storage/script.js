



let user = {
    name:   'James',
    age:  22,
};
let user2 = {
    name:   'James',
    age:  22,
};

let userParagraph=document.getElementById('user'); /* This part send the document from our html to a variable*/

function signIn() {
    window.localStorage.setItem('firstPerson', JSON.stringify(user)); /* the setItem is use to send item to a local storage and JSON.stringify conver and object
                                                                            to a string because local storage only accept string */
    window.localStorage.setItem('secondPerson', JSON.stringify(user2));/* the firstPerson is the key and the user2 is the value*/
};


function getUser( ) {
 
   const user = JSON.parse(window.localStorage.getItem('firstPerson'));/* JSON.parse convert string to an object the inverse of JSON.stringify
                                                                        also, getItem is use to retrieve item fromt he local storage*/
   userParagraph.innerHTML=`${user.name} ${user.age}`;
   
}

function logOut() {
    localStorage.removeItem('firstPerson') /* removeItem only remove the key inputed while the clear remove everything in the local storage*/
//  localStorage.clear();
 userParagraph.innerHTML = '';
   
}