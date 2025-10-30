"use client";
import "./page.css";
import "./steps.css";
export default function page() {
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
              City Hub Pages
            </h2>
            <p
              style={{ fontSize: "1.33rem", marginLeft: "4rem" }}
              className="primary-para event-p"
            >
              Use this page to upload an advert to a City Hub Page of your
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
                      <div className="line red-line-4"></div>
                </div>
                {/* Step 6 */}
                <div className="step-container">
                  <div className="step penta-heading">6</div>
                </div>
              </div>
              {/* content of steps */}
              <div>
                {/* step 1 */}
                <div>
                  <h2 className="tertiary-heading">Fixed Advert Size</h2>
                  <p className="primary-para">native - carousel style</p>
                  <div className="border border-[#c4c4c4] rounded-lg my-5">
                    <div className=" flex items-center gap-5 py-5 flex-wrap lg:flex-nowrap justify-center lg:justify-start">
                      <div className="border border-[#1b2b3e] h-[113px] w-[85px]"></div>
                      <div className="border border-[#1b2b3e] h-[113px] w-[85px]"></div>
                      <div className="bg-[#0066b4] h-[113px] w-[85px] flex items-center justify-center">
                        <div>
                          <p className="text-center text-[15px] text-white poppins-medium">
                            {" "}
                            400x
                          </p>
                          <p className="text-center text-[15px] text-white poppins-medium">
                            350px
                          </p>
                        </div>
                      </div>
                      <div className="border border-[#1b2b3e] h-[113px] w-[85px]"></div>
                      <div className="border border-[#1b2b3e] h-[113px] w-[85px]"></div>
                    </div>
                    <p
                      style={{ textAlign: "center", color: "#25a0dd" }}
                      className="quaternary-para"
                    >
                      from
                    </p>
                    <p
                      style={{
                        fontSize: "1.63rem",
                        fontWeight: 700,
                        textAlign: "center",
                        color: "#25a0dd",
                      }}
                      className="quaternary-para pb-5"
                    >
                      75,00 € /week
                    </p>
                  </div>
                </div>
                {/*step 2  */}
                <div className="mt-5">
                  <h3 className="tertiary-heading">
                    Search for a specific City Hub Page
                  </h3>
                  <p className="primary-para">
                    choose from a selection of Hub Pages that are currently
                    available in France
                  </p>
                  <div className="relative">
                    <input
                      placeholder="See our City Hub Pages"
                      className="postcode-input "
                      type="text"
                    />
                    <img
                      className="absolute right-[8px] lg:right-[160px] top-[44px] cursor-pointer"
                      src="/right-arrow.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* step 3 */}
                <div className="mt-12">
                  <h3 className="tertiary-heading">Duration</h3>
                  <p className="primary-para">
                    select your required advert duration (minimum 7 days)
                  </p>
                  <div className="relative">
                    <input
                      placeholder="Dropdown here with 7, 14, 21 or 28 days"
                      className="postcode-input "
                      type="text"
                    />
                    <img
                      className="absolute right-[8px] lg:right-[160px] top-[44px] cursor-pointer"
                      src="/right-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* step 4 */}
                <div className="mt-12">
                  <h3 className="tertiary-heading">Your Media</h3>
                  <p className="primary-para">
                    choose your image from your Media Folder, or upload one
                  </p>
                  <div className="relative">
                    <textarea
                      placeholder="selected media appears here"
                      className="postcode-input "
                      name=""
                      id=""
                      rows={10}
                    ></textarea>

                    <div className=" flex items-center gap-1 absolute top-[43px] right-[8px] lg:right-[162px]">
                      <img className="cursor-pointer" src="/cross-blue.png" />
                      <img className="cursor-pointer" src="/check-blue.png" />
                    </div>
                  </div>
                </div>
                {/* step 5 */}
                <div className="mt-5">
                  <h3 className="tertiary-heading">URL links</h3>
                  <p className="primary-para">
                    do you want to add a clickable link to your image
                  </p>
                  <div className="flex items-center gap-5 mt-8">
                    <button
                      style={{ color: "white" }}
                      className="bg-[#1d8dd1] rounded-xl px-8 py-1 uppercase tertiary-heading"
                    >
                      Yes
                    </button>
                    <button
                      style={{ color: "white" }}
                      className="bg-[#1d8dd1] rounded-xl px-8 py-1 uppercase tertiary-heading"
                    >
                      no
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      placeholder="https://eventx.fr/advertpage"
                      className="postcode-input"
                      type="text"
                    />

                    <div className=" flex items-center gap-1 absolute top-[43px] right-[8px] lg:right-[162px]">
                      <img className="cursor-pointer" src="/cross-blue.png" />
                      <img className="cursor-pointer" src="/check-blue.png" />
                    </div>
                  </div>
                </div>
          
                {/* step 6 */}
                <div className="step-5">
                  <h3 className="tertiary-heading">All done!</h3>
                  <p className="primary-para choose-p">
                   You can pass to the Pâyment Page
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
