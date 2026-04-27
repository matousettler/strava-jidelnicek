export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const response = await fetch('https://padlet.com/embed/xet6al33uutzs6wl', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    },
  });

  const html = await response.text();

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Alt-Svc': 'clear',
    },
  });
}
