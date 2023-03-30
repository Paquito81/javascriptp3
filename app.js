/**
 * 
 * Question 1. SHOW RATING
 * Given a rating display a star(*) for each full rating and a full-stop (.) for each 
 * half rating
 * 
 * showRating(3) -> "* * *"
 * showRating(4.5) -> "* * * * ."
 * showRating(0.5) -> "."
 */


// function showRating(arr) {
//     let ratings = "";
//     for (let i = 0; i < 4; ++i) {
//         ratings = ratings + "*"
//         if (i !== 3) {
//             ratings = ratings + " "
//         }
//     }
//     return ratings;
// }
// console.log(showRating(4));



// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings = ratings + "*"; 
//         if ( i !== Math.floor(rating) - 1) {
//             ratings = ratings + " ";
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings = ratings + " .";
//     }
//     return ratings;
// }

// console.log(showRating(4.5));


// console.log(showRating(3.5));

// function showRating(rating) {
    //initiate an empty string

    //loop through the rounded dowm rating

    // add a star for every interation

    //if its not the last iteration add a space
    
    //if the number is not an integer

    //add a full stop

    //return it
// }

// console.log(showRating(3.5));


/**
 * Question 2. Sort by lowest to highest price
 * Given an array of numbers, return the prices sorted by low to high
 * sortLowToHigh([20, 40, 10, 30, 50, 10]) -> [10, 10, 20, 30, 40, 50]
 * sortLowToHigh([5, 10, 0, -5]) -> [-5, 0, 5, 10]
 * sortLowToHigh([3, 2, 1, 0]) -> [0, 1, 2, 3]
 */

// function sortLowToHigh(numbers) {
//     return numbers.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
// console.log(sortLowToHigh([5, 10, 0, -5]));
// console.log(sortLowToHigh([3, 2, 1, 0]));
// console.log(sortLowToHigh([1, 5, 0, 10, 1000005, 2000, 2]));

/**
 * Question 3. Sort by highest to lowest price
 * Given an array of objects, return the prices sorted by high and low
 * 
 * sortHighToLow([
 * { id: 1, price: 50},
 * { id: 2, price: 30},
 * { id: 3, price: 60},
 * { id: 4, price: 10}])
 * sortHighToLow([
 * { id: 1, price: 50},
 * { id: 2, price: 30},
 * { id: 3, price: 60},
 * { id: 4, price: 10}])
 * 
 */

// function sortHighToLow(numbers) {
//     return numbers.sort((a, b) => b.price - a.price);
// }
// console.log(
//     sortHighToLow([
//         {id: 1, price: 50},
//         {id: 2, price: 0},
//         {id: 3, price: 500},
//     ])
// );

/**
 * Question 4. Promises
 * Om youtube watch:
 * 
 * "The Async Await Episode I Promised" -Fireship
 * "Async Await Javascript ES7" -Techsith (1.5x speed)
 * "Async JS Crash Course - Callbacks, Promises, Async Await" -Travsery Media (1.5x Speed)
 *  
*/ 

/**
 * Question 5. Find all the posts by a single user
 * Call this API "https:/jsonplaceholder.typicode.com/posts" and return all the posts by any given user id.
 * 
 * 
 */

// function postsByUser(userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//         console.log(res)
//         console.log(userId)
//     })
// }

// postsByUser(4);

// async function postsByUser(userId) {
//     const result = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(result);
// }

// postsByUser(4);


// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(await promise.json());
// }

// postsByUser(4);

// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
//     const result = await promise.json()

//     const posts = result.filter(element => element.userId === userId)
    
//     console.log(posts)
// }

// postsByUser(5);

/**
 * Question 6. Incomplete todos
 * call this API "https://jsonholder.typicode.com/todos" and return the first 6 incomplete todo's from the result
 * 
 * firstSixIncomplete()
 */

async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    const result = await promise.json()

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);
    
    console.log(incompleteTasks);
}

firstSixIncomplete(5);






