import Blink from "../Blink";
import renderer from 'react-test-renderer';
import React from 'react';

test('Blink 正常渲染', () => {
    const tree = renderer.create(<Blink />).toJSON();
    expect(tree).toMatchSnapshot();
})