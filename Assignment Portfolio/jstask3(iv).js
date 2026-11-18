// Q4 Login & role check
let isLoggedIn=true;
let role="Guest";
if(!isLoggedIn){
    console.log("Please Log in");
}else if (role=="admin"){
    console.log("Welcome, Admin");
}else{
    console.log("Welcome, User");
}
