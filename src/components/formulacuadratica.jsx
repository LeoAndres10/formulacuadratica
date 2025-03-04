import UseFormula from "../hooks/UseFormula";

const Formula = () => {

    const {
        valorA,
        ValorB,
        ValorC,
        setValorA,
        setValorB,
        setValorC,
        Resultado,
        Resultado2,
        Formula,
        Limpiar
    } = UseFormula()



    return (

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese valor de a:</label>
                    <input type="number" className="form-control" value={valorA} onChange={(e) => setValorA(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese valor de b:</label>
                    <input type="number" className="form-control" value={ValorB} onChange={(e) => setValorB(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese valor de c:</label>
                    <input type="number" className="form-control" value={ValorC} onChange={(e) => setValorC(e.target.value)} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Resultado 1:</label>
                    <input type="number" className="form-control" value={Resultado} readOnly />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Resultado 2:</label>
                    <input type="number" className="form-control" value={Resultado2} readOnly />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-3 mb-3">
                    <button className="btn btn-success" onClick={Formula} >Calcular</button>
                </div>
                <div className="col-3 mb-3">
                    <button className="btn btn-danger" onClick={Limpiar} >Limpiar</button>
                </div>
            </div>
        </div>
    )
    }


export default Formula;