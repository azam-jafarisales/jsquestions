typeof ''                      string
typeof 'hadi'                  string
typeof 'true'                  string
typeof true                    boolean
typeof function () {}          function
typeof (() => {})              function
typeof 10                      number
typeof undefined               undefined
typeof null                    object
typeof typeof null             string
typeof typeof 'anything'       string


typeof { name: 'hadi' }                            object
typeof NaN                                         number
typeof new Date()                                  object
typeof new BigInt('100000000000000000') => big int is not a constructor , if we say BigInt instead of new BigInt >  typeof = BigInt
typeof class foo {}                                function
typeof Math                                         object


Boolean(undefined)                                 false
Boolean(null)                                      false
Boolean(false)                                     false
Boolean(10)                                        true
Boolean(-1)                                        true
Boolean(+0)                                        false
Boolean(-0)                                        false
Boolean(0)                                         false
Boolean(NaN)                                       false
Boolean('')                                        false
Boolean('hadi')                                    true
Boolean(function () {})                            true
Boolean({ name: 'hadi' })                          true


Number(undefined)                                   NaN           
Number(null)                                        0
Number(false)                                       0
Number(true)                                        1
Number(10)                                          10
Number(+0)                                          0
Number(-0)                                          -0
Number('')                                          0
Number('hadi')                                      NaN
Number('true')                                      NaN
Number(NaN)                                         NaN
Number(function () {})                              NaN
Number({ name: 'hadi' })                            NaN


String(null)                                                    " null"
String(undefined)                                                "undefined"
String(false)                                                    "false"
String(true)                                                     "true"
String(10)                                                       "10"
String(NaN)                                                      "NaN"
String(function() {})                                            "function() {}"
String({ name: 'hadi' })                                        " [object Object]"
String(new Date())                                              " Mon Aug 07 2023 10:06:30 GMT+0330 (Iran Standard Time)"
String(BigInt(10000000000000000000000000000000000))              "9999999999999999455752309870428160"


10 + 2                                 12
10 + '2'                               102
10 + '2' + 10                          10210
10 + 10 + '2'                          202
10 + ''                                10
null + ''                              null
undefined + ''                         undefined
null + undefined                       NaN
undefined + undefined                  NaN
null + null                            0
true + 10                              10
false + 11                             11
