import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import {connect} from 'react-redux'
import {displayAllPhoto} from '../actions/galleryActions'
import {displayOnePhoto} from '../actions/onePhotoActions'


class MainScreen extends Component {
  static navigationOptions = {
    title: 'Gallery',
  };

  componentDidMount(){
    this.props.displayGallery();
  }

  render() {
    const {navigate} = this.props.navigation;
    const body = this.props.allPhoto.map((one) => {
      return(
        <View style={styles.arrImg} key={one.id}> 
          <Text>{one.user.first_name} {one.user.last_name}</Text>
          <Image source={{ uri: one.urls.small }} 
            alt="" 
            style={{width: 150, height: 150}} />
          <Button 
            onPress={() => {
              this.props.displayPhoto(one);
              navigate('OnePhotoScreen')}
            }
            title="Click-Clack"/>
        </View>
      )
    })
    return (
      <ScrollView>
        <View style={styles.container}>
          {body}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    allPhoto: state.displayGallery.gallery
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    displayGallery: () => dispatch( displayAllPhoto() ),
    displayPhoto: (photo) => dispatch( displayOnePhoto(photo) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 50,
  },
  arrImg: {
    flexDirection: 'column',
    margin: 5,
    alignItems: 'center',
  }
});