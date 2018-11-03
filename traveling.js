var tigger = {character: "Tigger"}; 
var pooh = {character: "Winnie the Pooh"};
tigger.north = pooh; 
pooh.south = tigger;

var piglet = {character: "Piglet"};
piglet.east = tigger.north;
tigger.north.west = piglet;
piglet.east.south = tigger;

var bees = {character: "Bees"};
bees.west = tigger.north;
tigger.north.east = bees;
piglet.east.east = bees;
pooh.east = bees;

var robin = {character: "Christopher Robin"};
robin.south = piglet.east;
tigger.north.north = robin;
piglet.east.north = robin;
bees.west.north = robin;
pooh.north = robin;

var owl = {character: "Owl"};
owl.east = pooh.north;
owl.south = pooh.west;
pooh.north.west = owl;
pooh.west.north = owl;
piglet.north = owl;
robin.west = owl;
bees.west.west.north = owl;
tigger.north.north.west = owl;

var rabbit = {character: "Rabbit"};
rabbit.west = pooh.north;
rabbit.south = pooh.east;
owl.east.east = rabbit;
piglet.east.east.north = rabbit;
tigger.north.north.east = rabbit;

var gopher = {character: "Gopher"};
rabbit.east = gopher;
gopher.west = rabbit;
robin.east.east = gopher;
bees.north = gopher.west;
owl.east.east.east = gopher;
piglet.north.east.east.east = gopher;
pooh.north.east.east = gopher;
tigger.north.north.east.east = gopher;

var kanga = {character: "Kanga"};
kanga.south = robin;
robin.north = kanga;
owl.east.north = kanga;
rabbit.west.north = kanga;
gopher.west.west.north = kanga;
pooh.north = kanga.south;
piglet.east.north = kanga.south;
bees.west.north = kanga.south;
tigger.north.north.north = kanga;

var eeyore = {character: "Eeyore"};
eeyore.south = robin.north;
owl.east.north.north = eeyore;
rabbit.west.north.north = eeyore;
gopher.west.west.north = eeyore.south;
piglet.east.north.north = eeyore.south;
pooh.north.north = eeyore.south;
bees.west.north.north = eeyore.south;
tigger.north.north.north = eeyore.south;

var heffalumps = {character: "Heffalumps"};
heffalumps.west = eeyore;
eeyore.east = heffalumps;
kanga.north = heffalumps.west;
robin.north.north.east = heffalumps;
owl.east.north.north = heffalumps.west;
rabbit.west.north.north = heffalumps.west;
gopher.west.west.north.north = heffalumps.west;
pooh.north.north.north = heffalumps.west;
piglet.east.north.north.north = heffalumps.west;
bees.west.north.north.north = heffalumps.west;
tigger.north.north.north.north = heffalumps.west;

var player = {
    location: tigger
}

function move (direction) {
    if (direction == "north") {
        if (player.location.north != null) {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house.")
        }
        else {
            console.log("You cannot go that way.");
        }
    }
    if (direction == "south") {
        if (player.location.south != null) {
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house.")
        }
        else {
            console.log("You cannot go that way.");
        }
    }
    if (direction == "west") {
        if (player.location.west != null) {
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house.")
        }
        else {
            console.log("You cannot go that way.");
        }
    }
    if (direction == "east") {
        if (player.location.east != null) {
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house.")
        }
        else {
            console.log("You cannot go that way.");
        }
    }
}

move("north")
move("north")
move("west")
move("west")
move("south")
move("east")
move("north")