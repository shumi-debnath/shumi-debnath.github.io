document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 150, timeBetweenNPCs: 3500, npcCollisionRadius: 150, actionDuration:600, jumpHeight: 165, npcSpeed: 300, heroSpeed: 170, makeResponsive: true});
});