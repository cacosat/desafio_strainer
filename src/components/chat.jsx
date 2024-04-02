import React from "react";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import restart from '../assets/restart.svg';
import smartupAgent from '../assets/smartup_agent.svg';
import send from '../assets/send.svg';


export default function Chat() {
    // State for storing messages
    const [messages, setMessages] = useState([]);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    async function fetchResponse(message) {
        // fetch bot response for the user message
        return 'bot response'
    }

    const sendMessage = async (data) => {
        const message = data.userMessage;
        if (message.trim() !== '') {
            console.log('message is:' + message)
            setMessages(currentMessages => [...currentMessages, { content: message, sender: 'user' }]);
            // AI Response:
            const response = await fetchResponse(message);
            setMessages(currentMessages => [...currentMessages, { content: response, sender: 'bot' }]);
            reset(); // reset input
        }
    };

    useEffect(() => {
        console.log('Updated messages:', messages);
    }, [messages]); // This effect runs every time 'messages' changes.

    return <>

        {/* Chat gpt grimoire */}
        <div className="flex flex-col w-[512px] h-[600px]">
            {/* Top bar */}
            <div className="flex items-center justify-between p-4 rounded-[50px] bg-blue">
                <div className="flex">
                    <div className="flex items-center justify-center rounded-full w-20 h-20 bg-dark-yellow">
                        <img src={smartupAgent} alt="Agent icon" />
                    </div>
                    <div className="flex flex-col justify-center mx-4 text-left">
                        <span className="text-md sm:text-xl font-semibold tracking-tight">Agente Smartup</span>
                        <div className="hidden sm:flex gap-2 items-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#03A400"/>
                            </svg>
                            <span className="text-md text-gray">Activo</span>
                        </div>
                    </div>
                </div>
                <button className="bg-dark-blue rounded-full p-2 w-[48px] h-[48px]" 
                        onClick={() => {
                            setMessages([]);
                        }}
                >
                    <img src={restart} alt="restart conversation" />
                </button>
            </div>

            {/* Chat area */}
            <div className="flex flex-col justify-between flex-1 p-4">
                <div className="overflow-y-auto">
                    {messages.map((message, index) => (
                        <div key={index} className={`rounded p-2 ${message.sender === 'user' ? 'bg-blue-500 ml-auto' : 'bg-gray-300 mr-auto'}`}>
                        {message.content}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <form className="" 
                    onSubmit={handleSubmit(sendMessage)}>
                <div className="text-black">
                    pendiente los chips de respuesta
                </div>
                <div className="flex items-center justify-between gap-4 bg-blue rounded-[50px] p-5">
                    <input type="text" 
                            name="userMessage" 
                            placeholder="Escribe tu mensaje..." 
                            className="flex-1 px-5 py-3 placeholder-dark-gray text-darker-gray rounded-full bg-white border-gray border-2" 
                            {...register('userMessage', {required: {
                                value: true,
                                message: 'Debes escribir un mensaje antes de enviarlo.'
                            }})}
                    />
                    <button type="submit" className="bg-dark-blue rounded-full p-2 w-[48px] h-[48px]">
                    {/* Insert send icon here */}
                        <img src={send} alt="send message" />
                    </button>
                </div>
                {errors.userMessage && <p className=" text-[#DC2626] text-xs">{errors.userMessage.message}</p>}
            </form>
        </div>
    </>
}