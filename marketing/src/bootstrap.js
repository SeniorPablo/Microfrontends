import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'

//Mount function to start up the app
const mount = (root, { onNavigate, defaultHistory, initialPath }) => {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })

    if (onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(<App history={history} />, root)

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location

            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

// const devRoot = document.querySelector('#_marketing-dev-root')
// mount(devRoot, { defaultHistory: createBrowserHistory() })

//If we are in development and in isolation,
//call mount immediately


const devRoot = document.querySelector('#_marketing-dev-root');
if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
}


//We are runnin through container
//and we should export the mount function
export { mount }