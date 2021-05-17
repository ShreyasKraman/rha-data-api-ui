import React from 'react';

import Menubar from '../../components/AppBar/Menubar';

import './Layout.scss'

const Layout = (props:{children: React.ReactNode}) => (
    <div>
        <Menubar/>
        {props.children}
    </div>
)

export default Layout;