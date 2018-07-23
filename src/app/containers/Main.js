import React from "react";
import { connect } from "react-redux";
import { findTicket } from "../actions/ticketsAction"

class Main extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let ticketInfo = { 
            from: 2208001,
            to: 2218000,
            date: "2018-07-30",
            time: "00:00"
        }
        return (
            <div>
                <div className="row">
                    <div className="col-xs-10">   
                        <h1>The Main Component!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10">   
                        <button className="btn btn-primary" onClick={() => {this.props.findTicket(ticketInfo)}}>
                            Find ticket
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findTicket: (searchInfo) => {
            dispatch(findTicket(searchInfo));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        ticketsData: state.ticketsData,
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Main);