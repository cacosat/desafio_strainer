import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import restart from '../assets/restart.svg';
import smartupAgent from '../assets/smartup_agent.svg';
import send from '../assets/send.svg';


export default function Chat() {
    // State for storing messages
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);
    const textareaRef = useRef(null);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    useEffect(() => {
        // scroll to last text in chat
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages])

    useEffect(() => {
        setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 10);
    }, [messages])

    async function fetchResponse(message) {
        // fetch bot response for the user message
        return 'Respuesta Placeholder'
    }

    const sendMessage = async (data) => {
        const message = data.userMessage;
        if (message.trim() !== '') {
            setMessages(currentMessages => [...currentMessages, { content: message, sender: 'user' }]);
            // AI Response:
            const response = await fetchResponse(message);
            setMessages(currentMessages => [...currentMessages, { content: response, sender: 'bot' }]);
            reset(); // reset input
        }
    };

    useEffect(() => {
        console.log('Updated messages:', messages);
    }, [messages]); 

    function adjustTextareaHeight(event) {
        const textarea = event.target;
        textarea.style.height = 'auto'; // Reset the height
        textarea.style.height = (textarea.scrollHeight-20) + 'px'; // Set to the current content's height
    }

    return <>

        {/* Chat gpt grimoire */}
        <div className="flex flex-col w-[512px] h-[550px]">
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
            <div className="flex flex-col justify-start flex-1 p-4 overflow-y-auto" ref={chatContainerRef}>
                    {messages.map((message, index) => (
                        <div key={index} 
                            className={`rounded border-2 border-black p-2 ${message.sender === 'user' ? 'bg-blue-500 ml-auto' : 'bg-gray-300 mr-auto'}`}>
                            <p className="text-black">{message.content}</p>
                        </div>
                    ))}
            </div>

            {/* Bottom bar */}
            <form className="" 
                    onSubmit={handleSubmit(sendMessage)}>
                <div className="text-black">
                    pendiente los chips de respuesta
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 bg-blue rounded-[50px] p-5">
                    <textarea type="text" 
                            name="userMessage" 
                            placeholder="Escribe tu mensaje..." 
                            ref={textareaRef}
                            onInput={adjustTextareaHeight}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault(); // Prevent the default action to avoid a new line
                                    handleSubmit(sendMessage)(); // Programmatically submit the form
                                }
                            }}
                            className="flex-1 px-5 py-3 h-[52px] max-h-[81px] resize-none no-scrollbar overflow-y-auto placeholder-dark-gray text-darker-gray rounded-[30px] bg-white border-gray border-2 overflow-auto" 
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