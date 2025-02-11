import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('alerts', () => {
  test('article page', async () => {
    const $ = await getDOM('/get-started/foo/page-with-callout')
    const callout = $('[data-testid=alert] div')
    expect(callout.html()).toBe('<p>Callout for HubGit Pages</p>')
  })

  test('callout disappears depend on Liquid inside it', async () => {
    // This page has `product:` property which is a piece of Liquid
    // which makes it so that the rendered output of that becomes
    // an empty string.
    // This test tests that alert is not rendered if its output
    // "exits" but is empty.
    const $ = await getDOM('/enterprise-server@latest/get-started/foo/page-with-callout')
    const callout = $('[data-testid=alert]')
    expect(callout.length).toBe(0)
  })

  test('toc landing page', async () => {
    const $ = await getDOM('/actions/category')
    const callout = $('[data-testid=alert] div')
    expect(callout.html()).toBe('<p>This is the callout text</p>')
  })
})
