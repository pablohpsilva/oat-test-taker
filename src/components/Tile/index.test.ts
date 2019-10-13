import React from 'react'
import Tile from './'

test('should render the Tile component', async () => {
    const wrapper = shallow(<Tile userId="somerandomidhere" />)

    expect(wrapper.first().hasClass('Tile')).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
})
