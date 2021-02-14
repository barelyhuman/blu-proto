<h1 align="center">
    Electron ftrouter
</h1>
<p align="center">
An attempt to get 
<a href="https://github.com/barelyhuman/ftrouter">ftrouter</a>
 to work as a side worker with Electron to have a simpler client server approach in electron apps instead of an ipc arch
</p>


## Motivation / Why ?

While I think electron's IPC is really well implemented, its a pain for a developer who has no idea of how IPC's work and ends up spending a lot of time trying to figure out the control flow of events.

I wanted to go with JSON RPC approach where a daemon listens for general network POST requests and the client can perform system level actions without actually having access to it. 

Transmission uses this (kind off) and If I could get something similar working with [ftrouter](https://github.com/barelyhuman/ftrouter) then the user has a pretty easy way to write the server side of the electron app that's launched on side of the actual client view and the client developer can talk to the server by making simple `fetch` calls.


## TODO

- [ ] API requests from client to worker in bundled electron app 
- [X] Figure out port automatically (harcoded to 3000 right now)
- [x] Worker alongside Electron to launch ftrouter
- [x] End Worker when client closes
- [x] API requests from client to worker in unbundled electron app 

## Current Limitations

- Haven't tested the whole flow with a bundled version of Electron yet.


## React Implementation

Switch the branch to react-version or [react-version](https://github.com/barelyhuman/electron-ftrouter/tree/react-version)


