# Functions

### <code>ESX.ShowAdvancedNotification ()</code>
Displays an advanced notification on the bottom left of the screen. A image can be passed into this notification
```jsx
ESX.ShowHelpNotification = function(msg, thisFrame, beep, duration)
	AddTextEntry('esxHelpNotification', msg)

	if thisFrame then
		DisplayHelpTextThisFrame('esxHelpNotification', false)
	else
		if beep == nil then beep = true end
		BeginTextCommandDisplayHelp('esxHelpNotification')
		EndTextCommandDisplayHelp(0, false, beep, duration or -1)
	end
end
```
### Working Example
```jsx
ESX.ShowHelpNotification('Hit ~INPUT_CONTEXT~ to do shit!')
```

### <code>ESX.ShowHelpNotification()</code>
Displays a notification on the top left of the screen to help the user understand what to do.
```jsx
ESX.ShowHelpNotification = function(msg, thisFrame, beep, duration)
	AddTextEntry('esxHelpNotification', msg)

	if thisFrame then
		DisplayHelpTextThisFrame('esxHelpNotification', false)
	else
		if beep == nil then beep = true end
		BeginTextCommandDisplayHelp('esxHelpNotification')
		EndTextCommandDisplayHelp(0, false, beep, duration or -1)
	end
end
```
### Working Example
```jsx
ESX.ShowHelpNotification("Hello, World!")
```