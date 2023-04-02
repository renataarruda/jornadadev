import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="Renata Arruda"
          description="Bem estar"
          music="Música de academia"
          url="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
        />
        <Video 
          likes={444}
          messages={555}
          shares={666}
          name="Paulo Brecker"
          description="Bird olhando para a câmera"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Video 
          likes={777}
          messages={888}
          shares={999}
          name="Paulo Brecker"
          description="Vídeo de gatinho"
          music="Música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />

      </div>
    </div>
  );
}

export default App;
