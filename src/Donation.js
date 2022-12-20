import React from 'react';
import './Donate.css';
const Donation = () => {
  return (
    <>
      <div class="donationMainContainer">
        <div class="donationHeader">
          <br></br>
          <h1>DONATIONS</h1>
        </div>
        <body>
          <div class="donationcontainer">
            <div class="donbox">
              <h2>BUY ME A COFFEE</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <ui>
                {/* <button onClick= "gotoLink(this)" value="https://www.buymeacoffee.com/SVKOfficial">Buy Now</button> */}
                
                <a href="https://www.buymeacoffee.com/SVKOfficial">buymeacoffee</a>
              </ui>
            </div>
            <div class="donbox">
              <h2>PATREON</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <ui>
                {/* <button onClick= "gotoLink(this)" value="https://www.patreon.com/SchumyVannaKaviyangal">Buy Now</button> */}
                <a href="https://www.patreon.com/SchumyVannaKaviyangal">patreon</a>
              </ui>
            </div>
            <div class="donbox">
              <h2>13 FAMILY PACK</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <ui>
              {/* <button onclick="gotoLink(this)" value="https://www.youtube.com/c/SchumyVannakaviyangalOfficial">Buy Now</button> */}
                <a href="https://www.youtube.com/c/SchumyVannakaviyangalOfficial">13familypack</a>
              </ui>
            </div>
            {/* <button id="redirect">Go to site</button>
                <script>
                    document.querySelector('#redirect')
                    .addEventListener('click', () => {
                      window.location.href = 'https://www.youtube.com/c/SchumyVannakaviyangalOfficial/';
                    });
                </script> */}
          </div>
          {/* <script>
                  function gotoLink(link){
                    console.log(link.value)
                    // window.open(link.value);
                  };
                </script> */}
        </body>
      </div>


    </>

  )


}
export default Donation