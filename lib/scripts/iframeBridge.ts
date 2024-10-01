// // Listen for messages from the parent
// window.addEventListener("message", (event) => {
//   console.log("Message received from parent:", event.data);

//   // Security check: Ensure the message is from the expected parent domain
//   // if (event.origin !== 'https://your-parent-origin.com') return;

//   // Handle the message (event.data)
// });

// // Send a message back to the parent
// document?.getElementById("sendMessageBtn").addEventListener("click", () => {
//   window.parent.postMessage("Hello from Iframe", "*"); // Replace * with specific origin for security
// });
