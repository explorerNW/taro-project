import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { AtIcon } from 'taro-ui';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@/redux/utils';

import './index.scss';

export default function Details() {
  const { userInfo } = useUserInfo();

  const navigate = useNavigate();

  useLoad(() => {
    console.log('Details Page loaded.');
    if (!userInfo.login) {
      navigate('/');
    }
  });

  const handler = () => {};

  return (
    <View className='flex flex-col'>
      <Text onClick={handler}>详情页, Hello world!</Text>
      <AtIcon value='clock' size='30' color='#F00'></AtIcon>
      <View className='at-icon at-icon-settings'></View>
    </View>
  );
}
