 /* -------------------------------------------------------------------
      Rover object
   -------------------------------------------------------------------   
*/ 
// List of rovers to take turns
const rover = {
    direction: "N", //"N", "S", "E", or "W"
    x: 6, // starting point at 0
    y: 3, // starting point at 0
    travelLog: [{x: 6, y: 3}],
};
  
const rover2 = {
  direction: "N", //"N", "S", "E", or "W"
  x: 4, // starting point at 0
  y: 4, // starting point at 0
  travelLog: [{x: 4, y: 4}],
};
    
/* -------------------------------------------------------------------
      Grid 10 x 10- two-dimensional array
    -------------------------------------------------------------------   
*/ 
let grid = [
  ['','','','','','','','','',''], 
  ['','','','','','obst','','','',''], // grid[1][5]
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','obst','',''], //grid[4][7]
  ['','','','','','','','','',''],
  ['','obst','','','','','','','',''], //grid[6][1]
  ['','','','','obst','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','obst',''] //grid[9][8] 
]
/* -------------------------------------------------------------------
      Functions for the Rover
    -------------------------------------------------------------------   
*/ 
  
const getRoverDirection = (rover) => {
  const checkDirection = rover.direction === "N" || rover.direction === "S" || rover.direction === "E" || rover.direction === "W";
  if(checkDirection) {
      console.log(`The rover direction is: ${rover.direction}`);
      return true;
  } else {
      console.log(`please introduce a valid direction: "N", "S", "E", or "W" `);
      return false;
  }
}

  // Function to turn left --> "l"
function turnLeft(rover) {
  console.log('turnLeft was called!');
  const valid = getRoverDirection(rover);
  if(!valid) { // valid === false
    console.log(`please introduce a valid direction: "N", "S", "E", or "W" `);
  } else {
    switch (rover.direction) {
      case 'N': // Rover faces North and turns left, rover faces --> West
        rover.direction = 'W';
        break;
      case 'W': // Rover faces West and turns left, rover faces --> South
        rover.direction = 'S';
        break;
      case 'S': // Rover faces South and turns left, rover faces --> East
        rover.direction = "E";
        break;
      case 'E': // Rover faces East and turns left, rover faces --> North
        rover.direction = 'N'
        break;
      default:
        console.log(`Please type a valid direction: "N", "S", "E", "W"`);
    }
  }
  console.log(`The actual direction of the rover is: ${rover.direction}`);
}
// Call the function 
//turnLeft(rover);
     
// Function to turn right --> "r"
function turnRight(rover) {
  console.log('turnRight was called!');
  const valid = getRoverDirection(rover);
  if(!valid) { // valid === false
    console.log(`please introduce a valid direction: "N", "S", "E", or "W" `);
  } else {
    switch (rover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'N'
        break;
      default:
        console.log(`Please type a valid direction: "N", "S", "E", "W"`);
    }
  }
  console.log(`The actual direction of the rover is: ${rover.direction}`);
}
//turnRight(rover);
    
// Function to move forward --> "f"
function moveForward(rover) {
  console.log('moveForward was called');
  // Check direction
  const validDirection = getRoverDirection(rover);
  // Check coordinates x, y
  const valid = (rover.x >=0 && rover.x <= 9) && (rover.y >=0 && rover.y <= 9);
  if (!valid ) { //outside the grid 10 x 10
    // if 'x' or 'y' property is lower than 0 or greater than 9
    // player left the 10x10 board
    console.log(`You can't place player outside of the board! with coordinates x: ${rover.x}, y: ${rover.y}`);  
  }  else if(!validDirection) { // valid === false
      console.log(`please introduce a valid direction: "N", "S", "E", or "W" `);
  } else { // inside the grid 10 x 10
      console.log(`Your rover is inside the grid with coordinates x:${rover.x}, y:${rover.y}`);
      switch (rover.direction) {
        case 'W': if(rover.x === 0) {
          console.log(`You can't move forward West, because you'll be outside the 10x10 grid!`);
        } else {
          rover.x-- //move horizontally
          if(!(grid[rover.x][rover.y] === '')) { //if the cell is different from ''
            rover.x++
            console.log(`Watch out! There is an obstacle and you can't move it! Now you are in the same position x:${rover.x}, y:${rover.y}`);
          }
        }
        break;
        case 'E': if(rover.x === 9) {
          console.log(`You can't move forward East, because you'll be outside the 10x10 grid!`);
        } else {
          rover.x++ //move horizontally
          if(!(grid[rover.x][rover.y] === '')) { 
            rover.x--
            console.log(`Watch out! There is an obstacle and you can't move it! Now, you are in the same position x:${rover.x}, y:${rover.y}`);
          }
        }
        break;
        case 'N': if(rover.y === 0){ // if y = 0 can't go forward, otherwise it will be outside the grid
          console.log(`You can't move forward North, because you'll be outside the 10x10 grid!`);
        } else {
          rover.y-- //move vertically
          if(!(grid[rover.x][rover.y] === '')) {
            rover.y++
            console.log(`Watch out! There is an obstacle and you can't move it! Now you are in the same position x:${rover.x}, y:${rover.y}`);
          }
        }
        break;
        case 'S': if(rover.y === 9) {
          console.log(`You can't move forward South, because you'll be outside the 10x10 grid!`);
        } else {
          rover.y++ //move vertically
          console.log(rover.x, rover.y);
          if(!(grid[rover.x][rover.y] === '')) {
            rover.y--
            console.log(`Watch out! There is an obstacle and you can't move it! Now you are in the same position x:${rover.x}, y:${rover.y}`);
          }
        }
        break;
        default:
          console.log(`Please make sure your rover has coordinates x and has a valid direction: "N", "S", "E", or "W"`);
    }
    // get position
    let newPosition = { x: rover.x, y: rover.y };
    // push {x,y} to the travelLog property
    rover.travelLog.push(newPosition);
    console.log(rover.travelLog);
    console.log(`Your rover has coordinates: x: ${rover.x}, y: ${rover.y}`);
  }
}
//moveForward(rover);
    
// Function to move backward --> "b"
function moveBackward(rover) {
  console.log('moveBackward was called');
  console.log(`Rover direction: ${rover.direction}`);
  // Check direction
  const validDirection = getRoverDirection(rover);
  // Check coordinates x, y
  const valid = (rover.x >=0 && rover.x <= 9) && (rover.y >=0 && rover.y <= 9);
  if (!valid) { //outside the grid 10 x 10
    // if 'x' or 'y' property is lower than 0 or greater than 9
    // player left the 10x10 board
    console.log(`You can't place player outside of the board! with coordinates x: ${rover.x}, y: ${rover.y}`);
  }  else if(!validDirection) { // valid === false
      console.log(`please introduce a valid direction: "N", "S", "E", or "W" `);
  } else { // inside the grid 10 x 10
    console.log(`Your rover is inside the grid with coordinates x:${rover.x}, y:${rover.y}`);
    switch (rover.direction) {
      case 'W': if(rover.x === 9) {
        console.log(`You can't move backwards because you'll be outside the 10x10 grid!`);
      } else {
        rover.x++ //move horizontally
        if(!(grid[rover.x][rover.y] === '')) { 
          rover.x--
          console.log(`Watch out! There is an obstacle and you can't move it! Now you are in the same position x:${rover.x}, y:${rover.y}`);
        }
      }
        break;
      case 'E': if(rover.x === 0) {
        console.log(`You can't move backwards because you'll be outside the 10x10 grid!`);
      } else {
        rover.x-- //move horizontally
        if(!(grid[rover.x][rover.y] === '')) {
          rover.x++
          console.log(`Watch out! There is an obstacle and you can't move it! Now you are in the same position x:${rover.x}, y:${rover.y}`);
        }
      }
      break;
      case 'N': if(rover.y === 9) {
        console.log(`You can't move backwards because you'll be outside the 10x10 grid!`);
      } else {
        rover.y++ //move vertically
        if(!(grid[rover.x][rover.y] === '')) {
          rover.y--
          console.log(`Watch out! There is an obstacle and you can't move it! Now you are in the same position x:${rover.x}, y:${rover.y}`);
        }
      }
      break;
      case 'S': if(rover.y === 0) {
        console.log(`You can't move backwards because you'll be outside the 10x10 grid!`);
      } else {
        rover.y-- //move vertically
        if(!(grid[rover.x][rover.y] === '')) {
          rover.y++
          console.log(`Watch out! There is an obstacle and you can't move it! Now you are in the same position x:${rover.x}, y:${rover.y}`);
        }
      }
      break;
      default:
        console.log(`Please make sure your rover has coordinates x and has a valid direction: "N", "S", "E", or "W"`);
    }
    // get position
    let newPosition = { x: rover.x, y: rover.y };
    // push {x,y} to the travelLog property
    rover.travelLog.push(newPosition);
    console.log(rover.travelLog);
    console.log(`Your rover has new coordinates are: x: ${rover.x}, y: ${rover.y}`);
  }
}
//moveBackward(rover);
  
// Get commands
// Convert the string into an array to use --> forEach 
function command(theRover, entryOrders) {
  // Lower case the commands
  let orders = entryOrders.toLowerCase();
  for (let i=0; i < orders.length; i ++) {
    let order = orders[i];
    const valid = order === 'f' || order ==='b' || order ==='r' || order ==='l';
    if(!valid) { // if orders are different from "f", "b", r", "l"
      console.log(`Please give orders with the form: "f", "b", r", "l"`);
      continue;
    } else {
      if(order === 'f') { // move forwards
        moveForward(theRover);
      } else if(order === 'b') { // move backwards
        moveBackward(theRover);
      } else if( order === 'r')  { // right
        turnRight(theRover); 
      } else if( order === 'l') { //left
        turnLeft(theRover);
      } else { 
        console.log(`Please give orders with the form: "f", "b", r", "l"`);
        // f --> forwards
        // b --> backwards
        // l --> left
        // r --> right
      } 
      console.log(theRover.travelLog);
      console.log(`Direction: ${theRover.direction}`);
    }
  }
}
// Test: obstacle, outside the grid and different instruction--> 'k'   
command(rover, 'ffrffkff');
    
