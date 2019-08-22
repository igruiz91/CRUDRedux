import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// crear un nuevo producto -- Funcion principal
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(nuevoProducto());

        //insertar en la Api
        clienteAxios.post('/libro', producto)
            .then(respuesta => {
                console.log(respuesta);

                //si se inserta corrctamente
                dispatch(agregarProductoExito(producto));
            })
            .catch(error => {
                console.log(error);

                //si hay un error 
                dispatch(agregarProductoError());
            });
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
});

//obtener listado de productos(consultar api)
export function obtenerProductosAction() {
    return (dispatch) => {
        dispatch(obtenerProductosComienzo());

        //consultar la API
        clienteAxios.get('/libros')
            .then(respuesta => {
                //console.log(respuesta);
                dispatch(descargaProductosExitosa(respuesta.data));
            }).catch(error => {
                console.log(error);
                dispatch(descargaProductosError());
            })
    }
}

export const obtenerProductosComienzo = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
});

export const descargaProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
});

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
})
