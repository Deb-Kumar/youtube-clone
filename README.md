# YouTube Clone

A fully functional YouTube Clone application that replicates the core features of YouTube, including video streaming, user authentication, video uploads, comments, likes, and a responsive UI.

## Features

- **Video Streaming**: Play videos with a responsive video player.
- **User Authentication**: Secure user login, signup, and logout functionality.
- **Video Uploads**: Users can upload videos with titles, descriptions, and tags.
- **Search Functionality**: Search for videos by title, description, or tags.
- **Like and Comment System**: Users can like videos and add comments.
- **Recommendations**: Display recommended videos based on user's watch history.
- **Responsive Design**: Works seamlessly across devices (mobile, tablet, desktop).

## Tech Stack

### Frontend
- **React.js**: For building the user interface.
- **Redux**: For state management.
- **TailwindCSS, MUI, or Bootstrap**: For styling the components.

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: For creating REST APIs.
- **MongoDB**: Database for storing user data, video details, and comments.
- **Multer**: For handling file uploads (video files and thumbnails).
- **JWT**: For secure user authentication.

### Deployment
- **AWS S3**: For storing video files and thumbnails.
- **Docker**: For containerizing the application.
- **Vercel/Netlify**: For deploying the frontend.
- **Heroku/AWS EC2**: For deploying the backend.

## Installation

### Prerequisites
- Node.js installed
- MongoDB instance running
- AWS S3 bucket configured for file uploads

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Deb-Kumar/youtube-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd youtube-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     AWS_ACCESS_KEY_ID=your_aws_access_key
     AWS_SECRET_ACCESS_KEY=your_aws_secret_key
     AWS_S3_BUCKET_NAME=your_s3_bucket_name
     ```
5. Start the backend server:
   ```bash
   npm run server
   ```
6. Navigate to the `client` directory for the frontend:
   ```bash
   cd client
   ```
7. Install frontend dependencies:
   ```bash
   npm install
   ```
8. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

- Open the application in your browser at `http://localhost:3000`.
- Sign up or log in to your account.
- Explore videos, upload your own, and interact with other users' content.

## Folder Structure

```
root
├── client              # Frontend code
│   ├── src
│   │   ├── components  # Reusable UI components
│   │   ├── pages       # Application pages (Home, Video, Profile, etc.)
│   │   └── store       # Redux store
│   └── public          # Static files
├── server              # Backend code
│   ├── controllers     # Request handlers
│   ├── models          # MongoDB schemas
│   ├── routes          # API routes
│   └── middlewares     # Middleware functions
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Demo

Here is a visual demo of the application:
![YouTube Clone Demo](assets/demo-image.png "YouTube Clone Demo")


## Contributing

Contributions are welcome! If you'd like to add a feature or fix a bug, feel free to fork the repository and submit a pull request.

1. Fork the project.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- Inspired by YouTube's interface and functionality.
- Thanks to all open-source contributors who made this project possible.

