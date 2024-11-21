// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Time Based Background Color</title>
//     <style>
//         body {
//             display: flex;
//             justify-content: center;cls
//             align-items: center;
//             height: 100vh;
//             transition: background-color 0.7s;
//             margin: 0;
//         }

//         .container {
//             text-align: center;
//         }

//         .morning {
//             background-color: #FFFAE3; 
//         }

//         .afternoon {
//             background-color: #FFE4B5; 
//         }

//         .evening {
//             background-color: #2E3B55; 
//             color: white; 
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1 id="greeting">Welcome!</h1>
//         <button onclick="changeBackground()">Check Time</button>
//     </div>
//     <script>
//         function changeBackground() {
//             const now = new Date();
//             const hours = now.getHours();
//             const greetingElement = document.getElementById('greeting');
//             const body = document.body;

//             if (hours >= 6 && hours < 12) {

//                 body.className = 'morning';
//                 greetingElement.textContent = 'Good Morning!';
//             } else if (hours >= 12 && hours < 18) {
//                 body.className = 'afternoon';
//                 greetingElement.textContent = 'Good Afternoon!';
//             } else {
//                 body.className = 'evening';
//                 greetingElement.textContent = 'Good Evening!';
//             }
//         }
//     </script>
// </body>
// </html>





// const numbers = [10, 20, 30, 40, 50];

// let sumForIn = 0;
// for (let index in numbers) {
//     sumForIn += numbers[index];
// }
// console.log("Sum using for...in loop:", sumForIn);

// let sumForOf = 0;
// for (let number of numbers) {
//     sumForOf += number;
// }
// console.log("Sum using for...of loop:", sumForOf);

// let sumWhile = 0;
// let i = 0;
// while (i < numbers.length) {
//     sumWhile += numbers[i];
//     i++;
// }
// console.log("Sum using while loop:", sumWhile);

// let sumDoWhile = 0;
//  i = 0;
// do {
//     sumDoWhile += numbers[i];
//     i++;
// } while (i < numbers.length);
// console.log("Sum using do...while loop:", sumDoWhile);



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Day of the Week Finder</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             margin: 0;
//         }
//         .container {
//             background: white;
//             padding: 20px;
//             border-radius: 5px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         input {
//             padding: 10px;
//             margin: 10px 0;
//             width: 100%;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//         }
//         button {
//             padding: 10px;
//             background-color: #28a745;
//             color: white;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//         }
//         button:hover {
//             background-color: #218838;
//         }
//         .result {
//             margin-top: 20px;
//             font-size: 18px;
//         }
//     </style>
// </head>
// <body>

// <div class="container">
//     <h2>Find the Day of the Week</h2>
//     <input type="number" id="dayInput" placeholder="Enter a number (1-7)" min="1" max="7">
//     <button onclick="findDay()">Find Day</button>
//     <div class="result" id="result"></div>
// </div>

// <script>
//     function findDay() {
//         const dayNumber = document.getElementById('dayInput').value;
//         let dayName;

//         switch (parseInt(dayNumber)) {
//             case 1:
//                 dayName = "Sunday";
//                 break;
//             case 2:
//                 dayName = "Monday";
//                 break;
//             case 3:
//                 dayName = "Tuesday";
//                 break;
//             case 4:
//                 dayName = "Wednesday";
//                 break;
//             case 5:
//                 dayName = "Thursday";
//                 break;
//             case 6:
//                 dayName = "Friday";
//                 break;
//             case 7:
//                 dayName = "Saturday";
//                 break;
//             default:
//                 dayName = "Invalid input! Please enter a number between 1 and 7.";
//         }

//         document.getElementById('result').innerText = dayName;
//     }
// </script>

// </body>
// </html>



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Ternary Operator Example</title>
//     <style>
//         body {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             background-color: #f0f0f0;
//         }
//         .container {
//             text-align: center;
//         }
//         button {
//             padding: 20px;
//             font-size: 24px;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             background-color: red;
//             transition: background-color 0.3s;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <button id="toggleButton" onclick="toggleState()">OFF</button>
//     </div>
//     <script>
//         let isOn = false;

//         function toggleState() {
//             isOn = !isOn; 
//             const button = document.getElementById('toggleButton');
            
//             button.innerText = isOn ? 'ON' : 'OFF';
//             button.style.backgroundColor = isOn ? 'green' : 'red';
//         }
//     </script>
// </body>
// </html>



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Try-Catch Example</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             margin: 0;
//             padding: 20px;
//         }

//         .container {
//             max-width: 600px;
//             margin: auto;
//             padding: 20px;
//             background: white;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }

//         h1 {
//             text-align: center;
//         }

//         button {
//             display: block;
//             width: 100%;
//             padding: 10px;
//             font-size: 16px;
//             margin-top: 20px;
//         }

//         #result {
//             margin-top: 20px;
//             font-weight: bold;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>Try-Catch Example</h1>
//         <button id="executeButton">Execute Function</button>
//         <p id="result"></p>
//     </div>
//     <script>
//         document.getElementById('executeButton').addEventListener('click', function() {
//             try {
//                 throw Error('This is a simulated error!');
//             } catch (error) {
//                 document.getElementById('result').innerText = `Caught an error: ${error.message}`;
//             }
//         });
//     </script>
// </body>
// </html>