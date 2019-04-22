const apiURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${apiURL}/events/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(`${apiURL}/events`).then(r => r.json())
    },

    delete(id) {
        return fetch(`${apiURL}/events/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    },

    post(newEvents) {
        return fetch(`${apiURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newEvents)
        })
        .then(data => data.json())
    },
    put(editedEvents) {
        return fetch(`${apiURL}/events/${editedEvents.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedEvents)
        }).then(data => data.json());
      }

}