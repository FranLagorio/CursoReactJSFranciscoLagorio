
export const CardComponent = ( { ruta = "./images/mateImperial.jpg" } ) => {
    return (
        
            <div className="card" style={{"width": "400px", "margin": "10px"}} >
                    <img className="card-img-top" src={ruta}  alt='imagenMate' />
                    <div className="card-body">
                        <h5 className="card-title">Mate Imperial</h5>
                        <p className="card-text">$4900</p>
                        <a className="btn btn-primary" href="/">Comprar</a>
                    </div>
            </div>


                    
    )
}

        {/* <div className="card" style={{"width": "400px", "margin": "10px"}} >
        <img className="card-img-top" src={props.ruta || "/images/mateImperial.jpg" }  alt='imagenMate' />
        <div className="card-body">
            <h5 className="card-title">Mate Imperial</h5>
            <p className="card-text">$4900</p>
            <a className="btn btn-primary" href="/">Comprar</a>
        </div>
        </div> */}