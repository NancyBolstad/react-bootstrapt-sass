import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ControlledCarousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Carousel', module).add('Basic usage', () => (
  <ControlledCarousel></ControlledCarousel>
));
