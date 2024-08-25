"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientFeedbackStyle1: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CLIENT REVIEWS</span>
            <h2>Some of Our Happy Customer Reviews About Our Product</h2>
          </div>

          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide className="single-feedback-box">
              <div className="client-info">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/clientuser2.png"
                    alt="user"
                    width={300}
                    height={300}
                  />
                  <div className="title">
                    <h3>Zayd</h3>
                    <span>Client</span>
                  </div>
                </div>
              </div>
              <p>
              "LEAD GENIUS has completely transformed the way we engage with our customers on WhatsApp. Its intuitive interface and powerful features have made our marketing campaigns more effective than ever before. Highly recommend for any business in the UAE!"
              </p>
              <div className="rating d-flex align-items-center justify-content-between">
                {/* <h5>Theme Customization</h5> */}
                <div>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-feedback-box">
              <div className="client-info">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/clientuser3.png"
                    alt="user"
                    width={300}
                    height={300}
                  />
                  <div className="title">
                    <h3>Tabassum</h3>
                    <span>CEO</span>
                  </div>
                </div>
              </div>
              <p>
                "LEAD GENIUS is a must-have for any business looking to stay ahead in today's competitive market. Its versatility and ease of use make it the perfect solution for both marketing and customer service. We've seen significant growth in our client base and revenue since implementing this tool."
              </p>
              <div className="rating d-flex align-items-center justify-content-between">
                {/* <h5>Customer Support</h5> */}
                <div>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-feedback-box">
              <div className="client-info">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/clientuser1.png"
                    alt="user"
                    width={300}
                    height={300}
                  />
                  <div className="title">
                    <h3>Yosif</h3>
                    <span>COO</span>
                  </div>
                </div>
              </div>
              <p>
                "I was looking for a tool that could streamline our communication with clients on WhatsApp. LEAD GENIUS exceeded my expectations with its user-friendly design and automation capabilities. It's been a game-changer for our customer support efforts."
              </p>
              <div className="rating d-flex align-items-center justify-content-between">
                {/* <h5>Design</h5> */}
                <div>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-feedback-box">
              <div className="client-info">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/clientuser4.png"
                    alt="user"
                    width={300}
                    height={300}
                  />
                  <div className="title">
                    <h3>Inaya</h3>
                    <span>Client</span>
                  </div>
                </div>
              </div>
              <p>
                "I've tried several WhatsApp marketing tools, but none compare to LEAD GENIUS. Its advanced features like personalized messaging and scheduling have helped us reach our target audience more effectively. Our sales have seen a noticeable boost since using this platform."
              </p>
              <div className="rating d-flex align-items-center justify-content-between">
                {/* <h5>Quality</h5> */}
                <div>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-line"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackStyle1;
