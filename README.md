# storage-manager-anguarljs
Tool which definitely simplifies the work with saving\editing data inside Angular.js applications.

## How to use

First of all, inject utils module into your application. Thereafter you may use full-version or single manager: cookieService and localDBService. 

To get more powerful effect use combined storage managing service ("<b>utils.storageService</b>").

### Methods and actions
    
```javascript

// Set value.
serviceManager.set('message', 'hi');

// Get value.
serviceManager.get('message');
serviceManager.getAll();

// Delete value.
serviceManager.delete('message');
serviceManager.deleteAll();


```

### Example of usage

```javascript

// ...

function myController(serviceManager) {

// Declare service manager.
var _sm = serviceManager;

// ...

// Manually set storage type (cookie\localDB).
_sm.specify("cookie");

```

At the moment, both storage types have a CRUD-funcionality. So, you may use setters, getters, deleters and modifiers triggers to manage the internal data.

```javascript

// Set a new values.
_sm.set("message", "Hello, world!");
_sm.set("Name", "Bob");

// Switch to another storage.
_sm.specify("localDB");

// Set a new values into it.
_sm.set("color", "red");

// Return to the initial storage (cookie type).
_sm.specify("cookie");

// Get all values. Will be displayed: ["message=Hello, world!", "Name=Bob"];
console.log( _sm.getAll() );

``` 
