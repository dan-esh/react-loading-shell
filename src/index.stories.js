import React, { Fragment } from 'react'
import { Button } from '@storybook/react/demo'
import { Ellipsis, Ring, Ripple } from './'

export default { title: 'Spinners' }

export const ellipsis = () => (
  <Fragment>
    <Ellipsis />
  </Fragment>
)

export const ring = () => (
  <div>
    <Ring />
  </div>
)

export const ripple = () => <Ripple />

export const withText = () => <Button>Butt Button</Button>

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
