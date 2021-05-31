import React from 'react';
import { Link } from 'react-router-dom'
const Index = () => {
    return (
        <div>
            this is index page.
            <Link to='/contact'>Go to Contact</Link>
        </div>
    );
};

export default Index;