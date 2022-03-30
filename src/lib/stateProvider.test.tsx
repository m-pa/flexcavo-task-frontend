import 'regenerator-runtime/runtime'
import { StateProvider } from './stateProvider'
import { cleanup, render, fireEvent } from '@testing-library/react'
import React, { useContext } from 'react'
import { stateContext } from './stateProvider'

afterEach(cleanup)

const TestConsumer = () => {
  const ctx = useContext(stateContext)
  return ctx && (
    <div>{`${ctx.cumulativeIdleHours.data.hour}`}</div>
  )
}
const TestSetter = () => {
  const ctx = useContext(stateContext)
  const set = () => ctx?.cumulativeIdleHours.set({hour: 1700})
  return (<button onClick={set}>Set</button>)
}

describe('stateProvider', () => {
  it('exports a stateProvider', () => {
    const component = render(<StateProvider><div>render</div></StateProvider>)
    expect(component.getByText('render')).toBeTruthy()
  })

  it('has equipmentHeader as value', () => {
    const component = render(<StateProvider><TestConsumer /></StateProvider>)
    expect(component.getByText('1060')).toBeTruthy()
  })

  it('updates state when update function is called', async () => {
    const component = render(<StateProvider><TestConsumer /><TestSetter /></StateProvider>)
    fireEvent.click(await component.getByText('Set'))
    expect(component.getByText('1700')).toBeTruthy()
  })
})
