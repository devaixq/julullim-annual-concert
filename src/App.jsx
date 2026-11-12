import { useEffect, useRef, useState } from 'react'
import './App.css'
import { songs } from './data/songs'
import SongList from './components/SongList'
import SongDetailPage from './components/SongDetailPage'

function App() {
  const [selectedSong, setSelectedSong] = useState(null)
  const listScrollY = useRef(0)

  useEffect(() => {
    if (selectedSong === null) {
      window.scrollTo(0, listScrollY.current)
    }
  }, [selectedSong])

  const openSongPage = (song) => {
    listScrollY.current = window.scrollY
    setSelectedSong(song)
  }

  const closeSongPage = () => {
    setSelectedSong(null)
  }

  if (selectedSong) {
    return <SongDetailPage song={selectedSong} onBack={closeSongPage} />
  }

  return (
    <main className="concert-site">
      <section className="hero-poster hero-poster--annual" aria-labelledby="concert-title">
        <h1 id="concert-title" className="hero-main-title">
          <img className="hero-title-art" src="/annual-title-original.png" alt="Julullim Annual Concert" />
          <img className="hero-guitar-art" src="/hanging-guitar.png" alt="" aria-hidden="true" />
        </h1>


      </section>

      <section className="setlist-section" aria-labelledby="setlist-title">
        <div className="setlist-heading">
          <h2 id="setlist-title">SETLIST</h2>
          <p>2026 Annual Concert</p>
        </div>
        <SongList songs={songs} onSongSelect={openSongPage} />
      </section>
    </main>
  )
}

export default App
