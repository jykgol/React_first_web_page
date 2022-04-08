import './App.css';
import cover from './img/cover.jpg'
import pic1 from './img/carbon_tool-box.png'
import pic2 from './img/consulting.png'
import pic3 from './img/cunsumer.png'
import pic4 from './img/environ.png'
import pic5 from './img/finance.png'
import pic6 from './img/financial.png'
import prac1 from './img/prac_1.png'
import prac2 from './img/prac_2.png'
import prac3 from './img/prac_3.png'
import prac4 from './img/prac_4.png'
import we_are_icon1 from './img/we_are/we_are_icon_1.png'
import we_are_icon2 from './img/we_are/we_are_icon_2.png'
import we_are_footer_icon1 from './img/we_are_footer/icon1.png'
import we_are_footer_icon2 from './img/we_are_footer/icon2.png'
import we_are_footer_icon3 from './img/we_are_footer/icon3.png'
import we_are_footer_icon4 from './img/we_are_footer/icon4.png'
import we_are_footer_icon5 from './img/we_are_footer/icon5.png'
import we_are_footer_icon6 from './img/we_are_footer/icon6.png'
import get_in_touch_icon1 from './img/in touch/icon1.svg'
import get_in_touch_icon2 from './img/in touch/icon2.svg'
import get_in_touch_icon3 from './img/in touch/icon3.svg'
import footer_icon1 from './img/footer/icon1.svg'
import footer_icon2 from './img/footer/icon2.svg'
import footer_icon3 from './img/footer/icon3.svg'



function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header_container _container">
          <a href="" className="header_logo">Relvise</a>
          <nav className="header_menu menu">
            <ul className="menu_list">
              <li className="menu_item">
                <a href="" className="menu_link">Home</a>
              </li>
              <li className="menu_item">
                <a href="" className="menu_link">Product</a>
              </li>
              <li className="menu_item">
                <a href="" className="menu_link">Pricing</a>
              </li>
              <li className="menu_item">
                <a href="" className="menu_link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="page_main">
        <div className="page_main-block main_block">
          <div className="main-block_container _container">
            <div className="main-block_body">
              <h1 className="main-block_title">Finance and Consultancy Solution</h1>
              <div className="main-block_text">We know how large objects will act, but things on a small scale.</div>
              <div className="main-block_buttons">
                <a className="main-block_button">Get Quote Now</a>
                <a className="main-block_button main-block_button_border">Learn More</a>
              </div>
            </div>
          </div>
          <div className="main-block_image _ibg">
            <img src={cover} alt="cover" />
          </div>
        </div>
      </div>
      <div className="page_exp">
        <div className="page_exp-block exp-block">
          <div className="exp_block_container _container">
            <div className="boxes-top">
              <div className="box-top">
                <div className="box-top-img"> <img src={pic1} alt="no pic" /></div>
                <div className="box-top-header">Environmental Consulting</div>
                <div className="box-top-text"> We focus on ergonomics and meeting you where you work. </div>
              </div>
              <div className="box-top">
                <div className="box-top-img"> <img src={pic5} alt="no pic" /></div>
                <div className="box-top-header">Finance and consultancy </div>
                <div className="box-top-text"> Just type what's on your mind and we'll get you there. </div>
              </div>
              <div className="box-top">
                <div className="box-top-img"> <img src={pic2} alt="no pic" /></div>
                <div className="box-top-header">Financial Services Consulting</div>
                <div className="box-top-text"> the quick fox jumps over the lazy dog. </div>
              </div>
            </div>
            <div className="exp_mid">
              <h2 className="else-block_title">Designing Better Experience</h2>
              <div className="else-block_text">Problems trying to resolve the conflict between the two major realms <br /> of Classical physics: Newtonian mechanics </div>
            </div>
            <div className="boxes-bottom">
              <div className="box-bot">
                <div className="box-bot-img"> <img src={pic3} alt="no pic" /> </div>
                <div className="box-bot-header"> <h1>972 +</h1></div>
                <div className="box-bot-text">Consumer Products </div>
              </div>
              <div className="box-bot">
                <div className="box-bot-img"> <img src={pic6} alt="no pic" /> </div>
                <div className="box-bot-header"> <h1>181 +</h1></div>
                <div className="box-bot-text">Financial Services</div>
              </div>
              <div className="box-bot">
                <div className="box-bot-img"> <img src={pic4} alt="no pic" /> </div>
                <div className="box-bot-header"> <h1>98%</h1></div>
                <div className="box-bot-text">Environmental</div>
              </div>
              <div className="box-bot">
                <div className="box-bot-img"> <img src={pic1} alt="no pic" /> </div>
                <div className="box-bot-header"> <h1>746 +</h1></div>
                <div className="box-bot-text">Business & Finance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page_prac">
        <div className="page_practice practice-block">
          <div className="prac_block_container _container">
            <div className="exp_mid">
              <h2 className="else-block_title">Practice Advice</h2>
              <div className="else-block_text">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </div>
            </div>
            <div className="prac_bot">
              <div className="prac_box">
                <div className="prac_box_top">
                  <h2 className="prac_box_title">A single source of truth</h2>
                  <div className="prac_box_text">Newton thought that light was made up of particles, but then it was discovered</div>
                </div>
                <div className="prac_box_img"><img src={prac1} alt="no img" /></div>
              </div>
              <div className="prac_box">
                <div className="prac_box_top">
                  <h2 className="prac_box_title">Fastest way to organize</h2>
                  <div className="prac_box_text">“Quantum mechanics” is the description of the behaviour of matter</div>
                </div>
                <div className="prac_box_img"><img src={prac2} alt="no img" /></div>
              </div>
              <div className="prac_box">
                <div className="prac_box_top">
                  <h2 className="prac_box_title">Fastest way to take action</h2>
                  <div className="prac_box_text">They describe a universe consisting of bodies moving</div>
                </div>
                <div className="prac_box_img"><img src={prac3} alt="no img" /></div>
              </div>
              <div className="prac_box">
                <div className="prac_box_top">
                  <h2 className="prac_box_title">Work better together</h2>
                  <div className="prac_box_text">They finally obtained a consistent description of the behaviour </div>
                </div>
                <div className="prac_box_img"><img src={prac4} alt="no img" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page_we_are">
        <div className="we_are_container _container">
          <div className="exp_mid">
            <h2 className="else-block_title">Who We Are</h2>
            <div className="else-block_text">Problems trying to resolve the conflict between the two major realms <br /> of Classical physics: Newtonian mechanics</div>
          </div>
          <div className="we_are_content">
            <div className="we_are_left_content"> <img src={cover} alt="cover" /> </div>
            <div className="we_are_right_content">
              <div className="we_are_right_content_top_box">
                <div className="we_are_right_content_header">Most trusted in our field</div>
                <div className="we_are_right_content_text">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</div>
              </div>
              <div className="we_are_right_content_bottom_box">
                <div className="right_content_img"><img src={we_are_icon1} alt="img" /> </div>
                <div className="right_content_src">
                  <div className="right_content_src_header">the quick fox jumps over the lazy dog</div>
                  <div className="right_content_src_text">Things on a very small scale ...</div>
                </div>
              </div>
              <div className="we_are_right_content_bottom_box">
                <div className="right_content_img"> <img src={we_are_icon2} alt="img" /></div>
                <div className="right_content_src">
                  <div className="right_content_src_header">the quick fox jumps over the lazy dog</div>
                  <div className="right_content_src_text">Things on a very small scale ...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_we_are">
        <div className="footer_we_are_container _container">
          <div className="footer_we_are_items">
            <div className="footer_we_are_item"><img src={we_are_footer_icon1} alt="img" /></div>
            <div className="footer_we_are_item"><img src={we_are_footer_icon2} alt="img" /></div>
            <div className="footer_we_are_item"><img src={we_are_footer_icon3} alt="img" /></div>
            <div className="footer_we_are_item"><img src={we_are_footer_icon4} alt="img" /></div>
            <div className="footer_we_are_item"><img src={we_are_footer_icon5} alt="img" /></div>
            <div className="footer_we_are_item"><img src={we_are_footer_icon6} alt="img" /></div>
          </div>
          <div className="footer_we_are_sub_block">
            <div className="sub_block_title">Subscribe For Latest Newsletter</div>
            <div className="sub_block_right">
              <input className="sub_block_right_input" placeholder='Your Email' ></input>
              <div className="sub_block_right_button">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page_in_touch">
        <div className="page_in_touch_container _container">
          <div className="exp_mid">
            <h2 className="else-block_title">Get In Touch</h2>
            <div className="else-block_text">Problems trying to resolve the conflict between <br /> the two  major realms of Classical physics: Newtonian mechanics</div>
          </div>
          <div className="page_in_touch_boxes">
            <div className="page_in_touch_box">
              <div className="page_in_touch_box_img"><img itemType='img-svg' src={get_in_touch_icon1} alt="img" /></div>
              <div className="page_in_touch_box_text">georgia.young@example.com <br /> georgia.young@ple.com</div>
              <div className="page_in_touch_box_Title">Get Support</div>
              <div className="page_in_touch_box_button">Submit Request</div>
            </div>
            <div className="page_in_touch_box">
              <div className="page_in_touch_box_img"><img src={get_in_touch_icon2} alt="img" /></div>
              <div className="page_in_touch_box_text">georgia.young@example.com <br /> georgia.young@ple.com</div>
              <div className="page_in_touch_box_Title">Get Support</div>
              <div className="page_in_touch_box_button">Submit Request</div>
            </div>
            <div className="page_in_touch_box">
              <div className="page_in_touch_box_img"><img src={get_in_touch_icon3} alt="img" /></div>
              <div className="page_in_touch_box_text">georgia.young@example.com <br /> georgia.young@ple.com</div>
              <div className="page_in_touch_box_Title">Get Support</div>
              <div className="page_in_touch_box_button">Submit Request</div>
            </div>
          </div>
        </div>
      </div>
      <div className="upper_footer_page">
        <div className="upper_footer_page_container _container">
          <div className="page_in_touch_footer">
            <div className="page_in_touch_footer_left">
              <div className="page_in_touch_footer_left_title">Consulting Agency For Your Business</div>
              <div className="page_in_touch_footer_left_text">the quick fox jumps over the lazy dog</div>
            </div>
            <div className="page_in_touch_footer_right">Contact Us</div>
          </div>
        </div>
      </div>
      <footer className="footer_page">
        <div className="footer_page_container _container">
          <div className="footer_page_lists">
            <div className="footer_page_list">
              <a href='#' className="footer_page_list_header">Company Info</a>
              <a href='#' className="footer_page_list_element">About Us</a>
              <a href='#' className="footer_page_list_element">Carrier</a>
              <a href='#' className="footer_page_list_element">We are hiring</a>
              <a href='#' className="footer_page_list_element">Blog</a>
            </div>
            <div className="footer_page_list">
              <a href='#' className="footer_page_list_header">Legal</a>
              <a href='#' className="footer_page_list_element">About Us</a>
              <a href='#' className="footer_page_list_element">Carrier</a>
              <a href='#' className="footer_page_list_element">We are hiring</a>
              <a href='#' className="footer_page_list_element">Blog</a>
            </div>
            <div className="footer_page_list">
              <a href='#' className="footer_page_list_header">Features</a>
              <a href='#' className="footer_page_list_element">Business Marketing</a>
              <a href='#' className="footer_page_list_element">User Analytic</a>
              <a href='#' className="footer_page_list_element">Live Chat</a>
              <a href='#' className="footer_page_list_element">Unlimited Support</a>
            </div>
            <div className="footer_page_list">
              <a href='#' className="footer_page_list_header">Resources</a>
              <a href='#' className="footer_page_list_element">IOS & Android</a>
              <a href='#' className="footer_page_list_element">Watch a Demo</a>
              <a href='#' className="footer_page_list_element">Customers</a>
              <a href='#' className="footer_page_list_element">API</a>
            </div>
            <div className="footer_page_list">
              <a href='#' className="footer_page_list_header">Get In Touch</a>
              <div className="footer_page_list_last_block">
                <img src={footer_icon1} alt="alt" />
                <a href='#' className="footer_page_list_element">(480) 555-0103</a>
              </div>
              <div className="footer_page_list_last_block">
                <img src={footer_icon2} alt="alt" />
                <a href='#' className="footer_page_list_element">4517 Washington Ave. Manchester, Kentucky 39495</a>
              </div>
              <div className="footer_page_list_last_block">
                <img src={footer_icon3} alt="alt" />
                <a href='#' className="footer_page_list_element">debra.holt@example.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
