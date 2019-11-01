import { configure, addParameters } from '@storybook/react'
import packageJson from './../package.json'

addParameters({
  options: {
    name: 'React CSS Spinners',
    url: packageJson.repository.url,
    isFullscreen: false,
    showPanel: false,
    showAddonPanel: false
    // more configuration here
  }
})

configure(require.context('../src', true, /\.stories\.js$/), module)
