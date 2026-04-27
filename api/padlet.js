export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const padletUrl = 'https://padlet.com/embed/xet6al33uutzs6wl';

  const response = await fetch(padletUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'cs,en;q=0.5',
    },
  });

  const html = await response.text();

  // Vrátíme HTML bez omezujících hlaviček
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Frame-Options': 'SAMEORIGIN',
      'Cache-Control': 'no-cache',
      // CSP a X-Frame-Options od Padletu jsou zahozeny — posíláme vlastní
    },
  });
}
