import React, { Component } from "react";
import { connect } from "react-redux";

class ListSinhVien extends Component {
  render() {
    return (
      <div className="p-4">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
          {this.props.DSSV.map((s) => {
            return(
            <tr>
              <th scope="row">{s.maSV}</th>
              <td>{s.hoTen}</td>
              <td>{s.sdt}</td>
              <td>{s.email}</td>
            </tr>)
          })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    DSSV: rootReducer.ReactFormReducer.DSSV,
  };
};

export default connect(mapStateToProps)(ListSinhVien);
