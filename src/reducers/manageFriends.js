export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    return Object.assign({}, state, state.friends.push(action.friend))
    case 'REMOVE_FRIEND':
    let updated = []
    for (let i = 0; i < state.friends.length; i++) {
      if (state.friends[i]['id'] !== action.id) {
        updated.push(state.friends[i])
      }
    }
    return Object.assign({}, {friends: updated})
    default:
    return state
  }

}
