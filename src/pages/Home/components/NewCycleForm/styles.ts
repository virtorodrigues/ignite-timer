import styled from 'styled-components'

interface FormContainerType {
  disabled: boolean
}

export const FormContainer = styled.div<FormContainerType>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start;
    ${(props) => props.disabled && 'display: none'};
  }
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 768px) {
    flex: auto;
    width: 100%;
    margin-bottom: 1rem;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`
