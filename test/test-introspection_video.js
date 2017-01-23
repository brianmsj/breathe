import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import $ from 'jquery';

const should = chai.should();

import Video from '../js/components/video';

describe('Video component', function() {
    it('Renders a video in the background',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Video />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('video-container');

        const background = result.props.children;
        background.type.should.equal('div');
        background.props.className.should.equal('video-background');

        const foreground = background.props.children;
        foreground.type.should.equal('div');
        foreground.props.className.should.equal('video-foreground');

        const iFrame = foreground.props.children;
        iFrame.type.should.equal('iframe');

    });
});