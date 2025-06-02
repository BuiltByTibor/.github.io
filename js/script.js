document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Practice questions functionality
    const checkAnswerBtns = document.querySelectorAll('.check-answer');
    
    checkAnswerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const correctAnswer = input.getAttribute('data-answer');
            const solution = this.nextElementSibling;
            
            if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                solution.classList.add('show');
                input.style.borderColor = '#2ecc71';
            } else {
                input.style.borderColor = '#e74c3c';
                alert('Try again!');
            }
        });
    });
    
    // Allow Enter key to check answers
    const answerInputs = document.querySelectorAll('.answer-input');
    
    answerInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.nextElementSibling.click();
            }
        });
    });
    
    // Flashcards functionality
    const startFlashcardsBtn = document.getElementById('start-flashcards');
    const difficultyBtns = document.querySelector('.difficulty-btns');
    const flashcardContainer = document.querySelector('.flashcard-container');
    const flashcards = document.querySelectorAll('.flashcard');
    const flashcardCompletion = document.querySelector('.flashcard-completion');
    let currentCardIndex = 0;
    
    if (startFlashcardsBtn) {
        startFlashcardsBtn.addEventListener('click', function() {
            this.classList.add('hidden');
            difficultyBtns.classList.remove('hidden');
            flashcardContainer.classList.remove('hidden');
            showCard(currentCardIndex);
        });
    }
    
    function showCard(index) {
        // Hide all cards first
        flashcards.forEach(card => card.classList.add('hidden'));
        
        // Show current card
        if (index < flashcards.length) {
            flashcards[index].classList.remove('hidden');
        } else {
            // All cards completed
            flashcardContainer.classList.add('hidden');
            difficultyBtns.classList.add('hidden');
            flashcardCompletion.classList.remove('hidden');
        }
    }
    
    // Flip card on click
    flashcards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
    
    // Difficulty buttons
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add class based on difficulty for tracking (you can implement this)
            // Move to next card
            currentCardIndex++;
            showCard(currentCardIndex);
        });
    });
});
