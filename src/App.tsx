import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ControledCarousel from '../src/components/Carousel/Carousel';
import Button from '../src/components/Buttons/Button';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/foo">Foo</Link>
          <Link to="/bar">Bar</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={ControledCarousel} />
          <Route exact path="/foo" component={Button} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
