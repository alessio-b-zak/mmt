import React from 'react'
import { createUseStyles } from 'react-jss'


const untitledPoemsStyle = createUseStyles({
    preft : {
        wordBreak: 'break-word',
        whiteSpace: 'pre-line'
    }
})

const UntitledPoems = () => {
    const classes = untitledPoemsStyle()
    return (
        <div>
            <h1>3 poems</h1>
            <h2>Esther Lowlands</h2>
            <b>Bletchley Park Walks With Me</b>
            <br/>
            <div className={classes.preft}>
            {`Bletchley Park walks with me 
            As I travel late at night through Bristol
            They say we've got news about my friends
            We hacked into their telepathy forums and heard everything they said 
            I know they've told me lies, and that they'll never admit it
            But I've become resigned, I know I'll never feel any different  
            God blew up in my family home 
            I flew into the windowsill and down to the floor 
            And there staring at the ceiling 
            I found a type of emptiness that feels like warmth
            There's a very small price to pay 
            You can never fall in love 
            But Bletchley Park says it would never happen anyway  
            Every time I try to leave it I come back like the prodigal son
            Feeling stupid and repentant and even number than before
            `}
            </div>
            <br/>
            <br/>
            <br/>
            <b>The Rise Of Severn Bridge</b>
            <br/>
            <div className={classes.preft}>
            {`Hundreds of red lights beaming out to the night 
            A hunkering metal shrine calling out my name 
            Do the drivers beneath know what they're passing under?
            The drivers to my side never cared much about me 
            Earlier today I argued with Hitler in the woods
            Eichmann, Goebbels and all his friends came too
            Every scream and the sky changed colour 
            And I noticed I had changed worlds  
            I slid under a night of darkness 
            Avoiding the agents, disguised as the villages of
            Easter Compton 
            Pilning, and the very lucky people of Severn Beach 
            I was hiding from the electricity 
            Under a thicket, dirt rubbed all over 
            That is when I first saw it, emerging from the darkness. 
            I have crawled through the tunnel of the vacuum 
            and am now prepared to enter a parrarel universe 
            My phone is dead and millions of souls are all calling out my name
            The nazis from the woods couldn't stop me after all
            I am now converted, a member of Severn Bridge
            Well where was everyone else? when Severn Bridge appeared
            With the police, dumbfounded, and cowering in fear 
            The tyranny of my escape torments them 
            But just like me, it was the lights that hit them `}
            </div>
            <br/>
            <br/>
            <br/>
            <b>circles</b>
            <br/>
            <div className={classes.preft}>
            {`I think I'll start again now
            This is simply who I am
            Even if I sometimes regret doing this
            It's still always so much fun and makes me simply not care
            I've never achieved anything else
            Or truly been loved
            But it makes me feel like that doesn't matter
            And i Lie back on it
            And listen to its whispers
            In the back of my mind
            And i feed it more and more

            I think I'll stop now
            I can't remember large chunks of my life
            Who my childhood best friend was, where I used to work
            It's too obvious to hide now and my friends are horrified
            And they think its grotesque
            The way i am slowly pulling myself apart
            And I owe them all money
            I have never overcome anything in my life
            How am I meant to overcome this?
            Alone I wait for my moment of lucidity to pass
            And for the cycle to start again
            For maybe a few moments
            After it goes up my nose
            I wont care again
            In the meantime I will cry for what I have done with my life

            I have never overcome anything in my life
            So how am I meant to overcome this?

            I think I'll start now
            It's so much fun to do
            It makes me feel so zen and makes me forget my troubles
            I love the way it feels when it goes into my face
            And the way it makes me stay awake
            For days and days
            The way by the end
            I will not know where I am, or who I am
            I will exist in a shifting landscape
            Where I am at a party
            And alone in my room
            And become one with it

            I think i'll stop now
            I feel so depressed and sad
            And torn apart inside and lethargic
            It brings all my problems right to the front of my brain
            And forces me to view them again and again
            I hate the way I feel the week after
            For days and days
            ANd my friends are concerned
            And I lie to them and say
            I saw someone die
            When really I did this to myself
            I am alone in my embarrassment
            `}
            </div>
        </div>
    )
}

export default UntitledPoems    