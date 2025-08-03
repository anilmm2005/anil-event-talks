# Tech Talks Event Website

This project is a simple, single-page website designed to display the schedule for a 1-day technical talk event. It features a dynamic schedule, including talk timings and a lunch break, and allows users to search for talks by category.

## Features

*   **Dynamic Schedule Display:** Presents a clear, chronological schedule of technical talks.
*   **Automated Timing Calculation:** Automatically calculates and displays start and end times for each talk and the lunch break, accounting for transition periods.
*   **Category and Speaker Search:** Users can filter talks instantly by typing keywords related to talk categories or speaker names.
*   **Responsive Design:** (Basic styling provided, can be enhanced for full responsiveness).

## Technologies Used

*   **Frontend:**
    *   HTML5
    *   CSS3
    *   JavaScript
*   **Backend:**
    *   Node.js
    *   Express.js

## Project Structure

```
my-website-gemini-cli/
├── public/
│   ├── index.html    # Main HTML page
│   ├── style.css     # Styling for the website
│   └── script.js     # Frontend logic (data fetching, rendering, search)
├── server.js         # Backend server (serves static files, provides talk data API)
├── package.json      # Node.js project configuration and dependencies
└── .gitignore        # Specifies intentionally untracked files to ignore
```

## Setup and Running Locally

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anilmm2005/anil-event-talks.git
    cd anil-event-talks
    ```

2.  **Install Dependencies:**
    Navigate into the project directory and install the necessary Node.js packages:
    ```bash
    npm install
    ```

3.  **Start the Server:**
    Once the dependencies are installed, you can start the web server:
    ```bash
    npm start
    ```
    You should see a message in your terminal indicating that the server is running, typically on `http://localhost:3000`.

4.  **View the Website:**
    Open your web browser and navigate to `http://localhost:3000`.

    You will see the event schedule. Use the search bar at the top to filter talks by category (e.g., "AI", "Cybersecurity", "UX Design").

## API Endpoint

The backend provides a single API endpoint:

*   `GET /api/talks`: Returns a JSON array of all the technical talks, including their details.

## Customization

*   **Talk Data:** Modify the `talks` array in `server.js` to update the event schedule with your own talk details.
*   **Styling:** Adjust `public/style.css` to change the visual appearance of the website.
*   **Schedule Logic:** The timing calculation logic is in `public/script.js`. You can modify it to change talk durations, transition times, or lunch break placement.
