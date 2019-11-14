import React from "react";


const TableFoot = ()=>{
    return (
    <tfoot>
        <tr>
        <td>Sum</td>
        <td>$180</td>
        </tr>
    </tfoot>
    );
}

const Table = ()=>{
    return (
    <table>
    <TableHead />
    <TableBody />
    <TableFoot />
    </table>
    );
  }

export default Table;