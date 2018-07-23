import React from "react";
import { connect } from "react-redux";

import Main from "./Main";

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <Main/>
                    </div>
                </div>
            </div>
        );
    }
}