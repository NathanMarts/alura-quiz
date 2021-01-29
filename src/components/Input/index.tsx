import { useField } from '@unform/core'
import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'
import { FiAlertCircle } from 'react-icons/fi'

interface InputBaseProps {
  isFocus: boolean
  isField: boolean
  isErrored?: boolean
}
const InputBase: any = styled.div<InputBaseProps>`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.wrong};
    `}
  ${(props) =>
    props.isFocus &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.secondary};
    `}
  ${(props) =>
    props.isField &&
    css`
      input {
        color: ${({ theme }) => theme.colors.secondary};
      }
    `}
`

InputBase.Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.contrastText};
  background: ${({ theme }) => theme.colors.mainBg};
  outline: 0;
  border: none;
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin: 0 16px;
  svg {
    margin: 0;
    color: #e3170a;
  }
  span {
    background: #e3170a;
    color: #fff;
    &::before {
      border-color: #e3170a transparent;
    }
  }
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<Props> = ({ name, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocus, setIsFocus] = useState(false)
  const [isField, setIsField] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocus(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocus(false)

    setIsField(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <InputBase isErrored={!!error} isField={isField} isFocus={isFocus}>
      <InputBase.Input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} />
        </Error>
      )}
    </InputBase>
  )
}

export default Input
