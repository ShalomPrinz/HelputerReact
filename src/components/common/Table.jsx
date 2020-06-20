import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, data, scrollable }) => (
  <>
    <table className="table mb-0">
      <TableHeader columns={columns} />
    </table>
    {data.length !== 0 && (
      <div
        className={`table-responsive mt-0 ${
          scrollable && "border-bottom scrollable"
        }`}
      >
        <table className="table">
          <TableBody data={data} columns={columns} />
        </table>
      </div>
    )}
  </>
);

export default Table;
