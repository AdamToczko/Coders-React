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

const Table = ({children})=>{
    
    return (
    <table className={styles.container}>
      {children}
    </table>
    );
  }



const TableTemplate = ()=>{
    return (
    <Table >
    <TableHead />
    <TableBody />
    <TableFoot />
    </Table>
    );
  }

export default TableTemplate;