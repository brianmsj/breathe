import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import App from '../js/components/app';

describe('App component', function() {
    it('Renders other components and containers',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<App />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('main-container');
    });
});