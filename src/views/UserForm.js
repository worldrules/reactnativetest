
import React, {useState} from 'react'
import { Text, View } from 'react-native'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    
    return (
        <View>
            
        </View>
    )
}
