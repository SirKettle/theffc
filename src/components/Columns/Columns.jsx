import React from 'react';
import styled from 'styled-components';

const StyledColumns = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > * {
      flex: 0 1 50%;
      padding: 0 2rem;
      border-right: solid 1px rgba(0, 0, 0, 0.1);
    }

    & > :first-child {
      padding-left: 0;
    }

    & > :last-child {
      padding-right: 0;
      border-right: none;
    }
  }
`;

const Columns = ({ className, children }) => <StyledColumns className={className}>{children}</StyledColumns>;

Columns.defaultProps = {
  className: null,
};

export default Columns;
