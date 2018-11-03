var tigger = {
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};

var pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh, bother....");
    }
};
tigger.north = pooh; 
pooh.south = tigger;

var piglet = {
    character: "Piglet",
    greet: function(){
        console.log("Oh, d-d-d-dear! I didn't expect you to be here!");
    }
};
piglet.east = tigger.north;
tigger.north.west = piglet;
piglet.east.south = tigger;

var bees = {
    character: "Bees",
    greet: function(){
        console.log("Buzz buzz");
    }
};
bees.west = tigger.north;
tigger.north.east = bees;
piglet.east.east = bees;
pooh.east = bees;

var robin = {
    character: "Christopher Robin",
    greet: function(){
        console.log("You're braver than you believe,",
        "stronger than you seem, and smarter than you think.");
    }
};
robin.south = piglet.east;
tigger.north.north = robin;
piglet.east.north = robin;
bees.west.north = robin;
pooh.north = robin;

var owl = {
    character: "Owl",
    greet: function(){
        console.log("You're on an adventure, eh? Well, good luck to you, lad! ");
    }
};
owl.east = pooh.north;
owl.south = pooh.west;
pooh.north.west = owl;
pooh.west.north = owl;
piglet.north = owl;
robin.west = owl;
bees.west.west.north = owl;
tigger.north.north.west = owl;

var rabbit = {
    character: "Rabbit",
    greet: function(){
        console.log("Oh, why does it always have to be me? Why, oh why, oh why?");
    }
};
rabbit.west = pooh.north;
rabbit.south = pooh.east;
owl.east.east = rabbit;
piglet.east.east.north = rabbit;
tigger.north.north.east = rabbit;

var gopher = {
    character: "Gopher",
    greet: function(){
        console.log("Say, what's wrong, Sonny?");
    }
};
rabbit.east = gopher;
gopher.west = rabbit;
robin.east.east = gopher;
bees.north = gopher.west;
owl.east.east.east = gopher;
piglet.north.east.east.east = gopher;
pooh.north.east.east = gopher;
tigger.north.north.east.east = gopher;

var kanga = {
    character: "Kanga",
    greet: function(){
        console.log("Ooh, a visitor!");
    }
};
kanga.south = robin;
robin.north = kanga;
owl.east.north = kanga;
rabbit.west.north = kanga;
gopher.west.west.north = kanga;
pooh.north = kanga.south;
piglet.east.north = kanga.south;
bees.west.north = kanga.south;
tigger.north.north.north = kanga;

var eeyore = {
    character: "Eeyore",
    greet: function(){
        console.log("Thanks for noticing' me.");
    }
};
eeyore.south = robin.north;
owl.east.north.north = eeyore;
rabbit.west.north.north = eeyore;
gopher.west.west.north = eeyore.south;
piglet.east.north.north = eeyore.south;
pooh.north.north = eeyore.south;
bees.west.north.north = eeyore.south;
tigger.north.north.north = eeyore.south;

var heffalumps = {
    character: "Heffalumps",
    greet: function(){
        console.log("Heffalumps and Woozles!");
    }
};
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
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
        else {
            console.log("You cannot go that way.");
        }
    }
    if (direction == "south") {
        if (player.location.south != null) {
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
        else {
            console.log("You cannot go that way.");
        }
    }
    if (direction == "west") {
        if (player.location.west != null) {
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
        else {
            console.log("You cannot go that way.");
        }
    }
    if (direction == "east") {
        if (player.location.east != null) {
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
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