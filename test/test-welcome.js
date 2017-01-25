import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Welcome from '../js/components/welcome';

describe('Welcome component', function() {
    it('Renders a welcome message',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Welcome />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('welcome-container');

        const h1 = result.props.children[0];
        h1.type.should.equal('h1');
        h1.props.className.should.equal('welcome welcome-h1');

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.className.should.equal('welcome welcome-p');

    });
});