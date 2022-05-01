const REST_API_KEY = "cdd0511cee2c690130f93e1f73f1036d";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao/login";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const CLIENT_SECRET = "GGCNo6jyFvKyXsnHyBFDldelLSquaoSK"
const LOGOUT_REDIRECT_URI = "http://localhost:3000/"
const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`

export {REST_API_KEY, REDIRECT_URI, KAKAO_AUTH_URL, CLIENT_SECRET, LOGOUT_REDIRECT_URI, KAKAO_LOGOUT_URL}