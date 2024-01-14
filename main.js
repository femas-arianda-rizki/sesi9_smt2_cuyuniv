const endpoint = "https://reqres.in/api/users";

// -- cara 1
// fetch(endpoint)
//   .then((data) => data.json())
//   .then((result) => console.log(result.data));

// -- cara 2
fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "femas@gmail.com",
    firstName: "femas"
  }),
})
  .then((result) => result.json())
  .then((data) => console.log(data));

// -- cara 3
// async function hitAPI() {
//   const api = await fetch(endpoint)
//   const {data} = await api.json()
//   console.log(data)
// }