self.__uv$config = {
  prefix: "/static/load/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/static/uv/uv.handler.js",
  client: "/static/uv/uv.client.js",
  bundle: "/static/uv/uv.bundle.js",
  config: "/static/uv/uv.config.js",
  sw: "/static/uv/uv.sw.js",
};
