type SoundmanArtistProps = {
    guessedLetters: string[];
    artistToGuess: string;
    reveal?: boolean;
};

export function SoundmanArtist({
    guessedLetters,
    artistToGuess,
    reveal = false,
}: SoundmanArtistProps) {
    return (
        //css for artist to guess 
        <div
            style={{
                position: "absolute",
                top: 570,
                display: "flex",
                gap: ".25em",
                fontSize: "4.25rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
            }}
        >
            {artistToGuess.split("").map((letter, index) => (
    <span style={{ borderBottom: letter === " " ? "none" : ".1em solid black" }} key={index}>
        {letter === " " ? (
            <span>&nbsp;</span>
        ) : (
            <span
                style={{
                    visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                    color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
                }}
            >
                {letter}
            </span>
        )}
    </span>
))}

        </div>
    );
}
