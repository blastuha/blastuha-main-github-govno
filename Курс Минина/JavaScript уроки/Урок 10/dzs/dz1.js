const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
]

const onlineUsers = users.filter((obj) => obj.status === 'online')
console.log(onlineUsers)
const onlineUsersNames = onlineUsers.map((obj) => obj.username).join(', ')
console.log(onlineUsersNames)

console.log(`Онлайн: ${onlineUsersNames}`)