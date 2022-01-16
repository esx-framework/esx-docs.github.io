# Functions
### <code>ESX.OnServer()</code>
Register an event on the client side.
```jsx
ESX.OnServer = function(name, cb)
    RegisterNetEvent(name)
    return AddEventHandler(name, cb)
end
```
### Working Example
```jsx
ESX.OnServer("resource:eventName", function(pong)
    print(pong)
end)
```