import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import {useDispatch} from 'react-redux';
import {borrarProductoAction} from '../actions/productosActions';

const Producto = ({producto}) => {

    //dispatch para ejecutar las acciones
    const dispatch= useDispatch();

    const confirmarEliminarProducto = id =>{
       
        //preguntar al usuario
        Swal.fire({
            title: 'Estas seguro?',
            text: "No se puede revertir la eliminacion!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Eliminado!',
                'El libro fue eliminado.',
                'success'
              )

              dispatch(borrarProductoAction(id));
            }
          })

        //confirmacion de sweetalert


        
        
    }
    return ( 
        <tr>
            <td>{producto.nombre}</td>
            <td><span className="font-weight-bold">${producto.precio}</span></td>
            <td className="acciones">
                <Link 
                    to={`/productos/editar/${producto.id}`}
                    className="btn btn-primary mr-2"
                >Editar
                </Link>

                <button 
                    className="btn-danger btn"
                    onClick={() => confirmarEliminarProducto(producto.id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default Producto;