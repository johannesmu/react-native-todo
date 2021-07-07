import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colours } from './Colours';
import { Icon } from 'react-native-elements'


export function List(props) {

  const Renderer = ({item}) => (
    <View style={ListStyle.listItem}>
      <Text>{item.name}</Text>
      <View style={ListStyle.buttons}>
        <TouchableOpacity onPress={ () => props.doneHandler(item.id) }>
          <Icon name="check" color={ Colours.secondary }/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="delete" color={ Colours.tertiary }/>
        </TouchableOpacity>
      </View>
    </View>
  )

  return(
    <View>
      <FlatList 
      data={ props.listItems } 
      renderItem={ Renderer} 
      keyExtractor={ item => item.id.toString() } 
    />
    </View>
  )
}

const ListStyle = StyleSheet.create( {
  listItem: {
    backgroundColor: Colours.light,
    marginVertical: 4,
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
})