const apiUrl = "http://localhost:5002"


export default {

getUser(UserId) {
    return fetch(`${apiUrl}/users/${UserId}`)
    .then(users => users.json())
},

postUser(newUser) {
    return fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(user => user.json())
}
}
