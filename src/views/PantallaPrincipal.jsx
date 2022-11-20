import React from 'react'
import { Formik, ErrorMessage } from "formik";
import "../style/App.css";
import {useNavigate} from "react-router-dom";
import TypeError from '../Components/TypeError';



const PantallaPrincipal = () => {
    
    const Navigate = useNavigate();
    const idTicket = Date.now()
    const handleSubmit = (values) => {
        let getUsuarios = []
        if (localStorage.getItem("@storage_user")) {
            getUsuarios = JSON.parse(localStorage.getItem('@storage_user'));
            getUsuarios.push(values);

            localStorage.setItem('@storage_user', JSON.stringify(getUsuarios));
            Navigate('/casos');
            return
        }
        getUsuarios.push(values);
        localStorage.setItem('@storage_user', JSON.stringify(getUsuarios));

        Navigate('/casos')
    }
    return (
        <Formik
            initialValues={{ fullName: '', address: '', tell: '', fecha:Date('dd' / 'mm' / 'yy'), razon: '', ticket: idTicket }}
            onSubmit={values => handleSubmit(values)}
            validate={values => {
                const errors = {};
                if (!values.fullName) {
                    errors.fullName = 'Escribe tu nombre completo';
                } else if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(values.fullName)) {
                    errors.fullName = 'Primera letra mayuscula';
                }

                if (!values.address) {
                    errors.address = 'Escribe tu direccion';
                }

                if (!values.tell) {
                    errors.tell = 'Escribe tu número de telefóno';
                }
                if (!values.razon) {
                    errors.razon = 'Escribe cual es tu caso';
                }


                return errors;
            }}>
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <div className="formConatiner d-flex justify-content-center align-items-center">
                    <form className="w-50 formularioREG" onSubmit={handleSubmit}>
                        <div className="contenedorREG">
                            <h2 className="text-center font-primary">Completa el Formulario</h2>
                            <div className="mb-3">
                                <label className="form-label font-main">Nombre Completo</label>
                                <input
                                    className="form-control  input"
                                    name="fullName"
                                    type='text'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.fullName}
                                />
                                <ErrorMessage name="fullName" component={() => <TypeError msg={errors.fullName} />} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-main">Direccion</label>
                                <input
                                    className="form-control input"
                                    name="address"
                                    type='text'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address}
                                />
                                <ErrorMessage name="address" component={() => <TypeError msg={errors.address} />} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-main">Numero de Telefono</label>
                                <input
                                    className="form-control  input"
                                    name="tell"
                                    type='number'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.tell}
                                />
                                <ErrorMessage name="tell" component={() => <TypeError msg={errors.tell} />} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-main">Fecha</label>
                                <input
                                    className="form-control input"
                                    name="fecha"
                                    type='text'
                                    onChange={handleChange}
                                    value={values.fecha}
                                    readOnly
                                    disabled
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-main">Escribenos tu Caso:</label>
                                <textarea                                     
                                    className="form-control  input"
                                    name="razon"
                                    placeholder="Escribe tu caso aqui..."
                                    row="10"
                                    cols="30"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.razon} ></textarea>
                                <ErrorMessage name="razon" component={() => <TypeError msg={errors.razon} />} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-main">N° del ticket</label>
                                <input
                                    className="form-control  input"
                                    name="ticket"
                                    type='text'
                                    onChange={handleChange}
                                    value={idTicket}
                                    readOnly
                                    disabled
                                />

                            </div>
                            <button type="submit" className="btn btn-secondary w-100 font-main">Enviar</button>
                            <button className="btn btn-info w-100 font-main mt-2 mb-3" onClick={() => Navigate('/casos')}>Ver casos</button>
                        </div>
                        
                    </form>
                </div>

            )}
        </Formik>
    )
}
export default PantallaPrincipal


