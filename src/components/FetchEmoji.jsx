import { useEffect, useState } from 'react';

function FetchEmoji() {
    const [emojiData, setEmojiData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/emojis');

                if (!response.ok) {
                    throw new Error(`HTtp error! Status: ${response.status}`);
                }

                const data = await response.json();

                setEmojiData(data);

                console.log(data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, ['https://api.github.com/emojis']);

    return (
        <div>
            <h1>Emojis</h1>
            <div className='container'>
                {Object.entries(emojiData).map(([emojiName, emojiurl]) => (
                    <div key={emojiName} className='container-items'>
                        <img
                            src={emojiurl}
                            alt={emojiName}
                            style={{ width: '50px', height: '50px', margin: '5px'}}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchEmoji;