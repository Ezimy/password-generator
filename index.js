const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = "";
let passEl1 = document.getElementById("pass-el-1")
let passEl2 = document.getElementById("pass-el-2")
function generateRandomIndex(){
        return Math.floor(Math.random() * characters.length)
    }
function generatePassword(){
    for (let i = 0 ; i < 15; i++){
        password += characters[generateRandomIndex()]
    }
    return password
}
function clear(){
    password = ""
    passEl1.textContent = ""
    passEl2.textContent = ""
}
function buttonPressed(){
    clear()
    passEl1.textContent = generatePassword()
    passEl2.textContent = generatePassword()
}


