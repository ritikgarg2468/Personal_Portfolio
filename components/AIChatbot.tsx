import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader } from 'lucide-react';
import type { Chat } from '@google/genai';
import { SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeChat = async () => {
      if (isOpen && !chat) {
        const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY)
          ? process.env.API_KEY
          : undefined;
        
        if (!apiKey) {
          console.error("API_KEY environment variable not set. The chatbot will not function.");
          setMessages([
            { role: 'model', text: "I'm sorry, the AI assistant is not configured correctly. An API key is required to work." }
          ]);
          return;
        }

        try {
          // Dynamically import the library only when needed
          const { GoogleGenAI } = await import('@google/genai');
          const ai = new GoogleGenAI({ apiKey: apiKey });
          
          const portfolioContext = `
            You are Ritik Garg's friendly and helpful AI assistant for his personal portfolio website.
            Your goal is to answer questions from visitors (like recruiters or potential clients) based ONLY on the information provided below.
            Do not make up any information. If a question cannot be answered with the given context, politely say that you don't have that information.
            Keep your answers concise and professional.
            
            Here is the information about Ritik Garg:

            Skills: ${JSON.stringify(SKILLS_DATA)}
            Projects: ${JSON.stringify(PROJECTS_DATA)}
            Experience: ${JSON.stringify(EXPERIENCE_DATA)}
            Achievements: ${JSON.stringify(ACHIEVEMENTS_DATA)}
          `;

          const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
               systemInstruction: portfolioContext,
            }
          });
          setChat(newChat);
          setMessages([
            { role: 'model', text: "Hello! I'm Ritik Garg's AI assistant. Feel free to ask me anything about his skills, projects, or experience." }
          ]);
        } catch (error) {
          console.error("Failed to initialize Gemini AI:", error);
          setMessages([
            { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }
          ]);
        }
      }
    };
    
    initializeChat();
  }, [isOpen, chat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await chat.sendMessageStream({ message: input });
      
      let botResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        botResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = botResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'An error occurred. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 left-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
          aria-label="Toggle AI Chatbot"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 left-8 z-50 w-[calc(100vw-4rem)] max-w-md h-[70vh] max-h-[600px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6 text-indigo-500" />
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5 text-indigo-500" /></div>}
                  <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-indigo-500 text-white rounded-br-none' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none'}`}>
                    <p className="text-sm break-words">{msg.text}</p>
                  </div>
                   {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0"><User className="w-5 h-5 text-slate-600 dark:text-slate-300" /></div>}
                </div>
              ))}
               {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5 text-indigo-500" /></div>
                  <div className="max-w-[80%] p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none">
                    <Loader className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my projects..."
                  className="flex-1 w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={isLoading || !chat}
                />
                <button type="submit" disabled={isLoading || !input.trim() || !chat} className="p-2.5 bg-indigo-600 text-white rounded-lg disabled:bg-indigo-400 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors">
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;