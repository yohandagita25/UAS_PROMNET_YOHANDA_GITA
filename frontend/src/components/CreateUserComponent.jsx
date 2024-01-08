import React, { Component } from "react";
import UserService from "../services/UserService";
import './CreateUserComponent.css'

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      judul_buku: "",
      jumlah: 0,
      nama_peminjam: "",
      alamat_peminjam: "",
      noHp_peminjam: "",
      tgl_pinjam: "",
      tgl_pengembalian: "",
      lama_pinjam: "",
    };

    this.changeJudulBuku = this.changeJudulBuku.bind(this);
    this.changeJumlah = this.changeJumlah.bind(this);
    this.changeNamaPeminjam = this.changeNamaPeminjam.bind(this);
    this.changeAlamatPeminjam = this.changeAlamatPeminjam.bind(this);
    this.changeNohpPemninjam = this.changeNohpPemninjam.bind(this);
    this.changeTglPinjam = this.changeTglPinjam.bind(this);
    this.changeTglPengembalian = this.changeTglPengembalian.bind(this);
    this.changeLamaPinjam = this.changeLamaPinjam.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          judul_buku: user.judul_buku,
          jumlah: user.jumlah,
          nama_peminjam: user.nama_peminjam,
          alamat_peminjam: user.alamat_peminjam,
          noHp_peminjam: user.noHp_peminjam,
          tgl_pinjam: user.tgl_pinjam,
          tgl_pengembalian: user.tgl_pengembalian,
          lama_pinjam: user.lama_pinjam,
        });
      });
    }
  }

  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      judul_buku: this.state.judul_buku,
      jumlah: this.state.jumlah,
      nama_peminjam: this.state.nama_peminjam,
      alamat_peminjam: this.state.alamat_peminjam,
      noHp_peminjam: this.state.noHp_peminjam,
      tgl_pinjam: this.state.tgl_pinjam,
      tgl_pengembalian: this.state.tgl_pengembalian,
      lama_pinjam: this.state.lama_pinjam,
    };

    console.log("user => " + JSON.stringify(user));

    if (this.state.id === "_add") {
      UserService.createUser(user)
        .then((res) => {
          this.props.history.push("/users");
          // Tambahkan notifikasi alert di sini
          alert('Data berhasil ditambahkan!');
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          // Tambahkan notifikasi alert untuk menangani kesalahan
          alert('Terjadi kesalahan saat menambahkan data. Silakan coba lagi.');
        });
    } else {
      UserService.updateUser(user, this.state.id)
        .then((res) => {
          this.props.history.push("/users");
          // Tambahkan notifikasi alert di sini
          alert('Data berhasil diperbarui!');
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          // Tambahkan notifikasi alert untuk menangani kesalahan
          alert('Terjadi kesalahan saat memperbarui data. Silakan coba lagi.');
        });
    }
  };

  changeJudulBuku = (event) => {
    this.setState({ judul_buku: event.target.value });
  };

  changeJumlah = (event) => {
    this.setState({ jumlah: event.target.value });
  };

  changeNamaPeminjam = (event) => {
    this.setState({ nama_peminjam: event.target.value });
  };

  changeAlamatPeminjam = (event) => {
    this.setState({ alamat_peminjam: event.target.value });
  };

  changeNohpPemninjam = (event) => {
    this.setState({ noHp_peminjam: event.target.value });
  };

  changeTglPinjam = (event) => {
    this.setState({ tgl_pinjam: event.target.value });
  };

  changeTglPengembalian = (event) => {
    this.setState({ tgl_pengembalian: event.target.value });
  };

  changeLamaPinjam = (event) => {
    this.setState({ lama_pinjam: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    return this.state.id === "_add" ? (
      <h3 className="title text-center">Tambah Peminjaman</h3>
    ) : (
      <h3 className="title text-center">Update User</h3>
    );
  }

  render() {
    return (
      <>
        <br />
        <div className="body">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Judul Buku: </label>
                    <input
                      placeholder="Judul Buku"
                      name="judul_buku"
                      className="form-control"
                      value={this.state.judul_buku}
                      onChange={this.changeJudulBuku}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jumlah: </label>
                    <input
                      type="number"
                      placeholder="Jumlah"
                      name="jumlah"
                      className="form-control"
                      value={this.state.jumlah}
                      onChange={this.changeJumlah}
                    />
                  </div>
                  <div className="form-group">
                    <label> Nama Peminjam: </label>
                    <input
                      placeholder="Nama Peminjam"
                      name="nama_peminjam"
                      className="form-control"
                      value={this.state.nama_peminjam}
                      onChange={this.changeNamaPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Alamat Peminjam: </label>
                    <input
                      placeholder="Alamat Peminjam"
                      name="alamat_peminjam"
                      className="form-control"
                      value={this.state.alamat_peminjam}
                      onChange={this.changeAlamatPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> No HP Peminjam: </label>
                    <input
                      placeholder="No HP Peminjam"
                      name="noHp_peminjam"
                      className="form-control"
                      value={this.state.noHp_peminjam}
                      onChange={this.changeNohpPemninjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Tanggal Pinjam: </label>
                    <input
                      type="date"
                      placeholder="Tanggal Pinjam"
                      name="tgl_pinjam"
                      className="form-control"
                      value={this.state.tgl_pinjam}
                      onChange={this.changeTglPinjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Tanggal Pengembalian: </label>
                    <input
                      type="date"
                      placeholder="Tanggal Pengembalian"
                      name="tgl_pengembalian"
                      className="form-control"
                      value={this.state.tgl_pengembalian}
                      onChange={this.changeTglPengembalian}
                    />
                  </div>
                  <div className="form-group">
                    <label> Lama Pinjam: </label>
                    <input
                      placeholder="Lama Pinjam"
                      name="lama_pinjam"
                      className="form-control"
                      value={this.state.lama_pinjam}
                      onChange={this.changeLamaPinjam}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default CreateUserComponent;
