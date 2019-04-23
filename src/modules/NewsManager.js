const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(e => e.json())
  },
  getAllNews() {
    return fetch(`${remoteURL}/articles`).then(e => e.json())
  },
 removeAndListNews(id) {
        return fetch(`http://localhost:5002/articles/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => this.getAllNews())
    },

post(newNews) {
  return fetch(`${remoteURL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newNews)
  }).then(data => data.json())
}
}
