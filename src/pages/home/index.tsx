import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { useUserInfo } from '@/redux/utils';

import { useNavigate } from 'react-router-dom';
import { IUserInfo } from '@/redux/reducers';

import './index.scss';

const DisplayUserInfo = ({ userInfo }: { userInfo: IUserInfo }) => {
  return (
    <View className='flex flex-col'>
      <Text>name: {userInfo.name} </Text>
      <Text>loginAt: {userInfo.loginAt} </Text>
    </View>
  );
};

const Logout = () => {
  const { userInfo, setUserInfo } = useUserInfo();
  const handler = () => {
    setUserInfo({ ...userInfo, login: false });
  };
  return (
    <View>
      <Text onClick={handler}>logout</Text>
    </View>
  );
};

export default function Home() {
  useLoad(() => {
    console.log('home Page loaded.');
  });

  const { userInfo, setUserInfo } = useUserInfo();
  const navigate = useNavigate();

  const handler = () => {
    setUserInfo({
      name: 'Nie Wang',
      login: true,
      permissions: [],
      loginAt: new Date().toUTCString(),
    });
  };

  const toDetailsPage = () => {
    navigate('/pages/details/index');
  };

  return (
    <View className='flex flex-col'>
      <Text>Home: Hello world!</Text>
      <Text onClick={toDetailsPage}>Details</Text>
      {userInfo.login ? <Logout /> : <Text onClick={handler}>login</Text>}
      <View>
        {userInfo.login ? <DisplayUserInfo userInfo={userInfo} /> : ''}
      </View>
    </View>
  );
}
