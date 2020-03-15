import PropTypes from 'prop-types';
import React from 'react';
import {Box as ChakraBox, Heading as ChakraHeading} from '@chakra-ui/core';

export const Container = ({children, ...rest}) => (
  <ChakraBox padding={5} rounded="md" borderWidth="1px" {...rest}>
    {children}
  </ChakraBox>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export const Heading = ({children, ...rest}) => (
  <ChakraHeading fontSize="xl" {...rest}>
    {children}
  </ChakraHeading>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export const Title = ({children, ...rest}) => (
  <ChakraHeading fontSize="2xl" marginBottom={6} {...rest}>
    {children}
  </ChakraHeading>
);

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
