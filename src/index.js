/* eslint-disable react/no-danger-with-children */

import { marked } from 'marked';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class EditorDeMarcado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      editorExtendido: false,
      previewExtendido: false
    }
    this.cambioTexto = this.cambioTexto.bind(this);
    this.extensionEditor = this.extensionEditor.bind(this);
    this.extensionPreview = this.extensionPreview.bind(this);
  }
  cambioTexto(event) {
    this.setState({
      input: event.target.value
    });
  }
  extensionEditor() {
    this.setState(
      { editorExtendido: !this.state.editorExtendido }
    )
  }
  extensionPreview() {
    this.setState(
      { previewExtendido: !this.state.previewExtendido }
    )
  }

  render() {
    const texto = this.state.input;
    const marcado = marked(texto);
    return (
      <div className="container">
        <h3 className="text-center mt-2 text-light">Editor de marcado de J.Ortega</h3>
        <div className="row col-12">
          <div className="col-md-6 container-fluid editor" >
            <Toolbar titulo="Editor" eventoBt={this.extensionEditor} />
            <textarea value={this.state.input} style={this.state.editorExtendido ? { height: "500px" } : { height: "250px" }} onChange={this.cambioTexto} ></textarea>
          </div>
          <div className='col-md-6 container-fluid preview'>
            <Toolbar titulo="Preview" eventoBt={this.extensionPreview} />
            <div className="container bg-dark text-light"dangerouslySetInnerHTML={{ __html: marcado }} style={this.state.previewExtendido ? { height: "500px" } : { height: "250px" }}></div>
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

function Toolbar(props) {
  return (
    <div className='row justify-content-between'>
      <h3>{props.titulo}</h3>
      <button onClick={props.eventoBt}>X</button>
    </div>
  );
};


/*


function Editor(props) {
  return (
    <div>
      <Toolbar titulo={props.titulo} eventoBt={props.cambioAlto} />
      <textarea value={this.state.input} style={this.state.editorExtendido ? { height: "500px" } : { height: "250px" }} onChange={props.cambioTXT} className="txt"></textarea>
    </div>
  );
}
function Preview(props) {
  const texto = this.state.input;
  const marcado = marked(texto);
  return (
    <div>
      <Toolbar titulo={props.titulo} eventoBt={props.cambioAlto} />
      <div  dangerouslySetInnerHTML={{ __html: marcado }} style={this.state.previewExtendido ? { height: "500px" } : { height: "250px" }}></div>
    </div>
  );
}

*/