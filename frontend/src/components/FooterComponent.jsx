import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">
                            All Rights Reserved 2024
                            <span className="author"> @tata^^</span>
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
