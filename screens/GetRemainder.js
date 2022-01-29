import React from 'react';
import { StyleSheet, Text, View,FlatList, } from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/BubblegumSans-Regular.ttf")
};


export default class GetRemainder extends React.Component {
  constructor(){
    super()
    this.state={
      alltransactions:[]
    }
    
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount(){
    this.fetchremainder()
     this._loadFontsAsync();
  }
  fetchremainder = async () => {
     var today=new Date()
    var month = today.getUTCMonth() + 1; //months from 1-12
    var day = today.getUTCDate();
    var year = today.getUTCFullYear();

    var newdate = year + '/' + month + '/' + day;
    console.log(newdate)
    const remainder = await db.collection('remainder').where("remainderdate",">",newdate)
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
        <Text style={styles.appTitleText}>Get Remainder</Text>
        <FlatList data={this.state.alltransactions}
        renderItem={({item})=>(
          <View style={{borderBottomWidth:2}}>
          <Text style={styles.appTitleTextblue}> {"remainder name "+item.remaindername}</Text>
          <Text style={styles.appTitleTextviolet}> {"date "+item.remainderdate}</Text>
          
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

const styles = StyleSheet.create({
  
  appTitleText: {
    color: "red",
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans",
    textAlign: "center",
    marginBottom: 20
    
  },
  appTitleTextblue: {
    color: "blue",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    textAlign: "center",
    marginBottom: 20
  },
  appTitleTextviolet: {
    color: "violet",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    textAlign: "center",
    marginBottom: 20
  },

});

