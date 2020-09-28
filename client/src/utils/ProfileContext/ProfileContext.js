import React, { createContext } from 'react'

const ProfileContext = createContext({
  avatar: '',
  bio: '',
  xbox: '',
  playstation: '',
  nintendoSwitch: '',
  pc: '',
  games: [],
  genres: [],
  competetive: false,
  discord: '',
  user: '',
  searchGames: '',
  handleInputChange: () => { },
  handlePlayerHandle: () => { },
  handleGenre: () => { },
  handleGames: () => { },
  handleDeleteGames: () => { }
})

export default ProfileContext