import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class EditorDeMarcado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.cambioTexto=this.cambioTexto.bind(this);
  }
  cambioTexto(event){
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1 className="display-4 text-center text-light bg-success border-bottom">Editor de marcado de J.Ortega</h1>
        <div className="caja editor">
          <div className="barra">
            <h3>Editor</h3>
            <button><i className="bi bi-x-square-fill h4 "></i></button>
          </div>
          <div className="textos">
            <textarea value={this.state.input} onChange={this.cambioTexto} className="txt"></textarea>
          </div>
        </div>
        <div className="caja preview">
          <div className="barra">
            <h3>Preview</h3>
           <button><i className="bi bi-x-square-fill h4 "></i></button>
          </div>
          <div className="textos">
            <textarea value={this.state.input}className="txt" disabled></textarea>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <EditorDeMarcado />,
  document.getElementById('root')
);


