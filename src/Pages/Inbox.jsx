import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';



const Icon = ({ name, className = '' }) => {
  const icons = {
    Inbox: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
    Star: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    Send: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    FileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
    Trash: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 6h18" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    AlertCircle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    Edit: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
      </svg>
    ),
    Search: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    Archive: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
    X: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    MoreVertical: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    ),
    Reply: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="9 17 4 12 9 7" />
        <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
      </svg>
    ),
    ReplyAll: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="7 17 2 12 7 7" />
        <polyline points="12 17 7 12 12 7" />
        <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
      </svg>
    ),
    Forward: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="15 17 20 12 15 7" />
        <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
      </svg>
    )
  };
  return icons[name] || null;
};

// New EmailListPanel Component
const EmailListPanel = ({ emails, filteredEmails, selectedEmail, setSelectedEmail, Icon }) => {
  return (
    <div className="w-96 flex flex-col border-r border-gray-200 bg-white shadow-md rounded-lg my-4 overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center">
        <h2 className="text-xl font-bold text-gray-800 flex-1">Inbox ({emails.filter(e => !e.read).length})</h2>
        <div className="relative w-full max-w-xs">
          <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search mail..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-200"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredEmails.length > 0 ? (
          filteredEmails.map((email) => (
            <div
              key={email.id}
              className={`
                flex items-center p-4 border-b border-gray-100 cursor-pointer transition-colors duration-200
                ${selectedEmail && selectedEmail.id === email.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                ${email.read ? 'text-gray-600' : 'text-gray-900 font-semibold'}
              `}
              onClick={() => setSelectedEmail({ ...email, read: true })} // Mark as read on click
            >
              {/* Logo/Avatar */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 font-medium text-sm mr-3 flex-shrink-0">
                {email.sender.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 overflow-hidden"> {/* Added overflow-hidden to contain text */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold truncate">{email.sender}</span>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{email.date}</span>
                </div>
                <h3 className="text-sm truncate mb-1">{email.subject}</h3>
                <p className="text-xs text-gray-500 truncate">{email.snippet}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="p-4 text-center text-gray-500">No emails in this folder.</p>
        )}
      </div>
    </div>
  );
};


const InboxPage = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [activeFolder, setActiveFolder] = useState('Inbox');

  // Sample email data
  const emails = [
    {
      id: 1,
      sender: 'HDFC Bank',
      subject: 'Deal Negotiation',
      snippet: 'I hope this chat finds you well. I wanted to give you a quick update on our Q3 performance...',
      date: 'Just now',
      read: false,
      starred: false,
      body: `
        <p>Hi Aditya,</p>
        <p>I hope this email finds you well. I wanted to give you a quick update on deal Negoatiation.</p>
        <p>Our project is progressing smoothly, and we are ready to offer the interest rate of 6.5%</p>
        
        <p>Best regards,</p>
        <p>Aniket, SBIN</p>
      `,
    }
  ];

  // Filter emails based on the active folder (basic logic for demonstration)
  const filteredEmails = emails.filter(email => {
    if (activeFolder === 'Inbox') return true; // Show all for now
    if (activeFolder === 'Starred') return email.starred;
    // Add more logic for other folders if needed
    return true;
  });

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar for a sleek look */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
      `}</style>




       <Sidebar/>

      {/* Main content area */}
      <div className="flex-1 flex ml-64 bg-gray-50">
        {/* Email List Panel - now a separate component */}
        <EmailListPanel
          emails={emails}
          filteredEmails={filteredEmails}
          selectedEmail={selectedEmail}
          setSelectedEmail={setSelectedEmail}
          Icon={Icon} // Pass the Icon component as a prop
        />

        {/* Email Detail Panel */}
        <div className="flex-1 flex flex-col bg-white shadow-md rounded-lg my-4 mr-4 ml-2 overflow-hidden">
          {selectedEmail ? (
            <>
              {/* Email Detail Header */}
              <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">{selectedEmail.subject}</h2>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{selectedEmail.sender}</span> {' '}
                    <span className="text-gray-400">&lt;{selectedEmail.sender.toLowerCase().replace(' ', '.')}@example.com&gt;</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors duration-200" title="Reply">
                    <Icon name="Reply" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors duration-200" title="Reply All">
                    <Icon name="ReplyAll" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors duration-200" title="Forward">
                    <Icon name="Forward" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors duration-200" title="Archive">
                    <Icon name="Archive" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors duration-200" title="Delete">
                    <Icon name="Trash" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors duration-200" title="More options">
                    <Icon name="MoreVertical" />
                  </button>
                </div>
              </div>
              {/* Email Body */}
              <div className="flex-1 p-5 overflow-y-auto leading-relaxed text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: selectedEmail.body }} />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-lg">
              Select an email to view its content.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
