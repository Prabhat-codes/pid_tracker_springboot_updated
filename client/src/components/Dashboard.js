import React from 'react';
import { Link } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className="container" style={{margin:"0"}}>
            <div className="row">
                <div className="col-sm-6">
                    <Link to="/dev" style={{ textDecoration: "none" }}>
                        <div className="card" style={{ height: "100%", width: "" }}>
                            <div className="card-body" style={{ textAlign: "center" }}>
                                <i className="fa fa-user" style={{ fontSize: "50px", color: "blue", marginTop: "20px", marginBottom: "10px" }}></i>
                                <h1 className="card-title" style={{ color: "black" }}>Developer</h1>
                                <div className="card-text">
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-6"><div className="card" >
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    Avg Time for your PID to <br></br>get approved
                                                </h6>
                                                <p className="card-text">10</p>
                                            </div>
                                        </div></div>
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-12">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Number of your PIDs yet to be reviewed
                                                    </h6>
                                                    <p className="card-text">10</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Number of your PIDs that have been reviewed
                                                    </h6>
                                                    <p className="card-text">5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Total Number of submitted PIDs
                                                    </h6>
                                                    <p className="card-text">10</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Total Number of PIDs you've gotten approved
                                                    </h6>
                                                    <p className="card-text">5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-6">
                    <Link to="/rev" style={{ textDecoration: "none" }}>
                        <div className="card" style={{ height: "100%", width: "" }}>
                            <div className="card-body" style={{ textAlign: "center" }}>
                                <i className="fa fa-user" style={{ fontSize: "50px", color: "blue", marginTop: "20px", marginBottom: "10px" }}></i>
                                <h1 className="card-title" style={{ color: "black" }}>Reviewer</h1>
                                <div className="card-text">
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-6"><div className="card" >
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    Avg Time for you to approve a PID
                                                </h6>
                                                <p className="card-text">10</p>
                                            </div>
                                        </div></div>
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Number of PIDs that you have to review
                                                    </h6>
                                                    <p className="card-text">20</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Total Number of PIDs that you have approved
                                                    </h6>
                                                    <p className="card-text">20</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
