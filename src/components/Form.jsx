import React from "react";
import { useState, useEffect } from "react";
import {useForm} from 'react-hook-form';
import Badge from "./Badge";
import rightBlue from "../assets/rightBlue.svg"

export default function Chat() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (formData) => {
        console.log('onSubmit function executed');
        console.log(formData);
    }

    {/* TODO form validation and submission with react-hook-form */}

    return <>
        <div className="flex flex-col items-center m-4 overflow-x-hidden">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}> {/* handleSubmit validates inputs before calling on Submit */}
                <div className="flex flex-col px-4 sm:px-8 py-4 sm:py-8 gap-16 max-w-[800px] text-left text-darker-gray bg-light-gray rounded-[25px] ">
                    <section aria-labelledby="personal-information-section" className="flex flex-col gap-8"> {/* Accesibility */}
                        <h2 className="text-2xl font-semibold" id="personal-information-section">
                            Información Personal
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-base font-medium">Nombre<span className="text-[#DC2626]">*</span></p>
                                <input type="text" 
                                       placeholder="Ej.: Juan Perez" 
                                       className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]"
                                       {...register('name', {
                                        required: "Campo requerido"
                                       })}
                                />
                                {errors.name && <p className=" text-[#DC2626] text-sm font-semibold">{errors.name.message}</p>}
                            </div>
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Teléfono<span className="text-[#DC2626]">*</span></p>
                                    <input type="text" 
                                           placeholder="Ej.: +56912345678" 
                                           className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                           {...register('phone', {
                                            required: {
                                                value: true,
                                                message: 'Campo requerido'
                                            }
                                           })}
                                    />
                                    {errors.phone && <p className=" text-[#DC2626] text-sm font-semibold">{errors.phone.message}</p>}
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Email</p>
                                    <input type="text" 
                                           placeholder="Ej.: juan@gmail.com" 
                                           className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                           {...register('email', {
                                            required: {
                                                value: false
                                            }
                                           })}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:max-w-[50%]">
                                <p className="text-base font-medium">Ubicación<span className="text-[#DC2626]">*</span></p>
                                <input type="text" 
                                       placeholder="Ej.: Santiago, Chile" 
                                       className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                       {...register('location', {
                                        required: {
                                            value: true,
                                            message: 'Campo requerido'
                                        }
                                       })}
                                />
                                <p className="text-xs font-light">Ingresa tu ubicación con el formato 'Ciudad, País'</p>
                                {errors.location && <p className=" text-[#DC2626] text-sm font-semibold">{errors.location.message}</p>}
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="professional-information-section" className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold" id="professional-information-section">
                            Información Profesional
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Áreas de especialización<span className="text-[#DC2626]">*</span></p>
                                    <input type="text" 
                                           placeholder="Ej.: Tecnología, Marketing, etc." 
                                           className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                           {...register('specialization', {
                                            required: {
                                                value: true, 
                                                message: 'Campo requerido'
                                            }
                                           })}
                                    />
                                    <p className="text-xs font-light">Ingresa tus áreas separadas por coma</p>
                                    {errors.specialization && <p className=" text-[#DC2626] text-sm font-semibold">{errors.specialization.message}</p>}
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Años de experiencia<span className="text-[#DC2626]">*</span></p>
                                    <input type="number" 
                                           placeholder="Ej.: 8" 
                                           className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                           {...register('experience', {
                                            required: {
                                                value: true, 
                                                message: 'Campo requerido'
                                            }
                                           })}
                                    />
                                    <p className="text-xs font-light">Ingresa únicamente números</p>
                                    {errors.experience && <p className=" text-[#DC2626] text-sm font-semibold">{errors.experience.message}</p>}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow-[1] gap-1">
                                    <p className="text-base font-medium">Certificaciones profesionales</p>
                                    <input type="text" 
                                           placeholder="Ej.: LinkedIn Recruiter, etc." 
                                           className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                           {...register('certifications', {
                                            required: {
                                                value: false,
                                            }
                                           })}
                                    />
                                    <p className="text-xs font-light">Ingresa tus certificaciones separadas por coma</p>
                                </div>
                                <div className="flex flex-col grow gap-1">
                                    <p className="text-base font-medium">Idiomas<span className="text-[#DC2626]">*</span></p>
                                    <input type="text" 
                                           placeholder="Ej.: Inglés, Portugués, etc." 
                                           className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                           {...register('languages', {
                                            required: {
                                                value: true, 
                                                message: 'Campo requerido'
                                            }
                                           })}
                                           />
                                    <p className="text-xs font-light">Ingresa idiomas separados por coma</p>
                                    {errors.languages && <p className=" text-[#DC2626] text-sm font-semibold">{errors.languages.message}</p>}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="company-information-section" className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold" id="company-information-section">
                            Información de la Empresa de Reclutamiento
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Tipo de empresa<span className="text-[#DC2626]">*</span></p>
                                    <select name="companyType" 
                                            id="companyType" 
                                            defaultValue={'placeholder'}
                                            className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]"
                                            {...register('companyType', {
                                                required: {
                                                    value: true, 
                                                    message: 'Campo requerido'
                                                }
                                            })}
                                    >
                                        <option value="placeholder" disabled>Elige una opción</option>
                                        <option value="independiente">Independiente</option>
                                        <option value="option2">Opción 2</option>
                                        <option value="option3">Opción 3</option>
                                    </select>
                                    {errors.companyType && <p className=" text-[#DC2626] text-sm font-semibold">{errors.companyType.message}</p>}
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Nombre de la agencia</p>
                                    <input type="text" 
                                            placeholder="Ej.: Reclutadores CL" 
                                            className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                            

                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow-[1] gap-1 justify-start">
                                    <p className="text-base font-medium">Tamaño de la empresa</p>
                                    <select name="companySize" 
                                            id="companySize" 
                                            defaultValue={'placeholder'}
                                            className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]"
                                            {...register('companySize', {
                                                required: {
                                                    value: false, 
                                                }
                                            })}
                                    >
                                        <option value="placeholder" disabled>Elige una opción</option>
                                        <option value="0-10">0 - 10 empleados</option>
                                        <option value="option2">Opción 2</option>
                                        <option value="option3">Opción 3</option>
                                    </select>
                                    {/* <p className="text-xs font-light">Selecciona una de las opciones</p> */}
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium" >Ubicación</p>
                                    <input type="text" 
                                            placeholder="Ej.: Santiago, Chile" 
                                            className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                            {...register('companyLocation', {
                                                required: {
                                                    value: false, 
                                                }
                                            })}
                                    />
                                    <p className="text-xs font-light">Ingresa la ubicación de la sucursal principal</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:max-w-[50%]">
                                <p className="text-base font-medium">Paises Donde Opera</p>
                                {/* replace input */}
                                <input type="text" 
                                        placeholder="Ej.: Perú, Ecuador, etc." 
                                        className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                        {...register('countriesOfOperation', {
                                            required: {
                                                value: false, 
                                            }
                                        })}
                                />
                                <p className="text-xs font-light">Ingresa los paises donde operan separados por coma</p>
                                <div className="flex space-x-2 mt-2">
                                    {/* <Badge onClick={handleBadgeDel} name="Chile" color="yellow" /> */}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-base font-medium">Descripción de la empresa</p>
                                <textarea name="textarea" 
                                            placeholder="Reclutadores CL es una empresa que..." 
                                            id="descripcion" 
                                            cols="30" 
                                            rows="5" 
                                            className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]"
                                            {...register('companyDescription', {
                                                required: {
                                                    value: false, 
                                                }
                                            })}
                                ></textarea>
                                <p className="text-xs font-light">Ingresa una breve descripción de la empresa</p>
                            </div>
                            <div>
                                logo
                                {/* {...register('companyLogo', {
                                                required: {
                                                    value: false, 
                                                }
                                            })} */}
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="competencias y herramientas" className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold" id="competenciasHerramientas">
                            Competencias y Herramientas
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-base font-medium">Herramientas que Utiliza</p>
                                <input type="text" 
                                        placeholder="Ej.: Pruebas psicométricas, análisis de CV, etc." 
                                        className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]"  
                                        {...register('tools', {
                                            required: {
                                                value: false, 
                                            }
                                        })}
                                />
                                <p className="text-xs font-light">Ingresa las herramientas que utilizas separadas por comas</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-base font-medium">Metodologías de Evaluación de Candidatos</p>
                                {/* replace input */}
                                <input type="text" 
                                        placeholder="Ej.: Laborum, trabajando.com, etc." 
                                        className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" 
                                        {...register('methodologies', {
                                            required: {
                                                value: false, 
                                            }
                                        })}
                                />
                                {/* <Input placeholder="Ejemplo: Laborum, trabajando.com, etc." /> */}
                                <p className="text-xs font-light">Ingresa las metodologías que utilizas separadas por comas</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col justify-center gap-4 mx-4 text-darker-gray">
                    <div className="flex gap-1">
                        <input type="checkbox" 
                                id="terms" 
                                className="" 
                                {...register('terms', {
                                    required: {
                                        value: true,
                                        message: "Se deben aceptar los términos y condiciones" 
                                    }
                                })}
                        />
                        {/* <Checkbox id="terms" /> */}
                        <label className="ml-2 text-sm font-medium" htmlFor="terms">
                            Estoy de acuerdo con las respuestas emitidas por medio de este formulario.
                        </label>
                        {errors.terms && <p className=" text-[#DC2626] text-sm font-semibold">{errors.terms.message}</p>}
                    </div>
                    <button type="submit" className="bg-blue active:bg-dark-blue text-white text-xl py-2 px-8 rounded-full flex items-center justify-center gap-2">
                        Enviar formulario
                        <div className="bg-yellow rounded-full">
                            <img src={rightBlue} alt="" />
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </>
}