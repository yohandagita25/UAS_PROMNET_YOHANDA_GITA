import React, { Component } from "react";
import UserService from "../services/UserService";
import './ViewUserComponent.css'

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div className="body">
        <br />
        <div className="card col-md-8 offset-md-2">
          <h4 className="text-center">Menampilkan Data Peminjaman</h4>
          <div className="card-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Judul Buku</th>
                  <td>{this.state.user.judul_buku}</td>
                </tr>
                <tr>
                  <th>Jumlah</th>
                  <td>{this.state.user.jumlah}</td>
                </tr>
                <tr>
                  <th>Nama Peminjam</th>
                  <td>{this.state.user.nama_peminjam}</td>
                </tr>
                <tr>
                  <th>Alamat Peminjam</th>
                  <td>{this.state.user.alamat_peminjam}</td>
                </tr>
                <tr>
                  <th>No. HP Peminjam</th>
                  <td>{this.state.user.noHp_peminjam}</td>
                </tr>
                <tr>
                  <th>Tanggal Pinjam</th>
                  <td>{this.state.user.tgl_pinjam}</td>
                </tr>
                <tr>
                  <th>Tanggal Pengembalian</th>
                  <td>{this.state.user.tgl_pengembalian}</td>
                </tr>
                <tr>
                  <th>Lama Pinjam</th>
                  <td>{this.state.user.lama_pinjam}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
}

export default ViewUserComponent;
