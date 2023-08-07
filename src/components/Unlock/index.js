// Write your code here
import {useState} from 'react'
import {MainContainer, Content, LockImage, ButtonText} from './styledComponents'

const Unlock = () => {
  const [locked, setLocked] = useState(false)

  const lockOrUnlocked = locked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altContent = locked ? 'lock' : 'unlock'
  const buttonText = locked ? 'Unlock' : 'Lock'
  const textContent = locked ? 'Locked' : 'Unlocked'

  const onChangeLock = () => {
    setLocked(prevState => !prevState)
  }

  return (
    <MainContainer>
      <LockImage src={lockOrUnlocked} alt={altContent} />
      <Content>Your Device is {textContent}</Content>
      <ButtonText onClick={onChangeLock}>{buttonText}</ButtonText>
    </MainContainer>
  )
}
export default Unlock
