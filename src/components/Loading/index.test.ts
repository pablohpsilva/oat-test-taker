import React from 'react'
import Loading from './'

test('should render the Loading component', async () => {
    const wrapper = shallow(<Loading />)

    expect(wrapper.first().hasClass('Loading')).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
})
