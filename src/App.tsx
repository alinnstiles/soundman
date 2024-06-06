import { useCallback, useEffect, useState } from "react"
import { SoundmanDrawing } from "./SoundmanDrawing"
import { SoundmanArtist } from "./SoundmanArtist"
import { Keyboard } from "./Keyboard"
import artists from "./artistList.json"


function getArtist() {
  return artists[Math.floor(Math.random() * artists.length)]
}


function App() {
  //state to pull random artist from json list
  const [artistToGuess, setArtistToGuess] = useState(getArtist)
  //state to track which letters have been guessed
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !artistToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 7
  const isWinner = artistToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter)) 

    const addGuessedLetter = useCallback(
      (letter: string) =>{
        letter = letter.toUpperCase();
        letter = letter.toLowerCase(); // Convert guessed letter to lowercase

        if (guessedLetters.includes(letter) || isLoser || isWinner) 
          return;
    
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
      }, 
      [guessedLetters, isWinner, isLoser, artistToGuess]
    );
    

  //event listerner for actaul keyboard 
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addGuessedLetter(key) 
    }

    document.addEventListener("keydown", handler) 

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return 

      e.preventDefault()
      setGuessedLetters([])
      setArtistToGuess(getArtist())

      e.preventDefault()
      addGuessedLetter(key) 
    }

    document.addEventListener("keydown", handler) 

    return () => {
      document.removeEventListener("keydown", handler)
    }

  }, [])

   //implement JSX for rendering this state and drawing out
   return (
    <div
      style={{
        maxWidth: "1050px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        position: "relative", // Ensure relative positioning for the container
        backgroundColor: "pink"
      }}
    >
      {/* Soundman Drawing component */}
      <div style={{ position: "absolute", top: "-10em", left: "50%", transform: "translateX(-50%)" }}>
        <SoundmanDrawing numberOfGuesses={incorrectLetters.length}/> 
      </div>
      
      <div 
        style={{
          fontSize: "2rem",
          textAlign: "center"
        }}
      >
        {isWinner && "Winner! - Refresh to try again"} 
        {isLoser && "Nice try - Refresh to try again"} 
      </div>
      <SoundmanArtist 
        reveal={isLoser}
        guessedLetters={guessedLetters} 
        artistToGuess={artistToGuess}
      />
      <div style={{alignSelf: "stretch", top: "10em", left: "0%", transform: "translateX(-0%)" }}>
        <Keyboard 
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => artistToGuess.includes(letter))} 
          inactiveLetters={incorrectLetters} 
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}
export default App;