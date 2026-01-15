
import React, { useState } from 'react';
import { getInvestmentAdvice } from '../geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: query };
    setChat(prev => [...prev, userMsg]);
    setIsLoading(true);
    setQuery('');

    const response = await getInvestmentAdvice(query);
    const assistantMsg: ChatMessage = { role: 'assistant', text: response };
    
    setChat(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="glass-panel rounded-3xl overflow-hidden border border-yellow-600/20 shadow-2xl">
        <div className="grid md:grid-cols-5 h-[600px]">
          {/* Sidebar Info */}
          <div className="hidden md:flex md:col-span-2 bg-black/40 p-10 flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <i className="fas fa-sparkles text-yellow-600 text-xl"></i>
                <span className="font-bold tracking-widest uppercase text-sm">Blackstar AI Insights</span>
              </div>
              <h3 className="text-3xl font-serif mb-6">Ask Our Intelligence Engine</h3>
              <p className="text-gray-400 mb-8">
                Curious about real estate trends or wealth management strategies? Our AI is trained on the Blackstar philosophy to provide instant insights.
              </p>
              <div className="space-y-4 text-sm">
                <p className="text-gray-500 italic">Try asking:</p>
                <ul className="space-y-2">
                  {["Why is real estate a good hedge?", "How can I diversify $50k?", "The Blackstar difference?"].map((q, i) => (
                    <li 
                      key={i} 
                      className="cursor-pointer hover:text-yellow-600 text-gray-400 transition-colors"
                      onClick={() => setQuery(q)}
                    >
                      <i className="fas fa-chevron-right mr-2 text-[10px] text-yellow-600/50"></i>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-[10px] text-gray-600 uppercase tracking-widest">
              Powered by Gemini 3 Flash
            </div>
          </div>

          {/* Chat Interface */}
          <div className="md:col-span-3 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {chat.length === 0 && (
                <div className="h-full flex items-center justify-center text-center px-10">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-yellow-600/5 rounded-full flex items-center justify-center mx-auto">
                      <i className="fas fa-comment-dots text-yellow-600 text-2xl"></i>
                    </div>
                    <p className="text-gray-500">Your conversation starts here. Ask anything about our expertise.</p>
                  </div>
                </div>
              )}
              {chat.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-yellow-600 text-black font-medium' 
                      : 'bg-white/5 border border-white/10 text-gray-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-6 bg-black/20 border-t border-white/10">
              <div className="flex space-x-4">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="bg-yellow-600 text-black w-12 h-12 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiAssistant;
