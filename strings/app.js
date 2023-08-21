function filter(str, arr) {
    let convertToArray = str.split(" ");
    let changedWord = ""
    return convertToArray.map(item => {
        if (arr.includes(item)) {
            return "".padEnd(item.length, "*")
        }
        return item
    }).join(" ")

}

filter()



function getReverseCharacters(name) {
    let arr = name.split("");
    let reversedChar = (arr.reverse());
    return arr.join("")

}

getReverseCharacters();



function toFarsi(str) {
    const farsiDigits = '۰۱۲۳۴۵۶۷۸۹'
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10 && arr[i] >= 0) {
            arr[i] = farsiDigits[arr[i]];
        }
    }
    return arr.join("");
}

toFarsi();



function moreRepeatedCharacters(str) {
    let obj = {};
    let result = {}
    let objKeys = Object.keys(counter(str, obj));
    let objvals = Object.values(counter(str, obj))
    let sortedvals = objvals.sort(function (a, b) { return b - a })


    for (let key in counter(str, obj)) {
        if (counter(str, obj)[key] === sortedvals[0]) {
            result.character = key;
            result.count = counter(str, obj)[key];
        }
    }
    return result;
}

moreRepeatedCharacters();




function isRoot(name1, name2) {
    let repeatcount1;
    let repeatcount2;
    counter(name2, repeatcount2)
    const keys1 = Object.keys(counter(name1, repeatcount1));
    const keys2 = Object.keys(counter(name2, repeatcount2));
    if (keys1.length == keys2.length) {
        for (let i = 0; i < keys1.length; i++) {
            for (let j = 0; j < keys2.length; j++) {
                if (keys1[i] == keys1[j]) {
                    if (Object.values(counter(name1, repeatcount1))[i] == Object.values(counter(name1, repeatcount1))[j]) {
                        return true;
                    }
                }
            }
        }
    } else {
        return false;

    }
}

isRoot();



function counter(name, repeatcount) {
    repeatcount = {}
    for (let i = 0; i < name.length; i++) {
        if (name[i] != " ") {
            if (name[i] in repeatcount) {
                repeatcount[name[i]] += 1
            } else {
                repeatcount[name[i]] = 1
            }
        }
    }
    return repeatcount
}





function seperator() {
    let arr = [];
    for (let i = 0; i < str.length / 3; i++) {
        let x = str.substring(str.length - ((i + 1) * 3), str.length - i * 3)
        arr.unshift(x)
    }
    return arr.toString();
}

seperator();





function konwTrueParantez(str) {
    let Parantez = [];
    let countOpenParantez = 0;
    let countCloseParantez = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            countOpenParantez++
            Parantez.push(str[i])
        } else if (str[i] == ")") {
            countCloseParantez++
            Parantez.push(str[i])
        }
    }
    if (countCloseParantez == countOpenParantez && Parantez[0] == "(" && Parantez[Parantez.length - 1] == ")") {
        return true
    } else {
        return false
    }
}

konwTrueParantez();





function getUniqCharacters(str) {
    let uniqs = new Set(str.split(""));
    let unqArray = Array.from(uniqs);
    let result = unqArray.join("");
    return result;
}
getUniqCharacters();




function validityMeasure(str) {
    let count = str.length;
    let checkUpperCase = false;
    let checkNumber = false;
    let checkLowerCase = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase() && !checkUpperCase) {
            count = count + 2;
            checkUpperCase = true;
        }
        if (!checkLowerCase && str[i] == str[i].toLowerCase()) {
            count++;
            checkLowerCase = true;
        }
        if (!isNaN(str[i]) && !checkNumber) {
            count += 2;
            checkNumber = true;
        }
    }
    return count;
}

validityMeasure()




function replaceAll(input, replaceThis, replaceTo) {
    let input1 = input.split(" ");
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] == replaceThis) {
            input1[i] = replaceTo;
        }
    }
    return input1.join(" ")
}
replaceAll();