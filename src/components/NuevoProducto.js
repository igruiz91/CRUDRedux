import React, { useState } from 'react';

//Redux
import { crearNuevoProductoAction } from '../actions/productosActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';
import { useDispatch, useSelector } from 'react-redux';

const NuevoProducto = ({ history }) => {

    //state
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');

    //crear nuevo producto
    const dispatch = useDispatch();
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto))
    const validarFormulario = () => dispatch(validarFormularioAction());
    const exitoValidacion = () => dispatch(validacionExito());
    const errorValidacion = () => dispatch(validacionError());

    //obtener los datos del state
    const error = useSelector((state) => state.error.error)

    //Agregar nuevo producto
    const nuevoProducto = e => {
        e.preventDefault();
        validarFormulario();

        //validar el formulario
        if (nombre.trim() === '' || precio.trim() === '') {
            errorValidacion();
            return;
        }

        //si pasa la validacion
        exitoValidacion();

        agregarProducto({
            nombre, precio
        });

        //crear el nuevo producto
        guardarNombre('');
        guardarPrecio('');


        //redireccionar
        history.push('/');


    }
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={nuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Libro"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Precio Libro"
                                    value={precio}
                                    onChange={e => guardarPrecio(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;