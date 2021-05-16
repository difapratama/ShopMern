import React, { Fragment, useState, useEffect } from "react";

import Metadata from "../layout/MetaData";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { newProduct, clearErrors } from "../../actions/productActions";
import { NEW_PRODUCT_RESET } from "../../constants/productConstans";

const updateProduct = () => {
  return <div></div>;
};

export default updateProduct;
