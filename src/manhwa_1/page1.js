import React, { useState } from 'react';
import '../App.css';
import Nav from '../sections/Nav';
import Footer from '../sections/footer';

const Page1 = () => {
    const [minorLoaded, setMinorLoaded] = useState(false);

    // Major Characters
    const majorCharacters = [
        {
            name: "Hades",
            img: "hades.png",
            description: "In the Lore Olympus webtoon, Hades, the God of the underworld, takes center stage. Often depicted as a handsome blue man in a business suit, Hades runs the Underworld Corporation, serves as the older brother of Zeus and Poseidon, and plays a role in the Six Traitor Dynasty. His character takes on the burden of leadership and pursuing personal interests."
        },
        {
            name: "Persephone",
            img: "presephone.png",
            description: "Persephone, the goddess of spring, is the story’s heroine alongside the underworld. Initially portrayed as an innocent and naive young woman, her character develops dramatically as she faces more challenges. Persephone is depicted with pink skin and a generous heart, a stark contrast to the harsh reality of Olympus. Her journey included discovering her strength, and she dealt with the trauma of being raped by Apollo, as well as her strong feelings about the underworld."
        },
        {
            name: "Demeter",
            img: "eors.png",
            description: "The Goddess of the Harvest. Protective and nurturing.Demeter, the harvest goddess, is Persephone’s overprotective mother. She is a tall, green woman with long red hair. Her stern and controlling nature stemmed from a deep-seated fear of what her daughter could do and the dangers she faced."
        },
        {
            name: "Zeus",
            img: "zeus.png",
            description: "The King of the Gods. Powerful and often reckless.Zeus, the king of the gods, is depicted as a yellow-skinned man with long, straight hair. Known for his promiscuity and egotism, Zeus’ actions often brought chaos to Olympus. A member of the Six Realms of Lies, he has intimate relationships with many characters, including his brothers Hades and Poseidon, and many lovers. His character provides a lens through which to examine issues of power and corruption."
        }
    ];

    // Minor Characters
    const minorCharacters = [
        {
            name: "Poseidon",
            img: "poeisdon.png",
            description: "God of the Sea. Calm yet capable of great fury. Poseidon, the God of the sea, is Zeus’s brother from the underworld. He is usually characterized by a carefree and quick temperament, portrayed with green skin and long, wavy hair. Despite being slightly less witted, Poseidon is very loyal to his family. His relationship with his wife Amphitrite and their polygamous arrangement add an intriguing dynamic to his character."
        },
        {
            name: "Eros",
            img: "eors.png",
            description: "The God of Love. Mischievous, playful, and often misunderstood. Eros, the God of love and the son of Aphrodite and Ares is a strong, maroon young man. He is one of Persephone’s best friends and knows the depression she is enduring. Eros is supportive and loving, often helping to nurture other romantic relationships as he deals with his challenges, including his relationship with Psyche."
        },
        {
            name: "Hermes",
            img: "hermes.png",
            description: "The Messenger of the Gods. Witty, fast, and always full of surprises. Hermes, the God of speed travel, is depicted as an athletic man in red. He works as a soul collector for Hades and is an old friend of Persephone. His character adds lightness and realism to the story."
        },
        {
            name: "Aphrodite",
            img: "poeisdon.png",
            description: "Goddess of Love and Beauty. Often portrayed as alluring and complex. Aphrodite is depicted as a stunningly beautiful woman with a captivating personality, known for her romantic entanglements and the impact she has on the relationships of others. Her character explores themes of love, desire, and jealousy."
        },
        {
            name: "Dionysus",
            img: "hermes.png",
            description: "The God of Wine and Festivity. Dionysus is characterized by his revelry and freedom. He embodies the spirit of joy and chaos, often bringing both celebration and disruption wherever he goes. His relationships are marked by passion and intensity."
        },
        {
            name: "Hecate",
            img: "eors.png",
            description: "Goddess of Magic and Witchcraft. Hecate is a mysterious figure associated with magic, ghosts, and the night. She is depicted as a powerful and wise woman, often helping others navigate their struggles through her knowledge of the mystical."
        },
    ];

    const loadMoreCharacters = () => {
        setMinorLoaded(!minorLoaded);
    };

    return (
        <div>
            {/* Navbar */}
           <Nav/>

            {/* Content Below Navbar */}
            <div className='content-container'>
                <div className="headline">
                    <h1>Lore Olympus Webtoon: Jaw Dropping Scenes on Media</h1>
                    <p>Dive into the intricate world of "Lore Olympus," where ancient myths collide with modern storytelling, exploring power, love, trauma, and identity in captivating ways.</p>
                </div>

                <section className="hero">
                    <img src='background-image.png' alt="Background" />
                    <h1>Welcome to Lore Olympus</h1>
                </section>

                <section className='intro'>
                    <p>
                        Rachel Smith’s Lore Olympus webtoon is a modern retelling of the ancient Greek myth of Hades and Persephone, which has taken the digital comics world by storm. This article explores the complex world of “Lore Olympus,” providing details on the Lore Olympus characters, major themes, and the impact this beloved series has on readers.
                    </p>
                </section>

                <section className='table_of_content'>
                    <details>
                        <summary>Table of Contents</summary>
                        <ol>
                            <li><a href="#major-characters">Main Characters</a></li>
                            <ol>
                                <li><a href="#hades">Hades</a></li>
                                <li><a href="#persephone">Persephone</a></li>
                                <li><a href="#demeter">Demeter</a></li>
                                <li><a href="#zeus">Zeus</a></li>
                            </ol>
                            <li><a href="#minor-characters">Minor Characters</a></li>
                            <ol>
                                <li><a href="#poseidon">Poseidon</a></li>
                                <li><a href="#eros">Eros</a></li>
                                <li><a href="#hermes">Hermes</a></li>
                                <li><a href="#aphrodite">Aphrodite</a></li>
                                <li><a href="#dionysus">Dionysus</a></li>
                                <li><a href="#hecate">Hecate</a></li>
                            </ol>
                        </ol>
                    </details>
                </section>

                <section className='characters'>
                    <h2 id="major-characters">Major Characters</h2>
                    {majorCharacters.map(character => (
                        <div className="character-card" key={character.name} id={character.name.toLowerCase()}>
                            <h3>{character.name}</h3>
                            <img src={character.img} alt={character.name} />
                            <p>{character.description}</p>
                        </div>
                    ))}

                    <h2 id="minor-characters">Minor Characters</h2>
                    <button onClick={loadMoreCharacters} className="load-more">
                        {minorLoaded ? "Hide Minor Characters" : "Show Minor Characters"}
                    </button>

                    {minorLoaded && (
                        <div className="minor-characters">
                            {minorCharacters.map(character => (
                                <div className="character-card" key={character.name} id={character.name.toLowerCase()}>
                                    <h3>{character.name}</h3>
                                    <img src={character.img} alt={character.name} />
                                    <p>{character.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                <section className='final_words'>
                    <h1>Final Words for Lore Olympus</h1>
                    <p>
                        “Lore Olympus” is not a retelling of modern Greek mythology; It is a beautiful tapestry of interlocking stories that explore deep themes of power, love, trauma, and identity. Rachel Smith’s vibrant art and nuanced storytelling have created a world that deeply affects readers, offering entertainment and insight. Let us know in the comments below what you think about the modern re-telling of Greek mythology.
                    </p>
                </section>
                <section className='tags_container'>
                    <div className='tags'>
                        <p style={{ color: 'black', fontWeight: 'bolder', backgroundColor: 'transparent' }}>Tags: </p>
                        <p>Hades</p>
                        <p>Persephone</p>
                        <p>Zeus</p>
                        <p>Lore Olympus</p>
                    </div>
                </section>
                <section className="comment-section">
                    <h2>Leave a Comment</h2>
                    <form className="comment-form">
                        <textarea
                            placeholder="Leave Your Comment..."
                            required
                        ></textarea>
                        <button type="submit">POST COMMENT</button>
                    </form>
                </section>
               <Footer/>
            </div>
        </div>
    );
};

export default Page1;
