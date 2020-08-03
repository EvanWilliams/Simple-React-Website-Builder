import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import Baseview from './containers/PageGenerator/PageGenerator';
import Sample from './views/SamplePages/Attention_Image_Info/Attention_Image_Info'
import Footer from './views/footer/footer';
function App() {


  return (
      <BrowserRouter>
        <div className="App">
          <Baseview />
          <Switch>
              <Route path="/page-samples" component={Sample} />
              <Route path="/" component={Sample}></Route>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
