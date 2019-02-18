import React from 'react';
import image from '../asserts/images/image.jpeg';

export class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="row">
                    <div className="column">
                        <h2>Column 1</h2>
                        <p>Some text..</p>
                    </div>
                    <div className="column">
                        <h2>Column 2</h2>
                        <p>Some text..</p>
                    </div>
                    <div className="column">
                        <h2>Column 3</h2>
                        <p>Some text..</p>
                    </div>
                    <div className="column">
                        <img src={image}  alt="image" />
                        <p>Some text..</p>
                    </div>
                    <div className="column">
                        <img src={image}  alt="image" />
                        <p>Some text..</p>
                    </div>
                </div>
                <div>
                    <h1>This is section2</h1>
                </div>

            </div>
        )
    }
}