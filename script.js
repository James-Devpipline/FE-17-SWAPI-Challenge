/* 
Challenge: 
Make a request to swapi's 'people/:id' Endpoint. I want you to properly strip the json readable stream, and then I want you to console.log the person's name.
Catch errors appropriately.
*/

fetch("https://swapi.tech/api/people/1")
  .then(rest => rest.json())
  .then(jsonData => jsonData.result.properties.name)
  .then(grabbedData => document.body.appendChild(document.createTextNode(grabbedData)))
  .then(data => console.log(data))
  .catch(err => console.error(err))