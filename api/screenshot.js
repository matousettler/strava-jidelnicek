export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = 'https://api.screenshotone.com/take?access_key=cgw6R8brZUbS7Q&url=https%3A%2F%2Fpadlet.com%2Fembed%2Fxet6al33uutzs6wl&device_scale_factor=3&viewport_device=ipad_landscape&format=png&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=false&block_trackers=true&delay=0&timeout=60&response_type=by_format&full_page=true&image_quality=80';

  const response = await fetch(url);
  const image = await response.arrayBuffer();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=1800', // cache 30 minut
    },
  });
}
