import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.min.css'
import './App.scss'
import RouterApp from './Router'
import store from './redux/store'

ConfigProvider.config({
  theme: '#8b3eea',
})

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterApp />
      </Router>
    </Provider>
  )
}

export default App
