import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'

const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="UserList"
                    component={UserList}
                />
                  <Stack.Screen 
                    name="UserForm"
                    component={UserForm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
