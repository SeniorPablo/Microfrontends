import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

//Mount function to start up the app
const mount = (root) => {
    const app = createApp(Dashboard)
    app.mount(root)
}

// const devRoot = document.querySelector('#_dashboard-dev-root')
// mount(devRoot)
//If we are in development and in isolation,
//call mount immediately

const devRoot = document.querySelector('#_dashboard-dev-root');
if (devRoot) {
    mount(devRoot);
}


//We are runnin through container 
//and we should export the mount function
export { mount }