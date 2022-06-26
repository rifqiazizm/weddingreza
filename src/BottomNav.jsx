import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt,faHome,faWallet,faLocationDot } from  '@fortawesome/free-solid-svg-icons';
import { Navbar,Nav, NavItem } from 'react-bootstrap';
import {Link,Outlet} from 'react-router-dom';

function BottomNav() {




    const tabs = [{
        route: "/app/keluarga",
        icon: faHome,
        label: "Mempelai"
      },{
        route: "/app/akad",
        icon: faCalendarAlt,
        label: "Akad"
      },{
        route: "/app/gmaps",
        icon: faLocationDot,
        label: "Lokasi"
      },{
        route: "/app/dompet",
        icon: faWallet,
        label: "Dompet"
      }
    ]
  return (
    <>
        <Navbar className="d-block" variant="light" bg="light" fixed="bottom">
           
           <Nav className="d-flex flex-row justify-content-around">
       
           {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <Link to={tab.route} className="nav-link">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                  

                      <FontAwesomeIcon className='boxed' size="lg" icon={tab.icon} />
                
                      <div className='navText'>{tab.label}</div>
                    </div>
                  </Link>
                </NavItem>
              ))
            }
           </Nav>
        </Navbar>
        <Outlet/>

    </>
  )
}

export default BottomNav