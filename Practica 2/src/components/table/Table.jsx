const Table = ({ netIncomes }) => {

    const brandsArray = netIncomes.map((brand) =>
        <td>{brand.brand}</td>
    );

    const incomesArray = netIncomes.map((brand) =>
        <td>${brand.income}</td>
    );

    let incomeAverage = netIncomes
        .map((brand) => brand.income)
        .reduce((a, b) => a + b) / netIncomes.length

    incomeAverage = incomeAverage.toFixed(2);  
        
    return (
        <div>
            <table>
                <tr>
                    {brandsArray}
                </tr>
                <tr>
                    {incomesArray}
                </tr>
            </table>
            <p>El promedio de ingreso neto entre todas las marcas es ${incomeAverage}</p>
        </div>
    )
}

export default Table;