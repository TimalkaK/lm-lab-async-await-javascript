import fetch from "node-fetch";

// const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// // const fetchData = (apiEndPoint) => {
// //   fetch(apiEndPoint)
// //     .then((response) => response.json())
// //     .then((json) => console.log(json))
// //     .catch((error) => console.log(error));
// // };

// // fetchData(jsonTypicode);

// async function fetchData(apiEndPoint){
//   try{
//     const response = await fetch(apiEndPoint);
//     const json = await response.json();
//     console.log(json);
//   }catch(error){
//     console.log(error);
//   }
// }

// fetchData(jsonTypicode);


const catFacts = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2";

async function fetchData(catFacts){
  try{
    const response = await fetch(catFacts);
    const json = await response.json();
    console.log(json);
  }catch(error){
    console.log(error);
  }
}

fetchData(catFacts);