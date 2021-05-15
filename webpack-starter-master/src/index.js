
const jokeUrl = 'https://api.chucknorris.io/jokes/random';


/* fetch(jokeUrl).then(resp => {

 resp.json().then(data => {
     console.log(`el id es ${data.id}`);
     console.log(`el chiste es ${data.id}`);
     console.log(data.value);
 })
}); */

fetch(jokeUrl)
 .then( resp => resp.json())
 .then(({ id, value }) => {
     console.log(`el id es ${id}`);
     console.log(`el chiste es ${value}`); 
 })