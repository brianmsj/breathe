const initialState = {
  title: 'Introspection',
  youTubeURL: 'https://www.youtube.com/embed/wPOX3lEpXDU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=wPOX3lEpXDU',
  soundCloudID: '303750328',
  image: 'http://i.imgur.com/HWRqyNg.jpg'
}

export default function(state = null, action) {
  switch(action.type) {
    case 'SCENE_SELECTED':
      return action.payload;
  }

  return state
}