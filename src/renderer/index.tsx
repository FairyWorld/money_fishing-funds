import { render } from 'react-dom';
import NP from 'number-precision';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import * as echarts from 'echarts';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import { Provider } from 'react-redux';
import { configureStore } from '@/store/configureStore';
import App from '@/App';
import * as Utils from '@/utils';
import 'electron-disable-file-drop';
import 'dayjs/locale/zh-cn';
import '@/utils/window';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.locale('zh-cn');

echarts.registerMap('china', require('@/static/map/china.json'));

NP.enableBoundaryChecking(false);

Utils.CheckEnvTool();

export const store = configureStore();

ConfigProvider.config({
  theme: {
    primaryColor: '#EDA413',
  },
});

render(
  <ConfigProvider componentSize="small" space={{ size: 'small' }}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);
