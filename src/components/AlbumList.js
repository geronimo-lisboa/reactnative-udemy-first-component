import React,{Component} from 'react';
import {Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
  state = {albums: []};

  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums', {method:'get'})
      .then((response)=>{
        if(!response.ok){
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((jsonData)=>{
        this.setState({albums:jsonData});
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  //Mapeia os jsons pra compomentente de tels
  renderAlbums(){
    console.log("render?");
    let albumsJSX = this.state.albums.map((current)=>{
      return <AlbumDetail key={current.title} album={current}/>
    });
    return albumsJSX;
  }

  render(){
    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;