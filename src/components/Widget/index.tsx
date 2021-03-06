import styled from 'styled-components'

export const Widget: any = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background: ${({ theme }) => theme.colors.gradientBg};

  * {
    margin: 0;
  }
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  &¨ > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`
Widget.Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`
