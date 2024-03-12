let factPlaceholder = document.getElementById("dragon-fact");
var showFact = document.getElementById("show-fact");

/* Facts from these API/Sources: https://www.treehugger.com/bearded-dragon-facts-6560979 , https://rvetclinic.com/12-fun-facts-about-bearded-dragons/ , https://www.petmd.com/reptile/care/10-things-you-didnt-know-about-bearded-dragons */

var DragonFacts = ["Bearded dragons are native to Australia.",
"Bearded dragons have been around since the time of dinosaurs!",
"When bearded dragons are born, they’re about the size of your pinky finger nail.",
"Bearded dragons are capable of swimming! They can hold their breath for up to two minutes at a time.",
"Bearded dragons have amazing vision and hearing—they can see in color, and can even see things that are moving behind them by using their “parietal eye” (a small gap in their skull).",
"Bearded dragons are omnivores—they eat both plants and meat! Their favorite foods include fruit (think apples), kale, collard greens, dandelions (yum!), carrots, cucumbers…and more!",
"Bearded dragons are very sociable creatures—they enjoy being around other bearded dragons and will often live together in groups.",
"Bearded dragons are one of only two species of lizards that can actually change color!",
"Bearded dragons are a perfect pet for kids! They’re fun, friendly and easy to care for.",
"Bearded dragons can climb trees!",
"Bearded dragons communicate with nods and waves.",
"They can sleep standing up.",
"Bearded dragons brumate in the winter.",

];

var factNumber;

function randomFact(){
  return DragonFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*13);
  factPlaceholder.textContent = randomFact();
});
