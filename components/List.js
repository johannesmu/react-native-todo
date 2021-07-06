import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colours } from './Colours';



export function List(props) {

  const Renderer = ({item}) => (
    <View style={ListStyle.listItem}>
      <Text>{item.name}</Text>
      <View>
        <TouchableOpacity>
          <Text>done</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>delete</Text>
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
})