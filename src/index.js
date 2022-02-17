/* eslint-disable react/no-danger-with-children */

import { marked } from 'marked';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const valores=`# ENCABEZADO
## SUBENCABEZADO
[ Mi cuenta personal de GITHUB](https://github.com/jortegah79)

function saluda( nombre){
  return "hola" + nombre;
}
  - html responsive en FCC
  - Javascript en FCC
  - Frameworks en FCC

  * Esfuerzo
  * Pasión
  * Ilusión

  *Me esta encantando este ejercicio
  
  Live editor by J.Ortega.
`;
class EditorDeMarcado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: valores,
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
      <div className="container-fluid ">
        <h4 className="text-center m-3">Editor de marcado de J.Ortega</h4>
        <div className="m-md-5 m-1 row">
          <div className="col-md-6" >
            <Toolbar titulo="Editor" eventoBt={this.extensionEditor} />
            <textarea id="editor" className="col12" value={this.state.input} style={this.state.editorExtendido ? { height: "500px" } : { height: "250px" }} onChange={this.cambioTexto} ></textarea>
          </div>
          <div className='col-md-6'>
            <Toolbar titulo="Preview" eventoBt={this.extensionPreview} />
            <div id="preview" className="" dangerouslySetInnerHTML={{ __html: marcado }} style={this.state.previewExtendido ? { height: "500px" } : { height: "250px" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

function Toolbar(props) {
  return (
    <div className='col-12 verde'>
      <div className="tbar row justify-content-between">
        <h6 className="ml-5 mt-1 h4">{props.titulo}</h6>
        <button onClick={props.eventoBt}>X</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <EditorDeMarcado />,
  document.getElementById('root')
);
