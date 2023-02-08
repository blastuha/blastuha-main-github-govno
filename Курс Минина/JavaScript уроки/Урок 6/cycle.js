// for
// while 
// do while

for (let i = 0; i < 10; i += 2) {
    console.log('i =', i)
}

for (let i = 10; i > -5; i--) {
    console.log(i)
}

// while (сначала проверяет условие, потом думает) 
// сначала подумает, потом сделает

let i = 0
while ( i < 10) {
    console.log(i)
    i = i + 3
}

// do while  (сначала делает, потом думает)
// сначала сделает, потом подумает
let i = 0
do {
    console.log('i =', i)
    i++
} while (i <= 1000000)