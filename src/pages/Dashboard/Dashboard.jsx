// Components
import { Cards } from '../../components/DashboardCards/Cards';
import { EntryTable } from '../../components/EntryTable/EntryTable';

// React Hooks
import { useEffect, useState } from 'react';

import styles from './Dashboard.module.css'

export function Dashboard(){

    const [data, setData] = useState([]);
    const [changeValues, setChangeValues] = useState('');
    const [alter, setAlter] = useState(false);

    function changeInputs(event){
        setChangeValues((prevValues) => ({
            ...prevValues,
            [event.target.name] : event.target.value
        }))
    }


    function handleSubmit(event){
        event.preventDefault();

        let registers = new Array();

        if (localStorage.hasOwnProperty("registers")) {
            registers = JSON.parse(localStorage.getItem("registers"));
        }

        registers.push(changeValues);

        localStorage.setItem("registers", JSON.stringify(registers));

        setAlter((alter) => {
            return !alter;
        })

        setChangeValues({
            description: '',
            value: '',
        })

    }

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("registers")));
    }, [alter])

    function deleteRegister(index){
        
        let register = JSON.parse(localStorage.getItem("registers"));
        register.splice(index, 1)
        localStorage.setItem('registers', JSON.stringify(register));

        setAlter((alter) => {
            return !alter;
        })

    }

    
    return(
        <div className={styles.dashboard}>
            <Cards data={data}/>

            <form className={styles.entryForm} onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="description">Descrição</label>
                    <input 
                        type="text" 
                        name="description"
                        onChange={changeInputs}
                        value={changeValues.description || ''}
                    />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="value">Valor</label>
                    <input 
                        type="number" 
                        name="value"
                        step='0.01'
                        onChange={changeInputs}
                        value={changeValues.value || ''}
                    />
                </div>

                <div className={styles.radioOptions} onChange={changeInputs} required>
                    <div className={styles.formRadioControl}>
                        <input type="radio" value="Entrada" name='type'/>
                        <label htmlFor="entry">Entrada</label>
                    </div>

                    <div className={styles.formRadioControl}>
                        <input type="radio" value="Saída" name='type'/>
                        <label htmlFor="withdraw">Saída</label>
                    </div>
                </div>

                <button className={styles.entryButton}>
                    LANÇAR
                </button>
            </form>

            {data &&
                data.length > 0 ? 
                    <EntryTable data={data} onRegisterDelete={deleteRegister}/>
                    : 
                    <h2 className={styles.noRegistersMessage}>Nenhum registro lançado</h2>
            }

        </div>
    );
};