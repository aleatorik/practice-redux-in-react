import React, { Component } from "react";
import { connect } from "react-redux";
// Notice that 'c'onnect here is lower case

class SongList extends Component {
  render() {
    // this.props가 갖는 값 => ( songs: state.songs )
    console.log(this.props);
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  // state above stands for all the data inside of Redux store
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
