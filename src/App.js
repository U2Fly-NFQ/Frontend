import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.variable.min.css'
import './App.scss'
import RouterApp from './Router'
import store from './redux/store'

ConfigProvider.config({
  theme: {
    primaryColor: '#8b3eea',
  },
})

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <RouterApp />
      </ConfigProvider>
    </Provider>
  )
}

export default App
