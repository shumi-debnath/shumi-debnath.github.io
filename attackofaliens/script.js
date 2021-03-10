document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3500, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 300, npcSpeed: 300, heroSpeed: 150});
});