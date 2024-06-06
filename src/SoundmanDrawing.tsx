import React from 'react'; // Import React if not already imported
import boothImage from './soundman.png/booth.png'; // Import the booth.png image
import headImage from './soundman.png/head.png'; 
import bodyImage from './soundman.png/body.png';
import headphoneImage from './soundman.png/headphones.png';
import leftRecordImage from './soundman.png/left_record.png'; 
import leftArmImage from './soundman.png/left_arm.png';
import rightRecordImage from './soundman.png/right_record.png';
import rightArmImage from './soundman.png/right_arm.png';



const BOOTH = (
  <img
    src={boothImage}
    alt="Booth"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)


const HEAD = (
  <img
    src={headImage}
    alt="Head"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)


const BODY = (
  <img
    src={bodyImage}
    alt="Body"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)

const HEADPHONES = (
  <img
    src={headphoneImage}
    alt="Headphones"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)

const LEFT_RECORD = (
  <img
    src={leftRecordImage}
    alt="Left Record"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)

const LEFT_ARM = (
  <img
    src={leftArmImage}
    alt="Left Arm"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)

const RIGHT_RECORD = (
  <img
    src={rightRecordImage}
    alt="Right Record"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)

const RIGHT_ARM = (
  <img
    src={rightArmImage}
    alt="Right Arm"
    style={{
      position: "absolute",
      top: 0,
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
    }}
  />
)

const BODY_PARTS = [HEAD, BODY, HEADPHONES, LEFT_RECORD, LEFT_ARM, RIGHT_RECORD, RIGHT_ARM]

type SoundmanDrawingProps = {
  numberOfGuesses: number
}

export function SoundmanDrawing({ numberOfGuesses }: SoundmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BOOTH}
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </div>
  )
}
