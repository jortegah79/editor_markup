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
    const texto=this.state.input;
    const marcado=marked(texto);
    return (
      <div>
        <h1 >Editor de marcado de J.Ortega</h1>
        <div>
          <div >
            <h3>Editor</h3>
            <button onClick={this.extensionEditor}>X</button>
          </div>
          <div >
            <textarea value={this.state.input} style={this.state.editorExtendido? { height: "500px" } : { height: "250px" }} onChange={this.cambioTexto} ></textarea>
          </div>
        </div>
        <div >
          <div>
            <h3>Preview</h3>
            <button onClick={this.extensionPreview} >X</button>
          </div>
          <div>                    
            <div   dangerouslySetInnerHTML={{__html:marcado}} style={this.state.previewExtendido? { height: "500px" } : { height: "250px" }}></div>
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



/*

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

    return (
      <div>
        <h1 className="">Editor de marcado de J.Ortega</h1>
        <Editor titulo="Editor" cambioTXT={this.cambioTexto} cambioAlto={this.extensionEditor} />
        <Preview titulo="Preview" cambioAlto={this.extensionPreview} />
      </div>
    );
  }
};

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
function Toolbar(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <button onClick={props.eventoBt}>X</button>
    </div>
  );
};

ReactDOM.render(
  <EditorDeMarcado />,
  document.getElementById('root')
);


*/