import React from 'react';
import './Donation.css';

import button1 from './bmc1.png';
import button2 from './ptrn1.png';
import button3 from './yt1.png';


const Donation = (_, ref) => {
  return (
    <>
      <div ref={ref}>
      <div  class="donationMainContainer">
        <div class="donationHeader">
          <h1>DONATIONS</h1>
        </div>
        <div class="donationcontainer">
          <div class="box buyMeCoff">
            <img
              className="brndbox brandImg"
              src={button1}
              alt="logo"
              draggable="false"
            />
            <div class="perk">
              <h3>Perks</h3>
            </div>
            <div className='supportContent supportContentBlack'>
              <p>
                Hey there, you coffee connoisseur! ☕ Ready for a deliciously simple way to support SVK podcast? Introducing "Buy Me a Coffee" – your golden ticket to show some love and caffeinated appreciation!

                Spare a sip or two (or more!) and watch the magic unfold. Your generosity doesn't just warm hearts, it helps SVK podcast keep the laughs coming and the quality soaring.

                Got something to say? With your donation, you're not just buying coffee – you're unlocking a chat with the coolest podcasters in town. Want a topic covered? Consider it done! These wizards of words are here to entertain and enlighten.

                So, if you're vibing with SVK podcast and feel like sharing a cup of virtual joe, hit that button below and let's brew some podcast magic! ☕🎙️
              </p>
            </div>
            <div
              className='supportUs'
            >
              <ui>
                <a href="https://www.buymeacoffee.com/SVKOfficial" target='_blank' class="btn coffeebtn">Buy Now</a>
              </ui>
            </div>
          </div>
          <div class="box patreon">
            <img
              className="brndbox brandImg brandImgPatreon"
              src={button2}
              alt="logo"
              draggable="false"
            />
            <div class=" perk">
              <h3>Perks</h3>
            </div>
            <div className='supportContent'>
              <p>
                Join the SVK podcast crew on Patreon for a wild ride of laughs and support! 🎙️🤣

                By becoming a patron, you're not just backing hilarious content – you're rocking rewards cooler than penguin shades. 😎

                Expect early access to episodes, behind-the-scenes peeks into our wacky world, shout-outs on air and social media, plus sweet merchandise discounts and giveaways. 🎁✨

                From "Super Supporter" to "Ultra Mega Fanatic" (yes, we got creative), choose your level and change it up anytime. Your contribution, big or small, fuels the fun! 🕺🙌

                Ready to dive in? Join us on Patreon and let's make podcasting magic happen! 🚀🎉
              </p>
            </div>

            <div
              className='supportUs'
            >
              <ui>
                <a href="https://www.patreon.com/SchumyVannaKaviyangal" target='_blank' class="btn patbtn">Buy Now</a>
              </ui>
            </div>
          </div>
          <div class="box youtube">
            <img
              className="brndbox brandImg"
              src={button3}
              alt="logo"
              draggable="false"
            />
            <div class="perk">
              <h3>Perks</h3>
            </div>
            <div className='supportContent'>
              <p>
              Ready for the full SVK podcast experience on YouTube? 📺✨ Become a member and unlock a treasure trove of perks that'll make your virtual seat cozier than ever!

              Here's what you get:

              🎖️ Flash a snazzy loyalty badge in comments and live chats.
              🎉 Express yourself with exclusive custom emojis.
              📢 Join the inner circle with members-only posts and polls.
              🎥 Dive into private live streams and videos – just for you!

              Choose your membership starting at just ₹ 59 per month. Switch or cancel anytime. By joining, you're not just supporting SVK podcast – you're vibing with a community that's all about top-tier fun and interaction.

              Ready to level up? Click below and let's roll out the YouTube red carpet for you! 🚀👇

              </p>
            </div>
            <div
              className='supportUs'
            >
              <ui>
                <a href="https://www.youtube.com/c/SchumyVannakaviyangalOfficial" target='_blank' class="btn ytbtn">Buy Now</a>
              </ui>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default React.forwardRef(Donation);