import React, { Component } from "react";
import SanPham from "./san-pham";
import {connect} from "react-redux";

class DanhSachSanPham extends Component {

  renderListProduct = () => {
    console.log(this.props.listProduct);
    return this.props.listProduct.map((product)=>{
      return <SanPham 
      key={product.maSP}
      product={product}
      />
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProduct: state.sanphamReducer.listProduct,
  }
}

export default connect(mapStateToProps, null) (DanhSachSanPham);