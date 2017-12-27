import React from 'react'
import { shallow } from 'enzyme'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import { Header } from '../../components/Header'

let wrapper, startLogout

beforeEach(() => {
  startLogout = jest.fn()
  wrapper = shallow(<Header startLogout={startLogout}/>)
})

test('should render Header correctly', () => {
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  //
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
  // expect(wrapper.find('h1').text()).toBe('Expensify')
  expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})
