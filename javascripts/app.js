// Rover Object Goes Here
const rover = {
  name: "R1",
  x: 0,
  y: 0,
  direction: "N"
};

const travelLog = [];

turnLeft = rover => {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      console.log(
        `turnLeft was called & rover is now facing ${rover.direction} `
      );
  }
};

turnRight = rover => {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
  }
  console.log(`turnRight was called & rover is now facing  ${rover.direction}`);
};

moveForward = rover => {
  if (rover.direction == "W") {
    rover.x++, travelLog.push(`${rover.x} and ${rover.y}`);
  } else if (rover.direction == "N") {
    rover.y--, travelLog.push(`${rover.x} and ${rover.y}`);
  } else if (rover.direction == "S") {
    rover.y++, travelLog.push(`${rover.x} and ${rover.y}`);
  } else if (rover.direction == "E") {
    rover.x--, travelLog.push(`${rover.x} and ${rover.y}`);
  } else {
    console.log("moveForward was called!");
  }
};

commandList = commands => {
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "f") {
      moveForward(rover);
    } else if (commands[i] === "l") {
      turnLeft(rover);
    } else if (commands[i] === "r") {
      turnRight(rover);
    }
  }
};

let guide = ["f", "f", "r", "f", "r", "f", "f", "f"];
commandList(guide);
console.log(travelLog);
