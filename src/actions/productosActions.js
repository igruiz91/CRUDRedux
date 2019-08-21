import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// crear un nuevo producto -- Funcion principal
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch( nuevoProducto());

        //insertar en la Api
        clienteAxios.post('/librsos', producto)
            .then(respuesta =>{
                console.log(respuesta);

                //si se inserta corrctamente
                dispatch(agregarProductoExito(producto))
            })
            .catch(error => {
                console.log(error);

                //si hay un error 
                dispatch(agregarProductoError(error));
            })


        dispatch( agregarProductoExito(producto));
    }
}
export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

export const agregarProductoError = error => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
})