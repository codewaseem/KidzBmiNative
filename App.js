import React from 'react';
import { Image ,StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      pic : {
        uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }
    }
    setTimeout(() => {
      this.setState(()=>{
        return {
          pic : {
            uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZHdlCloZb55K9dtQ6vsGoXsNYnAbFSbVNi8wuAsd1nGU_MEOEQ'
          }
        }
      })
    }, 2000);
  }

  render() {
    
    return (
      <View style={styles.container}>
      <Image source={this.state.pic} style={{width: 193, height: 110}}/>
      <Greeting text="Waseem" />
      <Greeting text="Ahmed" />
      </View>
    );
  }
}

class Greeting extends React.Component {
  render(){
    return <Text style={styles.whiteText}> Hello {this.props.text} </Text>
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#000',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  whiteText : {
    color : "#fff"
  }
})