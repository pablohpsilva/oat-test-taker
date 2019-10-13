import React from 'react'
import Container from './'

test('should render the Container component', async () => {
    const wrapper = shallow(<Container />)

    expect(wrapper.first().hasClass('Container')).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
})
