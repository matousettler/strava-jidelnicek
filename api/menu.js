export default async function handler(req, res) {
  const url1806 = 'https://www.strava.cz/strava5/Jidelnicky/XML?zarizeni=1806';
  const url0398 = 'https://www.strava.cz/strava5/Jidelnicky/XML?zarizeni=0398';

  try {
    const [r1, r2] = await Promise.all([
      fetch(url1806).then(res => res.arrayBuffer()),
      fetch(url0398).then(res => res.arrayBuffer())
    ]);

    const decoder = new TextDecoder('windows-1250');
    const xml1 = decoder.decode(r1);
    const xml2 = decoder.decode(r2);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ xml1806: xml1, xml0398: xml2 });
  } catch (error) {
    res.status(500).json({ error: 'Chyba API' });
  }
}
