import React, { Component } from 'react';
import './LeftNav.css';


export default class Sidebar extends Component {
    render() {
        return (
          <nav id="main_sidebar" class={"main_sidebar " + (this.props.toggleSideBar ? 'toggled' : '')}>
          <a class="sidebar-brand" href="index.html">
              <img id="main-logo" class="qburst_logo" src="" alt="Qburst Logo" style={{ maxWidth: "90px"}}/>
            </a>
          <div class="sidebar-content">
            <div class="sidebar-user">
              <div class="font-weight-bold">Dashboard</div>
            </div>
    
            <ul class="sidebar-nav">
              <li class="sidebar-item active">
                <a href="#dashboards" data-toggle="collapse" class="sidebar-link" aria-expanded="true">
                    <i class="align-middle mr-2 fas fa-fw fa-home"></i> <span class="align-middle">Death</span>
                  </a>
              </li>
              <li class="sidebar-item">
                <a href="#pages" data-toggle="collapse" class="sidebar-link collapsed">
                    <i class="align-middle mr-2 fas fa-fw fa-file"></i> <span class="align-middle">Cure</span>
                  </a>
              </li>
              <li class="sidebar-item">
                <a href="#auth" data-toggle="collapse" class="sidebar-link collapsed">
                    <i class="align-middle mr-2 fas fa-fw fa-sign-in-alt"></i> <span class="align-middle">Infected</span>
                  </a>
              </li>
              <li class="sidebar-item">
                <a href="#ui" data-toggle="collapse" class="sidebar-link collapsed">
                    <i class="align-middle mr-2 fas fa-fw fa-flask"></i> <span class="align-middle">Recovered</span>
                  </a>
              </li>
              <li class="sidebar-item">
                <a href="#charts" data-toggle="collapse" class="sidebar-link collapsed">
                    <i class="align-middle mr-2 fas fa-fw fa-chart-pie"></i> <span class="align-middle">Vaccine</span>
                  </a>
              </li>
    
              <li class="sidebar-item">
                <a href="#forms" data-toggle="collapse" class="sidebar-link collapsed">
                    <i class="align-middle mr-2 fas fa-fw fa-check-square"></i> <span class="align-middle">Travel History</span>
                  </a>
              </li>
            </ul>
          </div>
        </nav>
  )
    }
    }