var x1 = 'pqrst'
var x2 = "pqrst"
// var x3
//var x3 = null
console.log(typeof x1, x1.length)
console.log(typeof x2, x2.length)
//console.log(typeof x3, x3.length)
var x3 = "abcdefg1234567中文輸入也沒有問題堃"
// x3.forEach((v, i, a) => {
//     console.log(v)
// })
x3.split("").forEach((v, i, a) => {
    console.log("*", v)
    console.log("#", v.charCodeAt(0))
})