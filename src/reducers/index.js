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

// 파일이름을 이처럼 index.js로 설정해주면 나중에 불러올 때 아래처럼 디렉토리 이름까지만 입력하여 불러올 수 있다.
// import combineReducers from './reducers';
