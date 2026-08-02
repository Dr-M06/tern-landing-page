/** Cloudflare Pages Function — serve /i/{pin} as the invite page. */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (!/^\/i\/[0-9A-Fa-f]{8}\/?$/i.test(url.pathname)) {
    return context.next();
  }
  const asset = new URL('/i/index.html', url.origin);
  return context.env.ASSETS.fetch(asset);
}
