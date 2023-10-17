import React, { Component } from "react";
import { connect } from "react-redux";
import { editCreator } from "../../Redux/reducers/reactForm.action";
import { deleteCreator } from "../../Redux/reducers/reactForm.action";
class ListSinhVien extends Component {
  // tableDSSV = () => {
  //   return this.props.stateRedux.DSSV.map((sv) => {
  //     let { maSV, hoTen, sdt, email } = sv;
  //     return (
  //       <tr
  //         key={maSV}
  //         style={{
  //           textAlign: "center",
  //         }}
  //       >
  //         <td>{maSV}</td>
  //         <td>{hoTen}</td>
  //         <td>{sdt}</td>
  //         <td>{email}</td>
  //         <td>
  //           <button
  //             className="btn btn-success mr-3"
  //             onClick={() => {
  //               this.props.dispatch(editCreator(sv));
  //             }}
  //           >
  //             edit
  //           </button>
  //           <button
  //             className="btn btn-warning"
  //             onClick={() => {
  //               this.props.dispatch(deleteCreator(sv));
  //             }}
  //           >
  //             Delete
  //           </button>
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

  render() {
    console.log("DSSV", this.props.DSSV);
    return (
      <div className="mt-3">
        <table className="table">
          <thead className="bg-dark text-white"
            style={{
              textAlign: "center",
            }}
          >
            <tr key={"trTable"}>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.DSSV.map((sv) => {
              
              return (
                <tr
                        
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <td>{sv.maSV}</td>
                        <td>{sv.hoTen}</td>
                        <td>{sv.sdt}</td>
                        <td>{sv.email}</td>
                        <td>
                          <button
                            className="btn btn-success mr-3"
                            onClick={() => {
                              this.props.dispatch(editCreator(sv));
                            }}
                          >
                            edit
                          </button>
                          <button
                            className="btn btn-warning"
                            onClick={() => {
                              this.props.dispatch(deleteCreator(sv));
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
              );
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

