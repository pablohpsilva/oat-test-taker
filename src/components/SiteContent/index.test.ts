import React from 'react'
import SiteContent from './'

test('should render the SiteContent component', async () => {
    const wrapper = shallow(
        <div className="SiteContent">
            <SiteContent />
        </div>
    )

    expect(wrapper.first().hasClass('SiteContent')).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
})
