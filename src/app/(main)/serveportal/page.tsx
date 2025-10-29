"use client";
import "./serveportal.css";
import "./steps.css";
export default function AboutPage() {
  const slot = [
    { title: "Tier", content: "1" },
    { title: "Format", content: "LARGE (250 X 350px)" },
    { title: "File Type", content: "Image" },
    { title: "Commune", content: "Toulouse, 31000" },
    { title: "Event", content: "CLOSING YANN MULLER X LA CENTRALE" },
  ];
  return (
    <>
      <div className="page-width">
        <div className="steps-cols">
          <div>
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <img
                style={{ width: "48px" }}
                src="/cart.png"
                className=""
                alt=""
              />

              <h1 className="primary-heading">SELF-SERVE PORTAL</h1>
            </div>
            <h2
              style={{ marginLeft: "4rem" }}
              className="secondary-heading event-h"
            >
              Event Pages
            </h2>
            <p
              style={{ fontSize: "1.33rem", marginLeft: "4rem" }}
              className="primary-para event-p"
            >
              Use this page to upload an advert to an Event Page/s of your
              choice
            </p>
            <div className="stepper-container">
              {/* steps */}
              <div className="stepper">
                {/* Step 1 */}
                <div className="step-container">
                  <div className="step penta-heading">1</div>
                  <div className="line green-line"></div>
                </div>

                {/* Step 2 */}
                <div className="step-container">
                  <div className="step penta-heading">2</div>
                  <div className="line red-line-1"></div>
                </div>

                {/* Step 3 */}
                <div className="step-container">
                  <div className="step penta-heading">3</div>
                  <div className="line red-line-2"></div>
                </div>

                {/* Step 4 */}
                <div className="step-container">
                  <div className="step penta-heading">4</div>
                  <div className="line red-line-3"></div>
                </div>

                {/* Step 5 */}
                <div className="step-container">
                  <div className="step penta-heading">5</div>
                </div>
              </div>
              {/* content of steps */}
              <div>
                {/* step 1 */}
                <div>
                  <h2 className="tertiary-heading">
                    Is your advert an image, rich text advert or video?
                  </h2>
                  <div className="step-2-btn-container">
                    <button
                      style={{ fontSize: "1.5rem" }}
                      className="imgBtn tertiary-para"
                    >
                      image
                    </button>
                    <button
                      style={{ fontSize: "1.5rem", fontWeight: 500 }}
                      className="Step-2-Btn quaternary-heading"
                    >
                      rich text
                    </button>
                    <button
                      style={{ fontSize: "1.5rem", fontWeight: 500 }}
                      className="Step-2-Btn quaternary-heading"
                    >
                      video
                    </button>
                  </div>
                </div>
                {/*step 2  */}
                <h3 className="tertiary-heading">Choose an Advert Size</h3>
                <p className="primary-para">
                  sélectionnez le format publicitaire
                </p>
                <div className="cards">
                  <div className="card-container">
                    <h4
                      style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: "1rem",
                      }}
                      className="quaternary-heading"
                    >
                      medium
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "2rem 0",
                      }}
                    >
                      <div className="blue-box">
                        <p className="tertiary-para">300 x 250 px</p>
                      </div>
                    </div>

                    <p
                      style={{ textAlign: "center" }}
                      className="quaternary-para"
                    >
                      from
                    </p>
                    <p
                      style={{
                        fontSize: "1.63rem",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                      className="quaternary-para"
                    >
                      1€ /day
                    </p>
                  </div>

                  <div className="card-container btnCard">
                    <button className="sellerBtn tertiary-para">
                      BEST SELLER
                    </button>
                    <h4
                      style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: "1rem",
                      }}
                      className="quaternary-heading"
                    >
                      LARGE
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "2rem 0",
                      }}
                    >
                      <div className="blue-box">
                        <p className="tertiary-para">350 x 280 px</p>
                      </div>
                    </div>

                    <p
                      style={{ textAlign: "center" }}
                      className="quaternary-para"
                    >
                      from
                    </p>
                    <p
                      style={{
                        fontSize: "1.63rem",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                      className="quaternary-para"
                    >
                      1,25€ /day
                    </p>
                  </div>

                  <div className="card-container">
                    <h4
                      style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: "1rem",
                      }}
                      className="quaternary-heading"
                    >
                      POP UNDER
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "2rem 0",
                      }}
                    >
                      <div className="blue-box pop">
                        <p className="tertiary-para">720 x 300 px</p>
                      </div>
                    </div>

                    <p
                      style={{ textAlign: "center" }}
                      className="quaternary-para"
                    >
                      from
                    </p>
                    <p
                      style={{
                        fontSize: "1.63rem",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                      className="quaternary-para"
                    >
                      2,50€ /day
                    </p>
                  </div>
                </div>
                
                {/* step 3 */}
                <div>
                  <h3 className="tertiary-heading">
                    Target a Commune or a Speciﬁc Event
                  </h3>
                  <p className="primary-para">
                    an interactive map will open where you will be able to
                    choose your events{" "}
                  </p>
                  <input
                    placeholder="Type a commune or a postcode"
                    className="postcode-input"
                    type="text"
                  />
                </div>
                {/* step 4 */}
                <div className="step-4-container">
                  <h3 className="tertiary-heading">Your chosen adverts</h3>
                  <p className="primary-para choose-p">
                    this is a list of the advert/s you are ordering, which you
                    can now preview online
                  </p>
                  <div style={{ position: "relative" }}>
                    <input
                      placeholder="1. TOULOUSE  34000"
                      className="choose-input"
                      type="text"
                    />
                    <div className="choose-icons">
                      <img className="" src="/edit.png" />
                      <img className="" src="/eye.png" />
                      <img className="" src="/cross.png" />
                    </div>
                  </div>
                  <div
                    className="input-container"
                    style={{ position: "relative", marginTop: "0.8rem" }}
                  >
                    <input
                      placeholder="2.  SAINT AGUR  67900"
                      className="choose-input"
                      type="text"
                    />
                    <div className="choose-icons">
                      <img className="" src="/edit.png" />
                      <img className="" src="/eye.png" />
                      <img className="" src="/cross.png" />
                    </div>
                  </div>
                </div>
                {/* step 4 */}
                <div className="step-5">
                  <h3 className="tertiary-heading">All done!</h3>
                  <p className="primary-para choose-p">
                    you can now advance to the Payments Page
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* summary */}
            <h3 className="sum-h penta-heading">Summary</h3>
            <div className="sum-container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  marginTop: "0.5rem",
                }}
              >
                <h4 className="penta-heading2 slot-p">SLOT 1</h4>
                <img style={{ width: "20px" }} src="/top-arrow.png" />
              </div>
              {/*  */}
              {slot?.map((item, i) => (
                <div key={i} className="slot-1-content">
                  <>
                    <p className="secondary-para">{item?.title}</p>
                    <p className="secondary-para">{item?.content}</p>
                  </>
                </div>
              ))}

              <div className="slot-1-content">
                <>
                  <p className="secondary-para">Duration</p>
                  <p
                    style={{ color: "#299B13", fontSize: "1.25rem" }}
                    className="secondary-para"
                  >
                    14 days
                  </p>
                </>
              </div>
              <div className="advert">
                <div className="slot-1-content">
                  <>
                    <p className="secondary-para">Advert Starts</p>
                    <p className="secondary-para">14th August 2025, 00h00</p>
                  </>
                </div>
                <div className="slot-1-content">
                  <>
                    <p className="secondary-para">Advert Ends</p>
                    <p className="secondary-para">28th August 2025, 23h59</p>
                  </>
                </div>
              </div>
              <div style={{ marginTop: "1rem" }} className="slot-1-content">
                <>
                  <p
                    style={{ color: "#299B13", fontSize: "1.5rem" }}
                    className="secondary-para"
                  >
                    Total TTC
                  </p>
                  <p
                    style={{ color: "#299B13", fontSize: "1.6rem" }}
                    className="secondary-para"
                  >
                    118,75€
                  </p>
                </>
              </div>
              <p style={{ color: "#6A6C5E" }} className="secondary-para">
                Have a Coupon? Add at Checkout
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  marginTop: "2.5rem",
                }}
              >
                <h4 className="penta-heading2 slot-p">SLOT 2</h4>
                <img style={{ width: "20px" }} src="/bottom-arrow.png" />
              </div>

              {/*  */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="paymentBtn penta-heading">
                  <img style={{ width: "50px" }} src="/cart-white.png" />
                  Go to the Payment Page
                </button>
              </div>
            </div>
            {/* open map */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              <p
                style={{ color: "#0066B4", textAlign: "center" }}
                className="tertiary-heading"
              >
                OPEN <br /> MAP
              </p>
              <img style={{ width: "60px" }} src="/open-map.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
