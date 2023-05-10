import styles from './EntryTable.module.css';

export function EntryTable({ data, onRegisterDelete}){

    return (
        <div className={styles.entryTable}>
            <table>
                <tbody>
                    <tr className={styles.tableTitles}>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th className={styles.tableTypeTitle}>Tipo</th>
                        <th></th>
                    </tr>

                    {   
                        data ?
                            data.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className={styles.tableDescription} >{data.description}</td>
                                    
                                        {
                                            data.type == 'Entrada'
                                            ?   <>
                                                    <td className={styles.tableValuePositive} >R${data.value}</td>
                                                    <td className={styles.tableTypeIconPositive}>
                                                        <i className="bi bi-arrow-up-circle-fill"></i>
                                                    </td>
                                                </>
                                            :   <>
                                                    <td className={styles.tableValueNegative} >R${data.value}</td>
                                                    <td className={[styles.tableTypeIconNegative]}>
                                                        <i className="bi bi-arrow-down-circle-fill"></i>
                                                    </td>
                                                </>
                                        }

                                        <td className={styles.tableTrashIcon}>
                                            <button onClick={() => onRegisterDelete(index)}><i className="bi bi-trash-fill"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            <></>
                    }

                </tbody>
            </table>
        </div>
    );
};