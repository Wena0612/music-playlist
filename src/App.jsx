import React, { useState } from "react";
import "./style.css";

import arianaImg from "./assets/ariana.jpg";
import weCantBeFriends from "./assets/we-cant-be-friends.jpg";
import intoYou from "./assets/into-you.jpg";
import hateThatIMadeYouLoveMe from "./assets/hate-that-i-made-you-love-me.jpg";
import sevenRings from "./assets/7-rings.jpg";

const songs = [
  {
    id: 1,
    title: "we can't be friends",
    artist: "ARIANA GRANDE",
    cover: weCantBeFriends,
    quote: '"I\'ll wait for your love, my love, as a matter of time"',
  },
  {
    id: 2,
    title: "Into You",
    artist: "ARIANA GRANDE",
    cover: intoYou,
    quote: '"A little less conversation and a little more touch my body"',
  },
  {
    id: 3,
    title: "hate that i made you love me",
    artist: "ARIANA GRANDE",
    cover: hateThatIMadeYouLoveMe,
    quote: '"I hate that I made you love me, \'cause now I have to leave"',
  },
  {
    id: 4,
    title: "7 rings",
    artist: "ARIANA GRANDE",
    cover: sevenRings,
    quote: '"I see it, I like it, I want it, I got it"',
  },
];

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const filteredSongs = songs.filter((song) => {
    const search = searchTerm.toLowerCase();
    return (
      song.title.toLowerCase().includes(search) ||
      song.artist.toLowerCase().includes(search)
    );
  });

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="nav-links">
          <span>HOME</span>
          <span>DISCOGRAPHY</span>
          <span>ALBUMS</span>
          <span className="active">PLAYLIST</span>
        </div>

        <div className="nav-search-container">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search for songs, lyrics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="profile-section">
          <div className="profile-text">
            <strong>ARIANA GRANDE</strong>
            <small>JUNE 26, 1993</small>
          </div>
          <img src={arianaImg} alt="Ariana Profile" className="profile-avatar" />
        </div>
      </header>

      <main className="content">
        <section className="vinyl-section">
          <div className="record-container">
            <div className={`vinyl-record ${isPlaying ? "spinning" : ""}`}>
              <div className="vinyl-grooves"></div>
              <div className="vinyl-center">
                <img src={arianaImg} alt="Vinyl Center Ariana" />
              </div>
            </div>

            <div className="player-controls">
              <button className="control-btn" onClick={togglePlay}>
                {isPlaying ? "❚❚" : "▶"}
              </button>
            </div>
          </div>
        </section>

        <section className="playlist-section">
          <h1 className="title">PLAYLIST!</h1>

          <div className="song-list">
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song) => {
                const isSelected = song.id === songs[currentSongIndex].id;
                return (
                  <div
                    key={song.id}
                    className={`song-row ${isSelected ? "selected" : ""}`}
                    onClick={() => {
                      const realIndex = songs.findIndex((s) => s.id === song.id);
                      setCurrentSongIndex(realIndex);
                      setIsPlaying(true);
                    }}
                  >
                    <div className="song-card">
                      <img
                        src={song.cover}
                        alt={song.title}
                        className="song-cover"
                      />
                      <div className="song-info">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                      </div>
                    </div>
                    <div className="song-quote">
                      <p>{song.quote}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="no-results">No songs found</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}