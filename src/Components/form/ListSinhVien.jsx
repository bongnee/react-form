import React, { Component } from "react";
import { connect } from "react-redux";
import { editCreator } from "../../Redux/reducers/reactForm.action";
import { deleteCreator } from "../../Redux/reducers/reactForm.action";
import { searchCreator } from "../../Redux/reducers/reactForm.action";
class ListSinhVien extends Component {

  render() {
    console.log("DSSV", this.props.DSSV);
    
    return (
      <div className="mt-3">
        <form
          onChange={(event) => {
            let action = searchCreator(event.target.value);
            this.props.dispatch(action);
          }}
          className="form-inline my-2 my-lg-0"
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Mã SV"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        <table className="table">
          <thead
            className="bg-dark text-white"
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
            {(this.props.mangTK.length ? this.props.mangTK : this.props.DSSV).map((sv) => {
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
    mangTK: rootReducer.ReactFormReducer.mangTK,
  };
};
export default connect(mapStateToProps)(ListSinhVien);



// {this.props.DSSV.map((sv) => {
//   return (
//     <tr
//       style={{
//         textAlign: "center",
//       }}
//     >
//       <td>{sv.maSV}</td>
//       <td>{sv.hoTen}</td>
//       <td>{sv.sdt}</td>
//       <td>{sv.email}</td>
//       <td>
//         <button
//           className="btn btn-success mr-3"
//           onClick={() => {
//             this.props.dispatch(editCreator(sv));
//           }}
//         >
//           edit
//         </button>
//         <button
//           className="btn btn-warning"
//           onClick={() => {
//             this.props.dispatch(deleteCreator(sv));
//           }}
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// })}