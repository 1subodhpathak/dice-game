import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
      <h2>
        How to play the dice game
      </h2>
      <div className="text">
        <p>☑ Select any number</p>
        <p>☑ Click on the dice</p>
        <p>☑ After clicking on the dice, if selected number is equal to the dice number, You will get same point as on dice</p>
        <p>☑ If you guess wrong 2 points will be deducted from your score</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #5f5f5f;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2{
    font-size: 24px;

  }
  .text{
    margin-top: 24px;
  }
`;