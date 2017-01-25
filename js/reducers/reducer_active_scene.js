const initialState = {
  title: 'Introspection',
  videoID: 'wPOX3lEpXDU',
  soundCloudID: '303750328',
  image: 'http://i.imgur.com/HWRqyNg.jpg'
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SCENE_SELECTED':
      return action.payload;
  }

  return state
}