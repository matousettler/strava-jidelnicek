export default async function handler(req, res) {
  const url = 'https://www.strava.cz/strava5/Jidelnicky/XML?zarizeni=1806';
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    
    // Pošleme surová data, prohlížeč si kódování windows-1250 přebere sám
    res.setHeader('Content-Type', 'text/xml; charset=windows-1250');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error: 'Chyba při stahování dat' });
  }
}
