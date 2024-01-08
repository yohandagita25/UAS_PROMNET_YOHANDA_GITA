import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="header">
                <header>
                    <nav className="navbar navbar-dark">
                        <div>
                            <a href="/home" className="navbar-brand">
                                TATA WEBSITE (つ✧ω✧)つ
                            </a>
                        </div>
                        <div className="ml-auto">
                            <a href="/home" className="navbar-brand">
                                Home
                            </a>
                            <a href="/about" className="navbar-brand">
                                About
                            </a>
                            <a href="/users" className="navbar-brand">
                                Daftar Peminjaman
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
