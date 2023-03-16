export const AddToHomeScreen = () => {
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.innerHTML = `Add to home screen`;

  let deferredPrompt;
  console.log('add beforeinstallprompt lis');
  window.addEventListener("beforeinstallprompt", (e) => {
    console.log('beforeinstallprompt');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    button.style.display = "block";

    button.addEventListener("click", (e) => {
      // hide our user interface that shows our A2HS button
      button.style.display = "none";
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  });

  return button;
}
