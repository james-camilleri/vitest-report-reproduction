import React from 'react'
import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './App'

describe('<App>', () => {
  test('default', async () => {
    const screen = await render(<App />)

    const button = await screen.getByRole('button')

    await expect(button).toMatchScreenshot()
  })
})
