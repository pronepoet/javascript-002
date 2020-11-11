var data = [
    {
        username:"Phillip",
        password:"12345"
    },
    {
        username:"Bridgit",
        password:"Moire"
    },
    {
        username:"Viktor",
        password:"Krum"
    }

];
var newsfeed = [
    {
        profile:"Prince William",
        update:"Just married the love of my life"
    },
    {
        profile:"Emmy Akeyo",
        update:"Woke up feeling like this :)"
    },
    {
        profile:"Viktor",
        update:"Happy birthday to me! Everyday, I grow a little wiser"
    },
];

function isUserValid(username,password){
    for (var i = 0; i < data.length; i++){
        if (data[i].username === username && data[i].password === password){
           return true;
        
        }
        

}return false;
};


function signIn(username,password){
    if (isUserValid(username,password)){
        console.log(newsfeed);
        }else{
        alert("Wrong username or password!");
        }
    };




var usernamePrompt = prompt(`What's your username?`);
var passwordPrompt = prompt(`What's your password?`);
signIn(usernamePrompt,passwordPrompt);
