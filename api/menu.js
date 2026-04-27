export default async function handler(req, res) {
  const url1806 = 'https://www.strava.cz/strava5/Jidelnicky/XML?zarizeni=1806';
  const url0398 = 'https://www.strava.cz/strava5/Jidelnicky/XML?zarizeni=0398';

  try {
    const [res1, res2] = await Promise.all([
      fetch(url1806).then(r => r.text()),
      fetch(url0398).then(r => r.text())
    ]);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Pošleme obě XML jako jeden JSON objekt
    res.status(200).json({
      xml1806: res1,
      xml0398: res2
    });
  } catch (error) {
    res.status(500).json({ error: 'Chyba při stahování dat z jídelen' });
  }
}
