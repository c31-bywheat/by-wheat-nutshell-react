// import { getEnabledCategories } from "trace_events";

const apiURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${apiURL}/messages`)
        .then(messages => messages.json())
    },
    getOne(id) {
        return fetch(`${apiURL}/messages/${id}`)
        .then(message => message.json())
    },
    deleteMessage(id) {
        return fetch(`${apiURL}/messages/${id}`, {
            method: "DELETE"
        })
        .then(message => message.json())
    },
    postMessage(newMessage) {
        return fetch(`${apiURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(message => message.json())
    }
}