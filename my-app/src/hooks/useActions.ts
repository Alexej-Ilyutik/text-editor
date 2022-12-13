import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { noteFilterStringActions } from 'store/action-creators/noteFilterActions';
import { noteHashArrActions } from 'store/action-creators/noteHashActions';

const actions = {
  ...noteHashArrActions,
  ...noteFilterStringActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
