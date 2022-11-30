import { UserType } from "@src/types/Types";

export const userReducer = (state: UserType, action: UserType) => {
  const newObject = {...state};
  if (action.uid !== state.uid) {
    newObject['uid'] = action.uid;
  }

  if (action.displayName !== state.displayName) {
    newObject['displayName'] = action.displayName;
  }

  if (action.photoURL !== state.photoURL) {
    newObject['photoURL'] = action.photoURL;
  }

  if (action.email !== state.email) {
    newObject['email'] = action.email;
  }
  // 새로운 상태값으로 변환
  return newObject
}
