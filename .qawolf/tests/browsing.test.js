const { launch } = require("qawolf");
const selectors = require("../selectors/browsing");

describe('browsing', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://localhost:3000/" });
  });

  afterAll(() => browser.close());

  it('can click "Product" link', async () => {
    await browser.click(selectors[0]);
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[1], { x: 0, y: 50 });
  });

  it('can click "game" button', async () => {
    await browser.click(selectors[2]);
  });

  it('can click "★★★" button', async () => {
    await browser.click(selectors[3]);
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[4], { x: 0, y: 0 });
  });

  it('can click "Top Product Art Make Product えるざっぷの制作物一覧..." header', async () => {
    await browser.click(selectors[5]);
  });

  it('can click "Art" link', async () => {
    await browser.click(selectors[6]);
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[7], { x: 0, y: 0 });
  });

  it('can click "Make" link', async () => {
    await browser.click(selectors[8]);
  });

  it('can click "Top" link', async () => {
    await browser.click(selectors[9]);
  });

  it('can click link', async () => {
    await browser.click(selectors[10]);
  });

  it('can click link', async () => {
    await browser.click(selectors[11]);
  });
});