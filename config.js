const _0x4f2a = atob;
const _firebaseConfig = {
  apiKey: _0x4f2a("QUl6YVN5QlZHS0FpeUlLVFpwZWh0elZ3aFA0cVFoekk0NDdoaVp3"),
  authDomain: _0x4f2a("Zmxvd3R1YmUtMzA1YTEuZmlyZWJhc2VhcHAuY29t"),
  databaseURL: _0x4f2a("aHR0cHM6Ly9mbG93dHViZS0zMDVhMS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20="),
  projectId: _0x4f2a("Zmxvd3R1YmUtMzA1YTE="),
  storageBucket: _0x4f2a("Zmxvd3R1YmUtMzA1YTEuZmlyZWJhc2VzdG9yYWdlLmFwcA=="),
  messagingSenderId: _0x4f2a("ODY0MzI3NDU5ODE4"),
  appId: _0x4f2a("MTg2NDMyNzQ1OTgxODp3ZWI6NjQxZGMwNGRiZGQzNjkwNjhkODg5Mw==")
};

const firebaseConfig = Object.fromEntries(
  Object.entries(_firebaseConfig).map(([k, v]) => [k, v])
);
