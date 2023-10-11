import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import ListSinhVien from './ListSinhVien'

export default class form extends Component {
  render() {
    return (
      <div className='container'>
        <FormDangKy/>
        <ListSinhVien/>
        
      </div>
    )
  }
}
