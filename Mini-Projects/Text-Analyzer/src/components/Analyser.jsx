import '../index.css';
function Analyser({ chars, words, sentence }) {
    return (
        <>
            <div className="list-container">
                <ul>
                    <li className="list-items">{chars.length} chars</li>
                    <li className="list-items">{words.length} words</li>
                    <li className="list-items">{sentence.length} sentences</li>
                    <li className="list-items">
                        {words.length / sentence.length > 0
                            ? words.length / sentence.length : 0 + " "}
                        Average words /sentence
                    </li>
                    {/* <li> </li> */}
                </ul>
            </div>
        </>
    );
}

export default Analyser;
