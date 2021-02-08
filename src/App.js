import "./App.css";
import requests from "./request/RequestHTTP.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import Loading from "./components/Loading";
import Data from "./components/Data";
import Error from "./components/Error";

class App extends Component {
       constructor(props) {
              super(props);
       }

       async get() {
              const result = document.getElementById("result");
              try {
                     ReactDOM.render(<Loading></Loading>, result);
                     const data = await requests.requestGET();
                     ReactDOM.render(<Data data={data}></Data>, result);
              } catch (error) {
                     ReactDOM.render(
                            <Error error={error.message}></Error>,
                            result
                     );
              }
       }

       async post() {
              const result = document.getElementById("result");
              try {
                     ReactDOM.render(<Loading></Loading>, result);
                     const data = await requests.requestPOST();
                     ReactDOM.render(<Data data={data}></Data>, result);
              } catch (error) {
                     ReactDOM.render(
                            <Error error={error.message}></Error>,
                            result
                     );
              }
       }

       async put() {
              const result = document.getElementById("result");
              try {
                     ReactDOM.render(<Loading></Loading>, result);
                     const data = await requests.requestPUT();
                     ReactDOM.render(<Data data={data}></Data>, result);
              } catch (error) {
                     ReactDOM.render(
                            <Error error={error.message}></Error>,
                            result
                     );
              }
       }

       async delete() {
              const result = document.getElementById("result");
              try {
                     ReactDOM.render(<Loading></Loading>, result);
                     const data = await requests.requestDELETE();
                     ReactDOM.render(<Data data={data}></Data>, result);
              } catch (error) {
                     ReactDOM.render(
                            <Error error={error.message}></Error>,
                            result
                     );
              }
       }

       render() {
              return (
                     <div className="App">
                            <br />
                            <br />
                            <h1 className="display-1">
                                   Request Ajax HTTP React JS
                            </h1>
                            <br />
                            <br />
                            <div className="container">
                                   <div className="row">
                                          <div className="col">
                                                 <button
                                                        className="btn btn-success"
                                                        onClick={this.get}
                                                 >
                                                        GET
                                                 </button>
                                          </div>

                                          <div className="col">
                                                 <button
                                                        className="btn btn-primary"
                                                        onClick={this.post}
                                                 >
                                                        POST
                                                 </button>
                                          </div>

                                          <div className="col">
                                                 <button
                                                        className="btn btn-warning"
                                                        onClick={this.put}
                                                 >
                                                        PUT
                                                 </button>
                                          </div>

                                          <div className="col">
                                                 <button
                                                        className="btn btn-danger"
                                                        onClick={this.delete}
                                                 >
                                                        DELETE
                                                 </button>
                                          </div>
                                   </div>
                                   <br />
                                   <br />
                                   <div>
                                          <h1>Result: </h1>
                                          <div id="result"></div>
                                   </div>
                            </div>
                     </div>
              );
       }
}

export default App;
