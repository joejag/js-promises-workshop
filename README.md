# Javascript Promises Workshop

👋 hi there! My name is [Joe Wright](https://code.joejag.com/)! 

This repo contains a workshop to teach you about Javascript promises.

Javascript is a single-threaded language, but it runs inside a browser or node runtime which gives it special async powers.
Historically the way we used these powers was via callbacks, but the language creators have never been entirely happy enough with how they performed in the real world. Over the last five years, we've gone from callbacks to promises to async/await.

But why even use callbacks? Why use async/await? What's this single-threaded stuff about anyway?

In this workshop, you'll experience first hand how using these different programming styles gives you advantages over the other. We'll be watching a great talk on the event loop, then tackle some problems to experience these coding styles.

Together, you will escape callback hell!

## Pre-Workshop Instructions/Requirements

In order for us to maximize our efforts during the workshop, please complete the
following things to prepare.

- 📺 only necessary if the workshop is remote via Zoom
- 👋 specific to the material for this workshop

- [ ] 👋 Setup the project (follow the setup instructions below) (~5 minutes)
- [ ] 📺 Install and setup [Zoom](https://zoom.us) on the computer you will be
      using (~5 minutes)

The more prepared you are for the workshop, the better it will go for you.

## System Requirements

- [git](https://git-scm.com/) v2 or greater
- [NodeJS](https://nodejs.org/) v10 or greater
- [npm](https://www.npmjs.com/) v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/joejag/js-promises-workshop.git
cd js-promises-workshop
```

You may be able to work through the entire workshop in the browser. Go to
[this codesandbox](https://codesandbox.io/s/github/joejag/js-promises-workshop)
and you should be good to go. Note that sometimes people have trouble with
codesandbox not working quite right with tests, but you should be able to work
around that. If you're concerned, then it would probably be better to just set
things up locally.

## Workshop Outline

> And so it begins

👋 I'm Joe Wright

- 🏡 Glasgow
- 🏢 [code.joejag.com](https://code.joejag.com)
- 🐦 [@joe_jag](https://twitter.com/joe_jag)
- 🐙 [joejag](https://github.com/joejag)

### Schedule

- 🎙 Logistics
- 📽 Watch https://youtu.be/8aGhZQkoFbQ?t=51
- 💪 01. Blocking and predicting timeouts
- 💪 02. Timeouts continued
- 💪 03. Callbacks
- 😴 10 Minutes
- 🎙 Promises and Async
- 💪 04. Promises
- 💪 05. Async/Await
- 💪 06. Handling State
- 💪 07. Exceptions
- 🎙 Aborting and generators
- ❓ Q&A

### Questions

Please do ask! Interrupt me. If you have an unrelated question, please send me it on Twitter as a direct message

### Zoom (for remote workshops)

- Help us make this more human by keeping your video on if possible
- Keep microphone muted unless speaking
- Breakout rooms

### Exercises

- `src/exercise/00.md`: Background, Exercise Instructions
- `src/exercise/00.js`: Exercise
- `src/final/00.js`: Final version

## Influences

This README is based off the style [Kent C Dodds](kentcdodds.com) uses for [his workshops](https://github.com/kentcdodds/react-fundamentals)
