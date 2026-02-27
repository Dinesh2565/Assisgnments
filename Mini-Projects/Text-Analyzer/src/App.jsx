import { use, useState } from 'react';
import './index.css';
import Analyser from './components/Analyser.jsx';
import Write from './components/Writer.jsx';

function App() {
  const [string, setString] = useState('');
  const [words, setWords] = useState([]);
  const [sentence, setSentence] = useState([]);
  const [flag, setFlag] = useState('');

  const changeString = (e) => {
    const value = e.target.value;
    setString(value);

    const wordArray = value.trim() === ' ' ? [] : value.trim().split(' ');
    const sentenceArray = value.trim().split('.');

    setWords(wordArray);
    setSentence(sentenceArray);
  };

  return (
    <div className="main-container">
      <div className="text-container">
        <div className="top">
          <h3>Text Analyser</h3>
          <div className="btn-container">
            <button onClick={() => setFlag('Write')}>Write</button>
            <button onClick={() => setFlag('Analyse')}>Analyser</button>
          </div>
        </div>

        <section>
          <div>
            {flag === 'Write' ? (
              <div>
                <textarea
                  value={string}
                  onChange={changeString}
                  className="text-area"
                />

                <Write string={string} words={words} sentence={sentence} />
              </div>
            ) : (
              <Analyser words={words} sentence={sentence} chars={string} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
