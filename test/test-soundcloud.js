import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import SoundCloud from '../js/components/soundcloud';

describe('SoundCloud component', function() {
    it('Renders SoundCloud iframe embed',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<SoundCloud />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('soundcloud');

    });
});