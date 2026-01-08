import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faPaperPlane,
  faEllipsisV,
  faPaperclip,
  faSmile,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const MessageEtudiant = () => {
  // Liste des conversations (reprise du dashboard)
  const [chats] = useState([
    {
      id: 1,
      name: 'Université de Maroc',
      sub: 'Département des programmes',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100',
      time: '2 heures',
      count: '02',
    },
    {
      id: 2,
      name: 'ECOBANK Senegal',
      sub: 'Direction des Ressources Humaines',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100',
      time: '1 jour',
      count: '01',
    },
    {
      id: 3,
      name: 'Ghana University',
      sub: '01 bourse active',
      img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100',
      time: 'une semaine',
      count: '01',
    },
  ])

  const [activeChat, setActiveChat] = useState(null) // null par défaut pour le mobile
  const [showChat, setShowChat] = useState(false) // État pour basculer la vue sur mobile
  const [messageText, setMessageText] = useState('')

  const [messages] = useState([
    {
      id: 1,
      sender: 'them',
      text: 'Bonjour Aminata, nous avons bien reçu votre candidature.',
      time: '10:00',
    },
    {
      id: 2,
      sender: 'me',
      text: "Merci ! Faut-il d'autres documents ?",
      time: '10:05',
    },
  ])

  const handleSelectChat = (chat) => {
    setActiveChat(chat)
    setShowChat(true) // Affiche la discussion sur mobile
  }

  return (
    <div className='flex h-[85vh] bg-[#191536] border border-white/10 rounded-3xl overflow-hidden animate-fadeIn relative'>
      {/* --- SIDEBAR GAUCHE (LISTE) --- */}
      <div
        className={`w-full md:w-1/3 border-r border-white/10 flex flex-col ${
          showChat ? 'hidden md:flex' : 'flex'
        }`}
      >
        <div className='p-6 border-b border-white/10'>
          <h3 className='text-[#D67D29] text-xl font-bold mb-4'>
            Messages récents
          </h3>
          <div className='bg-white rounded-full flex items-center px-4 py-2 shadow-sm'>
            <FontAwesomeIcon
              icon={faSearch}
              className='text-gray-400 text-xs mr-2'
            />
            <input
              type='text'
              placeholder='Rechercher...'
              className='text-[10px] text-black italic outline-none w-full'
            />
          </div>
        </div>

        <div className='flex-1 overflow-y-auto p-4 flex flex-col gap-3'>
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleSelectChat(chat)}
              className={`rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all ${
                activeChat?.id === chat.id
                  ? 'bg-[#D67D29] text-white'
                  : 'bg-white text-[#100F20]'
              }`}
            >
              <div className='flex items-center gap-3'>
                <img
                  src={chat.img}
                  alt='User'
                  className='w-10 h-10 rounded-full object-cover border-2 border-[#D67D29]'
                />
                <div className='overflow-hidden'>
                  <h4 className='font-bold text-xs truncate'>{chat.name}</h4>
                  <p
                    className={`text-[9px] italic truncate ${
                      activeChat?.id === chat.id
                        ? 'text-white/80'
                        : 'text-gray-500'
                    }`}
                  >
                    {chat.sub}
                  </p>
                </div>
              </div>
              <div className='text-right shrink-0'>
                <span className='bg-[#D67D29] border border-white/20 text-white text-[9px] px-1.5 rounded font-bold'>
                  {chat.count}
                </span>
                <p
                  className={`text-[8px] mt-1 italic ${
                    activeChat?.id === chat.id
                      ? 'text-white/60'
                      : 'text-gray-400'
                  }`}
                >
                  {chat.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ZONE DE DISCUSSION DROITE --- */}
      <div
        className={`flex-1 flex flex-col bg-[#100F20]/30 ${
          !showChat ? 'hidden md:flex' : 'flex'
        }`}
      >
        {activeChat ? (
          <>
            {/* Header Mobile & Desktop */}
            <div className='p-4 border-b border-white/10 flex justify-between items-center bg-[#191536]'>
              <div className='flex items-center gap-3'>
                {/* Bouton retour visible uniquement sur mobile */}
                <button
                  onClick={() => setShowChat(false)}
                  className='md:hidden text-[#D67D29] mr-2'
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <img
                  src={activeChat.img}
                  alt='Avatar'
                  className='w-10 h-10 rounded-full object-cover border border-[#D67D29]'
                />
                <div>
                  <h4 className='font-bold text-sm text-white'>
                    {activeChat.name}
                  </h4>
                  <p className='text-[10px] text-[#D67D29] font-bold'>
                    En ligne
                  </p>
                </div>
              </div>
              <button className='text-gray-400'>
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-pattern-dots'>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] md:max-w-[70%] ${
                    msg.sender === 'me' ? 'self-end' : 'self-start'
                  }`}
                >
                  <div
                    className={`p-4 rounded-2xl text-[13px] shadow-sm ${
                      msg.sender === 'me'
                        ? 'bg-[#D67D29] text-white rounded-tr-none'
                        : 'bg-white text-[#100F20] rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <p
                    className={`text-[9px] mt-1 text-gray-500 ${
                      msg.sender === 'me' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              ))}
            </div>

            {/* Input fixe en bas */}
            <div className='p-4 bg-[#191536] border-t border-white/10'>
              <div className='bg-white/5 rounded-full flex items-center px-4 py-2 gap-3'>
                <button className='text-gray-400'>
                  <FontAwesomeIcon icon={faSmile} />
                </button>
                <button className='hidden sm:block text-gray-400'>
                  <FontAwesomeIcon icon={faPaperclip} />
                </button>
                <input
                  type='text'
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder='Votre message...'
                  className='bg-transparent flex-1 text-xs text-white outline-none'
                />
                <button className='text-[#D67D29] p-2'>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* État vide Desktop */
          <div className='hidden md:flex flex-1 flex-col items-center justify-center text-center p-10'>
            <div className='w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4'>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className='text-[#D67D29] text-3xl opacity-50'
              />
            </div>
            <h3 className='text-white font-bold'>Vos messages</h3>
            <p className='text-gray-500 text-xs mt-2'>
              Sélectionnez une conversation pour commencer à discuter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageEtudiant
