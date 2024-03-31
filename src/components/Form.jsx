import React from "react";
import { useState, useEffect } from "react";
import {useForm} from 'react-hook-form';
import Badge from "./Badge";
import rightBlue from "../assets/rightBlue.svg"

export default function Chat() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (formData) => console.log(formData);

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
                                <p className="text-base font-medium">Nombre</p>
                                <input type="text" placeholder="Juan Perez" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                            </div>
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Teléfono</p>
                                    <input type="text" placeholder="+56 9 1234 5678" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Email</p>
                                    <input type="text" placeholder="ejemplo@gmail.com" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:max-w-[50%]">
                                <p className="text-base font-medium">Ubicación</p>
                                <input type="text" placeholder="Santiago, Chile" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                <p className="text-xs font-light">Ingresa tu ubicación con el formato 'Ciudad, País'</p>
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
                                    <p className="text-base font-medium">Áreas de especialización (separadas por comas)</p>
                                    <input type="text" placeholder="Ej.: Tecnología, Marketing, etc." className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                    <p className="text-xs font-light">Ingresa tus áreas de especialización separadas por coma</p>
                                    <div className="flex gap-2 space-x-2 mt-2">
                                    </div>
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-base font-medium">Años de experiencia</p>
                                    <input type="number" placeholder="Ej.: 8" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                    <p className="text-xs font-light">Ingresa únicamente el número de años</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow-[1] gap-1">
                                    <p className="text-base font-medium">Certificaciones profesionales (separadas por comas)</p>
                                    <input type="text" placeholder="Ej.: LinkedIn Recruiter, etc." className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                    <p className="text-xs font-light">Ingresa tus certificaciones y presiona la tecla enter</p>
                                    <div className="flex gap-2 space-x-2 mt-2">
                                    </div>
                                </div>
                                <div className="flex flex-col grow gap-1">
                                    <p className="text-base font-medium">Idiomas (separados por comas)</p>
                                    <input type="text" placeholder="Ej.: Inglés, Portugués, etc." className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                    <p className="text-xs font-light">Ingresa los idiomas que manejas y presiona la tecla enter</p>
                                    <div className="flex gap-2 space-x-2 mt-2">
                                    </div>
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
                                    <p className="text-sm font-medium">Tipo de empresa</p>
                                    <select name="tipoEmpresa" id="tipoEmpresa" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]">
                                        <option value="independiente">Independiente</option>
                                        <option value="option2">Opción 2</option>
                                        <option value="option3">Opción 3</option>
                                    </select>
                                    <p className="text-xs font-light">Selecciona una de las opciones</p>
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-sm font-medium">Nombre de la empresa</p>
                                    <input type="text" placeholder="Reclutadores CL" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                    <p className="text-xs font-light">Ingresa el nombre de tu agencia</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col grow-[1] gap-1 justify-start">
                                    <p className="text-sm font-medium">Tamaño de la empresa</p>
                                    <select name="tamañoEmpresa" id="tamañoEmpresa" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]">
                                        <option value="0-10">0 - 10 empleados</option>
                                        <option value="option2">Opción 2</option>
                                        <option value="option3">Opción 3</option>
                                    </select>
                                    <p className="text-xs font-light">Selecciona una de las opciones</p>
                                </div>
                                <div className="flex flex-col grow gap-1 justify-start">
                                    <p className="text-sm font-medium" >Ubicación</p>
                                    <input type="text" placeholder="Cuentanos más sobre tu empresa" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                    <p className="text-xs font-light">Ingresa la ubicación de la sucursal principal</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:max-w-[50%]">
                                <p className="text-sm font-medium">Paises Donde Opera</p>
                                {/* replace input */}
                                <input type="text" placeholder="Ej.: Perú, Ecuador, etc." className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                <p className="text-xs font-light">Ingresa los paises donde operan separados por coma</p>
                                <div className="flex space-x-2 mt-2">
                                    {/* <Badge onClick={handleBadgeDel} name="Chile" color="yellow" /> */}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium">Descripción de la empresa</p>
                                <textarea name="textarea" placeholder="Ingresa una descripción" id="descripcion" cols="30" rows="5" className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]"></textarea>
                                <p className="text-xs font-light">Ingresa una breve descripción de la empresa</p>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="competencias y herramientas" className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold" id="competenciasHerramientas">
                            Competencias y Herramientas
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium">Herramientas que Utiliza</p>
                                <input type="text" placeholder="Ejemplo: Pruebas psicométricas, análisis de CV, etc." className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]"  />
                                <p className="text-xs font-light">Ingresa las herramientas que utilizas separadas por comas</p>
                                <div className="flex space-x-2 mt-2">
                                    {/* <Badge onClick={handleBadgeDel} color="blue" name="Metodología STAR" /> */}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium">Metodologías de Evaluación de Candidatos</p>
                                {/* replace input */}
                                <input type="text" placeholder="Ejemplo: Laborum, trabajando.com, etc." className="bg-white border-dark-gray placeholder-dark-gray text-darker-gray border-2 px-4 py-2 rounded-[20px]" />
                                {/* <Input placeholder="Ejemplo: Laborum, trabajando.com, etc." /> */}
                                <p className="text-xs font-light">Ingresa las metodologías que utilizas separadas por comas</p>
                                <div className="flex space-x-2 mt-2">
                                    {/* <Badge onClick={handleBadgeDel} color="yellow" name="LinkedIn Recruiter" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col justify-center gap-4 mx-4 text-darker-gray">
                    <div className="flex gap-1">
                        <input type="checkbox" id="terms" className="" />
                        {/* <Checkbox id="terms" /> */}
                        <label className="ml-2 text-sm font-medium" htmlFor="terms">
                            Estoy de acuerdo con las respuestas emitidas por medio de este formulario.
                        </label>
                    </div>
                    <button className="bg-blue active:bg-dark-blue text-white text-xl py-2 px-8 rounded-full flex items-center justify-center gap-2">
                        Enviar formulario
                        <div className="bg-yellow rounded-full">
                            <img src={rightBlue} alt="" />
                        </div>
                    </button>
                </div>
                {/* <Button className="mt-4">Enviar formulario</Button> */}
            </form>
        </div>
    </>
}