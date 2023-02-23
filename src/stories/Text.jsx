
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ text }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: text }} />
  );
};

Text.propTypes = {
  /**
   * Text
   */
  text: PropTypes.string.isRequired,
};