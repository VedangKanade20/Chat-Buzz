# Live Chat App

## Overview

The **Live Chat App** is a real-time messaging application designed to facilitate seamless communication between users. It is built with modern web technologies to ensure scalability, performance, and an intuitive user experience.

## Features

- **Real-time Messaging**: Instant communication with WebSocket support.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Message History**: Persistent storage of chat history.
- **Typing Indicators**: See when someone is typing.
- **Read Receipts**: Know when your messages are read.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vedangkanade20/live-chat-app.git
   cd live-chat-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the following:

   ```
   PORT=3000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with existing credentials.
3. Start chatting in real-time!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please contact:

- **Email**: vedangk20@gmail.com
- **GitHub**: [VedangKanade20](https://github.com/vedangkanade20)
