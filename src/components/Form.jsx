import React from "react";
import { useState, useEffect, useRef } from "react";
import {useForm, Controller} from 'react-hook-form';
import Badge from "./Badge";
import rightBlue from "../assets/rightBlue.svg"
import upload from '../assets/upload.png'

export default function Chat() {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState(null);
    const {control, watch, register, handleSubmit, formState: {errors}} = useForm();

    const selectedFile = watch("logo");

    const onSubmit = async (formData) => {
        // Mock request:
        // 
        // try {
        //     const response = await fetch('SERVER_ENDPOINT', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     const data = await response.json();
        //     alert('Se envió el formulario');
        // } catch (error) {
        //     console.error('Error :', error);
        //     alert('Hubo un problema al enviar el formulario, intentalo de nuevo.');
        // }

        console.log(formData);
    }

    const handleFileUploadClick = () => {
        fileInputRef.current.click();
    }

    return <>
        <div className="flex flex-col items-center m-4 overflow-x-hidden">
            <form className="flex flex-col gap-8 md:w-[700px] lg:w-[800px]" onSubmit={handleSubmit(onSubmit)}> {/* handleSubmit validates inputs before calling on Submit */}
                <div className="flex flex-col px-4 sm:px-8 py-4 sm:py-8 gap-16 text-left text-darker-gray bg-light-gray rounded-[25px] ">
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
                            <div className="flex flex-col gap-1">
                                <p className="text-base font-medium">Logo de la empresa</p>
                                <div className="">
                                    <Controller
                                        name="logo"
                                        control={control}
                                        rules={{
                                            validate: {
                                                size: (files) => !files[0] || (files[0] && files[0].size < 10000000) || 'El archivo no debe superar los 10MB',
                                                type: (files) => !files[0] || (files[0] && ['image/jpeg', 'image/png', 'application/pdf'].includes(files[0].type)) || 'Debe ser JPG, PNG o PDF',
                                            }
                                        }}
                                        render={({ field: { onChange, onBlur, value, ref }, fieldState: {error} }) => (
                                            <>
                                            <div className="border-2 border-dashed border-dark-gray bg-white rounded-lg w-full p-6 flex items-center justify-center gap-8 text-center">
                                                <input
                                                    type="file"
                                                    ref={(e) => {
                                                        ref(e);
                                                        fileInputRef.current = e; // Assign to the useRef
                                                    }}
                                                    onChange={(e) => {
                                                        onChange(e.target.files);
                                                    }}
                                                    onBlur={onBlur}
                                                    hidden
                                                    accept=".jpg,.png,.pdf"
                                                />
                                                <img src={upload} alt="" />
                                                <div className="text-sm text-gray-500 grid gap-1">
                                                    <p className="text-base">Selecciona un archivo</p>
                                                    <p>Debe ser JPG, PNG o PDF</p>
                                                </div>
                                                <button type="button" onClick={handleFileUploadClick} className="bg-blue hover:bg-dark-blue active:bg-dark-blue text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 transition">
                                                    Upload
                                                </button>
                                            </div>
                                            {selectedFile && selectedFile.length > 0 && <p className="font-normal text-sm mt-1">Archivo seleccionado: <span className=" italic font-semibold">{selectedFile[0].name}</span></p>}
                                            </>
                                        )}
                                    />
                                </div>
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
                    </div>
                    {errors.terms && <p className=" text-[#DC2626] text-sm font-semibold">{errors.terms.message}</p>}
                    <button type="submit" className="bg-blue hover:bg-dark-blue active:bg-dark-blue text-white text-xl py-2 px-8 rounded-full flex items-center justify-center gap-2 transition">
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