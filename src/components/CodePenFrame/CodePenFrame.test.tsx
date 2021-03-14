import React from 'react'
import { render } from '@testing-library/react'
import {CodePenFrame} from './CodePenFrame'

describe('CodePenFrame component', () => {
    it('should render', () => {
        const { container } = render(<CodePenFrame url="https://some-code-pen.url" title="My 😎 CodePen"/>);
        expect(container).toMatchSnapshot();
    });
});