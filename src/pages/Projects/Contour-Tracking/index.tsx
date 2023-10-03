
import projects_architecture from "./assets/architecture.png";
import projects_jellyfish_icon from "./assets/jellyfish_icon.ico";

// import "./styles.css"
import React from "react";
import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom';
import { ScrollToTop } from "../../../lib/scroll_to_top";


const home_body = (
  
  <React.Fragment>
    <Helmet>
        {/* HTML Meta Tags */}
        <title>Contour Tracking</title>
        <meta
            name="description"
            content="https://junbongjang.github.io/projects/contour-tracking/"
        />
        <meta property="og:image" content={projects_architecture} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1704" />
        <meta property="og:image:height" content="636" />
        <meta property="og:type" content="website" />
        <meta
            property="og:title"
            content="Unsupervised Contour Tracking of Live Cells by Mechanical and Cycle Consistency Losses"
        />
        <meta
            property="og:description"
            content="Analyzing the dynamic changes of cellular morphology is important for understanding the various functions and characteristics of live cells including stem cells and metastatic cancer cells.
        To this end, we need to track all points on the highly deformable cellular contour in every frame of live cell video. 
        Local shapes and textures on the contour are not evident, and their motions are complex often with expansion and contraction of local contour features.
        The prior arts for optical flow or deep point set tracking are unsuited due to the fluidity of cells and previous deep contour tracking does not consider point correspondence.
        We propose the first deep learning-based tracking of cellular (or more generally viscoelastic materials) contours with point correspondence by fusing dense representation between two contours with cross attention.
        Since it is impractical to manually label dense tracking points on the contour, unsupervised learning comprised of the mechanical and cyclical consistency losses is proposed to train our contour tracker.
        The mechanical loss forcing the points to move perpendicular to the contour effectively helps out.  
        For quantitative evaluation, we labeled sparse tracking points along the contour of live cells from two live cell datasets taken with phase contrast and confocal fluorescence microscopes. Our contour tracker quantitatively outperforms compared methods by a large margin and produces qualitatively more favorable results."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            name="twitter:title"
            content="Unsupervised Contour Tracking of Live Cells by Mechanical and Cycle Consistency Losses"
        />
        <meta
            name="twitter:description"
            content="Analyzing the dynamic changes of cellular morphology is important for understanding the various functions and characteristics of live cells including stem cells and metastatic cancer cells.
        To this end, we need to track all points on the highly deformable cellular contour in every frame of live cell video. 
        Local shapes and textures on the contour are not evident, and their motions are complex often with expansion and contraction of local contour features.
        The prior arts for optical flow or deep point set tracking are unsuited due to the fluidity of cells and previous deep contour tracking does not consider point correspondence.
        We propose the first deep learning-based tracking of cellular (or more generally viscoelastic materials) contours with point correspondence by fusing dense representation between two contours with cross attention.
        Since it is impractical to manually label dense tracking points on the contour, unsupervised learning comprised of the mechanical and cyclical consistency losses is proposed to train our contour tracker.
        The mechanical loss forcing the points to move perpendicular to the contour effectively helps out.  
        For quantitative evaluation, we labeled sparse tracking points along the contour of live cells from two live cell datasets taken with phase contrast and confocal fluorescence microscopes. Our contour tracker quantitatively outperforms compared methods by a large margin and produces qualitatively more favorable results."
        />
        <meta name="twitter:image" content={projects_architecture} />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Lato|Varela+Round|Open+Sans"
            rel="stylesheet"
            type="text/css"
        />
        <link rel="icon" type="image/x-icon" href={projects_jellyfish_icon} />
        {/* Bootstrap JS */}
        {/* Customized style */}
        </Helmet>
        
        <style
            dangerouslySetInnerHTML={{
            __html:
                '\n      html * {\n        color: #333;\n        font-family: "Lato", sans-serif;\n      }\n      table.results td {\n        color: #888;\n        font-size: 90%;\n      }\n      .mtitle {\n        margin-top: 0;\n        margin-bottom: 0;\n        font-family: "Varela Round", sans-serif;\n        color: #4d4d4d;\n        font-size: 50px;\n        line-height: 80px;\n        font-weight: 600;\n        letter-spacing: 3px;\n      }\n      .msubtitle {\n        margin-top: -30px;\n        margin-bottom: -20px;\n        font-size: 23px;\n        line-height: 65px;\n        letter-spacing: 2px;\n      }\n      .mneurips {\n        color: #aaa;\n        font-size: 20px;\n      }\n      .mauthors {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 15px;\n      }\n      .mauthors_affiliation {\n        margin-top: -12px;\n        margin-bottom: 24px;\n        font-family: "Open Sans", sans-serif;\n        font-size: 12px;\n        line-height: 15px;\n      }\n      .darker_bg {\n        padding-top: 32px;\n        padding-bottom: 32px;\n        background-color: #f5f5f5;\n      }\n      .nav-link {\n        color: #333;\n      }\n      .nav-link a:hover,\n      a:hover,\n      a:active {\n        color: #888 !important;\n      }\n      .accordion-button:not(.collapsed) {\n        color: inherit;\n        background: #f5f5f5;\n      }\n      .accordion-button:not(.collapsed)::after {\n        filter: brightness(0%) invert(70%);\n      }\n      .accordion-button:focus {\n        box-shadow: inherit;\n      }\n    '
            }}
        />
        
        <style
            dangerouslySetInnerHTML={{
            __html:
                "\n      .github-corner:hover .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n      }\n      @keyframes octocat-wave {\n        0%,\n        100% {\n          transform: rotate(0);\n        }\n        20%,\n        60% {\n          transform: rotate(-25deg);\n        }\n        40%,\n        80% {\n          transform: rotate(10deg);\n        }\n      }\n      @media (max-width: 500px) {\n        .github-corner:hover .octo-arm {\n          animation: none;\n        }\n        .github-corner .octo-arm {\n          animation: octocat-wave 560ms ease-in-out;\n        }\n      }\n    "
            }}
        />

    <div id="contour_tracking_container" className="container-fluid my-5 mx-auto" style={{ maxWidth: 1000 }}>
        <div className="row">
        <h1 className="display-8 text-center mtitle">Contour Tracking</h1>
        <h1 className="display-8 text-center msubtitle mt-2 mb-2 lh-sm">
            Unsupervised Contour Tracking of Live Cells
            <br />
            by Mechanical and Cycle Consistency Losses
        </h1>
        </div>
        <div className="row mt-2">
        <div className="display-8 text-center mneurips">CVPR 2023</div>
        </div>
        <br />
        <div
        className="row text-center mt-3 mx-auto mauthors"
        style={{ maxWidth: 800 }}
        >
        <div className="col-md-4">
            <a href="https://junbongjang.github.io/"> Junbong Jang </a>
        </div>
        <div className="col-md-4">
            <a href="https://research.childrenshospital.org/kwonmoo-lee">
            {" "}
            Kwonmoo Lee{" "}
            </a>
        </div>
        <div className="col-md-4">
            <a href="https://sites.google.com/view/tkkim/home">
            {" "}
            Tae-Kyun (T-K) Kim{" "}
            </a>
        </div>
        </div>
        <div className="row text-center mt-3 mx-auto" style={{ maxWidth: 800 }}>
        <div className="col-md-4 d-none d-md-block mauthors_affiliation">
            KAIST
        </div>
        <div className="col-md-4 d-none d-md-block mauthors_affiliation">
            Boston Children's Hospital
            <br />
            Harvard Medical School
        </div>
        <div className="col-md-4 d-none d-md-block mauthors_affiliation">
            KAIST
            <br />
            Imperial College London
        </div>
        </div>
        <div className="row mt-2 text-center">
        <span className="nav-link col-3" />
        <a
            href="https://openaccess.thecvf.com/content/CVPR2023/papers/Jang_Unsupervised_Contour_Tracking_of_Live_Cells_by_Mechanical_and_Cycle_CVPR_2023_paper.pdf"
            className="nav-link col-3"
        >
            <svg style={{ width: 48, height: 48 }} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M16 0H8C6.9 0 6 .9 6 2V18C6 19.1 6.9 20 8 20H20C21.1 20 22 19.1 22 18V6L16 0M20 18H8V2H15V7H20V18M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4M10 10V12H18V10H10M10 14V16H15V14H10Z"
            />
            </svg>
            <br />
            Paper
        </a>
        <a
            href="https://github.com/JunbongJang/contour-tracking/"
            className="nav-link col-3"
        >
            <svg style={{ width: 48, height: 48 }} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            />
            </svg>
            <br />
            Code
        </a>
        <span className="nav-link col-3" />
        </div>
        <br />
        <div className="row">
        <div className="col-md-12 mt-2">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
                src="https://www.youtube.com/embed/lA9lUx9mriM"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
                allowFullScreen
            />
            </div>
            {/* &autoplay=1&loop=1&mute=1 autoplay*/}
            <i>best viewed in Full HD</i>
        </div>
        </div>
        <div className="my-5">
        <h2>Abstract</h2>
        <p>
            Analyzing the dynamic changes of cellular morphology is important for
            understanding the various functions and characteristics of live cells
            including stem cells and metastatic cancer cells. To this end, we need
            to track all points on the highly deformable cellular contour in every
            frame of live cell video. Local shapes and textures on the contour are
            not evident, and their motions are complex often with expansion and
            contraction of local contour features. The prior arts for optical flow
            or deep point set tracking are unsuited due to the fluidity of cells and
            previous deep contour tracking does not consider point correspondence.
            We propose the first deep learning-based tracking of cellular (or more
            generally viscoelastic materials) contours with point correspondence by
            fusing dense representation between two contours with cross attention.
            Since it is impractical to manually label dense tracking points on the
            contour, unsupervised learning comprised of the mechanical and cyclical
            consistency losses is proposed to train our contour tracker. The
            mechanical loss forcing the points to move perpendicular to the contour
            effectively helps out. For quantitative evaluation, we labeled sparse
            tracking points along the contour of live cells from two live cell
            datasets taken with phase contrast and confocal fluorescence
            microscopes. Our contour tracker quantitatively outperforms compared
            methods by a large margin and produces qualitatively more favorable
            results.
        </p>
        <center>
            <img src={projects_architecture} width="95%" alt="model architecture" />
        </center>
        </div>
        <div className="my-5">
        <h2>
            Dense Correspondences on Live Cell Videos (<i>best viewed in Full HD</i>
            ){" "}
        </h2>
        <div className="text-center mt-3 col-md-12">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
                src="https://www.youtube.com/embed/wtpHB8mS01w"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
            />
            </div>
        </div>
        <div className="text-center mt-3 col-md-12">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
                src="https://www.youtube.com/embed/44aU8JPD6G4"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
            />
            </div>
        </div>
        <div className="text-center mt-3 col-md-12">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
                src="https://www.youtube.com/embed/M2n_p2zSwMs"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
            />
            </div>
        </div>
        <div className="text-center mt-3 col-md-12">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
                src="https://www.youtube.com/embed/qTb2VkHhvC4"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
            />
            </div>
        </div>
        <h2 className="mt-5">Dense Correspondences on Jellyfish</h2>
        <div className="text-center mt-3 col-md-12">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
                src="https://www.youtube.com/embed/UWmd74OSTzM?"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
            />
            </div>
        </div>
        <h2 className="mt-5">Ordered Contour Points shown with Rainbow Color </h2>
        <div className="text-center mt-3 col-md-12">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
                src="https://www.youtube.com/embed/umKQ90fOtjQ"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
            />
            </div>
        </div>
        </div>
        <div className="row my-5">
        <h2>Citation</h2>
        <div className="col-md-12 mt-3">
            <pre>
            @InProceedings{"{"}Jang_2023_CVPR,{"\n"}
            {"  "}author{"    "}= {"{"}Jang, Junbong and Lee, Kwonmoo and Kim,
            Tae-Kyun{"}"},{"\n"}
            {"  "}title{"     "}= {"{"}Unsupervised Contour Tracking of Live Cells
            by Mechanical and Cycle Consistency Losses{"}"},{"\n"}
            {"  "}booktitle = {"{"}Proceedings of the IEEE/CVF Conference on
            Computer Vision and Pattern Recognition (CVPR){"}"},{"\n"}
            {"  "}month{"     "}= {"{"}June{"}"},{"\n"}
            {"  "}year{"      "}= {"{"}2023{"}"},{"\n"}
            {"  "}pages{"     "}= {"{"}227-236{"}"}
            {"\n"}
            {"}"}
            {"\n"}
            </pre>
        </div>
        </div>
        <div className="text-center">
        <hr />
        <small>
            Inspired by
            <a href="https://jyunlee.github.io/projects/implicit-two-hands/">
            Im2Hands
            </a>
        </small>
        </div>
    </div>
    <ScrollToTop />
  </React.Fragment>
);

export function ProjectContourTracking() {
  return (
    home_body
  );
}
