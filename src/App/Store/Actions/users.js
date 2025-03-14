import * as actionType from './actionType';

export function MockAdapter(data) {
  return {
    data: data,
    type: actionType.FETCH_USERS
  };
}

export function fetchUser(data) {
  return {
    data: data,
    type: actionType.FETCH_USER
  };
}

export function fetchSelectedUser(data) {
  return {
    data: data,
    type: actionType.FETCH_SELECTED_USER
  };
}

export function fetchUsersFailed() {
  return {
    data: 'FAILED',
    type: actionType.FETCH_USERS_FAILED
  };
}

export function backdropClicked() {
  return {
    type: actionType.BACKDROP_CLICKED
  };
}
