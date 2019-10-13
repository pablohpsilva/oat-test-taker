import React from 'react'
import Avatar from './'

test('should render the Avatar component', async () => {
    const wrapper = shallow(<Avatar />)

    expect(wrapper.first().hasClass('Avatar')).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
})
