import React from 'react';

const ServicesSection = ({ handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // logic here
    console.log("Clicked!");
  };

  return (
    <section className="services sync pt-4 pb-80 bg-colorstyle notoppadding">
      <div className="container">
        <div className="service-wrap">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="sync-container bg-seccolorstyle noshadow">
                <a href="#" className="sync-item" onClick={handleClick}>
                  <div className="img">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:xlink="http://www.w3.org/1999/xlink" width="288" height="65" className="svg ico" src="chunks/fonts/svg/right-left-solid.html" alt=""></svg>
                  </div>
                  <div className="inform">
                    <div className="title mergecolor">Migration</div>
                    <div className="description seccolor">Click here to migrate seamlessly with no hassle.</div>
                  </div>
                </a>
              </div>
            </div>
            {/* More col elements */}

            <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="sync-container bg-seccolorstyle noshadow">
                            <a href="#" className="sync-item" onClick={handleClick}>
                              <div className="img">
                                <img className="svg ico" src="chunks/fonts/svg/right-to-bracket-solid.svg" height="65" alt="" />
                              </div>
                              <div className="inform">
                                <div className="title mergecolor">Connect to dapss</div>
                                <div className="description seccolor">Click here if you encounter error connecting to dapps</div>
                              </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="sync-container bg-seccolorstyle noshadow">
                                <a href="#" className="sync-item" onClick={handleClick}>
                                    <div className="img">
                                        <img className="svg ico" src="chunks/fonts/svg/bug-solid.svg" height="65" alt="" />
                                    </div>
                                    <div className="inform">
                                        <div className="title mergecolor">Rectification</div>
                                        <div className="description seccolor">Click here for rectification related issues.</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="sync-container bg-seccolorstyle noshadow">
                                <a href="#" className="sync-item" onClick={handleClick}>
                                    <div className="img">
                                        <img className="svg ico" src="chunks/fonts/svg/network-wired-solid.svg" height="65" alt="" />
                                    </div>
                                    <div className="inform">
                                        <div className="title mergecolor">Validate</div>
                                        <div className="description seccolor">Click here to start validation.</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="sync-container bg-seccolorstyle noshadow">
                                <a href="#" className="sync-item" onClick={handleClick}>
                                    <div className="img">
                                        <img className="svg ico" src="chunks/fonts/svg/triangle-exclamation-solid.svg" height="65" alt="" />
                                    </div>
                                    <div className="inform">
                                        <div className="title mergecolor">Sychronization</div>
                                        <div className="description seccolor">Click here to sync your Wallets.</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="sync-container bg-seccolorstyle noshadow">
                                <a a href="#" className="sync-item" onClick={handleClick}>
                                    <div className="img">
                                        <img className="svg ico" src="chunks/fonts/svg/arrow-down-up-lock-solid.svg" height="65" alt="" />
                                    </div>
                                    <div className="inform">
                                        <div className="title mergecolor">NFTs</div>
                                        <div className="description seccolor">Click here to mint/transfer nfts or need support on how to receive nfts?</div>
                                    </div>
                                </a>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;





