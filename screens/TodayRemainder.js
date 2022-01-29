import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class TodayRemainder extends React.Component {
  constructor(){
    super()
    this.state={
      alltransactions:[]
    }
    
  }
  componentDidMount(){
    this.fetchremainder()
    
  }
  fetchremainder = async () => {
     var today=new Date()
    var month = today.getUTCMonth() + 1; //months from 1-12
    var day = today.getUTCDate();
    var year = today.getUTCFullYear();

    var newdate = year + '/' + month + '/' + day;
    console.log(newdate)
    const remainder = await db.collection('remainder').where("remainderdate","==",newdate)
    .get();
    remainder.docs.map((doc) => {
      console.log('doc is '+doc)
      this.setState({
        alltransactions: [...this.state.alltransactions, doc.data()],
      });
    });
    console.log(this.state.alltransactions)
  };
  render() {
    return (
      <View>
        <Text>Get Remainder</Text>
        <FlatList data={this.state.alltransactions}
        renderItem={({item})=>(
          <View style={{borderBottomWidth:2}}>
          <Text> {"remainder name "+item.remaindername}</Text>
          <Text> {"date "+item.remainderdate}</Text>
          
          </View>
        )}
        keyExtractor={(item,index)=>{
          index.toString()

        }}
        />
      </View>
    );
  }
}
