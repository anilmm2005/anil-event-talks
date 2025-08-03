document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const categorySearchInput = document.getElementById('categorySearch');
    const clearSearchButton = document.getElementById('clearSearchButton');
    let allTalks = [];

    const fetchTalks = async () => {
        try {
            const response = await fetch('/api/talks');
            allTalks = await response.json();
            renderSchedule(allTalks);
        } catch (error) {
            console.error('Error fetching talks:', error);
            scheduleContainer.innerHTML = '<p>Error loading schedule. Please try again later.</p>';
        }
    };

    const renderSchedule = (talksToRender) => {
        scheduleContainer.innerHTML = '';
        let currentTime = new Date();
        currentTime.setHours(10, 0, 0, 0); // Event starts at 10:00 AM

        talksToRender.forEach((talk, index) => {
            // Add lunch break after the 3rd talk
            if (index === 3) {
                const lunchStartTime = new Date(currentTime.getTime());
                currentTime.setHours(currentTime.getHours() + 1); // 1 hour lunch
                const lunchEndTime = new Date(currentTime.getTime());

                const lunchDiv = document.createElement('div');
                lunchDiv.classList.add('lunch-break');
                lunchDiv.innerHTML = `
                    <p>${formatTime(lunchStartTime)} - ${formatTime(lunchEndTime)}: Lunch Break</p>
                `;
                scheduleContainer.appendChild(lunchDiv);
            }

            const talkStartTime = new Date(currentTime.getTime());
            currentTime.setMinutes(currentTime.getMinutes() + talk.duration);
            const talkEndTime = new Date(currentTime.getTime());

            const talkDiv = document.createElement('div');
            talkDiv.classList.add('talk-entry');
            talkDiv.innerHTML = `
                <p class="time">${formatTime(talkStartTime)} - ${formatTime(talkEndTime)}</p>
                <h2>${talk.title}</h2>
                <p class="speakers">Speakers: ${talk.speakers.join(', ')}</p>
                <p class="category">Category: ${talk.category.join(', ')}</p>
                <p>${talk.description}</p>
            `;
            scheduleContainer.appendChild(talkDiv);

            // Add 10 minute transition after each talk, except the last one
            if (index < talksToRender.length - 1) {
                currentTime.setMinutes(currentTime.getMinutes() + 10);
            }
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    categorySearchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredTalks = allTalks.filter(talk => {
            return talk.category.some(cat => cat.toLowerCase().includes(searchTerm)) ||
                   talk.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm));
        });
        renderSchedule(filteredTalks);
    });

    // New event listener for the clear button
    clearSearchButton.addEventListener('click', () => {
        categorySearchInput.value = ''; // Clear the input
        renderSchedule(allTalks); // Render all talks
    });

    fetchTalks();
});
