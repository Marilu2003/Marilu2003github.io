let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Y te voy a hablar sobre psicologia Social.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
