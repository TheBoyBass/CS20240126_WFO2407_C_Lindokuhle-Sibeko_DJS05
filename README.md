# DJS05 Project : Building a Redux-Inspired Store for a Tally App

In this project, I developed a Redux-inspired store to manage state within a simple Tally App. The objective was to implement efficient state management that could handle core functionalities like incrementing, decrementing, and resetting a counter. Instead of focusing on rendering changes on a UI, I set up a system to subscribe to state updates, allowing changes to be logged directly to the console. This approach demonstrated the power and versatility of state management techniques in handling dynamic app functionalities.

## Objective
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App.

## User Stories (Gherkin Syntax)
Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## How to Run the Code
-**Open the console** to see the logged state changes and Observe for state changes as the actions are dispatched.

## Overview of Implementation Approach
**Project Structure:**

The project is organized into three main files: Tallystore.js, Tallyactions.js, and TallyScripts.js. This modular structure was inspired by the CodeSpace lesson on Creating a state store, It promotes separation of concerns, making the codebase easier to maintain and understand.


**Store and Reducer (Tallystore.js):**

The Tallystore.js file contains the core logic for managing the application state.
A reducer function is defined to handle state transitions based on dispatched actions. This function is pure, meaning it does not have side effects and always returns a new state based on the current state and the action received.
The createStore function initializes the state and manages subscriptions. It provides methods to get the current state, dispatch actions, and subscribe to state changes. The state is updated immutably, ensuring that the original state is not modified directly.

**Action Creators (Tallyactions.js):**

The Tallyactions.jss file defines action creators that return action objects. Each action creator corresponds to a specific action type (e.g., ADD, SUBTRACT, RESET).
This separation allows for easy modification and extension of actions in the future, adhering to the principle of single responsibility from the SOLID principles.


**Main Script (TallyScripts.js):**

The TallyScripts.js file serves as the entry point for the application. It imports the store and action creators, creates the store instance, and subscribes to state changes to log the current state to the console.
It demonstrates the functionality of the Tally App by dispatching a series of actions (adding, subtracting, and resetting the counter) and observing the resulting state changes through console logs.

## Challenges Faced

During the implementation of the Redux-inspired store for the Tally App, I encountered several challenges, particularly with importing and exporting modular code. Initially, I struggled to understand how to properly structure my files and utilize ES module syntax effectively. This included issues with ensuring that the modules were correctly recognized and that the functions and variables were properly imported and exported across different files.

To overcome this challenge, I conducted thorough research on JavaScript modules, which led me to revisit the concept of script types in HTML. I learned about the importance of using <script type="module"> to enable ES module support in the browser, which allowed me to seamlessly import and export functions between my JS files. This research not only resolved my immediate issues but also deepened my understanding of modular programming in JavaScript.

By addressing these challenges, I was able to successfully implement a clean and organized code structure that adheres to best practices in software development.
