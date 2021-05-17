import { App } from 'vue';
import locales from './locales';
import mixin from './mixin';
import globalProperties from './globalProperties';
export default {
    install(app: App) {
        app.mixin(mixin)
        app.use(locales)
        app.use(globalProperties)
    }
}