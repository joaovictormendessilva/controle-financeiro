import styles from './Cards.module.css';

export function Cards({ data }){

    let sum = 0;

    if (data) {
        let entry = data.filter((data) => data.type === 'Entrada').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2);
        let withdraw = data.filter((data) => data.type === 'Saída').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2);

        sum = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(entry - withdraw);
    }

    function totalEntry(){
        let entry = data.filter((data) => data.type === 'Entrada').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2);

        const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(entry));
        return formatted
    }

    function totalWithdraw(){
        let withDraw = data.filter((data) => data.type === 'Saída').reduce((total, valor) => total + parseFloat(valor.value), 0).toFixed(2);

        const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(withDraw));
        return formatted
    }

    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h4>Entradas</h4>
                    <span><i className="bi bi-arrow-up-circle-fill"></i></span>
                </div>
                <div>
                    <h2>
                        {
                            data ?
                                totalEntry()
                                :
                                'R$ 0,00'
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
                    <h2>
                        {
                            data ?
                                totalWithdraw()
                                :
                                'R$ 0,00'
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
                    <h2>
                        {
                            data ?
                                sum
                                :
                                'R$ 0,00'
                        }
                    </h2>
                </div>
            </div>
        </div>
    );
};