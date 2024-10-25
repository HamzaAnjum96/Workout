// Placeholder for Workout Data
const WorkoutData = {
  push: [
    {
      exercise: "Dumbbell Bench Press",
      sets: "4",
      reps: "6-8",
      muscleGroup: "Chest",
      secondaryMuscles: ["Shoulders", "Triceps"],
      equipment: "Dumbbells",
      group: "Push",
      description: "A basic chest exercise targeting the pectoral muscles.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Compound",
      plane: "Transverse",
      joints: "Multi-Joint"
    },
    {
      exercise: "Overhead Dumbbell Press",
      sets: "4",
      reps: "6-8",
      muscleGroup: "Shoulders",
      secondaryMuscles: ["Triceps"],
      equipment: "Dumbbells",
      group: "Push",
      description: "A compound movement working the shoulders and upper arms.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Compound",
      plane: "Frontal",
      joints: "Multi-Joint"
    },
    {
      exercise: "Incline Dumbbell Bench Press",
      sets: "3",
      reps: "6-8",
      muscleGroup: "Upper Chest",
      secondaryMuscles: ["Shoulders", "Triceps"],
      equipment: "Dumbbells",
      group: "Push",
      description: "Targets the upper chest, giving your pecs a fuller look.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Compound",
      plane: "Transverse",
      joints: "Multi-Joint"
    },
    {
      exercise: "Dumbbell Lateral Raise",
      sets: "3",
      reps: "10-12",
      muscleGroup: "Shoulders",
      secondaryMuscles: [],
      equipment: "Dumbbells",
      group: "Push",
      description: "Isolates the lateral deltoids, building width in your shoulders.",
      category: "Hypertrophy",
      difficulty: "Beginner",
      movementType: "Isolation",
      plane: "Frontal",
      joints: "Single-Joint"
    },
    {
      exercise: "Dumbbell Skull Crushers",
      sets: "3",
      reps: "8-10",
      muscleGroup: "Triceps",
      secondaryMuscles: [],
      equipment: "Dumbbells",
      group: "Push",
      description: "Targets the triceps, helping to build strength and size.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Isolation",
      plane: "Sagittal",
      joints: "Single-Joint"
    }
  ],
  pull: [
    {
      exercise: "One-Arm Dumbbell Row",
      sets: "4",
      reps: "6-8",
      muscleGroup: "Back",
      secondaryMuscles: ["Biceps"],
      equipment: "Dumbbells",
      group: "Pull",
      description: "Strengthens your lats, traps, and rhomboids for a bigger back.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Compound",
      plane: "Transverse",
      joints: "Multi-Joint"
    },
    {
      exercise: "Lat Pulldown",
      sets: "4",
      reps: "6-8",
      muscleGroup: "Lats",
      secondaryMuscles: ["Biceps"],
      equipment: "Machine",
      group: "Pull",
      description: "Great for lat development and creating a V-shaped upper body.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Compound",
      plane: "Frontal",
      joints: "Multi-Joint"
    },
    {
      exercise: "Seated Row",
      sets: "4",
      reps: "6-8",
      muscleGroup: "Mid Back",
      secondaryMuscles: ["Biceps"],
      equipment: "Machine",
      group: "Pull",
      description: "Targets the mid-back, improving posture and building strength.",
      category: "Strength",
      difficulty: "Beginner",
      movementType: "Compound",
      plane: "Transverse",
      joints: "Multi-Joint"
    },
    {
      exercise: "Dumbbell Bicep Curls",
      sets: "3",
      reps: "8-10",
      muscleGroup: "Biceps",
      secondaryMuscles: ["Forearms"],
      equipment: "Dumbbells",
      group: "Pull",
      description: "Isolates the biceps to build strength and muscle definition.",
      category: "Strength",
      difficulty: "Beginner",
      movementType: "Isolation",
      plane: "Sagittal",
      joints: "Single-Joint"
    },
    {
      exercise: "Hammer Curls",
      sets: "3",
      reps: "8-10",
      muscleGroup: "Biceps",
      secondaryMuscles: ["Forearms"],
      equipment: "Dumbbells",
      group: "Pull",
      description: "Works both the biceps and forearms for balanced arm development.",
      category: "Strength",
      difficulty: "Beginner",
      movementType: "Isolation",
      plane: "Sagittal",
      joints: "Single-Joint"
    }
  ],
  legs: [
    {
      exercise: "Dumbbell Squats",
      sets: "4",
      reps: "6-8",
      muscleGroup: "Legs",
      secondaryMuscles: ["Glutes", "Hamstrings"],
      equipment: "Dumbbells",
      group: "Legs",
      description: "A basic leg movement that builds strength and muscle mass.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Compound",
      plane: "Sagittal",
      joints: "Multi-Joint"
    },
    {
      exercise: "Leg Press",
      sets: "4",
      reps: "6-8",
      muscleGroup: "Legs",
      secondaryMuscles: ["Glutes"],
      equipment: "Machine",
      group: "Legs",
      description: "Targets the quadriceps, hamstrings, and glutes with controlled range of motion.",
      category: "Strength",
      difficulty: "Beginner",
      movementType: "Compound",
      plane: "Sagittal",
      joints: "Multi-Joint"
    },
    {
      exercise: "Lunges (Dumbbell)",
      sets: "3",
      reps: "8-10",
      muscleGroup: "Legs",
      secondaryMuscles: ["Glutes", "Core"],
      equipment: "Dumbbells",
      group: "Legs",
      description: "Develops leg strength and balance.",
      category: "Strength",
      difficulty: "Intermediate",
      movementType: "Unilateral",
      plane: "Sagittal",
      joints: "Multi-Joint"
    },
    {
      exercise: "Leg Curl",
      sets: "3",
      reps: "8-10",
      muscleGroup: "Hamstrings",
      secondaryMuscles: [],
      equipment: "Machine",
      group: "Legs",
      description: "Isolates the hamstrings, strengthening the back of the legs.",
      category: "Strength",
      difficulty: "Beginner",
      movementType: "Isolation",
      plane: "Sagittal",
      joints: "Single-Joint"
    },
    {
      exercise: "Calf Raises",
      sets: "3",
      reps: "12-15",
      muscleGroup: "Calves",
      secondaryMuscles: [],
      equipment: "Bodyweight/Dumbbells",
      group: "Legs",
      description: "Targets the calves, improving strength and definition.",
      category: "Strength",
      difficulty: "Beginner",
      movementType: "Isolation",
      plane: "Sagittal",
      joints: "Single-Joint"
    }
  ]
};

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
////////////////////////
let completedCount = 0;

// Initialize the app on load
document.addEventListener('DOMContentLoaded', () => {
    updateDateCard();
    selectButton('push'); // Default selection on load
    showDay('push');
});

// Display exercises for the selected day and highlight the selected button
function showDay(day) {
    const container = document.getElementById('workout-container');
    container.innerHTML = ''; // Clear existing content

    WorkoutData[day].forEach((exercise) => {
        const card = createExerciseCard(exercise);
        container.appendChild(card);
    });

    completedCount = 0; // Reset completed count for new day selection
    selectButton(day); // Update selected button state
    updateProgress();
}

// Expose `showDay` globally for the HTML onclick to work
window.showDay = showDay;

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

    // Instagram Link
    const instagramLink = document.createElement('a');
    instagramLink.href = `https://www.instagram.com/explore/tags/${searchQuery}`;
    instagramLink.target = '_blank';
    instagramLink.setAttribute('aria-label', `Search ${exercise.exercise} on Instagram`);
    instagramLink.innerHTML = '<i class="fab fa-instagram instagram-icon"></i>';

    // Append Social Media Links
    socialIcons.appendChild(youtubeLink);
    socialIcons.appendChild(tiktokLink);
    socialIcons.appendChild(instagramLink);

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

    card.appendChild(helpIcon);

    // =========================
    // Event Listeners for Completion
    // =========================
    card.addEventListener('click', () => toggleCompletion(card, helpIcon));
    helpIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the card's click event
        toggleCompletion(card, helpIcon);
    });

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

// Toggle completion status for an exercise card
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
