import styles from './Cards.module.css';

export function Cards({ data }){

    let sum = 0;

    if (data) {
        let entry = data.filter((data) => data.type === 'Entrada').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2);
        let withdraw = data.filter((data) => data.type === 'Saída').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2);

        sum = (entry - withdraw).toFixed(2);
    }

    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h4>Entradas</h4>
                    <span><i className="bi bi-arrow-up-circle-fill"></i></span>
                </div>
                <div>
                    <h2>R$
                        {
                            data ?
                                data.filter((data) => data.type === 'Entrada').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2)
                                :
                                '0.00'
                        }
                    </h2>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h4>Saídas</h4>
                    <span><i className="bi bi-arrow-down-circle-fill"></i></span>
                </div>
                <div>
                    <h2>R$
                        {
                            data ?
                                data.filter((data) => data.type === 'Saída').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2)
                                :
                                '0.00'
                        }
                    </h2>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h4>Total</h4>
                    <span><i className="bi bi-currency-dollar"></i></span>
                </div>
                <div>
                    <h2>R$
                        {
                            data ?
                                sum
                                :
                                '0.00'
                        }
                    </h2>
                </div>
            </div>
        </div>
    );
};