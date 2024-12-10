import { View, Text } from '@tarojs/components';
import { useLoad, navigateTo } from '@tarojs/taro';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  const handler = () => {
    navigateTo({ url: '/pages/details/index' });
  };

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Text onClick={handler}>详情页</Text>
    </View>
  );
}
