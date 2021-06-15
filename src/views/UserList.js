import React, { useContext } from 'react'
import { View,Text, FlatList, Alert } from 'react-native'
import users from '../data/users'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {
    

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDelete(user) {

        Alert.alert('Excluir o Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions (user) {       
        return (
            <>
            <Button 
                onPress={()=>props.navigation.navigate('UserForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color="orange"/>}
            />
            <Button 
                onPress={() => confirmUserDelete(user)}
                type="clear"
                icon={<Icon name="delete" size={25} color="red"/>}
            />
        </>
        )
      
    }


    function getUserItem({ item: user }) {
        return (
          <ListItem 
            key={user.id} 
            bottomDivider 
            onPress={()=> props.navigation.navigate('UserForm', user)}
            >                
            <Avatar source={{uri: user.avatarUrl}} />
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
                <ListItem>{getActions(user)}</ListItem>
          </ListItem>
        )
    }
    


    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}
