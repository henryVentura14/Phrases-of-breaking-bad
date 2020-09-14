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
  width:8rem;
  margin-top:2rem;
  padding: 2;
  font-size: 1.2em;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  height:4rem;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`

const ContentButton = styled.div`
  width:20rem;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-content:center;
  align-items:center;
`;
// styled components <==//

// ==> function audio
const useAudio = url => {
  const [audio] = useState(
    new Audio('https://www.4shared.com/mp3/eTaoaQ0diq/breaking-bad-intro.html')
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
      <ContentButton>
        <Button onClick={fetchAPI}>Get Phrase</Button>
        <Button onClick={toggle}>{playing ? 'Pause' : 'Play'}</Button>
      </ContentButton>
    </Content>
  )
}

export default App
