import React from "react";
import { useState, useEffect } from "react";

export default function Chat() {
    // hooks + helper function

    return <>
        <div className="m-16 text-black">
            <form action="">
                {/* Placeholder */}
                Form
            </form>
            <form className="space-y-8">
                <section aria-labelledby="personal-information-section">
                    <h2 className="text-xl font-semibold" id="personal-information-section">
                        Información Personal
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <p className="text-md font-medium tracking-wide">Nombre</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="Juan Pérez" /> */}
                            <p className="text-sm font-light">Descripción</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Teléfono</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="+56 9 1234 56789" /> */}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Email</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="ejemplo@gmail.com" type="email" /> */}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Dirección</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="Santiago, Chile" /> */}
                        </div>
                    </div>
                </section>
                <section aria-labelledby="professional-information-section">
                    <h2 className="text-xl font-semibold" id="professional-information-section">
                        Información Profesional
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Competencias (separadas por comas)</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="Ejemplo: Marketing, Tecnología, etc." /> */}
                            <div className="flex space-x-2 mt-2">
                                chip 1{" "}
                                chip 2{" "}
                                chip 3
                                {/* <Badge variant="secondary">Marketing digital x</Badge>
                                <Badge variant="secondary">SEO x</Badge>
                                <Badge variant="secondary">Gestión de Redes Sociales x</Badge> */}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Años de experiencia</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="8 años" /> */}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Herramientas (separadas por comas)</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="Ejemplo: Linkedin Recruiter, etc." /> */}
                            <div className="flex space-x-2 mt-2">
                                chip 1{" "}
                                chip 2{" "}
                                chip 3
                                {/* <Badge variant="secondary">Google Analytics x</Badge>
                                <Badge variant="secondary">Hubspot x</Badge> */}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Idiomas (separados por comas)</p>
                            select input
                            {/* <Select>
                            <SelectTrigger id="languages">
                                <SelectValue placeholder="Ejemplo: Portugués, etc." />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="portuguese">Portugués</SelectItem>
                                <SelectItem value="english">Inglés</SelectItem>
                                <SelectItem value="spanish">Español</SelectItem>
                            </SelectContent>
                            </Select> */}
                            <div className="flex space-x-2 mt-2">
                                chip 1{" "}
                                chip 2{" "}
                                {/* <Badge variant="secondary">Inglés x</Badge>
                                <Badge variant="secondary">Español x</Badge> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section aria-labelledby="company-information-section">
                    <h2 className="text-xl font-semibold" id="company-information-section">
                        Información de la Empresa de Reclutamiento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Tipo de empresa</p>
                            select input
                            {/* <Select>
                            <SelectTrigger id="company-type">
                                <SelectValue placeholder="Independiente" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="independent">Independiente</SelectItem>
                                <SelectItem value="agency">Agencia</SelectItem>
                            </SelectContent>
                            </Select> */}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Nombre de la empresa</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="Reclutadores CL" /> */}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Tamaño de la empresa</p>
                            select input
                            {/* <Select>
                            <SelectTrigger id="company-size">
                                <SelectValue placeholder="0-10 empleados" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="0-10">0-10 empleados</SelectItem>
                                <SelectItem value="11-50">11-50 empleados</SelectItem>
                            </SelectContent>
                            </Select> */}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Ubicación</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="Santiago, Chile" /> */}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Países en los que recluta (separados por comas)</p>
                            {/* replace input */}
                            <input type="text" />
                            {/* <Input placeholder="Ejemplo: Perú, Ecuador, etc." /> */}
                            <div className="flex space-x-2 mt-2">
                                chip 1{" "}
                                chip 2{" "}
                                chip 3
                                {/* <Badge variant="secondary">Chile x</Badge>
                                <Badge variant="secondary">Argentina x</Badge>
                                <Badge variant="secondary">México x</Badge> */}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-wide">Descripción de la empresa</p>
                            <textarea name="textarea" placeholder="textarea" id="" cols="30" rows="10"></textarea>
                            {/* <Textarea placeholder="Recruitment CL ofrece soluciones ágiles en la unión de talentos y empresas, destacando por su enfoque personalizado y su eficaz red profesional en múltiples industrias." /> */}
                        </div>
                    </div>
                </section>
                <section aria-labelledby="skills-and-tools-section">
                    <h2 className="text-xl font-semibold" id="skills-and-tools-section">
                    Competencias y Herramientas
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium tracking-wide">Sitios web de reclutamiento (separados por comas)</p>
                        {/* replace input */}
                        <input type="text" />
                        {/* <Input placeholder="Ejemplo: Laborum, trabajando.com, etc." /> */}
                        <div className="flex space-x-2 mt-2">
                            chip 1{" "}
                            chip 2{" "}
                            chip 3
                            {/* <Badge variant="secondary">LinkedIn Recruiter x</Badge>
                            <Badge variant="secondary">Indeed x</Badge>
                            <Badge variant="secondary">Chile trabajos x</Badge>
                            <Badge variant="secondary">Get on Board x</Badge> */}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-medium tracking-wide">Herramientas de reclutamiento (separadas por comas)</p>
                        <input placeholder="Ejemplo: Pruebas psicométricas, análisis de CV, etc." />
                        <div className="flex space-x-2 mt-2">
                            chip{" "}
                            chip{" "}
                            {/* <Badge variant="secondary">Entrevistas por competencias x</Badge> */}
                            {/* <Badge variant="secondary">Metodología STAR x</Badge> */}
                        </div>
                    </div>
                    </div>
                </section>
                <div className="flex items-center mt-4">
                    checkbox
                    {/* <Checkbox id="terms" /> */}
                    <label className="ml-2 text-sm font-medium" htmlFor="terms">
                    Estoy de acuerdo con las respuestas emitidas por medio de este formulario.
                    </label>
                </div>
                <button>send</button>
                {/* <Button className="mt-4">Enviar formulario</Button> */}
            </form>
        </div>
    </>
}