import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.js';

// beforeAll(() => {
// 	global.React = React;
// });

function addReactToDocument(el) {
	// https://stackoverflow.com/questions/223991/how-can-i-get-the-window-object-that-an-html-node-belongs-to-using-javascript
	const win = el.ownerDocument.defaultView || el.ownerDocument.parentWindow;
	win.React = React;
}

test('check header', () => {
	const { container, getByText } = render(<App />);
	addReactToDocument(container);
	expect(getByText('Numbers')).toBeInTheDocument();
});
