import React, { useState } from "react";
import "./HomePage.css";
import GreetUser from "./GreetUser";

export default function HomePage(){
const [greeting, setGreeting] = useState("hello");

function Opener(event){
    event.preventDefault();
    setGreeting(<GreetUser />);
}
    return(
<div>
    <h1>{greeting}</h1>
        <button onClick={Opener} className="greetingButton">Hello</button>
    <h2>
      <em><u>Meet Peter Parker and Goblin</u></em>
    </h2>
        <br />
    <div className="storytext">
      <p>
        <strong>Once </strong>upon a time in a peaceful village, there lived a
        humble young woman named Blossom. She was known throughout the village
        for her kindness and love for animals.
      </p>
      <p>
        Her two beloved cats, Peter Parker and Goblin, were the talk of the town
        for their mischievous antics and playful nature. Goblin was a sleek
        black cat with bright green eyes, while Peter Parker was a fluffy
        Mainecoon mix with a loud purr. Despite their differences in appearance,
        they were the best of friends and inseparable companions to Blossom.
      </p>
      <p>
        One sunny afternoon, as Blossom was out tending to her garden, she
        noticed a group of villagers gathered around a tree, pointing and
        whispering. Curious, Blossom made her way over to see what the commotion
        was about. To her horror, she saw Peter Parker stuck up in the tree,
        unable to climb down. Without hesitation, Blossom called out to Goblin,
        who immediately scampered up the tree with ease.
      </p>
      <p>
        With a swift flick of his paw, Goblin helped Peter Parker safely down to
        the ground. The villagers cheered and applauded, amazed by the bravery
        and teamwork of the two cats. From that day on, Peter Parker and Goblin
        were hailed as heroes in the village.
      </p>
      <p>
        Blossom, grateful for their loyalty and bravery, made sure to spoil them
        with their favorite treats and toys. Together, the trio lived happily
        ever after, their bond stronger than ever before. <br />And so, the tale
        of the brave cats, Peter Parker and Goblin, became a legendary story
        passed down through the generations, reminding all who heard it of the
        power of friendship and courage.
      </p>
        <br />
      <span className="storylink">
        <a href="https://www.editpad.org/tool/story-generator" target=" blank">AI Story Generator</a>
      </span>
    </div>
    <br />
    <img
      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/120/312/original/IMG_0363.jpeg?1711140598"
      alt="a sleek black cat with green eyes to the left and a grey striped cat with green eyes and fluffy fur to the right"
    />
    <br />
    <button>Fun Facts</button>
    <br />
    <hr />
    <span className="footer">Made by <a href="https://www.blossomarmstrong.com" target="_blank" rel="noreferrer">Blossom A</a></span></div>)
}