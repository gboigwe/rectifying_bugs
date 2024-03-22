import React, { useEffect, useState } from 'react'
// import "./multii.css"
import "./add.css"
import "./style.min.css"
import "./bootstrap.min.css"
import '../../assets/chunks/fonts/cloudicon/cloudicon.css';
import '../../assets/chunks/fonts/fontawesome/css/all.min.css';
import '../../assets/chunks/fonts/evafeat/evafeat.css';
import ServicesSection from '../service/Service';


const Multii = () => {
  const [connected, setConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setConnected(!connected); // Toggle connected state
    setShowModal(true); // Show modal when clicked
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

  useEffect(() => {
    // Function to load scripts
    const loadScript = (src, isDefer) => {
      const script = document.createElement('script');
      script.src = src;
      if (isDefer) {
        script.defer = true;
      }
      document.body.appendChild(script);
    };

    // Load jQuery script ../../assets/chunks/js
    loadScript('../../assets/chunks/js/jquery.min.js');

    // Load scripts.min.js script with defer attribute
    loadScript('../../assets/chunks/js/scripts.min.js', true);
  }, []); // Empty dependency

  return (
    <>
    <div className="box-container limit-width">
        {/* <div id="spinner-area">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div> */}
        {/* <!-- ***** FRAME MODE ****** --> */}
        <div className="body-borders" data-border="20">
            <div className="top-border bg-white"></div>
            <div className="right-border bg-white"></div>
            <div className="bottom-border bg-white"></div>
            <div className="left-border bg-white"></div>
        </div>
        <header id="header">
        </header>
        {/* <!-- BANNER --> */}
        {/* <!--================================== */}
            {/* Loader Start Here */}
    {/* ===================================--> */}
        <div className="Loader">
            <div className="spinnerPairHolder">
                <div className="spinnerPair">
                    <div className="spinnerPairCercle"></div>
                    <div className="spinnerPairCercle"></div>
                </div>
                <div className="spinnerPair">
                    <div className="spinnerPairCercle"></div>
                    <div className="spinnerPairCercle"></div>
                </div>
                <div className="spinnerPair">
                    <div className="spinnerPairCercle"></div>
                    <div className="spinnerPairCercle"></div>
                </div>
                <div className="spinnerPair">
                    <div className="spinnerPairCercle"></div>
                    <div className="spinnerPairCercle"></div>
                </div>
                <div className="spinnerPair">
                    <div className="spinnerPairCercle"></div>
                    <div className="spinnerPairCercle"></div>
                </div>
            </div>
        </div>
        {/* <!--================================== */}
      {/* Loader End Here */}
{/* ===================================--> */}
        {/* <!--================================== */}
      {/* Hero Section Start Here */}
{/* ===================================--> */}

        <div className="top-header overlay item1 text-align" id="about">
            <div style={{ height: '62px', backgroundColor: '#1D2330', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', blockSize: '62px', fontSize: '12px', fontFeatureSettings: 'normal', textShadow: '100%', boxShadow: 'inset 0 -20px 0 0 #262B38', padding: '1px', margin: '0px', width: '100%' }}>
                <script type="text/javascript" src="../files.coinmarketcap.com/static/widget/coinMarquee.js"></script>
                <div id="coinmarketcap-widget-marquee" coins="1,1027,825" currency="USD" theme="dark" transparent="true" show-symbol-logo="true"></div>
            </div>

            <div className="container">
                <nav className="navbar bg-body-tertiary mb-4">
                  {/* Your connect button */}
                  <div className="container-fluid">
                    <a className="navbar-brand text-white font-semibold">RectifyBugs</a>
                    <div className="d-flex">
                      <button onClick={handleClick} className="myBtn">
                        <div className={`btn-default-purple-fill ${connected ? 'btn-default-purple-fill' : ''} me-3 mt-3`}>
                          {connected ? 'Disconnect' : 'Connect'}
                        </div>
                      </button>
                    </div>
                  </div>
                </nav>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 wrapper">
                        <h1 className="text-white" data-aos="fade-up" data-aos-duration="800">Blockchain Rectification
                            <div className="animatype"> <span id="typed3"></span></div>
                        </h1>
                        <span className="text-white text-justify mt-3 mb-4" data-aos="fade-up" data-aos-duration="1200">Every digital artwork on Upside is authentic and truly unique. Blockchain technology makes this new aproch to digital ownership possible. Open and decentralized protocol for syncing various Wallets issues on Secure Server. 
                            <br/> <br/>
                            All of this is made possible because of the blockchain cloud infrastructure powered by<span className="c-pink"> Chain Cloud and Sequence.</span>
                        </span>

                        <div className="action text-left ">
                            <a href="#" className="myBtn">
                                <div className="btn btn-default-purple-fill me-3 mt-3">Connect Wallet</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 order-lg-last order-first text-center">
                        <img src="img/hero-img.png" width="80%" />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12 text-center wrapper">
                    <h1 className="heading" data-aos="fade-up" data-aos-duration="800">Blockchain Rectification <br />
                        <div className="animatype"> <span id="typed3"></span></div>
                    </h1>
                    <h3 className="subheading fw-normal lh-32" data-aos="fade-up" data-aos-duration="1200">Every digital artwork on Upside is authentic and truly unique. Blockchain technology makes this new aproch to digital ownership possible. Open and decentralized protocol for syncing various Wallets issues on Secure Server. 
                        powered by<span className="c-pink"> Chain Cloud and Sequence.</span></h3>
                    <div className="action">
                        <a href="portal/">
                            <div className="btn btn-default-purple-fill me-3 mt-3 interact-button">Connect Wallet</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <img className="blobleft svg d-none" src="chunks/img/background/blob.svg" alt="Blob Background" />

        <section className="sec-normal sec-grad-yellow-to-black-right bg-colorstyle bottomhalfpadding">
            <div className="faq">
                <div className="container">
                    <img className="blobright svg d-none" src="chunks/img/background/blob.svg" alt="Blob Background" />
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h2 className="section-heading text-white mergecolor">Select the issue you are experiencing below</h2>
                            <p className="section-subheading text-muted mergecolor">You can also connect your wallet by selecting any of the <span className="c-pink">option</span> below.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ServicesSection />

        <footer className="footer">
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="footer-menu">
                                <li className="menu-item by"> © 2023. Multiverse Wallet Rectification.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 terms">
                            <ul id="footer-menu" className="footer-menu">
                                <li className="menu-item by"><a href="#">Term of Services</a></li>
                                <li className="menu-item by"><a href="#">Privay Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    {/* Modal */}
    {showModal && (
        <div id="connectWallet" className="modal">
          <div className="modal-content2">
            <div className="mx-auto col-11 pt-2">
              <span className="close2" onClick={closeModal}>&times;</span>
              <h5>Connect to a wallet</h5>
              <div className="pt-5 pb-5">
                <a href="#" className="interact-button">
                  <div className="btn-outline-main w-100 pt-2 pb-2">
                    <div className="mx-auto col-10 d-flex justify-content-between">
                      Connect Automatically <img src="img/api.png" width="32" align="absmiddle" />
                    </div>
                  </div>
                </a>
                <a href="portal/index.html">
                  <div className="btn-outline-main w-100 pt-2 pb-2">
                    <div className="mx-auto col-10 d-flex justify-content-between">
                      Connect Manually <img src="img/settings.png" width="32" align="absmiddle" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Multii











































































































































































































































































































































// <section className="services sync pt-4 pb-80 bg-colorstyle notoppadding">
//             <div className="container">
//                 <div className="service-wrap">
//                     <div className="row">
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}> */}
//                                     {/* <div className="img"> */}
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:xlink="http://www.w3.org/1999/xlink" width="288" height="65" className="svg ico" src="chunks/fonts/svg/right-left-solid.html" alt=""></svg>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="288" height="65" viewBox="0 0 512 512" className="svg ico" src="chunks/fonts/svg/right-left-solid.html" alt="">
                                            
//                                             <path fill="#fff" d="M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"
//                                                 className="color000 svgShape"></path>
//                                             </svg> */}
//                                     {/* </div> */}
//                                     {/* <div className="inform"> */}
//                                         {/* <div className="title mergecolor">Migration</div> */}
//                                         {/* {/* <div className="description seccolor">Click here to migrate seamlessly with no hassle.</div> */} 
//                                     {/* </div> */}
//                                 {/* </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                             {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                               <div className="img">
//                                 <img className="svg ico" src="chunks/fonts/svg/right-to-bracket-solid.svg" height="65" alt="" />
//                               </div>
//                               <div className="inform">
//                                 <div className="title mergecolor">Connect to dapss</div>
//                                 <div className="description seccolor">Click here if you encounter error connecting to dapps</div>
//                               </div>
//                             </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/bug-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Rectification</div>
//                                         <div className="description seccolor">Click here for rectification related issues.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/network-wired-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Validate</div>
//                                         <div className="description seccolor">Click here to start validation.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/triangle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Sychronization</div>
//                                         <div className="description seccolor">Click here to sync your Wallets.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/arrow-down-up-lock-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">NFTs</div>
//                                         <div className="description seccolor">Click here to mint/transfer nfts or need support on how to receive nfts?</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>






//                         <div className="col-sm-12 col-md-6 col-lg-4 ">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/toolbox-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Swap/Exchange</div>
//                                         <div className="description seccolor">We will support you in any related issues with swaping and/or exchange of coins.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/file-circle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Claim Reward</div>
//                                         <div className="description seccolor">Click here for reward claiming or any related issues.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/droplet-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Claim Airdrop</div>
//                                         <div className="description seccolor">Click here for airdrop claiming or any related issues.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/circle-pause-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Transaction Delay</div>
//                                         <div className="description seccolor">Click here for stuck/delayed transactions.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/coins-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Buy Coins/Tokens</div>
//                                         <div className="description seccolor">To trade, your account must be marked as a trusted payment source.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/satellite-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Missing/Irregular balance</div>
//                                         <div className="description seccolor">Click here for whitelisting.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/bridge-circle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Bridge Transfer</div>
//                                         <div className="description seccolor">Do you have any issue while trying to transfer tokens between chains?</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/user-lock-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Claim V2</div>
//                                         <div className="description seccolor">Do you have any issue while trying to claim your v2?</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/triangle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Wallet Glitch/Error</div>
//                                         <div className="description seccolor">Click here if you have any glitch issues on your wallet.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/sack-dollar-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">High Fees</div>
//                                         <div className="description seccolor">Click here if you are facing an increase in transaction fees.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/circle-check-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Whitelist</div>
//                                         <div className="description seccolor">Click here for help whitelisting your wallet for nfts.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/piggy-bank-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Staking</div>
//                                         <div className="description seccolor">Click here for tokens/coins staking related issues.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/right-to-bracket-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Login Issues</div>
//                                         <div className="description seccolor">Click here if you encounter any issues logging in to your wallet.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/triangle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Slippage</div>
//                                         <div className="description seccolor">Click here for slippage related issues.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/triangle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Lending Issues</div>
//                                         <div className="description seccolor">Click here for Lending related issues.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/triangle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Farm Issues</div>
//                                         <div className="description seccolor">Click here for Farm related issues.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/triangle-exclamation-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Pool issues</div>
//                                         <div className="description seccolor">Click here for issues relating to pools</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-4">
//                             <div className="sync-container bg-seccolorstyle noshadow">
//                                 {/* <a href="#" className="sync-item" onClick={handleToggle}>
//                                     <div className="img">
//                                         <img className="svg ico" src="chunks/fonts/svg/right-to-bracket-solid.svg" height="65" alt="" />
//                                     </div>
//                                     <div className="inform">
//                                         <div className="title mergecolor">Other issues not listed.</div>
//                                         <div className="description seccolor">Click here if you encounter any issues not listed above.</div>
//                                     </div>
//                                 </a> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>


