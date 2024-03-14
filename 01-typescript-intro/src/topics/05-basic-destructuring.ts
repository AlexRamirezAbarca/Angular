interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheran',
        year: 2015
    }
}

const {
    song: anotherSong,
    songDuration: duration,
    details } = audioPlayer;

const { author: anotherAuthor, year: anotherYear } = details

console.log('Author ', anotherAuthor);
console.log('Year ', anotherYear);



console.log(`Song: `, anotherSong);
console.log(`Duration: `, duration);


//console.log(audioPlayer);


const dbz: string[] = ['Goku', 'Vegetta'];


const [, , trunks = 'Not Found'] = dbz

console.log();

console.log(`Personaje 3 : `, trunks);



export { }