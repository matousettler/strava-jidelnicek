export const config = { runtime: 'edge' };

export default async function handler(req) {
  const params = new URLSearchParams({
    access_key: 'cgw6R8brZUbS7Q',
    url: 'https://padlet.com/embed/xet6al33uutzs6wl',
    viewport_width: 1280,
    viewport_height: 720,
    device_scale_factor: 3,
    viewport_device: 'ipad_landscape',
    format: 'png',
    block_ads: true,
    block_cookie_banners: true,
    block_banners_by_heuristics: false,
    block_trackers: true,
    delay: 0,
    timeout: 60,
    response_type: 'by_format',
    full_page: true,
    image_quality: 80,
  });

  const response = await fetch(`https://api.screenshotone.com/take?${params}`);
  const image = await response.arrayBuffer();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
