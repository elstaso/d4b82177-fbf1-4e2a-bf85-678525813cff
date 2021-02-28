import styled from 'styled-components';

const ResWrapper = styled.section`

  h2 {
    font-family: 'Gotham Pro';
    color: rgba(235, 235, 245, 0.6);;
    font-size: 13px;
    font-weight: 700;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  p {
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Gotham Pro';
    font-size: 13px;
    overflow: scroll;
    background: rgba(118, 118, 128, 0.24);
    border-radius: 10px;
    height: 120px;
    width: 340px;
  }
`

export default function Response({response}) {
  return(
    <ResWrapper>
      <h2>Response</h2>
      <p>
        {response}
      </p>
    </ResWrapper>
  )
}