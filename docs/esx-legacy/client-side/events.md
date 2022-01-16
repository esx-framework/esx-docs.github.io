# Events
### <code>esx:playerLoaded</code>
This event is triggered when the player has connected to the server.
```jsx
RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(playerData)

end)
```

### <code>esx:showAdvancedNotification</code>
This event calls the [<code>ESX.ShowAdvancedNotification</code>](./functions/#esxshowadvancednotification) function. Which will show a native notification with a picture.
```jsx
RegisterNetEvent('esx:showAdvancedNotification')
AddEventHandler('esx:showAdvancedNotification', function(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
	ESX.ShowAdvancedNotification(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
end)
```

### <code>esx:showHelpNotification</code>
This event calls the [<code>ESX.ShowHelpNotification</code>](./functions/#esxshowhelpnotification) function. Which will show a native notification on the top left of the screen, typically used to prompt for input.
```jsx
RegisterNetEvent('esx:showHelpNotification')
AddEventHandler('esx:showHelpNotification', function(msg, thisFrame, beep, duration)
	ESX.ShowHelpNotification(msg, thisFrame, beep, duration)
end)
```