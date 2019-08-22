import React, { useEffect, Fragment } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';

const Producto = () => {

    //mandar a llamar la accion principal para retornal los productos
    const dispatch = useDispatch();

    useEffect(() => {
        //productos cuando el componente este listo
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
    }, []);

    //acceder al state
    const loading = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    return (
        <Fragment>
            {error
                ? <div className="font-weigth-bold alert alert-danger text-center mb-4">Hubo un error...</div>

                : <Fragment>
                    <h2 className="text-center my-5">Listado de Productos</h2>

                    <table className="table table-striped">
                        <thead className="bg-primary table-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                    {loading ? 'Cargando...' : null}
                </Fragment>
            }

        </Fragment>
    );
}

export default Producto;