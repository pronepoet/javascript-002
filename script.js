var data = [
    {
        username:"Phillip",
        password:"12345"
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

function signIn(username,password){
if (username = data[0].username && password === data[0].password){
console.log(newsfeed);
}else{
alert("Wrong username or password!");
}


};
var usernamePrompt = prompt(`What's your username?`);
var passwordPrompt = prompt(`What's your password?`);
signIn(usernamePrompt,passwordPrompt);
