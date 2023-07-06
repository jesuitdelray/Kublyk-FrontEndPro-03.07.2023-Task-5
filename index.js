function averageNumber() {
    const a = prompt("Please, enter first number")
    const b = prompt("Please, enter second number")
    const c = prompt("Please, enter third number")

    if (isNaN(+a) || isNaN(+b) || isNaN(+c)) {
        alert("Only numbers allowed")
        return
    }

    const arr = [+a, +b, +c]

    const average = arr.reduce((acc, val) => acc + val, 0) / arr.length

    return alert(`Average number is : ${average}`)
}

console.log(averageNumber())
