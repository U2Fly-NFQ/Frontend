import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import 'antd/dist/antd.min.css'
import './App.scss'
import RouterApp from './Router'
import store from './redux/store'

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
