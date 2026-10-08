import React from 'react'

import myPhoto from './assets/kill bill.jpg'

export default function App() {
  
  const vinylCenterImage = "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png"
  const profileAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"

  const playlistSongs = [
    { title: "KILL BILL BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { title: "SNOOZE BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { title: "SHIRT BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { title: "BLIND BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { title: "I HATE U BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { title: "NOBODY GETS ME BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { title: "SPECIAL BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { title: "SEEK & DESTROY BY SZA", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
  ]

  return (
    <div className="pink-container">
    
      <header className="top-nav">
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#library">LIBRARY</a>
          <a href="#favorites">FAVORITES</a>
          <a href="#playlist" className="active">PLAYLIST</a>
        </nav>
        <div className="profile-circle">
          <img src={profileAvatar} alt="Profile" />
        </div>
      </header>

      
      <main className="content-grid">
        
       
        <div className="vinyl-section">
          <div className="vinyl-disc">
            <div className="vinyl-groove g1"></div>
            <div className="vinyl-groove g2"></div>
            <div className="vinyl-center">
              <img src={vinylCenterImage} alt="Vinyl Center Art" />
            </div>
          </div>
        </div>

        
        <div className="playlist-section">
          <h1 className="playlist-title">PLAYLIST!</h1>

          <div className="song-list">
            {playlistSongs.map((song, index) => (
              <div key={index} className="song-bar">
                <img src={song.img} alt={song.title} className="song-thumb" />
                <span className="song-name">{song.title}</span>
              </div>
            ))}
          </div>
        </div>

      </main>

      
      <div className="bottom-pill-wrapper">
        <div className="pink-pill-btn">
          <img src={profileAvatar} alt="Avatar" className="pill-avatar" />
          <span>BAKA SAKALI PLAYLIST</span>
        </div>
      </div>
    </div>
  )
}