import React from 'react'
import { string, bool, node } from 'prop-types'
import styled from 'styled-components'

import Loader from './common/icons/Loader'

const Shade = styled.div`
  align-items: center;
  ${(props: IShade) => !props.noBackground && 'background-color: #4a4a4a40;'}
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;

  position: absolute;
  right: 0;
  top: 0;

  z-index: 75;
`

const StyledLoader = styled(Loader)`
  height: 5rem;
`

interface IShade {
  noBackground: boolean
}

interface ILoaderOverlay {
  className: string
  children: JSX.Element
  loading: boolean
  noBackground: boolean
}

function LoaderOverlay ({
  className,
  children,
  loading,
  noBackground
}: ILoaderOverlay): JSX.Element {
  return (
    <div className={className}>
      {children}
      {loading && (
        <Shade noBackground={noBackground}>
          <StyledLoader />
        </Shade>
      )}
    </div>
  )
}

LoaderOverlay.propTypes = {
  className: string,
  loading: bool,
  children: node,
  noBackground: bool
}

LoaderOverlay.defaultProps = {
  className: undefined,
  loading: false,
  children: undefined,
  noBackground: false
}

export default styled(LoaderOverlay)`
  display: inherit;
  position: relative;
`
