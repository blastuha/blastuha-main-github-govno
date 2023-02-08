const developer = {
    name: 'Maxim',
    job: 'Front-end разработчик',
    exp: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: 'ReactJs'
    }
}

// console.log(developer)

// // 1
// console.log('name', developer.name)
// console.log('name', developer.jobAllInfo)

// // 2
// const key = 'name'
// console.log('name', developer[key])

console.log('type', developer.jobAllInfo.type)
console.log('framework', developer['jobAllInfo']['framework'])

const key3 = 'jobAllInfo'
console.log(developer[key3]['framework'])