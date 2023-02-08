const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}
  
function handleObject(obj, key, action) {

  if (action === 'get') {
    return obj[key]
  }
  if (action === 'add') {
    obj[key] = ''
    return obj
  }
  if (action === 'delete') {
    delete obj[key]
    return obj
  }

}

console.log(handleObject(student, 'programmingLanguage', 'get'))
console.log(handleObject(student, 'hasExp?', 'add'))
console.log(handleObject(student, 'programmingLanguage', 'delete'))
