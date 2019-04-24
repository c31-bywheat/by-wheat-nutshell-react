const apiURL = "http://localhost:5002"

export default {
    getEvent(id) {
        return fetch(`${apiURL}/events/${id}`).then(r => r.json())
    },

    getAllEvent() {
        return fetch(`${apiURL}/events`).then(r => r.json())
    },

    deleteEvent(id) {
        return fetch(`${apiURL}/events/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => this.getAllEvent())
    },

    postEvent(newEvents) {
        return fetch(`${apiURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newEvents)
        })
        .then(data => data.json())
    },
    putEvent(editedEvents) {
        return fetch(`${apiURL}/events/${editedEvents.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedEvents)
        }).then(data => data.json());
      }

}