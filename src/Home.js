import { useState } from 'react';
import CommentList from './CommentList';

const Home = () => {
    const [words, setWords] = useState(
        [
            { id: 1, color: "blue", word: "Hey"},
            { id: 2, color: "blue", word: "Jude,"},
            { id: 3, color: "red", word: "don't"},
            { id: 4, color: "green", word: "make"},
            { id: 5, color: "red", word: "it"},
            { id: 6, color: "red", word: "bad"}
        ]
    );

    const handlePainting = (word) => {
        const updatedWords = words.map(item => 
        {
            if (item.id == word.id){
                if (item.color == 'blue'){
                    return {...item, color: "red"}; 
                } else if (item.color == 'green'){
                    return {...item, color: "blue"};
                } 
            }
            return item;
        });
        setWords(updatedWords); 
    }   

    return ( 
        <div className="home">
            <CommentList words={words} handlePainting={handlePainting} />
        </div>
     );
}
 
export default Home;
