/* eslint-disable import/no-anonymous-default-export */
import { SET_USER, CLEAR_USER, SET_PHOTO_URL } from '../actions/types';

// 로그인 시작시 isLoading true
// 로그인 완료시 false
const initialUserState = {
  currentUser: null,
  isLoading: true,
};

export default function (state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    case SET_PHOTO_URL:
      return {
        ...state,
        currentUser: { ...state.currentUser, photoURL: action.payload },
        isLoading: false,
      };
    default:
      return state;
  }
}
