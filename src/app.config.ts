export default defineAppConfig({
  pages: ['pages/index/index', 'pages/home/index', 'pages/details/index'],

  lazyCodeLoading: 'requiredComponents',
  miniApp: {
    useAuthorizePage: true,
  },
  useDynamicPlugins: true,

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
