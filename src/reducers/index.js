import { combineReducers } from "redux";
import { selectSong } from "../actions";

const songsReducer = () => {
  return [
    { title: "Dynamic", duration: "4:05" },
    { title: "Gangnam Style", duration: "3:02" },
    { title: "New York", duration: "3:55" },
    { title: "Rainy day", duration: "4:25" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
// 추가 타입이 있을 나중의 경우를 대비해서 if 조건문 
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
