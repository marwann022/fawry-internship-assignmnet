# Car Engine Simulation System

## Overview
This project is an Object-Oriented Programming (OOP) simulation of a Car and Engine management system built in JavaScript. It demonstrates the use of clean code principles, class hierarchies, and design patterns to model different types of car engines (Gasoline, Electric, and Hybrid) and their interactions with a vehicle. 

This repository includes two iterations of the system (`Fawry.js` and `FawryTwo.js`), showing the evolution of the code from a basic implementation to a more robust, safe, and maintainable design.

## Features
- **Multiple Engine Types:** Supports Gasoline, Electric, and Hybrid engines.
- **Smart Hybrid System:** The Hybrid engine automatically balances power. It uses the electric motor for speeds up to 50 km/h and smoothly transitions to the gasoline engine for higher speeds.
- **Vehicle Controls:** Safely handles accelerating, braking, and stopping. Prevents the car from turning off the engine while still in motion, and enforces maximum speed limits.
- **Factory Design Pattern:** Utilizes a `CarFactory` to streamline object creation, making the system easily extensible for future engine types.

## Architecture & Class Structure

### 1. Engines
- **`Engine` / `GasolineEngine` / `ElectronicEngine`:** Base engine classes that manage their internal speed safely, preventing negative speeds.
- **`HybridEngine` / `MixedHybridEngine`:** A composite engine that encapsulates both a Gasoline and an Electric engine. It intelligently splits the workload based on the current speed of the vehicle.

### 2. Car
- The `Car` class acts as the main context interacting with the injected `Engine` dependency.
- **Methods:** `start()`, `accelerate()`, `brake()`, and `stop()`.
- Incorporates safety checks (e.g., preventing the engine from stopping if the car is moving).

### 3. CarFactory
- Implements the **Factory Method Design Pattern**.
- Abstracts the instantiation logic away from the client code. Instead of directly calling `new Car(new HybridEngine())`, the client simply requests `CarFactory.createCar("Hybrid")`.

## Concepts & Skills Demonstrated
- **Object-Oriented Programming (OOP):** Encapsulation, abstraction, and composition.
- **Design Patterns:** Factory Pattern for clean and scalable object creation.
- **Error Handling:** Graceful handling of invalid inputs (e.g., throwing an error if an unknown car type is requested).
- **Clean Code Principles:** Meaningful variable naming, single responsibility principle, and modular design.
- **Logic & Algorithm:** Conditional power routing based on speed limits inside the Hybrid engine.

## How to Run

1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the simulation files using Node.js:

```bash
node Fawry.js
# or run the improved version
node FawryTwo.js
```

## Example Output

```text
--- Testing Hybrid Car ---
🚗 Car started. Ready to go!
💨 Accelerating... Speed: 20 km/h
💨 Accelerating... Speed: 40 km/h
💨 Accelerating... Speed: 60 km/h
⚠️  Cannot turn off the engine! The car is still moving at 60 km/h.
🚥 Braking... Speed: 40 km/h
🚥 Braking... Speed: 20 km/h
🚥 Braking... Speed: 0 km/h
🛑 The car is already stationary.
🛑 Engine turned off. Car is fully stopped.
```

---
*Created as a demonstration of OOP and JavaScript proficiency for software engineering internship applications.*
