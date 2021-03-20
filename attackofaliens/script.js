document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.gif", actionRadius: 150, timeBetweenNPCs: 5000, npcCollisionRadius: 150, actionDuration:600, jumpHeight: 185, npcSpeed: 300, heroSpeed: 170, removeNPCAfterInteractionDelay: 2000, makeResponsive: true, preGameScreenImageURLs: ["./img/story-1.png", "./img/story-2.gif", "./img/story-3.png", "./img/story-4.png", "./img/instructions.png"], postGameScreenImageURLs: ["./img/end-screen.png"], playUntilScore:5, typesOfNPC:3});
});