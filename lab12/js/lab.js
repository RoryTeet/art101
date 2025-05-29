// index.js - Lab 12  create conditionals
// Author: Rory Teeter
// Date: May 22nd, 2025

// Constants

function getHouse(num) {
  // get the remainder when divided by 4
  let remainder = num % 4
  let str = "";

  // assign houses with descriptions based off the remainders
  if (remainder == 0) {
      str = "The Ice School will train its student wizards to take high amounts of damage and survive. Ice Wizards have the highest natural health points and defenses which enable them to take large amounts of damage without dying. It is very hard to defeat them. A lot of their functional spells have to do with increasing their defenses and absorbing damage. They also have the ability to taunt enemies, which forces the enemy to focus attacks on them. This can come in handy when playing in a group.";
  } else if (remainder == 1) {
      str = "The Life School will train its student wizards to heal themselves and other players. Life Wizards are given the ability to heal themselves the most effectively, as well as the unique ability to heal other players. Combined with this, they do low to moderate damage attack spells with extremely high accuracy rates. They also possess the sole group heal spell.";
  } else if (remainder == 2) {
      str = "The Death School will train its student wizards to steal and support themselves. Death Wizards belong to an advanced school, simply because most of their spells take multiple step combinations to use effectively. Their spells aren’t the strongest, but some have the ability to absorb health from the enemy, which serves as a way for them to heal themselves. They have many preparatory spells that allow them to build up high-damage spells.";
  } else if (remainder == 3) {
      str = "The Myth School will train its student wizards to summon minions. Myth Wizards eventually get four different types of minions, each with a little different function. They have their own moderate damage spells with moderate accuracy, but a lot of their more functional spells deal with buffing, healing, and protecting their minions. They also have the ability of taking down defenses on other players, so if someone is stacking a bunch of defensive spells, a Myth wizard can get rid of them";
  }
  return str;
};

// attach click listener to submit button
$("#button").click(function(){
  console.log("Button clicked!");
  
  // get the value in the input text box, assign to a variable name
  let name = $("#input").val()
  console.log(name);

  // get the length of the name
  let nameLength = name.length;
  console.log(nameLength);

  // get the house
  let house = getHouse(nameLength);
  console.log(house);

  // add house to output div
  $("#output").html("<h2>" + house + "</h2>");
});
