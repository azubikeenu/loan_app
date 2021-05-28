import AlertService from './app/alert.service.js'
import UIComponents from './app/component.service.js'
import { run } from './app/app.js'

const ui = new UIComponents();
const alert = new AlertService()
run( ui, alert )
