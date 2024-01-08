import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';
import './ListUserComponent.css'

class ListUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    deleteUser(id) {
        UserService.deleteUser(id)
            .then(() => {
                this.setState({
                    users: this.state.users.filter(user => user.id !== id),
                });
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers()
            .then((res) => {
                if (!res.data) {
                    this.props.history.push('/add-user/_add');
                }
                this.setState({ users: res.data });
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    addUser() {
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div className="body">
                <h2 className="text-center">List Peminjaman Buku</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>
                        Tambah Peminjaman Buku
                    </button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Judul Buku</th>
                                <th>Jumlah</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>No.HP</th>
                                <th>Tanggal Pinjam</th>
                                <th>Tanggal Pengembalian</th>
                                <th>Lama Pinjam</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.judul_buku}</td>
                                    <td>{user.jumlah}</td>
                                    <td>{user.nama_peminjam}</td>
                                    <td>{user.alamat_peminjam}</td>
                                    <td>{user.noHp_peminjam}</td>
                                    <td>{user.tgl_pinjam}</td>
                                    <td>{user.tgl_pengembalian}</td>
                                    <td>{user.lama_pinjam}</td>
                                    <td>
                                    <div className="action-buttons">
                                        <Link to={`/view-user/${user.id}`} className="btn btn-info">
                                            View
                                        </Link>
                                        <Link to={`/add-user/${user.id}`} className="btn btn-info" style={{ marginLeft: '10px' }}>
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => this.deleteUser(user.id)}
                                            className="btn btn-danger"
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;
