# Interest Calculator

## About the Project

Interest Calculator is a web application that helps users quickly calculate interest on principal amounts. Interest is calculated using a monthly compounding method. Designed for simplicity and ease of use, it allows users to input their financial data and instantly view calculated results. Ideal for anyone needing quick interest computations.

## Tech Stack

- React
- TypeScript
- Vite
- CSS Modules

## Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/interest-calculator.git
   cd interest-calculator
   ```
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Start the development server:**
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage

- Enter the principal amount, interest rate, and time period in the provided fields.
- Click the "Calculate" button to view the interest and total amount.
- Results are displayed instantly below the input form.

## App Image

![App Screenshot](public/interest-calculator-image.png)

## Features

- Simple and intuitive user interface
- Real-time interest calculation
- Supports custom principal, rate, and time inputs
- Responsive design for desktop and mobile devices

## Background Story

I was inspired by a website that showed a simulation of investment return. This is my first attempt at making a slider. In addition to this, I used 'context' to pass states(principal, interest rate, loan duration(months)) and its calculation result.

## Learning

My first time to pass states in context. I used useContext in another app that requires fetching weather data, passing data to components. Whereas this app is passing the state setter itself to components.
I learnt that adding styling for a slider(thumb, outline, etc) needs different styling depending on the browser, passing a dynamic value that displays the current value along with the slider, requires calculating percent and it is applied in style prop. This adds more complexity. I also thought adding a comma in an input element does not seem to be practical.
