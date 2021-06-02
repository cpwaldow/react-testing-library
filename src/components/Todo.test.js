import React from 'react'
import { fireEvent, render, wait, waitFor } from '@testing-library/react'
import Todo from './Todo'

describe('Tests for Todo Component', () => {
  it('Should add new task when form has been submitted', async () => {
    // renderizar o componente
    const { getByTestId, getByText } = render(<Todo />)
    // buscar o input
    const fieldNode = await waitFor(
      () => getByTestId('form-field')
    )
    const newTask = 'testing'
    fireEvent.change(
      fieldNode,
      { target: { value: newTask}})
    // digitar no input
    expect(fieldNode.value).toEqual(newTask)
    // buscar o botão
    const bntNode = await waitFor(
      () => getByTestId('form-btn')
    )
    // clicar no botão
    fireEvent.click(bntNode)
    // buscar conteúdo td
    const tdNode = await waitFor(
      () => getByText(newTask)
    )
    expect(tdNode).toBeDefined()
  })
})