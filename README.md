Eat In NEU

![Alt](https://github.com/junjuewang/eatInNEU/blob/master/public/image/eatlogo.png)

  **Website**: https://junjue.herokuapp.com 

  A website for you to find a place to eat in Northeastern University.

  This is my CS5610 course project. Sometimes it is very difficult for people to pick up the place to eat. When I first came NEU, I had a terrible experience. I ate Subway for nearly a whole semester, just because it's close to the classroom, and I don't have time to chose another because I wasted all the time thinking about what to eat :(
  So I decided to develop our own website, to help you to decide what to eat easily. Simply pick up the category, eatInNEU will list the Top3 venues for you to go!

  <h3>Highlights</h3>
  -------------------
  The website is designed for everyone, everywhere.
  <h5>Become an User</h5>
  <ul>
   <li>Easy to become a user. Instead of enter kinds of information, I know my website is design for lazy guys and this will definitely keep million users away from me, email address and password are enough! You can update your profile later, for example, your name, gender, location, website and link with other social tools. But for the sign up, I don't want to borther you with them.</li>
   <li>Easy to link. If you don't want to create a new account, you could sign in with Google, Facebook or Twitter account. There's no excuse to become a user, right? :P </li>
   <li>Reset password. If you forgot your password, simply follow the instruction, the link would sent to your email and lead you to the reset password page.</li>
   <li>Contact the developer? Notice there's a 'Contact' button on the top of screen. You could leave your thoughts to me. Don't forget leave your email in order to get the feedback. If you find bugs, that's awkward, but please contact me and give me a chance to make it better. If you have some advises and suggestions, welcome to share your opinions!</li>
  </ul>
  <h5>Fetures</h5>
  <ul>
   <li>All in here. Included all the venues in NEU. No matter what you want to find, it all here!</li>
   <li>Use Everywhere. This website is responsive, works well on PC, tablets and phones.</li>
   <li>Find what you want - By search. You could find your favorite one by input the name, our website would show you the one you searched, and recommond two venues you might interested with the same categories at the same time. Simple search, simple answer. </li>
   <li>Find what you want - By select. Maybe you're not sure which place to eat right now. I know it's a hard decision! What about select one directory you're interested and let us to show you what we have. Simple select, simple choice. </li>
   <li>Get direction. After deceied where to go, let us guide you there. It would ask for permission to use your current location, please allow it in order to get a direction to the venue you chose.</li>
   <li>Leave Feedback. When you got there, or when you're all set, it's time to give us some feedback! Rate the venue, click 'Like' button at the right of the venue's detail page. Only one rate/like per user. But you could change it whenever you want. You could also leave some tips below. This would help other to know better about the venue. Tell us if you like it, share your favorite ones!</li>
  </ul>
  <h5>About design</h5>
  <ul>
   <li>Bright color.Use Orange as our theme color. This is a website about food. I know food makes you delight, so dose our theme color.</li>
   <li>Do you like our logo? I'm pround to say, I really like this logo I designed. The logo is the abbreviation of EatInNEU. It looks like a hungry husky who's looking for food just like you and me.</li>
   <li>Make everything SIMPLE. Simple is the key word of my website. Avoid using a lot of inputs or selections, one or two clicks are enough. For feedback, rating and likes only need clicks. Without redirect to other page, leave tips in the textarea and click 'ADD', that's it.</li>
  </ul>
  
  <h3>Steps to run locally</h3>
  -----------------------------
  <ul>
   <li>Git clone from master branch. https://github.com/junjuewang/eatInNEU/</li>
   <li>Run "npm install". You might need sudo to run this command. Once node-modules installed successfully, you are ready to go!</li>
   <li>Run "mongod" to start mongodb. For more info about mongodb, please see <a href='http://www.mongodb.org/'>MongoDB</a>.</li>
   <li>Run "npm start" to start the website. You could go to localhost:3000 to check it.</li>
   Note: If you want to use oAuth, please replace the stars in config/secrets.js with your keys.
  </ul>

  <h3>Related Experiments</h3>
  ----------

  <h3>Known Bugs</h3>
  ----------
  This is embarrassing. Debug draws me crazy. But there still have some known bugs.
  <ul>
   <li>Broswer. Chorme is recommoned.  Sorry IE, this website dosen't work well on you.</li>
   <li>Link. Use https instead of http. Serval user met Oauth problem when using http protocol. Might have wrong redirect page. </li>
   <li>Maps. Need time to load. Need permission to allow using current location. If canvas doesn't load successfully, try clear browser cookies. Most dead map would work after clear browsing data. </li>
  </ul>
  If you find a new one, please let me know. Thanks!

  <h3>Contributing</h3>
  ---------------------
  Professor Annunziato, I want to express my sincere gratitude for all the efforts he has taken during these semester. From the day one, I have enjoyed every class. He has taught us so much useful and powerful skills.
  <br/><br/>
  Thanks for my TA, Sandeep, who gave me a lot of useful suggestions and always patiently solve the problems I met. 
  <br/><br/>
  Zhenhao and Bohan, I really appreciate your help. Everytime I met problems I couldn't fix, you never say no when I'm asking for help. Your accompanying becomes my strength to overcome every barrier. In such a short time, I don't think my website could officially online without you.
  
  <h3>Reference</h3>
  ------------------
  Especilly thanks to <a href="https://github.com/sahat/hackathon-starter">Sahat Yalkabov</a>. My website basicly based on his model.
  <ul>
   <li><a href="http://www.nudining.com/">www.nudining.com/</a></li>
   <li><a href="http://kigokitchen.com/">kigokitchen.com/</a></li>
   <li><a href="http://nudining.com/">nudining.com/</a></li>
   <li><a href="http://popeyes.com/">popeyes.com/</a></li>
   <li><a href="http://www.starbucks.com/">www.starbucks.com/</a></li>
   <li><a href="http://www.sweettomatoespizza.com/index.php">www.sweettomatoespizza.com/index.php</a></li>
   <li><a href="http://www.tacobell.com/">www.tacobell.com/</a></li>
   <li><a href="https://twitter.com/UBURGER">twitter.com/UBURGER</a></li>
   <li><a href="http://argotea.com/">argotea.com/</a></li>
   <li><a href="https://foursquare.com/v/caf%C3%A9716/4e70b17a152073dd03be0faa">foursquare.com/v/caf%C3%A9716/4e70b17a152073dd03be0faa</a></li>
   <li><a href="http://jambajuice.com/">jambajuice.com/</a></li>
   <li><a href="http://www.peets.com/">www.peets.com/</a></li>
   <li><a href="http://inkd.net/design/work/print/hungry-hungry-husky-food-truck/">inkd.net/design/work/print/hungry-hungry-husky-food-truck/</a></li>
   <li><a href="https://www.dunkindonuts.com/dunkindonuts/en.html">www.dunkindonuts.com/dunkindonuts/en.html</a></li>
   <li><a href="http://www.rebeccascafe.com/">www.rebeccascafe.com/</a></li>
   <li><a href="http://www.subway.com/subwayroot/default.aspx">www.subway.com/subwayroot/default.aspx</a></li>
   <li><a href="http://www.bmpet.com/xiangce/gougou/hashiqi/2012/0915/31800_9.html">www.bmpet.com/xiangce/gougou/hashiqi/2012/0915/31800_9.html</a></li>
   <li><a href="http://subtlepatterns.com/light-sketch/">subtlepatterns.com/light-sketch/</a></li>
   <li><a href="http://www.webtexture.net/textures/12-black-grid-leather-and-metal-pattern-background/">www.webtexture.net/textures/12-black-grid-leather-and-metal-pattern-background/</a></li>
  </ul>

  <h3>License</h3>
  ----------------

  The MIT License (MIT)

  Copyright (c) 2014 Junjue Wang 

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

