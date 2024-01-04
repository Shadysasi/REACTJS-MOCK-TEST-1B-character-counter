import {UserInputListItem, UserInputDetails} from './StyledComponents'

const UserInputList = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails
  return (
    <UserInputListItem>
      <UserInputDetails>
        {userEnteredText} : {textLength}
      </UserInputDetails>
    </UserInputListItem>
  )
}

export default UserInputList
