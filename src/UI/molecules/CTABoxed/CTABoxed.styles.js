import styled from 'react-emotion';

import { Button as BsButton } from 'antd';

export const Box = styled('div')`
  position: relative;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 6px;
  background-color: ${p => (p.theme.ui.colors.white)};
  ${p => (p.transparent && `
    background-color: transparent;
  `)}
`;

export const Title = styled('div')`
  font-size: 1.25rem;
  font-weight: 300;
`;

export const Content = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 300;
  ${Title} {
    margin: 0;
  }
`;

export const Button = styled(BsButton)`
  height: auto;
  padding: .6em 3.5em;
  text-transform: uppercase;
  letter-spacing: .5px;
  line-height: 2;
  font-size: .75rem;
`;

export const Body = styled('div')`
  padding: 1.25rem;
  border-radius: 0 0 6px 6px;
`;
