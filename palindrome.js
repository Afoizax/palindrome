var palindrome = prompt('Entrez votre palindrome');
var tableau = palindrome.split("")
console.log(tableau)
var reversePal = tableau.reverse()
console.log(reversePal)
var emordnilap = reversePal.join("")
console.log(emordnilap)

    if (palindrome == emordnilap) {
    console.log("Yes ! C'est un palindrome")
} else {
    console.log("Nope, essayez encore!")
}
