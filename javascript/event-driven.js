/*
In an event-driven architecture there are at least two actors: the subject and the observer.
HTML elements are event emitters.
JavaScript functions registered as listeners are the observers.
*/

// The "click" is the event, "button" is the subject or the emitter. The function is a listener / observer
const btn = document.getElementById('subscribe');

btn.addEventListener("click", function () {
    console.log("Button clicked");
});

