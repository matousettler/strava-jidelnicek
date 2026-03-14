export default async function handler(req, res) {
  const url = 'https://www.strava.cz/strava5/Jidelnicky/XML?zarizeni=1806';
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Chyba při stahování dat' });
  }
}
