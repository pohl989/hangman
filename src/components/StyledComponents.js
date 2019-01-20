import styled from 'styled-components'

const cardShadow = "inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff"

export const colors = {
  mineShaft: "#222222",
  neonGreen: "#9fcf6e",
  malibu: "#5cafff",
  orange: "#ff5722",
  black: "#000",
  white: "#fff",
}

const borderRadius = ".2em;"

export const Cards = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;
`

export const Card = styled.div`
  border: 1px solid ${colors.neonGreen};
  border-radius: ${borderRadius};
  margin: 2px 2px;
  transition: 0.6s;
  width: 40px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const LetterCard = styled(Card)`
  background-color: rgba(256, 256, 256, 0.1);
  box-shadow: ${cardShadow};
  color: ${colors.white};
  width: 100%;
  padding: 20px 20px;
  text-align: left;
  font-family: 'Roßboto Mono', monospace;
  font-size: '1.6em';
  box-sizing: inherit;
  display: flex;
`