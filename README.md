# Netflix Clone

This is a Netflix Clone project built using React and Redux. The project aims to replicate the basic functionalities of Netflix, including user authentication, browsing movies, and viewing details.

## Features

- User Authentication: Sign up and sign in using Firebase.
- Movie Browsing: Browse through a list of movies fetched from an TMDB api.
- Responsive Design: Optimized for both desktop and mobile views.
- State Management: Managed using Redux for a seamless user experience.

## Technologies Used

- React: Frontend library for building user interfaces.
- Redux: State management library.
- Firebase: Backend-as-a-Service for authentication and database.
- Tailwind CSS: Utility-first CSS framework for styling.
- Vercel: Deployment platform.

## Getting Started

### Prerequisites

Node.js and npm installed on your machine.

### Installation

Clone the repository:

```
git clone https://github.com/oyesaurabh/netflixClone.git
```

Navigate to the project directory:

```
cd netflixClone
```

Install the dependencies:

```
npm install
```

Running the Project
Create a .env file in the root directory and add your Firebase configuration:

```
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
```

Start the development server:

```
npm start
```

## Deployment

The project is deployed on Vercel. You can visit the live site [here](https://notsaurabh-netflix.vercel.app/).

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
Feel free to customize this template according to your project’s specific details and requirements!
