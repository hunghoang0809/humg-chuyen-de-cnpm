let backendURL = "http://localhost:3000/"

export async function Get(url = "") {
  var Url = backendURL + url
  const response = await fetch(Url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.json()
}

export async function Post(url = "", body) {
  console.log(body)
  var Url = backendURL + url
  const response = await fetch(Url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  return response.json()
}
