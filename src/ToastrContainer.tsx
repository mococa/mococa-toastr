import React from 'react';
import styled from 'styled-components';

export const ToastrContainer = () => {
  return <ToastrRootContainer id="toastr-root" />;
};

export const ToastrRootContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 11;
`;
// export const ToastrContainerWrapper = styled.div`
//   display: flex;
//   flex-flow: column-reverse;
//   margin: 8px;

//   > :not(:first-of-type) {
//     margin-bottom: 8px;
//   }
// `;
