import { push } from 'react-router-redux';

export function navigateTo(page) {
  return (dispatch) => {
    return dispatch(push(`/${page}`));
  };
}
