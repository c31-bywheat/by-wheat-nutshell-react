const URL = "http://localhost:5002"

export default {
        getAll() {
                return fetch(`${URL}/tasks`)
                .then(tasks => tasks.json())
            }
}
