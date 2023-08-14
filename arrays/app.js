// -----------------------1--------------------
let arr = [1, 2, 3, 4, 5, 6];
function callMe(item, index, Array) {
    let forEachElements = `${item}${" "}${index}${" "}${Array}${" "}`
    return forEachElements;
}
function doForeachWithFor(numList, callback) {
    for (let i = 0; i < numList.length; i++) {

       let elements = callback(numList[i], i, numList);
    }
}
doForeachWithFor(arr, callMe);

// ----------------------2----------------------

let numbers = [10, 20, 30, 40];


function doFilterWithFor(customArray, operation) {
    let saveNums = [];
    for (let i = 0; i < customArray.length; i++) {
        if (operation(customArray[i])) {
            saveNums.push(customArray[i]);
        }
    }
    return saveNums;
}

function operation(num) {
    return num < 30;
}

doFilterWithFor(numbers, operation);


// -----------------------------3----------------------------

let user = [
    { id: 1, name: "azam" },
    { id: 2, name: "arefe" },
    { id: 2, name: "samane" },
    { id: 3, name: "kimiya" }
]

// ---------------------------find---------------------------

function findUser(arr, callback) {
    let saveNames = "";
    for (let j = 0; j < arr.length; j++) {
        if (callback(arr[j].id)) {
            saveNames = (arr[j].name);
            break;
        }
    }
    return saveNames;
}

function recognizeId(userId) {
    return userId == 2;
}

findUser(user, recognizeId);


// ------------------------findindex-------------------------  tabdil b adadesh munde

function findUserIndex(arr, callback) {
    let index = ``
    for (let j = 0; j < arr.length; j++) {
        if (callback(arr[j].id)) {
            index += j;
        }
    }
    return index;
}

function knowId(userId) {
    return userId == 2;
}
findUserIndex(user, knowId);

// ------------------------every--------------------------
function getEveryUsers(arr, callback) {
    let saveNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i].id)) {
            saveNames.push(arr[i].name);
        }
    }
    if (saveNames.length == arr.length) {

        return true;
    } else {
        return false;
    }
}

function lessThan4(id) {
    return id < 4;
}

getEveryUsers(user, lessThan4);


// --------------------------------some--------------------------
function getSomeUsers(arr, callback) {
    let saveNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i].id)) {
            saveNames.push(arr[i].name);
        }
    }
    if (saveNames != "") {
        return true;
    } else {
        return false;
    }
}

function lessThan2(id) {
    return id < 2;
}

getSomeUsers(user, lessThan2);

// -------------------------------map--------------------------

function doMapWithFor(numList, callback) {
    let elements = ``;
    for (let i = 0; i < numList.length; i++) {

        elements += callback(numList[i], i, numList);
    }
    return elements;
}

doMapWithFor(arr, callMe);
// ----------------------------join-------------------------------
function doJoin(arr, char) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            str += (arr[i]);

        } else {
            str += (arr[i] + char);
        }
    }
}
doJoin(arr, ';');
// -----------------------------reduce-------------------------------

function doReduce(arr , callback, num){
    // let result =""
for(let i = 0 ; i<arr.length ; i++){
console.log(callback(num + arr[i]))
}
// return result
}

function callback(sum , number){
return sum+number
}

console.log(doReduce(arr,callback,0))
doReduce(arr,callback,0)

// -----------------------------seriye dovom---------------------------
import users from "./users.js"

// 1

function showEmails() {
    return users.map(item => item.email)
}
showEmails();

// 2

function getIranianNames() {

    let someUsers = users.filter(function (item) {
        return item.country == "Iran";
    })

    let saveNames = [];
    someUsers.map(function (item) {
        saveNames.push(item.firstName)
        saveNames.push(item.lastName);
    })
    return saveNames;
}
getIranianNames();


// 3
function getNonBinaryUsers() {

    let nonBinaryUsers = users.filter(function (item) {
        return item.gender == "Non-binary"
    });
    let saveBalance = [];
    nonBinaryUsers.map(function (item) {
        saveBalance.push(item.balance);
    })
    return saveBalance;
}

getNonBinaryUsers();

//  4
function americanUsersEmail() {
    let americanUsers = users.filter(item => item.country == "United States");
    let americanUsersBalance = americanUsers.filter(item => item.balance > 500000);
    let saveEmail = [];
    americanUsersBalance.map(item => {
        saveEmail.push(item.email)
    })
    return saveEmail;
}

americanUsersEmail();

// 5 
function balanceSort() {
    let iranianUsers = users.filter(item => item.country == "Iran");
    let balances = iranianUsers.map(item => {
        let nums = item.balance;
        return nums
    })

    let sortedBalances = balances.sort(function (a, b) { return b - a });
    let arr = []
    for (let i = 0; i < sortedBalances.length; i++) {
        for (let j = 0; j < iranianUsers.length; j++) {
            if (sortedBalances[i] == iranianUsers[j].balance) {
                arr.push(iranianUsers[j].firstName);
            }
        }
    }
    return arr;

}
balanceSort();

// 6

function moreEmailCharacters() {
    let moreEmailCharacters = users.filter(item => item.email.length > 30);

    let arr = [];
    moreEmailCharacters.map(item => {
        arr.push(item.firstName);
        arr.push(item.lastName);
    })
    return arr;
}

moreEmailCharacters();
// 7
function getEndedWithEdu() {
    let endedWithEduUsers = users.filter(item => item.email.slice(-3) == "edu");
    let savebalance = [];
    endedWithEduUsers.map(item => {
        savebalance.push(item.balance);
    })
    return savebalance;
}
getEndedWithEdu();

// 8
function getFemalesCount() {
    let females = users.filter(item => item.gender == "Female");
    return females.length
}
getFemalesCount();

function femaleCounter() {
    let females = users.reduce(function (sum, item, index, array) {
        if (item.gender == "Female") {
            sum = sum + 1
        }
        return sum
    }, 0)
    return females
}
femaleCounter();

// 9
function getMalesBalance() {
    let males = users.filter(item => item.gender == "Male");

    let malesBalance = males.reduce(function (sum, item, index, array) {
        sum = sum + item.balance
        return sum
    }, 0)
    return malesBalance;
}

function malesBalance() {
    let males = users.filter(item => item.gender == "Male");
    let sum = 0
    for (let i = 0; i < males.length; i++) {
        sum = sum + males[i].balance;
    }
    return sum

}

getMalesBalance();
malesBalance();

// 10  

function franceBalanceAvarage() {
    let franceUsers = users.filter(item => item.country == "France");
    let average = franceUsers.reduce(function (avg, item, index, array) {
        return avg + (item.balance / franceUsers.length)
    }, 0)
    return average;
}

function franceAvarage() {
    let franceUsers = users.filter(item => item.country == "France");
    let sum = 0;
    for (let i = 0; i < franceUsers.length; i++) {
        sum = sum + franceUsers[i].balance;
    }
    return sum / franceUsers.length;
}

franceBalanceAvarage();
franceAvarage();

// 11

function getMarchborns() {
    let date = new Date();
    let getDate = date.getFullYear();
    let moreThan18 = []
    users.map(item => {
        if (getDate - 18 > item.birthDate.slice(-4)) {
            moreThan18.push(item)
        }
    })

    let marchBorns = moreThan18.filter(item => item.birthDate.slice(0, 2) == "03");
    let saveNames = [];
    marchBorns.map(item => {
        saveNames.push(item.firstName)
        saveNames.push(item.lastName)
    })
    return saveNames
}

getMarchborns();

// 12 

function getRichManName(callback) {
    let date = new Date();
    let getDate = date.getFullYear();
    let lessThan21 = [];
    users.map(item => {
        if (getDate - 21 <= item.birthDate.slice(-4)) {
            lessThan21.push(item)
        }
    })

    let balances = lessThan21.map(item => item.balance);
    let names;
    for (let i = 0; i < lessThan21.length; i++) {
        if (lessThan21[i].balance == Math.max(...balances)) {
            names = `${lessThan21[i].firstName}${" "}${lessThan21[i].lastName}`;

        }
    }
    return names
}

getRichManName();

// // 13

function getIranianInfo() {
    let iranians = users.filter(item => item.country == "Iran");
    let iranianInfo = [[], []]
    iranians.map(item => {
        iranianInfo[0].push(item.email)
        iranianInfo[1].push(item.birthDate)
    })
    return iranianInfo
}

getIranianInfo();

// 14 
function getAgeDiffrence() {
    let americanMen = users.filter(item => item.country == "United States")
    let americanMenbalance = americanMen.map(item => {
        return item.balance;
    });
    let ages = []
    for (let i = 0; i < americanMen.length; i++) {
        if (americanMen[i].balance == Math.max(...americanMenbalance)) {
            ages.push(americanMen[i].birthDate.slice(-4));
        }
    }

    let franceWomen = users.filter(item => item.country == "France");
    let franceWomenbalance = franceWomen.map(item => {
        return item.balance;
    });
    for (let i = 0; i < franceWomen.length; i++) {
        if (franceWomen[i].balance == Math.max(...franceWomenbalance)) {
            ages.push(franceWomen[i].birthDate.slice(-4));
        }
    }
    let maxAge = Math.max(...ages)
    let minAge = Math.min(...ages)
    return maxAge - minAge

}

getAgeDiffrence();

// // 15 munde
// function findAvg(){
// let avrage=[]
//     let countries = users.map(item => {
//         return item.country
//     }
//     )
//     let uniqeCountries = [...new Set(countries)]
//     uniqeCountries.map(item => {
//         const countriesUsers = users.filter(user => user.country == item);
//      let age = countriesUsers.reduce((avg, user) => {
//           console.log(avg +Math.floor(new Date() - new Date(user.birthDate)) / (365*25*60*60*1000)) ;

//         }, 0)
//         // const avrage = (age/countriesUsers.length);
//         // return{country:item , average : age}
//     });
//     // return avrage
// }
// findAvg();
// // 16
function iranianBalanceAvg() {
    let irani = users.filter(item => item.country == "Iran");
    let secondHalfBorn = irani.filter(item => item.birthDate.slice(3, 5) > "15");
    let average = secondHalfBorn.reduce(function (avg, item, index, array) {
        return avg + (item.balance / secondHalfBorn.length)
    }, 0)
    return average;

}
iranianBalanceAvg();

// // 17
function getWordsHaveAb() {
    let saveNames = [[], []]
    let haveAB = users.filter(item => item.firstName.toLowerCase().includes("ab") || item.lastName.toLowerCase().includes("ab"));
    haveAB.map(item => {
        saveNames[0].push(item.firstName)
        saveNames[1].push(item.lastName)
    })
    return saveNames;
}
getWordsHaveAb();

// // 18 munde ba hamun tabee richman bayad beshe

function getRichest() {
    let haveAB = users.filter(item => item.firstName.toLowerCase().includes("ab") || item.lastName.toLowerCase().includes("ab"));
    let balance = haveAB.map(item => {
        return item.balance;
    });
    for (let i = 0; i < haveAB.length; i++) {
        if (haveAB[i].balance == Math.max(...balance)) {
            let richestMan = haveAB[i];
        }
    }
}

getRichest();

// // 19

// 20
let date = new Date();
let getDate = date.getFullYear();

function removeFromList() {
    let x = users.filter(item => !(item.country == "Iran" && item.birthDate.slice(-4) > getDate - 30) && !(item.country == "United States" && item.birthDate.slice(-4) > getDate - 25));
    return x
}

removeFromList()

