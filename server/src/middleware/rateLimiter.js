const rateLimit = require('express-rate-limit');

// General limiter for all API traffic — generous enough for normal
// browsing/search, but stops runaway scripts or scraping abuse.
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests from this IP. Please try again later.' }
});

// Much stricter limiter just for login — protects against brute-force
// password guessing without affecting normal site traffic.
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many login attempts. Please try again in 15 minutes.' }
});

module.exports = { apiLimiter, loginLimiter };