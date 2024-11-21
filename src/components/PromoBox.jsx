import React from 'react'

const PromoBox = () => {

    // redirect with gmail 

    const redirectToGmailCompose = (email) => {
        const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodeURIComponent(email)}`;
        window.open(gmailComposeUrl, '_blank');
    };

    // redirect with gmail end 

    return (
        <>
            {/* Start Promo box */}
            <div className="promot-box-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="promo-box-items text-center">
                                <h2>Hello👋i'm available for freelance work</h2>
                                <h4>For quick response: <a href="#" onClick={(e) => { e.preventDefault(); redirectToGmailCompose('nitishkumarratre@gmail.com'); }} class="btn btn">
                                    <i class="fas fa-envelope"></i> Email Me
                                </a></h4>
                                <div className="button mt-40">
                                    <a className="btn-style-regular" href="#contact"><span>Hire Me Now </span> <i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Promo box */}
        </>
    )
}

export default PromoBox
