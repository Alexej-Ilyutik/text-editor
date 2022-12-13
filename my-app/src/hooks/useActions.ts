import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { noteHashArrActions } from 'store/action-creators/noteHashActions';

const actions = {
  ...noteHashArrActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
