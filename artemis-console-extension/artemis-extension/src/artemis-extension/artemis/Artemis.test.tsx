import { render, screen, waitFor } from '@testing-library/react'
import { Artemis } from './Artemis'

/**
 * A set of tests that run against a dummy APIs that test the UI components
 */
//jest.mock('@hawtiosrc/plugins/shared/jolokia-service')

describe('Artemis', () => {
  test('renders page', async () => {
    render(<Artemis />)

    await waitFor(() => {
      const title = screen.queryByText('Artemis')
      expect(title).toBeInTheDocument()
    })
  })
})
