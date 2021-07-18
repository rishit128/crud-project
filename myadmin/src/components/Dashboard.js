import React, { Component } from 'react'
import $ from 'jquery'; 
import {NavLink, Route, Switch} from 'react-router-dom';

import {CreateStudent} from './CreateStudent';
import {ListStudents} from './ListStudents';
import { Login } from './Login';
export class Dashboard extends Component {

    componentDidMount()
    {
        (function($) {
            "use strict";
        
            // Add active state to sidbar nav links
            var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
                $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
                    if (this.href === path) {
                        $(this).addClass("active");
                    }
                });
        
            // Toggle the side navigation
            $("#sidebarToggle").on("click", function(e) {
                e.preventDefault();
                $("body").toggleClass("sb-sidenav-toggled");
            });
        })($);
        
    }

    render() {
        return (
            <div>
                    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">CRUD PROJECT</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
      
            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        
            <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Activity Log</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                          
                           
                         
                            <div class="sb-sidenav-menu-heading">Actions</div>
                            <NavLink className="nav-link" to="/create-student">
                                <div className="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Create Student
                            </NavLink>
                            <NavLink className="nav-link" to="/list-student">
                                <div className="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                List Of Students
                            </NavLink>
                            <NavLink className="nav-link" to="/login-student">
                                <div className="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Login Of Students
                            </NavLink>

                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <Switch>
                        <Route path="/create-student/:id" component={CreateStudent} />
                        <Route path="/create-student" component={CreateStudent} />
                        <Route path="/list-student" component={ListStudents} />
                        <Route path="/login-student" component={Login} />
                      
                    </Switch>
                
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
                
            </div>
        )
    }
}

export default Dashboard
