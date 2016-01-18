# storage-manager-anguarljs
Tool which definitely simplifies the work with saving\editing data inside Angular.js applications.

## How to use

First of all, inject utils module into your application. Thereafter you may use full-version or single manager: cookieService & localDBService. 

To get more powerful effect use combined storage managing service ("<b>utils.storageService</b>").

### Methods and actions

```javascript

// ...

function myController(serviceManager) {

// Declare service manager.
var _sm = serviceManager;

// ...

// Manually set storage type (cookie\localDB).
_sm.specify("cookie");

// Fast toggling between storage types.
_sm.toggle();

```

At the moment, both storage types have a CRUD-funcionality. So, you may use setters, getters, deleters and modifiers triggers to manage the internal data.

```javascript

// Set a new values.
_sm.set("message", "Hello, world!");
_sm.set("Name", "Bob");

// Switch to another storage.
_sm.toggle();

// Set a new values into it.
_sm.set("color", "red");

// Return to the initial storage (cookie type).
_sm.toggle();

// Get all values. Will be displayed: ["message=Hello, world!", "Name=Bob"];
console.log( _sm.use().getAll() );

``` 
