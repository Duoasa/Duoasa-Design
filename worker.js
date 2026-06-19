const googleVerificationPath = "/google226b86c0ead7199d.html";
const googleVerificationBody = "google-site-verification: google226b86c0ead7199d.html";

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === googleVerificationPath) {
      return new Response(googleVerificationBody, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=3600"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
