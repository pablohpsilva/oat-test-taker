import React from 'react'
import Icon from './'

test('should render the Icon component', async () => {
    const wrapper = shallow(<Icon />)

    expect(wrapper.first().hasClass('Icon')).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
})
