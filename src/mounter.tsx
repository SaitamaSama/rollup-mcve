import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {theme, Button} from '@primer/components';

render((
  <ThemeProvider theme={theme}>
    <Button>Help</Button>
  </ThemeProvider>
), document.querySelector('[data-mount]'));
