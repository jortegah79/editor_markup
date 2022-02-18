/* eslint-disable react/no-danger-with-children */

import { marked } from 'marked';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

marked.setOptions({
  breaks: true});

const valores=`# ENCABEZADO
## SUBENCABEZADO
### OTRO ENCABEZADO
[ Mi cuenta personal de GITHUB](https://github.com/jortegah79)

\`<div>CODIGO...</div>\`
}
  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
        - That look like this.

  * Esfuerzo
  * Pasión
  * Ilusión
  
  1. Prueba
  1. Avanza
  1. Consiguelo
  
  
  Text attributes _italic_, **bold**, 
\`monospace\`, ~~strikethrough~~, INCLUSO ambas **_ambas_**.
 
 > Un blockquote

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

![embutido](https://revistadigital.inesem.es/informatica-y-tics/files/2016/02/Java-Inesem.jpg)

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
      <div className="app">
        <h1 className="app-titulo">Editor de marcado de J.Ortega</h1>
        <div className="app-completo">
          <div className="app-editor" >
            <Toolbar titulo="Editor" eventoBt={this.extensionEditor} />
            <textarea id="editor" value={this.state.input} style={this.state.editorExtendido ? { height: "750px" } : { height: "250px" }} onChange={this.cambioTexto} ></textarea>
          </div>
          <div className="app-preview">
            <Toolbar titulo="Preview" eventoBt={this.extensionPreview} />
            <div id="preview" dangerouslySetInnerHTML={{ __html: marcado }} style={this.state.previewExtendido ? { height: "700px" } : { height: "250px" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

function Toolbar(props) {
  return (
    <div className='barra verde'>
      <div className="barra-div">
        <h3 className="h3">{props.titulo}</h3>
        <button onClick={props.eventoBt}>X</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <EditorDeMarcado />,
  document.getElementById('root')
);
