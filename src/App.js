import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Phrase from './components/Phrase'

// ==> styled components
const Content = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`
const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`
// styled components <==//

// ==> function audio
const useAudio = url => {
  const [audio] = useState(
    new Audio(
      'https://www.mboxdrive.com/breaking-bad.mp3'
    )
  )
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing, audio])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle]
}
// function audio  <==//

const App = url => {
  // ==>state
  const [playing, toggle] = useAudio(url)
  const [phrases, savePhrases] = useState({})
  // state <==//

  const fetchAPI = async () => {
    const api = await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    )
    const phrase = await api.json()
    savePhrases(phrase[0])
  }

  // Cargar una frase
  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <Content>
      <Phrase phrases={phrases} />
      <Button onClick={fetchAPI}>Get Phrase</Button>
      <Button onClick={toggle}>{playing ? 'Pause' : 'Play'}</Button>
    </Content>
  )
}

export default App
