let password;
if(password == 8){
    console.log(`Welcome`);
}
else if(password <= 8){
    console.log(`Password is too short`);
}
else if(password >= 8){
    console.log(`Too Long Password & Password should be 8 Characters`);
}
else{
    console.log(`Please provide a password`);
}