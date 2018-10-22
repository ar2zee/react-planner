import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink  to='/create'>New Project</NavLink ></li>
            <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink ></li>
            <li><NavLink  to='/' className='btn btn-floating pink lighten-1'>AA</NavLink></li>
        </ul>
    )
}

const mapDisatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDisatchToProps)(SignedInLinks);