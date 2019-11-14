import React from "react";
import styles from "./Table.module.css"

const TableHead = () =>{
    return (
    <thead>
    <tr className={styles.borders} >
        <th>Month</th>
        <th>Savings</th>
    </tr>
    </thead>
    );
}

export default TableHead;