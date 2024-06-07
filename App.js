import React, { useState } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "./src/routes";

export default function App(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <NavigationContainer>
            <Routes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        </NavigationContainer>
    )
}