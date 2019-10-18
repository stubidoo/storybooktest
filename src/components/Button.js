import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Wrapper = styled.button({
  background: '#1EA7FD',
  color: 'white',
  padding: '10px 16px'
})

/**
- In code comment JS-DOC 
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export const Button = ({text}) => (
  <Wrapper>{text}</Wrapper>
)

Button.propTypes = {
  /** Button text */
  text: PropTypes.string.isRequired,
}
