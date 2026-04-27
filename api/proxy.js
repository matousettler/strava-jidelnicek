export default async function handler(req, res) {
  const response = await fetch('https://padlet.com/embed/xet6al33uutzs6wl', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await response.text();

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  // Odstraníme CSP hlavičky Padletu — posíláme jen vlastní stránku
  res.send(html);
}
