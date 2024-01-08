import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="title">Selamat Datang di Peminjaman Buku</h1>
            <p className="description">
                Temukan dan pinjam berbagai buku menarik di perpustakaan kami.
            </p>
            <Link to="/users" className="btn-primary">Pinjam Buku Sekarang</Link >
        </div>
    );
};

export default Home;
