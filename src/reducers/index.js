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

  return selectedSong;
};
