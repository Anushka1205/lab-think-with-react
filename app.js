// React 2
const container = document.getElementById('react-container');

ReactDOM.render("Hello! Welcome to React",container);

// React 3

const Container2 = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}

const container2 = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container2),container2);

// React 4

class ReactContainer extends React.Component{
    // constructor - to initialize the state 
  
    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }
    
  }
  const container3 = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container3);