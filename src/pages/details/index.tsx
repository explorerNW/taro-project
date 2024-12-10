import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Details() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className='details'>
      <Text>详情页, Hello world!</Text>
    </View>
  );
}
