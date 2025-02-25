/*
 * Created: Saturday, February 22nd 2025, 1:03:10 am
 * Author: Melvin Isican (mj.isican.dev@gmail.com)
 * -------------------------------
 * Last Modified: Saturday, February 22nd 2025, 1:51:06 pm
 * Modified By: Melvin Isican (mj.isican.dev@gmail.com)
 */

// Text.test.tsx
import React from 'react';
// The `render` method from @testing-library/react-native allows us to render
// React Native components in a test environment and query elements by text, etc.
import {render} from '@testing-library/react-native';
import Text from '../Text';

/**
 * This test suite verifies the `Text` component, ensuring:
 * 1. It renders children correctly.
 * 2. It applies default and mode-specific styles correctly.
 * 3. It allows overriding default styles with custom ones.
 */
describe('Text Component', () => {
  /**
   * This test checks that the component:
   * 1. Renders without crashing when no mode is provided (defaults to 'paragraph').
   * 2. Displays the expected text content.
   */
  it('renders correctly with default mode (paragraph)', () => {
    // We render the component with default props (mode not explicitly set).
    const {getByText} = render(<Text>Default Paragraph</Text>);

    // Query the rendered text to confirm it exists in the component tree.
    const renderedText = getByText('Default Paragraph');

    // Confirm the text node is found, which implies successful rendering.
    expect(renderedText).toBeTruthy();
  });

  /**
   * This test verifies that when `mode` is 'h1',
   * the component applies the correct style properties.
   */
  it('applies correct style for h1 mode', () => {
    // Render the component with `mode="h1"`.
    const {getByText} = render(<Text mode="h1">Heading 1</Text>);

    // Query the text node.
    const headingText = getByText('Heading 1');

    // `headingText.props.style` should include the styles from the `h1` style object.
    // We use Jest's `objectContaining` and `arrayContaining` to match partial values
    // because the style array can contain multiple style objects.
    expect(headingText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 32,
          fontWeight: 'bold',
          marginVertical: 10,
        }),
      ]),
    );
  });

  /**
   * Similar to the previous test, but ensures the h2 style is applied
   * for `mode="h2"`.
   */
  it('applies correct style for h2 mode', () => {
    // Render the component with `mode="h2"`.
    const {getByText} = render(<Text mode="h2">Heading 2</Text>);

    // Query the text node.
    const headingText = getByText('Heading 2');

    // Assert that the `h2` style object is applied.
    expect(headingText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 24,
          fontWeight: '600',
          marginVertical: 8,
        }),
      ]),
    );
  });

  /**
   * Ensures that the 'paragraph' style is applied when `mode="paragraph"`.
   */
  it('applies correct style for paragraph mode', () => {
    // Render with `mode="paragraph"`.
    const {getByText} = render(<Text mode="paragraph">Paragraph Text</Text>);

    // Query the text node.
    const paragraphText = getByText('Paragraph Text');

    // Check that the `paragraph` style is present.
    expect(paragraphText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 16,
          marginVertical: 6,
        }),
      ]),
    );
  });

  /**
   * Tests that custom styles provided through the `style` prop
   * will override or merge with the default styles (in this case, h1 styles).
   */
  it('allows custom style to override default styles', () => {
    // Define a custom style object.
    const customStyle = {fontSize: 40, color: 'red'};

    // Render the component with both `mode="h1"` and the custom style.
    const {getByText} = render(
      <Text mode="h1" style={customStyle}>
        Custom Styled Heading
      </Text>,
    );

    // Query the text node.
    const headingText = getByText('Custom Styled Heading');

    // Expect to find both default 'h1' styles AND the custom style in the array of styles.
    expect(headingText.props.style).toEqual(
      expect.arrayContaining([
        // Part of the default `h1` style
        expect.objectContaining({
          fontSize: 32,
          fontWeight: 'bold',
        }),
        // The custom style overrides or merges certain properties
        expect.objectContaining({
          fontSize: 40,
          color: 'red',
        }),
      ]),
    );
  });
});
