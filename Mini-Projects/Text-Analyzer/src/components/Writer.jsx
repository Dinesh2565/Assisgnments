import '../index.css'

function Write({
    string, words, sentence
}) {
    return <footer className="sentence-container">
        <li>{string.length} chars</li>
        <li>{words.length} words</li>
        <li>{sentence.length} sentences</li>
    </footer>
}
export default Write;