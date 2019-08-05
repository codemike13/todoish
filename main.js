// Global todo list.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
let todo = ["Eat","Sleep","Study","Party"]

// Print a todo.
// For now, just console log it!


// Print everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!
for(thing in todo){console.log(todo[thing])}
todo.push("dance")
// Add an item to our todo list.
// Where on the list should we add it?
// No wrong answer here as long as you can defend the decision!
// todo.splice(2)
console.log("////////////////////////////")
for(thing in todo){console.log(todo[thing])}
todo.splice(1,1)
console.log("////////////////////////////")
for(thing in todo){console.log(todo[thing])}


// Remove an item at a given index from our todo list.
