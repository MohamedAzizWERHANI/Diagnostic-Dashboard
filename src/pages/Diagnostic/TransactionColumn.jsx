import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

const toLowerCase1 = str => {
    return (
      str === "" || str === undefined ? "" : str.toLowerCase()
    );
  };

const Ratios = (cell) => {
    return (
        <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
    );
};

const _2020 = (cell) => {
    return cell.value ? cell.value : '';
};

const _2021 = (cell) => {
    return cell.value ? cell.value : '';
};

const _2022 = (cell) => {
    return cell.value ? cell.value : '';
};
const _2019 = (cell) => {
  return cell.value ? cell.value : '';
};
const _2023 = (cell) => {
  return cell.value ? cell.value : '';
};


const PaymentStatus = (cell) => {
    return (
      <Badge pill color={(cell.value === "Paid" ? "primary" : "danger" && cell.value === "Refund" ? "secondary" : "orange")}>{cell.value}</Badge>
    )
};

export {
    Ratios,
  _2020,
    _2021,
    _2022,
    PaymentStatus,
    _2019,
    _2023,
};
