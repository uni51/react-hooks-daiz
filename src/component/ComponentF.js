import React, {useContext} from 'react'
import { UserContext, LanguaeContext } from '../App'

function ComponentF() {
  const user = useContext(UserContext)
  const language = useContext(LanguaeContext)

  return (
    <div>
      <div>{user.name}: {language}</div>
      {/* <UserContext.Consumer>
        {
          user => {
            return(
              <LanguaeContext.Consumer>
                {
                  language => {
                    return <div>{user.name}: {language}</div>
                  }
                }
              </LanguaeContext.Consumer>
            )
          }
        }
      </UserContext.Consumer> */}
    </div>
  )
}

export default ComponentF