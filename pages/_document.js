import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        
        <Head>
        <meta charSet="utf-8" />
        
        {/* <!-- SEO Meta Tags --> */}
        <meta name="description" content="Junbong's personal website introducing about himself, his work and research interests" />
        <meta name="author" content="Junbong Jang" />

        {/* <!-- OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn --> */}
        <meta property="og:site_name" content="Junbong Jang" />
        <meta property="og:site" content="" /> {/*<!-- website link --> */}
        <meta property="og:title" content=""/> {/*<!-- title shown in the actual shared post --> */}
        <meta property="og:description" content="" /> {/*<!-- description shown in the actual shared post --> */}
        <meta property="og:image" content="" /> {/*<!-- image link, make sure it's jpg --> */}
        <meta property="og:url" content="" /> {/*<!-- where do you want your post to link to --> */}
        <meta name="twitter:card" content="summary_large_image" /> {/*<!-- to have large image post format in Twitter --> */}

        
        {/* <!-- Styles --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap" rel="stylesheet" />
        {/* <link href="../styles/bootstrap.css" rel="stylesheet" />
        <link href="../styles/fontawesome-all.css" rel="stylesheet" />
        <link href="../styles/custom_styles.css" rel="stylesheet" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css" />
        
        <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
        rel="stylesheet"/>

        {/* <!-- Favicon  --> */}
        <link rel="icon" href="images/favicon.ico" />
        
        </Head>

        <body>
          
            <Script src="https://use.fontawesome.com/fb615be7a2.js" />
            <Script src="https://kit.fontawesome.com/348d8fb546.js" crossOrigin="anonymous" />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XYP72XXDTN" />
            
            <Script strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-XYP72XXDTN');
                `
                }}
            />
            
            {/* <!-- To load arbitrary url path for Single Page Apps on GitHub Pages --> */}
            <Script strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
            (function(l) {
                if (l.search[1] === '/' ) {
                var decoded = l.search.slice(1).split('&').map(function(s) { 
                    return s.replace(/~and~/g, '&')
                }).join('?');
                window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + decoded + l.hash
                );
                }
            }(window.location))
            ` }}
            />

          <Main />
          <NextScript />

          <Script src="js/jquery.min.js" strategy="beforeInteractive"/> {/* <!-- jQuery for Bootstrap's JavaScript plugins --> */}
          <Script src="js/jquery.easing.min.js" strategy="beforeInteractive"/> {/* <!-- jQuery Easing for smooth scrolling between anchors --> */}
          <Script src="js/bootstrap.min.js" strategy="afterInteractive"/> {/* <!-- Bootstrap framework --> */}
          <Script src="js/scripts.js" strategy="afterInteractive"/>  {/* <!-- Custom scripts --> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;