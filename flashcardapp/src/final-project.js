import { useState } from 'react';
import './App.css';

const flashcards = [
{ id: 1, hiragana: "あ", english: "a"},
{ id: 2, hiragana: "い", english: "i"},
{ id: 3, hiragana: "う", english: "u"},
{ id: 4, hiragana: "え", english: "e"},
{ id: 5, hiragana: "お", english: "o"},
{ id: 6, hiragana: "か", english: "ka"},
{ id: 7, hiragana: "き", english: "ki"},
{ id: 8, hiragana: "く", english: "ku"},
{ id: 9, hiragana: "け", english: "ke"},
{ id: 10, hiragana: "こ", english: "ko"},
{ id: 11, hiragana: "が", english: "ga"},
{ id: 12, hiragana: "ぎ", english: "gi"},
{ id: 13, hiragana: "ぐ", english: "gu"},
{ id: 14, hiragana: "げ", english: "ge"},
{ id: 15, hiragana: "ご", english: "go"},
]

function FlashcardApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentCard = flashcards[currentIndex];
  const maxIndex = flashcards.length - 1

const nextCard = () => {
  setIsFlipped(false);
  if (currentIndex < maxIndex) {
    setCurrentIndex(currentIndex + 1)
  } else {
    setCurrentIndex(0);
};
};

<h1>Let's Learn Japanese!</h1>

return (
  <div>
    <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? currentCard.hiragana : currentCard.english}
    </div>
    <button onClick={nextCard}>Next Card</button>
  </div>
  );  
}

export default FlashcardApp;