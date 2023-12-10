import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import carousel_hallsan from "../public/images/home_hallasan.jpg";
import carousel_suwolbong from "../public/images/home_suwolbong.jpg";
import carousel_kaist from "../public/images/home_KAIST.jpg";

import project_fourierhandflow from "../public/images/project_fourierhandflow.png";
import project_contour_tracking from "../public/images/project_contour_tracking.png";
import project_FNA from "../public/images/project_FNA.png";
import project_ksum2023 from "../public/images/project_ksum2023.png";
import project_MQP_2022 from "../public/images/project_MQP_2022.png";
import project_marsnet from "../public/images/project_marsnet.png";
import profile_junbong from "../public/images/profile_junbong3.png";


const home_body = (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Junbong Jang</title>
      </Head>

      <div id="header" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#header" data-slide-to="0" className="active"></li>
            <li data-target="#header" data-slide-to="1"></li>
            <li data-target="#header" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
              <Image src={carousel_hallsan} className="d-block w-100" alt="Jeju Island Hallasan" />
              <div className="carousel-caption d-none d-md-block">
                  <small className="text-light">Hallsan, Jeju, South Korea (7/22/2022)</small>
              </div>
          </div>
          <div className="carousel-item">
              <Image src={carousel_suwolbong} className="d-block w-100" alt="Jeju Island Suwolbong" />
              <div className="carousel-caption d-none d-md-block">
                  <small className="text-light">Suwolbong, Jeju, South Korea (7/20/2022)</small>
              </div>
          </div>
          <div className="carousel-item">
              <Image src={carousel_kaist} className="d-block w-100" alt="KAIST N1 building" />
              <div className="carousel-caption d-none d-md-block">
                  <small className="text-light">KAIST N1 building, Daejeon, South Korea (12/19/2021)</small>
              </div>
          </div>
        </div>
  
        <a className="carousel-control-prev" href="#header" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#header" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
      </div>
  
      {/* About*/}
      <div id="about" className="basic-1 bg-gray">
          <div className="container">
  
              <div className="row">
                  <div className="col-lg-4" style={{textAlign: "center"}}>
                      <Image className="avatar avatar-circle pb-3" src={profile_junbong} alt="my face" />
                      <div>
                          <h2>Junbong Jang</h2>
                          <p>AI Engineer at Cocone M</p>
                      </div>
                      <div className="align-self-center">
                          <a href="https://scholar.google.com/citations?user=Ndu8xqMAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer"
                              style={{textDecoration: "none"}}>
                              <i className="ai ai-google-scholar ai-3x small-icon"></i>
                          </a>
                          <a href="https://github.com/JunbongJang" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                              <i className="fab fa-github fa-3x small-icon ml-4"></i>
                          </a>
                      </div>
                  </div> {/* end of col */}
  
                  <div className="col-lg-8">
                      <div className="row">
                          <div className="col">
                              <p>
                                  I am the artificial intelligence engineer at <a href="https://www.cocone-m.com/" target="_blank" rel="noreferrer">Cocone M</a>.<br/>
                                  Before joining Cocone M, I worked on contour tracking of live cells at <a href="https://gsai.kaist.ac.kr/" target="_blank" rel="noreferrer">KAIST</a>
                                  supervised by <br/>
                                  <a href="https://sites.google.com/view/tkkim/home" target="_blank" rel="noreferrer">Dr. Tae-kyun Kim</a>. 
                                  Before joining KAIST, I worked as a research assistant for <a href="https://scholar.harvard.edu/kwonmoo-lee" target="_blank" rel="noreferrer">Dr. Kwonmoo Lee</a> at Boston Children's Hospital to develop a deep learning-based segmentation pipeline.
                                  At Worcester Polytechnic Institute, I worked on "Bioinformatics Approach to Diagnose Mental Disorders" for my thesis project, supervised by
                                  Dr. Dmitry Korkin <br/><br/>
  
                                  My research interests are Computer Vision and Generative AI.
                              </p>
                          </div>
                      </div>
  
                      <div className="row">
                          <div className="col-md-6">
                              <h4>Education</h4>
                              <ul>
                                  <li style={{listStyle: "none", marginBottom: "1rem"}}>
                                      <i className="fas fa-graduation-cap" style={{marginRight: "0.5rem"}}></i>
                                      <h6 style={{display:"inline"}}>M.S. in Artificial Intelligence</h6>
                                      <br/>
                                      <span className="time">Korea Advanced Institute of Science and Technology (KAIST)</span>
                                      <br/>
                                      <small>Aug 2021 - Aug 2023</small>
                                  </li>
                                  <li style={{listStyle: "none"}}>
                                      <i className="fas fa-graduation-cap" style={{marginRight: "0.5rem"}}></i>
                                      <h6 style={{display:"inline"}}>B.S. in Computer Science</h6>
                                      <br/>
                                      <span className="time">Worcester Polytechnic Institute (WPI)</span>
                                      <br/>
                                      <small>Aug 2016 - Dec 2019</small>
                                  </li>
                              </ul>
                          </div> {/* end of col */}
  
                          <div className="col-md-6">
                              <h4>Contact</h4>
                              <ul >
                                  <li style={{listStyle: "none", marginBottom:"1rem"}}>
                                      <i className="fas fa-envelope" style={{marginRight: "0.5rem"}}></i>
                                      <h6 style={{display:"inline"}}>junbongjang@kaist.ac.kr</h6>
                                  </li>
                              </ul>
                          </div> {/* end of col */}
                      </div>{/* end of row */}
  
                  </div>{/* end of col */}
  
              </div> {/* end of row */}
          </div> {/* end of container */}
      </div> {/* end of basic-1 */}
      {/* end of about */}
  
      {/* Projects */}
      <div id="projects" className="basic-3">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <h2 className="pb-3">Projects</h2>
                  </div> {/* end of col */}
              </div> {/* end of row */}
  
              <div className="row mb-5">
                  <div className="col-lg-4">
                      <div className="image-container">
                          <Image className="img-fluid" src={project_fourierhandflow} alt="Fourier Hand Flow" />
                      </div> {/* end of image-container */}
                  </div>
  
                  <div className="col-lg-8">
  
                      <p><strong>FourierHandFlow: Neural 4D Hand Representation Using Fourier Query Flow</strong><br/>
                          Jihyun Lee, <b>Junbong Jang</b>, Donghwan Kim, Minhyuk Sung, Tae-Kyun Kim
                      </p>
                      <p>
                          <strong>NeurIPS 2023</strong>
                      </p>
                      <p>
                          <a href="https://arxiv.org/abs/2307.08100" className="link-no-deco"> Paper </a>
                      </p>
                  </div>
              </div> {/* end of row */}
  
              <div className="row mb-5">
                  <div className="col-lg-4">
                      <div className="image-container">
                          <Image className="img-fluid" src={project_contour_tracking} alt="CVPR 2023 project" />
                      </div> {/* end of image-container */}
                  </div>
  
                  <div className="col-lg-8">
  
                      <p><strong>Unsupervised Contour Tracking of Live Cells by Mechanical and Cycle Consistency Losses</strong><br/>
                          <b>Junbong Jang</b>, Kwonmoo Lee, Tae-Kyun Kim
                      </p>
                      <p>
                          <strong>Computer Vision and Pattern Recognition (CVPR), 2023</strong>
                      </p>
                      <p>
                          <Link href="/projects/contour-tracking" className="link-no-deco"> Project Page </Link> /
                          <a href="https://openaccess.thecvf.com/content/CVPR2023/papers/Jang_Unsupervised_Contour_Tracking_of_Live_Cells_by_Mechanical_and_Cycle_CVPR_2023_paper.pdf" className="link-no-deco"> Paper </a> /
                          <a href="https://github.com/JunbongJang/contour-tracking" className="link-no-deco"> Code </a>
                      </p>
                  </div>
              </div> {/* end of row */}
  
          
              <div className="row mb-5">
                  <div className="col-lg-4">
                      <div className="image-container">
                          <Image className="img-fluid" src={project_FNA} alt="project FNA" />
                      </div> {/* end of image-container */}
                  </div>
  
                  <div className="col-lg-8">
                      <p>
                          <strong>Screening adequacy of unstained thyroid fine needle aspiration samples using a deep learning-based classifier</strong><br/>
                          <b>Junbong Jang</b>, Young Kim, Brian Westgate, Yang Zong, Caleb Hallinan, Ali Akalin, Kwonmoo Lee<br/>
                      </p>
                      <p>
                          <strong>Scientific Reports, 2023</strong>
                      </p>
                      <p>
                          <a href="https://www.nature.com/articles/s41598-023-40652-1" className="link-no-deco"> Paper </a> /
                          <a href="https://github.com/kleelab-bch/FNA" className="link-no-deco"> Code </a>
                      </p>
                  </div>
              </div> {/* end of row */}
  
              <div className="row mb-5">
                  <div className="col-lg-4">
                      <div className="image-container">
                          <Image className="img-fluid" src={project_ksum2023} alt="KSUM 2023" />
                      </div> {/* end of image-container */}
                  </div>
  
                  <div className="col-lg-8">
  
                      <p><strong>Deep Learning-Based Triage of Acute Gallbladder Pathologies Using Ultrasound Cine Video Clips </strong><br/>
                          Connie Ge*, <b>Junbong Jang*</b>, Patrick Svrcek, Victoria Fleming, Young Hwan Kim <br/>
                          *equal contribution
                      </p>
                      <p>
                          <strong>Korean Society of Ultrasound in Medicine (KSUM), 2023</strong>
                      </p>
                      <p>
                          <a href="https://2023.ksum.or.kr/file/sub_file/SS03-P2_Abstract.pdf" className="link-no-deco"> Paper </a>
                      </p>
                  </div>
              </div> {/* end of row */}
  
              <div className="row mb-5">
                  <div className="col-lg-4">
                      <div className="image-container">
                          <Image className="img-fluid" src={project_MQP_2022} alt="project MQP 2022" />
                      </div> {/* end of image-container */}
                  </div>
  
                  <div className="col-lg-8">
  
                      <p><strong>Unravelling psychiatric heterogeneity and predicting suicide attempts in women with trauma-related dissociation using artificial intelligence</strong><br/>
                          Suhas Srinivasan, Nathaniel G. Harnett, Liang Zhang, M. Kathryn Dahlgren, <b>Junbong Jang</b>, Senbao Lu, Benjamin C Nephew, Cori A Palermo, Xi Pan, Mohamed Y Eltabakh, Blaise B. Frederick, Staci A. Gruber, Milissa L. Kaufman, Jean King, Kerry J. Ressler, Sherry Winternitz, Dmitry Korkin, and Lauren A. M. Lebois.<br/>
                      </p>
                      <p>
                          <strong>European Journal of Psychotraumatology, 2022</strong>
                      </p>
                      <p>
                          <a href="https://www.tandfonline.com/doi/full/10.1080/20008066.2022.2143693" className="link-no-deco"> Paper </a> /
                          <a href="https://web.wpi.edu/Pubs/E-project/Available/E-project-121319-131710/" className="link-no-deco"> My B.S. thesis </a>
                          
                      </p>
                  </div>
              </div> {/* end of row */}
  
  
              <div className="row mb-5">
                  <div className="col-lg-4">
                      <div className="image-container">
                          <Image className="img-fluid" src={project_marsnet} alt="marsnet" />
                      </div> {/* end of image-container */}
                  </div>
  
                  <div className="col-lg-8">
                      <p><strong>A deep learning-based segmentation pipeline for profiling cellular morphodynamics using multiple types of live cell microscopy</strong> <br/>
                          <b>Junbong Jang</b>, Chuangqi Wang, Xitong Zhang, Hee June Choi, Xiang Pan, Bolun Lin, Yudong Yu, Carly Whittle, Madison Ryan, Yenyu Chen, Kwonmoo Lee <br/>
                      </p>
                      <p>
                          <strong>Cell Reports Methods, 2021</strong>
                      </p>
                      <p>
                          <a href="https://www.cell.com/cell-reports-methods/fulltext/S2667-2375(21)00164-8" className="link-no-deco"> Paper </a> /
                          <a href="https://github.com/kleelab-bch/MARS-Net" className="link-no-deco"> Code </a>
                      </p>
                  </div>
              </div> {/* end of row */}
  
  
          </div> {/* end of container */}
      </div> {/* end of basic-3 */}
      {/* end of projects */}
  
  
    </>
);
  


export default function Home() {
  return home_body;
}
