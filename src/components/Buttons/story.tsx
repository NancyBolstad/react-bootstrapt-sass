import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Button', module).add('with text', () => (
  <Button variant="dark" size="lg">
    Hello Button
  </Button>
));
