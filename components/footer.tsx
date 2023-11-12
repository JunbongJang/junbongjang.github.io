import Link from 'next/link';

export default function Footer() {
  
    return (
        
      <footer className="copyright bg-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <p className="p-small">Copyright ©  <Link className="no-line" href="/">Junbong Jang</Link>
                      </p>
  
                  </div> {/* end of col */}
              </div> {/* enf of row */}
          </div> {/* end of container */}
      </footer> 
    );
}