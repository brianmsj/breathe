import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import SceneTitle from '../js/components/scene_title';

describe('SceneTitle component', function() {
    it('Renders a video title',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SceneTitle />);
        const result = renderer.getRenderOutput();

        result.type.should.equal('h1');
        result.props.className.should.equal('scene-title');
    });
});