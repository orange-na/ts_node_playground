import puppeteer, { Page } from "puppeteer";

async function getDate(page: Page, url: string) {
  await page.goto(url, { waitUntil: "networkidle0" });

  return await page.evaluate(() => {
    const data = document.querySelector("h1.landing__top__child__description");
    return data ? data.textContent : "";
  });
}

!(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
  });
  try {
    const page = await browser.newPage();

    const data = await getDate(page, "https://dot-mura.com/landing");
    console.log(data); // 取得したテキストデータが表示されるはず

    browser.close();
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
    console.log("done");
  }
})();
