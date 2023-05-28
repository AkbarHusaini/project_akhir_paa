import React, { useEffect } from 'react';
import $ from 'jquery';

const KaryawanPage = () => {
  useEffect(() => {
    $.ajax({
      url: "/karyawan/data",
      type: "GET",
      success: function (data) {
        $.each(data, function (index, karyawan) {
          const row = (
            <tr key={karyawan.karyawan_id}>
              <td>{karyawan.karyawan_id}</td>
              <td>{karyawan.karyawan_nama}</td>
              <td>{karyawan.karyawan_umur}</td>
              <td>{karyawan.karyawan_alamat}</td>
              <td>{karyawan.karyawan_jabatan}</td>
              <td>
                <button type="button" className="btn btn-info btn-edit">Ubah</button>
                <button type="button" className="btn btn-danger btn-delete">Hapus</button>
              </td>
            </tr>
          );
          $("#table-karyawan tbody").append(row);
        });
      }
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="<%= url %>">PAA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="<%= url %>">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="<%= url %>karyawan">Karyawan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<%= url %>profile">Profile</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="<%= url %>profile">Profil</a>
                <a className="dropdown-item" href="<%= url %>login/logout">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <section className="mt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h1>Daftar Karyawan</h1>
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <form id="form-mahasiswa">
                      <input type="hidden" name="id" id="id" />
                      <div className="form-group">
                        <label htmlFor="id">ID Karyawan</label>
                        <input type="text" name="id" id="id" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="nama">Nama Karyawan</label>
                        <input type="text" name="nama" id="nama" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="umur">Umur Karyawan</label>
                        <input type="text" name="umur" id="umur" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="alamat">Alamat Karyawan</label>
                        <input type="text" name="alamat" id="alamat" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="jabatan">Jabatan Karyawan</label>
                        <input type="text" name="jabatan" id="jabatan" className="form-control" />
                      </div>
                      <button type="submit" className="btn btn-primary">Simpan</button>
                    </form>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <h1>Data Karyawan</h1>
            <table id="table-karyawan" className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Umur</th>
                  <th>Alamat</th>
                  <th>Jabatan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Data karyawan akan ditampilkan di sini */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaryawanPage;
