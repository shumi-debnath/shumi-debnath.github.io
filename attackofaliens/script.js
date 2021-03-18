document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.gif", actionRadius: 150, timeBetweenNPCs: 3500, npcCollisionRadius: 150, actionDuration:600, jumpHeight: 125, npcSpeed: 300, heroSpeed: 170, removeNPCAfterInteractionDelay: 2000, makeResponsive: true});
});