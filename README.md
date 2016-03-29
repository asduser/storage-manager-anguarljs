# storage-manager-anguarljs
Tool which definitely simplifies the work with saving\editing data inside Angular.js applications.

## How to use

First of all, you have to specify a type of storage. Actually, there are two types: 'cookie' and 'localDB'.
Then use CRUD methods to manage the data inside your application.

## Methods and actions
    
```javascript

// Set value.
storageManager.set('message', 'hi');

// Get value.
storageManager.get('message');
storageManager.getAll();

// Delete value.
storageManager.delete('message');
storageManager.deleteAll();

```

## Examples

```javascript

// ...

function myController(storageManager) {

// Declare service manager.
var _sm = storageManager;

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
