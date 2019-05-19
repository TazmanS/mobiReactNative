import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Dimensions } from 'react-native';
import {connect} from 'react-redux'


class OnePhotoSrceen extends React.Component {
  static navigationOptions = {
    title: 'One Photo',
  };
  render() {
    const {navigate} = this.props.navigation;
    const {user, urls} = this.props.photo;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>{user.first_name} {user.last_name}</Text>
          <Image source={{ uri: urls.small }} 
              alt="" 
              style={styles.Img} />
          <Button
            title="Back"
            onPress={() => navigate('MainScreen')}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    photo: state.displayOnePhoto.onePhoto
  }
}

export default connect(mapStateToProps)(OnePhotoSrceen)

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  Img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});