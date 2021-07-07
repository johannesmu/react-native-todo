import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import {Colours} from './components/Colours'
import {Header} from './components/Header'
import {List} from './components/List'

const appDefintion = {
  name: "Hello List",
}

export default function App() {
  const [data,setData] = useState([])

  
  const addItem = ( itemName) => {
    const itemId = new Date().getTime()
    const Item = { name: itemName, id: itemId, status: false }
    setData( data.concat(Item) )
  }

  const markItemDone = ( itemId ) => {
    console.log( itemId )
    // find the item by id
    let items = data
    items.forEach( (item) => {
      if( item.id.toString() === itemId ) {
        // if the id matches, change the status
        item.status = true
      }
    })
    // set the items array as the data
    setData( items )
  }

  const deleteItem = ( itemId ) => {
    console.log( itemId )
    // find item by id
    // remove
    // setData( new array without item )
  }


  return (
    <View style={styles.container}>
      <Header name={ appDefintion.name } addHandler={addItem}/>
      <List listItems={data} doneHandler={markItemDone} deleteHandler={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colours.secondary,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
