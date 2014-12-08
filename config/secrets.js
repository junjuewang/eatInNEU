/**
 * Please replace stars with your own key 
 */

module.exports = {

  db: process.env.MONGOLAB_URI || process.env.MONGODB || 'mongodb://localhost:27017/test',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  mailgun: {
    user: process.env.MAILGUN_USER || 'postmaster@sandbox697fcddc09814c6b83718b9fd5d4e5dc.mailgun.org',
    password: process.env.MAILGUN_PASSWORD || '29eldds1uri6'
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID || '***',
    clientSecret: process.env.FACEBOOK_SECRET || '***',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: process.env.TWITTER_KEY || '***',
    consumerSecret: process.env.TWITTER_SECRET  || '***',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID || '***',
    clientSecret: process.env.GOOGLE_SECRET || '***',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  instagram: {
    clientID: process.env.INSTAGRAM_ID || '***',
    clientSecret: process.env.INSTAGRAM_SECRET || '***',
    callbackURL: '/auth/instagram/callback',
    passReqToCallback: true
  },

  github: {
    clientID: process.env.GITHUB_ID || '***',
    clientSecret: process.env.GITHUB_SECRET || '***',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  linkedin: {
    clientID: process.env.LINKEDIN_ID || '***',
    clientSecret: process.env.LINKEDIN_SECRET || '***',
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_fullprofile', 'r_emailaddress', 'r_network'],
    passReqToCallback: true
  },

  tumblr: {
    consumerKey: process.env.TUMBLR_KEY || '***',
    consumerSecret: process.env.TUMBLR_SECRET || '***',
    callbackURL: '/auth/tumblr/callback'
  },

  foursquare: {
    clientId: process.env.FOURSQUARE_ID || '***',
    clientSecret: process.env.FOURSQUARE_SECRET || '***',
    redirectUrl: process.env.FOURSQUARE_REDIRECT_URL || 'http://localhost:3000/auth/foursquare/callback'
  },

  venmo: {
    clientId: process.env.VENMO_ID || '1688',
    clientSecret: process.env.VENMO_SECRET || '***',
    redirectUrl: process.env.VENMO_REDIRECT_URL || 'http://localhost:3000/auth/venmo/callback'
  }
};
