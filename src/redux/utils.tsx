import { useDispatch, useSelector } from 'react-redux';
import { IUserInfo, setUserInfoHandler } from '@/redux/reducers';

export const useUserInfo = () => {
  const userInfo = useSelector<{ userInfo: { user: IUserInfo } }, IUserInfo>(
    state => {
      return state.userInfo.user;
    }
  );

  const dispatch = useDispatch();

  const setUserInfo = (user: IUserInfo) => {
    dispatch(setUserInfoHandler(user));
  };

  return { userInfo, setUserInfo };
};
