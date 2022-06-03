import React from 'react'; //import React Component
import { Link } from 'react-router-dom';

export default function Map(props) {
    return (
        <div>
            <Link className="map-link" to="/search">
                <h2 className="map-title">Find A Bathroom</h2>
            </Link>
            <div className="map">
                <iframe className="map-image" src="https://snazzymaps.com/embed/398528" width="80%" height="550px"></iframe>
                <p>Find out how far a bathroom is from you, and click on one to see its ratings!</p>
            </div>
        </div>
    );
}