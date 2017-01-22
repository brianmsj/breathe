import React from 'react';
// This allows you to render a version of your component without needing access to the DOM
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import App from '../js/components/app';

describe('App component', function() {
    it('Renders hello world',  function() {

        const renderer = TestUtils.createRenderer(); //create an instance of the renderer
        renderer.render(<App />);
        const result = renderer.getRenderOutput(); //This returns the rendered React component. Using this you can check out the type and props of the elements rendered by your component.
        result.props.className.should.equal('app-container');
        result.type.should.equal('div');

        // const hello = result.props.children;
        // hello.type.should.equal('h1');

    });
});