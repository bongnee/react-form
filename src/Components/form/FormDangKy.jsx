import React, { Component } from "react";
import { flushSync } from "react-dom";


export default class FormDangKy extends Component {
 state = {
  value: {
    ma: '',
    hoTen: '',
    dt: '',
    email:'',
  },
  error: {
    ma: '',
    hoTen: '',
    dt: '',
    email:'',
  },
  touch: {
    ma: '',
    hoTen: '',
    dt: '',
    email:'',
  },

 }
 handleValidate = () => {
  const newError = {...this.state.error};
  const {value} = this.state;
  for (let prop in value){
    switch (prop) {
      case "ma":{
        newError[prop] = '';
        const isExist = this.props.listSV.find(
          (sv) => +sv.ma === Number(value[prop])
        );
        const isNoEdit = !this.props.svEdit;

        if(isExist && isNoEdit){
          newError[prop] = 'Mã SV đã tồn tại';
        }

        if (value[prop].length ===0){
          newError[prop] ='không được bỏ trống';
        }
        break;
      }
      case "hoTen":{
        newError[prop] = '';
        const REGEX_TEXT = /^[A-Z][a-z]*/;
        if(!REGEX_TEXT.test(value[prop])){
          newError[prop] = "phải là chữ";
        }

        if (value[prop].length ===0){
          newError[prop] ='không được bỏ trống';
        }
        break;
      }
      case "dt":{
        newError[prop] = '';
        const REGEX_NUMBER = /^\d+$/;
        if(!REGEX_NUMBER.test(value[prop])){
          newError[prop] = "phải là số";
        }

        if (value[prop].length ===0){
          newError[prop] ='không được bỏ trống';
        }
        break;
      }
      case "email":{
        newError[prop] = '';
        const REGEX_EMAIL = /\S+@\S+\.\S+/;
        if(!REGEX_EMAIL.test(value[prop])){
          newError[prop] = "email không đúng định dạng";
        }

        if (value[prop].length ===0){
          newError[prop] ='không được bỏ trống';
        }
        break;
      }
    }
  }
  this.setState({
    error: newError,
  });

  return newError;
 }
 handleChange = (event) =>{
  const {target} = event;
  const {value, name} = target;

  flushSync(() => {
    this.setState({
      value: {
        ...this.state.value,
        [name] : value,
      }
    })
  })
  this.handleValidate();
 }

 handleBlur = (event) => {
  const {name} = event.target;
  this.setState ({
    touch: {
      ...this.state.touch,
      [name]: true,
    }
  })

  this.handleValidate();
 }

 handleSubmit = (event) => {
  event.preventDefault();

  this.setState({
    touch: {
      ma: '',
      hoTen: '',
      dt: '',
      email:'',
    },
  })

  const newError = this.handleValidate();

  const ready = Object.values(newError).every((i) => i.length  === 0);
  if(ready === false) return;
 }


  render() {
    return (
      <div className="mt-4 p-4">
        <h2 className="bg-dark text-white ">Thông tin sinh viên</h2>
        <form>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="ma">Mã SV</label>
                <input type="text" className="form-control" id="ma"
                onBlur={this.handleBlur}
                value={this.state.value.ma}
                onChange={this.handleChange}/>
                <p className="text-danger"></p>
              </div>
              <div className="mb-3">
                <label htmlFor="dt">Số điện thoại</label>
                <input type="number" className="form-control" id="dt"
                onBlur={this.handleBlur}
                value={this.state.value.dt}
                onChange={this.handleChange}
                />
                <p className="text-danger"></p>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="hoTen">Họ tên</label>
                <input type="text" className="form-control" id="hoTen"
                onBlur={this.handleBlur}
                value={this.state.value.hoTen}
                onChange={this.handleChange} />
                <p className="text-danger"></p>
              </div>
              <div className="mb-3">
                <label htmlFor="dt">Email</label>
                <input type="email" className="form-control" id="email"
                onBlur={this.handleBlur}
                value={this.state.value.email}
                onChange={this.handleChange} />
                <p className="text-danger"></p>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Thêm sinh viên
          </button>
        </form>
      </div>
    );
  }
}
