# Events
### <code>esx:initSource</code>
Initialises the player's source
```jsx
ESX.OnServer("esx:initSource", function(source)
    ESX.PlayerData.source = source
end)
```

### <code>esx:updateState</code>
Updates the player's state, typically stored in a <code>ESX.PlayerData</code> table.
```jsx
ESX.OnServer("esx:updateState", function(state, value)
    ESX.PlayerData[state] = value
end)
```

### <code>esx:registerLocations</code>
Sends all the NPC locations each time one is registered, used to initialise the NPC peds to be invincible and non reactive.
```jsx
ESX.OnServer("esx:registerLocations", function(locations)
    ESX.Locations = locations
    for peds, _ in pairs(ESX.Locations) do
        local ped = NetToEnt(peds)
        if not Entity(ped).state.init then
            SetBlockingOfNonTemporaryEvents(ped, true)
            TaskStartScenarioInPlace(ped, "WORLD_HUMAN_COP_IDLES", 0, true)
            SetEntityInvincible(ped, true)            
            Entity(ped).state:set("init", true, true)
        end
    end
end)
```