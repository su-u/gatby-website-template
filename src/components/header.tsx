import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// ______________________________________________________
//
const Component: React.FC = () => (
  <Container>
    <Bar>
      <Toolbar>
        <Title variant="h6">gatby</Title>
        <LoginButton>
          <LoginLink to={'/auth'}>Login</LoginLink>
        </LoginButton>
      </Toolbar>
    </Bar>
  </Container>
);
// ______________________________________________________
//
const LoginButton = styled(Button)`
  color: white;
`;

const LoginLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Container = styled.div`
  flex-grow: 1;
`;

const Bar = styled(AppBar)`
  background-color: black;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

export default Component;
