import React from 'react';

// Components
import Login from './login_component.jsx';
import SignUp from './signup_component.jsx';

const Welcome = () => {
    return (
        <div className="welcomeWrapper">
            <div className="intro">
                <h1>Title</h1>
                <h2>Excel no more.</h2>
                <h2>Track your classes, attendance, and student outcomes.</h2>
            </div>
            <div className="about">
                <h3><i className="fa fa-info" aria-hidden="true"></i> About </h3>
            </div>
            <div className="team">
                <h3><i className="fa fa-users" aria-hidden="true"></i> Meet the Team</h3>
                <ul className="teamUl clearfix">
                    <li>
                        <img src="http://yadayadacreative.com/CDA/jfritz.png" alt=""/>
                        <h5>John F.</h5>
                        <h6>Lead Engineer</h6>
                        <p>Lorem ipsum some really quick, short description here.</p>
                    </li>
                    <li>
                        <img src="http://yadayadacreative.com/CDA/yara.png" alt=""/>
                        <h5>Yara TP</h5>
                        <h6>Lead Engineer</h6>
                        <p>Lorem ipsum some really quick, short description here.</p>
                    </li>
                    <li>
                        <img src="http://yadayadacreative.com/CDA/aman.png" alt=""/>
                        <h5>Aman T.</h5>
                        <h6>Lead Engineer</h6>
                        <p>Lorem ipsum some really quick, short description here.</p>
                    </li>
                    <li>
                        <img src="http://yadayadacreative.com/CDA/graham.png" alt=""/>
                        <h5>Graham W.</h5>
                        <h6>Lead Engineer</h6>
                        <p>Lorem ipsum some really quick, short description here.</p>
                    </li>
                </ul>
            </div>
            <Login />
            <SignUp />
        </div>
    );
};

export default Welcome;