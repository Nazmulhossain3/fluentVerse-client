
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
         <h2>Fluentverse Academy</h2>
          <p>Fluentverse Academy.com<br/>Providing reliable online learning since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Teaching</a> 
          <a className="link link-hover">Learning</a> 
          <a className="link link-hover">Education</a> 
         
        </div> 
        <div>
          <span className="footer-title">Company</span> 
         
          <a className="link link-hover">Contact : +99005577 </a> 
          <a className="link link-hover"> Email : fluentverse@gmail.com </a> 
          <a className="link link-hover"> Address : GulShan-dhaka. </a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;