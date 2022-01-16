---
sidebar_position: 1
---


# Integration

To start off declare the ESX variable and trigger the callback event to recieve the ESX object then assign it to the ESX variable.
```jsx
ESX = nil

TriggerEvent("esx:getSharedObject", function(obj)
    ESX = obj
end)
```