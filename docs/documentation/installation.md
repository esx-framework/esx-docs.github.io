---
sidebar_position: 1
---


# Integration

:::note
So far there is two ways to integrate and start using this framework.
:::

## Second Method
This method is the classic way to do it, but with a small twist.

You start off by declaring the ESX variable and triggering the callback event to recieve the ESX object at the very top of your script.
```jsx
ESX = nil

TriggerEvent("esx:getSharedObject", function(obj)
    ESX = obj
end)
```
Now to listen for state changes you need to add a new ESX function called <code>ESX.StateListener()</code>. This function takes a callback function which will take 3 parameters; client, state, and value.

Assign the values like below:
```jsx
ESX.StateListener(function(client, state, value)
    ESX.PlayerStates[client][state] = value
    ESX.PlayerData[state] = value
end)
```
