"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { configureStore } from './Store/Store';\nimport { Provider } from 'react-redux';\nimport { Router, browserHistory }  from 'react-router';\nimport { createApi } from '../Shared/Api/api';\nimport sagas from './Sagas/';\nimport { Routes } from './Routes';\n\nconst api = createApi('http://localhost:3000');\nconst store = configureStore(api);\nstore.runSaga(sagas(api));\n\nReactDOM.render(\n\t<Provider store={store}>\n\t\t<MuiThemeProvider muiTheme={getMuiTheme()}>\n\t\t\t<Router history={browserHistory}>{Routes(store)}</Router>\n\t\t</MuiThemeProvider>\n\t</Provider>,\n\n\tdocument.getElementById('app')\n);\n
"