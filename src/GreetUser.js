import React from "react";

export default function GreetUser(){
    let name = prompt("What is your name?");
    let petName = prompt("What is your pet's name?");

        return(
        <h1>Hi {name} and {petName}! 🐾</h1>
    );
}
