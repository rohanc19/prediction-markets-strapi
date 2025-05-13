# Prediction Markets Strapi API

This is a Strapi-based API for managing prediction markets generated from news articles.

## Features

- RESTful API for prediction markets
- Content management system for managing prediction markets
- Authentication and authorization
- Automatic API documentation

## Deployment

This project is configured for deployment on Render.

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run develop`
4. Access the admin panel at: http://localhost:1337/admin

## API Endpoints

- GET /api/prediction-markets - List all prediction markets
- GET /api/prediction-markets/:id - Get a specific prediction market
- POST /api/prediction-markets - Create a new prediction market
- PUT /api/prediction-markets/:id - Update a prediction market
- DELETE /api/prediction-markets/:id - Delete a prediction market
