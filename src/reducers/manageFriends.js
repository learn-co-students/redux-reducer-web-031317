export function manageFriends(state, action){
  switch(action.type){

    case 'ADD_FRIEND':
      return Object.assign({}, state,
        {friends: [...state.friends, action.friend]}
      )

    case 'REMOVE_FRIEND':
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, removalIndex),
          ...state.friends.slice(removalIndex + 1)
        ]
      })
      
    default:
      return state
  }
}

//
// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
//
// let olderDog = {...dog, age: dog.age + 1}
