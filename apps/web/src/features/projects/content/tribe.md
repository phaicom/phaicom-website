---
title: Tribe
subtitle: Multiplayer Mixed Reality Strategy Game
category: Game Development
techStack:
  - Unity
  - C#
  - Node.js
  - Express.js
  - Colyseus
  - Firebase
  - RethinkDB
  - Vuforia
  - Google VR SDK
featured: false
startDate: 2017-01-01
endDate: 2017-05-31
---

## Project Overview

As my graduation project, I developed **Tribe**, a multiplayer turn-based strategy board game that integrates Augmented Reality (AR) and Virtual Reality (VR) to modernize traditional tabletop gameplay.

The goal of the project was to enhance physical board game interaction by overlaying real-time 3D characters, environments, and combat systems on a physical board using AR technology.

The system supports online multiplayer functionality, enabling synchronized turn-based battles between players.

![Tribe Cover](/images/projects/tribe-1.jpg)

---

## Core Game Systems

### 1. Turn-Based Strategy Combat

The gameplay system includes:

- Grid-based tactical movement
- Character attributes (HP, attack, range)
- Skill card mechanics
- Attribute-driven actions
- Event-driven finite-state machine for turn management

The combat system was designed to ensure synchronized multiplayer logic while maintaining strategic depth.

![Character Selection](/images/projects/tribe-2.jpg)

---

### 2. Mixed Reality Integration (AR/VR)

The game combines physical board interaction with digital rendering:

- Marker-based detection using **Vuforia**
- Real-time 3D object rendering in Unity
- Interactive battle animations over physical cards
- Optional VR box support for immersive viewing

This allowed players to experience dynamic battles directly on top of a real-world board.

![AR Battle Scene](/images/projects/tribe-3.jpg)

![Skill Card Interaction](/images/projects/tribe-4.jpg)

---

### 3. Online Multiplayer Architecture

The multiplayer system supports:

- Real-time communication using **Colyseus (WebSocket)**
- Room-based matchmaking
- Turn synchronization across devices
- Firebase authentication
- RethinkDB for real-time data storage

The architecture ensures consistent game state updates and low-latency communication between players.

![System Architecture](/images/projects/tribe-6.PNG)

---

## My Responsibilities

As part of this graduation project, I contributed to:

- Designing and implementing gameplay mechanics
- Building AR interaction systems using Vuforia
- Developing multiplayer synchronization logic
- Implementing backend services (Node.js + Colyseus)
- Managing state using an event-driven finite-state machine
- Integrating authentication and database systems

---

## Technical Implementation

### Client Side

- Unity 5.6.4f1 (C#)
- Vuforia AR Engine
- Google VR SDK
- Firebase Authentication
- Colyseus Client SDK

### Server Side

- Node.js
- Express.js
- Colyseus WebSocket Server
- RethinkDB

### Game Architecture Focus

- Real-time state synchronization
- Deterministic turn resolution
- Event-driven state management
- Client-server separation of responsibilities

---

## Impact

This project strengthened my experience in:

- Real-time multiplayer architecture
- WebSocket-based communication
- Game state synchronization
- AR system integration
- Full-stack system design for interactive applications

It was my first large-scale system that combined **game engine development, backend architecture, and mixed reality integration** into one cohesive product.
