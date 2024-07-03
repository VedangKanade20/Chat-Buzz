const messages = [
    {
      chatId: '60d21b5867d0d8992e610c89', // General Chat
      Chats: [
        {
          sender: '60d21b4667d0d8992e610c85',
          content: 'Hello everyone!',
          timestamp: new Date(),
        },
        {
          sender: '60d21b4667d0d8992e610c86',
          content: 'Hi Emily!',
          timestamp: new Date(),
        },
        {
          sender: '60d21b4667d0d8992e610c87',
          content: 'How are you all doing?',
          timestamp: new Date(),
        },
      ],
    },
    {
      chatId: '60d21b5867d0d8992e610c8a', // Private Chat between Emily and another user
      Chats: [
        {
          sender: '60d21b4667d0d8992e610c85',
          content: 'Hey, are you available for a quick call?',
          timestamp: new Date(),
        },
        {
          sender: '60d21b4667d0d8992e610c88',
          content: 'Sure, give me 5 minutes.',
          timestamp: new Date(),
        },
      ],
    },
    // Add more chat data as needed
  ];
  
  export default messages;
  