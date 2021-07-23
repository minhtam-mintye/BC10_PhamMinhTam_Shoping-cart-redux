import React, { Component } from "react";

import { connect } from 'react-redux';

class Modal extends Component {

  renderTable = () => {
    const { listCart } = this.props;
    return listCart.map((item) => {
      return (
      <tr key={item.maSP}>
        <td>{item.maSP}</td>
        <td>{item.tenSP}</td>
        <td>
          <img src={item.hinhAnh} width={50} alt="" />
        </td>
        <td>
          <button onClick={() => {this.props.updateSL(item, false)}}>-</button> {item.soLuong} <button onClick={()=>{this.props.updateSL(item, true)}}>+</button>
        </td>
        <td>{item.donGia}</td>
        <td>{item.soLuong * item.donGia}</td>
        <td>
          <button className="btn btn-danger" onClick={()=>{this.props.deleteSanPham(item)}}>Delete</button>
        </td>
      </tr>)
    })
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSanPham: (sanpham) => {
      const action = {
        type: "DELETE",
        payload: sanpham,
      };
      dispatch(action);
    },
    updateSL: (sanpham,status) => {
      const action = {
        type: "UPDATE",
        payload: sanpham,
        status,
      }
      dispatch(action);
    }
  }
}

const mapStateToProps = (state)=>{
  return {
    listCart: state.sanphamReducer.listCart,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Modal);