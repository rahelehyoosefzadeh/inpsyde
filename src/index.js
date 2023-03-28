import App from "./App";
import { render } from '@wordpress/element';
/**
 * Import the bootstrap stylesheet for the plugin.
 */
import './style/bootstrap.min.css';
// Render the App component into the DOM
render(<App />, document.getElementById('frontend'));