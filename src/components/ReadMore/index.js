import {useState} from 'react'
import {
  App,
  Header,
  DescriptionText,
  Image,
  Text,
  ButtonContainer,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [showFullText, setShowFullText] = useState(false)

  const onReadMore = () => {
    setShowFullText(prevState => !prevState)
  }

  const buttonText = showFullText ? 'Read Less' : 'Read More'
  const showText = showFullText
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <App>
      <Header>React Hooks</Header>
      <DescriptionText>Hooks are a new addition to React</DescriptionText>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Text>{showText}</Text>
      <ButtonContainer>
        <ReadMoreButton
          type="button"
          onClick={() => {
            onReadMore()
          }}
        >
          {buttonText}
        </ReadMoreButton>
      </ButtonContainer>
    </App>
  )
}

export default ReadMore
