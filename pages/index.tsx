import React, { useCallback, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import { Widget } from '../src/components/Widget'
import db from '../db.json'
import QuizLogo from '../src/components/QuizLogo'
import Input from '../src/components/Input'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../src/Utils/getValidationErrors'
import router from 'next/router'

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(200px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  animation: ${appearFromRight} 1s;

  @media screen and (max-width: 50px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: { nome: string }) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      router.push('/quiz')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }
    }
  }, [])

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo className="" />
        <Widget>
          <Widget.Header>
            <h1>The Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="nome" placeholder="Diz ai seu nome" />
              <button type="submit">Jogar</button>
            </Form>
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>The Legend of Zelda</h1>
          <p>skçdjlaskjdlkasjdklasd</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="askjd" />
    </QuizBackground>
  )
}
