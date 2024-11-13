// // mapBlinkingDot.js

// // Example of inconsistency data format
// const inconsistencyData = [
//   { LGA_of_occurence: "Owo" },
//   { LGA_of_occurence: "Irele" },
//   { LGA_of_occurence: "Ilaje" },
//   // Add more LGAs with inconsistencies as needed
// ];

// document.addEventListener("DOMContentLoaded", function () {

//   toggleBlinkingDot(inconsistencyData);

//   const blinkColors = ["#FF00DD", "#F3A4FF", "#C636F6", "#840082"];

//   function createBlinkingDot(lgaId) {
//     // Select the SVG element for the LGA
//     const lgaElement = document.getElementById(lgaId);
//     if (!lgaElement) return;

//     // Create a dot element
//     const dot = document.createElement("div");
//     dot.classList.add("blinking-dot");

//     // Append dot to the LGA element
//     lgaElement.appendChild(dot);
//   }

//   function removeBlinkingDot(lgaId) {
//     const lgaElement = document.getElementById(lgaId);
//     if (lgaElement) {
//       const dot = lgaElement.querySelector(".blinking-dot");
//       if (dot) dot.remove();
//     }
//   }

//   // Function to toggle the blinking dot based on inconsistency data
//   function toggleBlinkingDot(inconsistencyData) {
//     // Clear existing blinking dots
//     document.querySelectorAll(".blinking-dot").forEach((dot) => dot.remove());

//     // Loop through inconsistency data to add blinking dots
//     inconsistencyData.forEach((item) => {
//       const lgaId = item.LGA_of_occurence;
//       createBlinkingDot(lgaId);
//     });
//   }
// });
