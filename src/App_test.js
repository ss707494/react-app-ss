import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {useRouterHistory , Router} from 'react-router';
import createRoutes from './routes/index';
import {store} from './store/createStore'
import './style/common.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createHistory} from 'history'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const ss = "2342sdadf"

const browserHistory = useRouterHistory(createHistory)({
  basename: "/react-app-ss"
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Router
                        children={createRoutes(store)}
                        history={browserHistory}
                    />
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
