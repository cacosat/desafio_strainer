import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // State for storing messages
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const sendMessage = (message) => {
    if (message.trim() !== '') {
      setMessages([...messages, { content: message, sender: 'user' }]);
      // Clear the input field, simulate response
    }
  };

  return (
    <>
      {/* Chat gpt grimoire */}
      <div className="flex flex-col h-screen">
      {/* Top bar */}
      <div className="flex items-center justify-between p-4 border-b-2">
        <img src="/path-to-avatar.png" alt="Avatar" className="rounded-full w-10 h-10" />
        <div className="flex flex-col mx-4">
          <span className="font-semibold">Agente Smartup</span>
          <span className="text-sm text-gray-500">Activo</span>
        </div>
        <button className="bg-blue-500 rounded p-2">
          {/* Insert icon here */}
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
        <div className="flex my-2">
          {/* Insert buttons here */}
        </div>
      </div>

      {/* Bottom bar */}
      <form className="flex items-center justify-between p-4 border-t-2" onSubmit={(e) => { e.preventDefault(); sendMessage(e.target.messageInput.value); e.target.reset(); }}>
        <input type="text" name="messageInput" placeholder="Escribe tu mensaje..." className="flex-1 p-2 border-2 rounded" />
        <button type="submit" className="bg-blue-500 rounded p-2 ml-4">
          {/* Insert send icon here */}
        </button>
      </form>
    </div>

    {/* Builder io build */}
    <div className="flex flex-col bg-white">
      <img
        loading="lazy"
        srcSet="..."
        className="w-full aspect-[16.67] max-md:max-w-full"
      />
      <div className="justify-center self-center py-8 mt-8 w-full max-w-[1196px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-7xl text-amber-300 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <div className="max-md:max-w-full max-md:text-4xl">
                <span className="font-bold">Recruitment made easy</span>
                <span className="font-bold text-amber-300">.</span>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="mt-8 w-full aspect-[1.61] max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow w-full bg-white rounded-[50px] max-md:mt-10 max-md:max-w-full">
              <div className="justify-between px-6 py-4 bg-indigo-500 border border-indigo-800 border-solid rounded-[50px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-4 max-md:mt-10">
                      <div className="flex justify-center items-center p-4 bg-amber-400 h-[81px] rounded-[100px] w-[81px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c45880d4048c95828b916a3b2629bcc21149bab39ac954cb7f1e82c172615a2b?"
                          className="aspect-square w-[49px]"
                        />
                      </div>
                      <div className="flex flex-col my-auto">
                        <div className="text-xl font-medium tracking-tighter text-gray-200">
                          Agente Smartup
                        </div>
                        <div className="flex gap-2 mt-2 text-base whitespace-nowrap text-stone-300">
                          <div className="shrink-0 my-auto w-2 h-2 bg-green-700 rounded-full" />
                          <div>Activo</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[10%] max-md:ml-0 max-md:w-full">
                    <div className="flex justify-center items-center self-stretch px-2 m-auto w-12 h-12 bg-indigo-800 shadow-sm rounded-[100px] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d1c8530abfa89a3b1cbc1ad28feded300a0a39761dc39dc73b261614c49b1cd?"
                        className="w-8 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end pb-4 max-md:max-w-full">
                <div className="flex gap-4 self-end max-md:flex-wrap">
                  <div className="flex flex-col px-4 pt-3 pb-1.5 bg-indigo-500 rounded-3xl border border-indigo-800 border-solid max-md:max-w-full">
                    <div className="text-base text-white">
                      Facilisi bibendum dui orci morbi. Ut nunc non varius
                      laoreet. Mollis integer turpis in tempor pretium viverra
                      ac.
                    </div>
                    <div className="self-end mt-3 text-xs font-medium tracking-tight text-stone-300">
                      10:10 am
                    </div>
                  </div>
                  <div className="flex justify-center items-center self-end px-2 mt-9 w-12 h-12 bg-indigo-500 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d946109f7ca7c6e6b957db0c4efd3f99f69e61ecce0c0c3916da736e2a915b7?"
                      className="w-8 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col px-2 mt-8 max-md:max-w-full">
                  <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col justify-center items-start self-end py-2 mt-16 bg-amber-400 rounded-[100px] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/53bf299cdc42e98adfe0dac3d18f58186b068205c8c7da83fd905e8741ad52da?"
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div className="flex flex-col justify-center px-4 pt-3 pb-1.5 bg-amber-200 rounded-3xl border border-amber-400 border-solid max-md:max-w-full">
                      <div className="text-base text-neutral-600 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Nunc viverra
                        netus eu aliquam. Facilisi bibendum dui orci morbi. Ut
                        nunc non varius laoreet.Mollis integer turpis in tempor
                        pretium viverra ac.
                      </div>
                      <div className="self-end mt-3 text-xs font-medium tracking-tight text-zinc-500">
                        10:10 am
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 self-end mt-8 max-md:flex-wrap">
                    <div className="flex flex-col px-4 pt-3 pb-1.5 bg-indigo-500 rounded-3xl border border-indigo-800 border-solid max-md:max-w-full">
                      <div className="text-base text-white">Lorem Ipsum.</div>
                      <div className="self-end mt-3 text-xs font-medium tracking-tight text-stone-300">
                        10:10 am
                      </div>
                    </div>
                    <div className="flex justify-center items-center self-start px-2 mt-3.5 w-12 h-12 bg-indigo-500 rounded-[100px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d946109f7ca7c6e6b957db0c4efd3f99f69e61ecce0c0c3916da736e2a915b7?"
                        className="w-8 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center content-center px-9 text-xs text-indigo-500 max-md:px-5">
                <div className="justify-center px-4 py-1 border border-indigo-500 border-solid rounded-[50px]">
                  ¿Qué es The Strainer?
                </div>
                <div className="justify-center px-4 py-1 border border-indigo-500 border-solid rounded-[50px]">
                  ¿Qué información necesitas?
                </div>
                <div className="flex gap-1 justify-center px-4 py-1 border border-indigo-500 border-solid bg-indigo-200 bg-opacity-50 rounded-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8972e43d38461892c1e08aa1d4e16952484b7d50415bb3cdc56e8ddb40c2349c?"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                  <div>Otras alternativas</div>
                </div>
              </div>
              <div className="flex gap-4 justify-center px-6 py-4 mt-2 bg-indigo-500 border border-indigo-800 border-solid rounded-[50px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex-1 justify-center items-start px-4 py-4 text-base bg-white border border-solid border-stone-300 rounded-[100px] text-zinc-500 max-md:pr-5 max-md:max-w-full">
                  Escribe tu mensaje...
                </div>
                <div className="flex justify-center items-center p-2 w-12 h-12 bg-indigo-800 shadow-sm rounded-[100px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df61089c35e0a48c86553ed70ffd3686055f9181d2170dfd9ab0424888652a56?"
                    className="border-white border-solid aspect-square border-[3px] stroke-[3px] stroke-white w-[22px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-4 mt-8 w-full bg-indigo-500 max-md:px-5 max-md:max-w-full">
        <div className="justify-center max-w-full w-[866px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-32 max-w-full aspect-square max-md:mt-8"
              />
            </div>
            <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-xl text-center text-white max-md:mt-10 max-md:max-w-full">
                Una vez que el agente complete tu formulario podrás revisarlo y
                enviarlo
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="justify-center self-stretch px-8 py-2 my-auto w-full text-base text-indigo-500 bg-white rounded-[50px] max-md:px-5 max-md:mt-10">
                Revisa tu formulario
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-4 pt-8 mt-8 max-w-full rounded-3xl w-[814px]">
        <div className="shrink-0 h-4 bg-gray-200 rounded-3xl max-md:max-w-full" />
      </div>
    </div>
    </>
  )
}

export default App
