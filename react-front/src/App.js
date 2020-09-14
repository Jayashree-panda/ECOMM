import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import SignUp from './components/signup';
import SignIn from './components/signin';
import HomePage from './components/homepage';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent1:false,
      showComponent2: false,
    };
    this._onButtonClick1 = this._onButtonClick1.bind(this);
    this._onButtonClick2 = this._onButtonClick2.bind(this);
  }

  _onButtonClick1(){
    this.setState({ showComponent1: true });
  }
  _onButtonClick2() {
    this.setState({ showComponent2: true });
  }
  render(){
    return (
      <div>
        <Button variant="contained" color="primary" onClick={ this._onButtonClick1 }>
          Sign up
        </Button>
        <Button variant="contained" color="primary" onClick={this._onButtonClick2}>
          Log in
        </Button>
        
        { this.state.showComponent1 && <SignUp />  }
        { this.state.showComponent2 && <SignIn />  }
        <HomePage />
      </div>
    );
  }
}

export default App;
;