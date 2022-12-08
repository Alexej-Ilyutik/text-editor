import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { noteListActions } from 'store/action-creators/noteListActions';

const actions = {
  ...noteListActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
