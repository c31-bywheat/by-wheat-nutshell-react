const URL = "http://localhost:5002"

export default {
        getAllTasks() {
                return fetch(`${URL}/tasks`)
                        .then(data => data.json())
        },
        getTask(id) {
                return fetch(`${URL}/tasks/${id}`)
                        .then(data => data.json())
        },
        deleteTask(id) {
                return fetch(`${URL}/tasks/${id}`, {
                        method: "DELETE"
                })
                        .then(data => data.json())
                        .then(() => this.getAllTasks())
        },
        addTask(newTask) {
                return fetch(`${URL}/tasks`, {
                        method: "POST",
                        headers: {
                                "content-type":"application/json"
                        },
                        body: JSON.stringify(newTask)
                })
                .then(data => data.json)
        },
        updateTask(editedTask) {
                return fetch(`${URL}/tasks/${editedTask.id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(editedTask)
                }).then(data => data.json());
              }
}
