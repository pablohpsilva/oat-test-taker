import React from 'react'
import SiteHeader from './'

test('should render the SiteHeader component', async () => {
    const wrapper = shallow(<SiteHeader />)

    expect(wrapper.first().hasClass('SiteHeader')).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
})
