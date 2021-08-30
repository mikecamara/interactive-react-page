import PropTypes from 'prop-types';

const CommentList = ({words, handlePainting}) => {

    return ( 
        <div className="word-list">
            <ul>
             {words.sort((a, b) => a.id > b.id ? 1:-1).map((word)=>(
                <div className="word-preview" key={word.id}>
                        <li className={word.color}>{word.word}
                        <button className={"button-paint"} onClick={ () => handlePainting(word) }>PAINT</button>
                        </li>
                        
                </div>
            ))}
            </ul>
        </div>
     );
}

CommentList.propTypes = {
    words: PropTypes.array,
    handlePainting: PropTypes.func,
}
 
export default CommentList;
