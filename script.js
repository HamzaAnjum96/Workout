// Fetch the workout data from data.json
document.addEventListener('DOMContentLoaded', async () => {
    const workoutData = await fetchWorkoutData();
    if (workoutData) {
        updateDateCard();
        selectButton('push'); // Default selection on load
        showDay('push', workoutData);
    }
});

// Function to fetch workout data from JSON file
async function fetchWorkoutData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Failed to load workout data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching workout data:', error);
        return null;
    }
}

// Display exercises for the selected day and highlight the selected button
function showDay(day, workoutData) {
    const container = document.getElementById('workout-container');
    container.innerHTML = ''; // Clear existing content

    workoutData[day].forEach((exercise) => {
        const card = createExerciseCard(exercise);
        container.appendChild(card);
    });

    completedCount = 0; // Reset completed count for new day selection
    selectButton(day); // Update selected button state
    updateProgress();
}

// Expose `showDay` globally for the HTML onclick to work
window.showDay = (day) => {
    fetchWorkoutData().then((workoutData) => {
        if (workoutData) {
            showDay(day, workoutData);
        }
    });
};

// Highlight the selected button and reset others
function selectButton(day) {
    document.querySelectorAll('.task-button').forEach(button => {
        button.classList.toggle('selected', button.textContent.toLowerCase() === day);
    });
}

// Create and return an exercise card element
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.classList.add('card');

    // =========================
    // Create Card Top Section
    // =========================
    const cardTop = document.createElement('div');
    cardTop.classList.add('card-top');

    // Card Header (Title)
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = exercise.exercise;

    // Divider Below Title
    const dividerTop = document.createElement('hr');
    dividerTop.classList.add('divider');

    // Card Body (Description)
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.textContent = exercise.description;

    // Tags Section
    const tags = document.createElement('div');
    tags.classList.add('tags');
    tags.innerHTML = createTags(exercise);

    // Append elements to Card Top
    cardTop.appendChild(cardHeader);
    cardTop.appendChild(dividerTop);
    cardTop.appendChild(cardBody);
    cardTop.appendChild(tags);

    // =========================
    // Create Card Bottom Section
    // =========================
    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom');

    // Social Media Icons
    const socialIcons = document.createElement('div');
    socialIcons.classList.add('social-icons');

    // Encode exercise name for URL
    const searchQuery = encodeURIComponent(exercise.exercise.replace(/\s+/g, '+'));

    // YouTube Link
    const youtubeLink = document.createElement('a');
    youtubeLink.href = `https://www.youtube.com/results?search_query=${searchQuery}`;
    youtubeLink.target = '_blank';
    youtubeLink.setAttribute('aria-label', `Search ${exercise.exercise} on YouTube`);
    youtubeLink.innerHTML = '<i class="fab fa-youtube youtube-icon"></i>';

    // TikTok Link
    const tiktokLink = document.createElement('a');
    tiktokLink.href = `https://www.tiktok.com/search?q=${searchQuery}`;
    tiktokLink.target = '_blank';
    tiktokLink.setAttribute('aria-label', `Search ${exercise.exercise} on TikTok`);
    tiktokLink.innerHTML = '<i class="fab fa-tiktok tiktok-icon"></i>';

    // Append Social Media Links
    socialIcons.appendChild(youtubeLink);
    socialIcons.appendChild(tiktokLink);

    // Divider Below Social Icons
    const dividerBottom = document.createElement('hr');
    dividerBottom.classList.add('divider-bottom');

    // Sets and Reps Container
    const setsRepsContainer = document.createElement('div');
    setsRepsContainer.classList.add('sets-reps-container');

    // Reps Item
    const repsItem = document.createElement('div');
    repsItem.classList.add('sets-reps-item');

    const repsBigText = document.createElement('div');
    repsBigText.classList.add('big-text');
    repsBigText.textContent = exercise.reps;

    const repsSmallText = document.createElement('div');
    repsSmallText.classList.add('small-text');
    repsSmallText.textContent = 'REPS';

    repsItem.appendChild(repsBigText);
    repsItem.appendChild(repsSmallText);

    // Sets Item
    const setsItem = document.createElement('div');
    setsItem.classList.add('sets-reps-item');

    const setsBigText = document.createElement('div');
    setsBigText.classList.add('big-text');
    setsBigText.textContent = exercise.sets;

    const setsSmallText = document.createElement('div');
    setsSmallText.classList.add('small-text');
    setsSmallText.textContent = 'SETS';

    setsItem.appendChild(setsBigText);
    setsItem.appendChild(setsSmallText);

    // Append Sets and Reps Items
    setsRepsContainer.appendChild(repsItem);
    setsRepsContainer.appendChild(setsItem);

    // Append elements to Card Bottom in the desired order:
    // 1. Social Media Icons
    // 2. Divider
    // 3. Sets and Reps
    cardBottom.appendChild(socialIcons);
    cardBottom.appendChild(dividerBottom);
    cardBottom.appendChild(setsRepsContainer);

    // =========================
    // Append Top and Bottom to Card
    // =========================
    card.appendChild(cardTop);
    card.appendChild(cardBottom);

    // =========================
    // Help Icon
    // =========================
    const helpIcon = document.createElement('i');
    helpIcon.classList.add('help-icon', 'fa-solid', 'fa-circle');

    // Add click event listener to `help-icon` only for toggling completion
    helpIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the card's click event
        toggleCompletion(card, helpIcon);
    });

    card.appendChild(helpIcon);

    return card;
}

// Generate tags HTML for an exercise
function createTags(exercise) {
    const tags = [
        `<span class="main-tag">${exercise.muscleGroup}</span>`,
        ...exercise.secondaryMuscles.map(muscle => `<span class="secondary-tag">${muscle}</span>`),
        `<span class="category-tag">${exercise.category}</span>`,
        `<span class="movement-tag">${exercise.movementType}</span>`,
        `<span class="plane-tag">${exercise.plane}</span>`,
        `<span class="joints-tag">${exercise.joints}</span>`,
        `<span class="difficulty-tag">${exercise.difficulty}</span>`,
        `<span class="equipment-tag">${exercise.equipment}</span>`,
        `<span class="group-tag">${exercise.group}</span>`
    ];
    return tags.join('');
}

// Toggle completion status for an exercise card via `help-icon`
function toggleCompletion(card, helpIcon) {
    const isCompleted = card.classList.toggle('completed');
    helpIcon.classList.toggle('fa-circle', !isCompleted);
    helpIcon.classList.toggle('fa-circle-check', isCompleted);

    completedCount += isCompleted ? 1 : -1;
    updateProgress();
}

// Update the progress bar based on completed exercises
function updateProgress() {
    const totalCards = document.querySelectorAll('.card').length;
    const progressPercentage = totalCards ? (completedCount / totalCards) * 100 : 0;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.style.backgroundColor = (completedCount === totalCards && totalCards > 0) ? '#ffb500' : '#00babc';
}

// Update the date and dynamically adjust format based on screen size
function updateDateCard() {
    const today = new Date();
    const longFormat = { year: 'numeric', month: 'long', day: 'numeric' };
    const shortFormat = { month: 'short', day: 'numeric' };

    const isSmallScreen = window.innerWidth <= 600;
    const dateFormat = isSmallScreen ? shortFormat : longFormat;

    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        currentDateElement.textContent = today.toLocaleDateString('en-US', dateFormat);
    }
}

// Attach resize event to update date format on window resize
window.addEventListener('resize', updateDateCard);
