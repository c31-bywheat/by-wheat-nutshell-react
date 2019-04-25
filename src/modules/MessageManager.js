

const apiURL = "http://localhost:5002"

export default {
    getAllMessages() {
        return fetch(`${apiURL}/messages?_expand=user`)
        .then(messages => messages.json())
    },
    getOneMessage(id) {
        return fetch(`${apiURL}/messages/${id}`)
        .then(message => message.json())
    },
    deleteMessage(id) {
        return fetch(`${apiURL}/messages/${id}`, {
            method: "DELETE"
        })
        .then(message => message.json())
        .then(() => this.getAllMessages())
    },
    postMessage(newMessage) {
        return fetch(`${apiURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(message => message.json())
    },
    putMessage(editedMessage) {
        return fetch(`${apiURL}/messages/${editedMessage.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedMessage)
        }).then(data => data.json());
      }
}

