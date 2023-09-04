import users from "./users.js"

function groupByCountry() {
    let obj = {};
    let countries = users.map(item => item.country);
    let uniqContries = Array.from(new Set(countries));
    uniqContries.map((item, index) => {
        obj[item] = {}
    })

    for (let key in obj) {
        obj[key] = users.filter(item => item.country == key)

    }
    return obj
}

groupByCountry();






function groupByGender() {
    let obj = {};
    let gender = users.map(item => item.gender);
    let uniqGender = Array.from(new Set(gender));
    uniqGender.map((item, index) => {
        obj[item] = {}
    })

    for (let key in obj) {
        obj[key] = users.filter(item => item.gender == key)

    }
    return obj
}

groupByGender();







function groupBy(str) {
    let obj = {};
    for (let i = 0; i < users.length; i++) {
        for (let key in users[i]) {
            if (key == str) {
                obj[users[i][key]] = {}
            }
        }
    }
    for (let key in obj) {
        obj[key] = users.filter(item => {
            for (let k in item) {
                if (k == str && item[k] == key) {
                    return item
                }
            }
        })
    }

    return obj
}

groupBy("country");








function groupByKey(callback) {
    let obj = {};
    callback();
    uniqKeys.map((item, index) => {
        obj[item] = {}
    })

    for (let key in obj) {
        obj[key] = users.filter(item => {
            for (let k in item) {
                if (item[k] == key) {
                    return item

                }
            }
        })
    }

    return obj
}

let uniqKeys;
function getGender() {
    let gender = users.map(item => item.gender);
    uniqKeys = Array.from(new Set(gender));
    return uniqKeys;
}

function getCountry() {
    let country = users.map(item => item.country);
    uniqKeys = Array.from(new Set(country));
    return uniqKeys;
}



groupByKey(getCountry);








let inputObj = {
    A: 10,
    B: 20
}

function multipleByeTwo(key, value) {
    return key + value * 2
}

function objectMap(obj, callback) {
    let newObj = {};
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    keys.map((item, index) => {
        newObj[item] = ""
    })

    for (let key in newObj) {
        keys.map((item, index) => {
            if (key == item) {
                newObj[key] = callback(key, values[index])
            }
        })
    }
    return newObj

}

objectMap(inputObj, multipleByeTwo);

let inputObject = {
    A: 10,
    B: 20,
    C: 30,
    D: 40
}

function doFilter(obj, callback) {
    let newObj = {}
    for (let key in obj) {
        if (callback(key, obj[key])) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

function exists(key, value) {
    return value > 20
}

doFilter(inputObject, exists)

