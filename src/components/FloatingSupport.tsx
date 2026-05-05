'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FloatingSupport.module.css';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export default function FloatingSupport() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hi there! 👋 Welcome to Starway Immigration. I am your AI Support Assistant. How can we help you achieve your global dreams today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    { label: '🎓 Student Visa Info', value: 'student' },
    { label: '✈️ Tourist Visa Requirements', value: 'tourist' },
    { label: '📍 Office Location & Hours', value: 'location' },
    { label: '📞 Direct Contact Info', value: 'contact' },
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate Bot response
    setTimeout(() => {
      const botResponseText = getBotResponse(text);
      const botMsg: Message = {
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const getBotResponse = (input: string): string => {
    const cleanInput = input.toLowerCase();

    if (cleanInput.includes('student') || cleanInput.includes('study') || cleanInput.includes('admission') || cleanInput.includes('university')) {
      return '🎓 **Student Visa Services:**\nWe offer specialized admission & visa assistance for major destinations including the **UK, USA, Canada, Germany, Finland, and Australia**.\n\nOur service includes:\n• University admissions and offer letters\n• Bank statement guidelines\n• Interview coaching and visa documentation review.\n\nWould you like to book a free assessment? Call us at **03201173129**!';
    }
    if (cleanInput.includes('tourist') || cleanInput.includes('visit') || cleanInput.includes('travel') || cleanInput.includes('schengen')) {
      return '✈️ **Tourist & Visit Visas:**\nWe provide expert filing and strategy for tourist visas for **Canada, Schengen (Europe), USA, UK, and Qatar**.\n\nOur team ensures your travel history, financial stability, and ties to your home country are perfectly presented to maximize visa approval. Let\'s prepare your application today!';
    }
    if (cleanInput.includes('location') || cleanInput.includes('address') || cleanInput.includes('where') || cleanInput.includes('office') || cleanInput.includes('karachi')) {
      return '📍 **Our Location:**\nUnit UF-75, 1st Floor, Cantonment Shopping Mall, Rashid Minhas Road, Faisal Cantonment, Karachi, Pakistan.\n\n🕒 **Office Hours:**\nMonday - Friday: 11:00 AM to 7:00 PM\n(Saturday & Sunday: Closed)';
    }
    if (cleanInput.includes('contact') || cleanInput.includes('phone') || cleanInput.includes('number') || cleanInput.includes('email') || cleanInput.includes('whatsapp')) {
      return '📞 **Contact Details:**\n• **Phone:** 03201173129\n• **Email:** starwaytrader@gmail.com\n\nYou can also click the green WhatsApp icon floating next to this chat window to message our Lead Consultant directly!';
    }
    if (cleanInput.includes('work') || cleanInput.includes('job') || cleanInput.includes('permit') || cleanInput.includes('employment')) {
      return '🛠️ **Work Permit & Skilled Migration:**\nWe offer expert profile assessment and visa processing for corporate visas, job seeker visas (such as Germany), and employer-sponsored work permits.\n\nPlease share your qualification and work experience on WhatsApp for a personalized evaluation!';
    }
    if (cleanInput.includes('pr') || cleanInput.includes('permanent') || cleanInput.includes('citizenship') || cleanInput.includes('express entry')) {
      return '🌏 **Permanent Residency (PR):**\nWe handle long-term settlement programs like Canada\'s Express Entry (FSW, CEC, PNP) and Australia\'s Skilled Independent visa program.\n\nOur experts can calculate your points profile and suggest the best pathway.';
    }
    if (cleanInput.includes('hello') || cleanInput.includes('hi') || cleanInput.includes('hey') || cleanInput.includes('salaam')) {
      return 'Hello! 😊 I hope you are having a wonderful day. How can Starway Immigration assist you with your visa and immigration plans today?';
    }

    return 'Thank you for reaching out! 🙏 I specialize in answering questions about our visa services (Student, Tourist, Work, Family, PR), our office location, and contact hours.\n\nTo get a personalized profile assessment right away, please call/WhatsApp us at **03201173129** or click the green WhatsApp button below to start a live chat.';
  };

  return (
    <div className={styles.container}>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/923201173129?text=Hi%20Starway%20Immigration,%20I'd%20like%20to%20inquire%20about%20your%20visa%20services." 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className={styles.whatsappIcon}>
          <path fill="#fff" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.017 14.077.99 11.45.99c-5.436 0-9.86 4.37-9.864 9.799-.001 1.73.457 3.41 1.32 4.916l-.982 3.58 3.693-.967zm12.39-4.87c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.485-.892-.793-1.493-1.773-1.668-2.07-.175-.3-.018-.463.13-.61.134-.133.3-.349.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.625-.926-2.224-.24-.575-.48-.497-.66-.505-.17-.008-.367-.01-.563-.01-.196 0-.517.073-.787.368-.27.295-1.03.1-1.03 2.51 0 2.41 1.758 4.74 2.002 5.07.244.328 3.46 5.286 8.38 7.41 1.17.502 2.083.8 2.795 1.028 1.17.37 2.233.318 3.075.193.937-.14 1.77-.57 2.022-1.096.252-.525.252-.975.177-1.096-.075-.12-.275-.195-.575-.345z"/>
        </svg>
      </a>

      {/* Chatbot Toggle Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)} 
        className={`${styles.chatToggleBtn} ${isChatOpen ? styles.chatToggleBtnActive : ''}`}
        aria-label="Open support chat"
        title="Open support chat"
      >
        {isChatOpen ? (
          <span className={styles.closeIcon}>✕</span>
        ) : (
          <div className={styles.botIconWrapper}>
            <span className={styles.botIcon}>🤖</span>
            <span className={styles.onlinePulse}></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className={styles.chatWindow}>
          {/* Chat Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.botAvatar}>🤖</div>
              <div>
                <h4>Starway Assistant</h4>
                <span className={styles.onlineText}>Online • Expert AI</span>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className={styles.closeHeaderBtn}>✕</button>
          </div>

          {/* Chat Body */}
          <div className={styles.chatBody}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`${styles.messageWrapper} ${msg.sender === 'user' ? styles.msgUser : styles.msgBot}`}
              >
                <div className={styles.messageBubble}>
                  <p>{msg.text}</p>
                  <span className={styles.messageTime}>{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageWrapper} ${styles.msgBot}`}>
                <div className={`${styles.messageBubble} ${styles.typingBubble}`}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Predefined Suggestions */}
          <div className={styles.suggestionsContainer}>
            <p className={styles.suggestionTitle}>💡 Frequently Asked Questions:</p>
            <div className={styles.suggestions}>
              {quickQuestions.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSendMessage(q.label)}
                  className={styles.suggestionBtn}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className={styles.chatInputForm}
          >
            <input 
              type="text" 
              placeholder="Type your question..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className={styles.chatInput}
            />
            <button type="submit" className={styles.sendBtn} disabled={!inputText.trim()}>
              <svg viewBox="0 0 24 24" className={styles.sendIcon}>
                <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
