import React from 'react';
// This allows you to render a version of your component without needing access to the DOM
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import IntrospectionVideo from '../js/components/introspection_video';

describe('IntrospectionVideo component', function() {
    it('Renders a video in the background',  function() {

        const renderer = TestUtils.createRenderer(); //create an instance of the renderer
        renderer.render(<IntrospectionVideo />);
        const result = renderer.getRenderOutput(); //This returns the rendered React component. Using this you can check out the type and props of the elements rendered by your component.
        result.type.should.equal('div');
        result.props.className.should.equal('app-container');

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