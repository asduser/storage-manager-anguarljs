# storage-manager-anguarljs
Tool which definitely simplifies the work with saving\editing data inside Angular.js application.

## Build, re-build

Double-click on **build.bat**.<br/> 
A new version will be located at *"build/"* directory.<br/>
To see the demo open *index.html* from *"example/"* folder.<br/>

## How to use

First of all, you have to specify a type of storage. Actually, there are two types: 'cookie' and 'localDB'.<br/>
Then use CRUD methods to manage the data inside your application.

## Methods and actions
    
```javascript

// Set value.
_sm.set('message', 'hi');

// Get value.
_sm.get('message');
_sm.getAll();

// Delete value.
_sm.delete('message');
_sm.deleteAll();

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

## Another storage

To include a new storage into module:

1. Add it into suitable .js file inside *dist/files/* directory (ex. "myStore.js").
2. Implement CRUD interface there (see similar files 'cookieStore' or 'localDBStore').
3. Add a special dependency in *dist/files/storageManagerCore.js* like this: "customDB": "myStore".
4. Press build.bat to rebuild module and update it with a new storage.

That's all, you included a new client storage into manager!

Use like this:

```javascript

_sm.specify("customDB"); // will be switched to your custom DB.
_sm.set("message", "Hello, world!"); // specified a new value.
_sm.get("message"); // retrieve an existing value by key.

```
