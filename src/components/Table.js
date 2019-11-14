import React from "react";
import TableHead from "./TableBody";
import TableBody from "./TableHead";
import styles from "./Table.module.css"

const TableFoot = ()=>{
    return (
    <tfoot className={styles.borders} >
        <tr>
        <td>Sum</td>
        <td>$180</td>
        </tr>
    </tfoot>
    );
}

const Table = ()=>{
    return (
    <table className={styles.container}>
    <TableHead />
    <TableBody />
    <TableFoot />
    </table>
    );
  }

export default Table;