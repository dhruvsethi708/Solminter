import './Lhs.css'

const Lhs = () => {
    return <div className="lhs">
            <div className="logo">
            <img class="logo" src="https://solminter.com/static/media/logo.d6c0c14e.svg" alt="solminter logo"></img>
            </div>

            <div>
            <button className="connectwallet">CONNECT WALLET</button>
            </div>


            <div className="token">
                <a href=""><img src="https://solminter.com/static/media/icon_manage.61fedfe2.svg" alt="" />
                 Token management </a>
            </div>

            <div className="ido">
                <a href=""><img src="https://solminter.com/static/media/icon_apply_ido.06ebbe72.svg" alt="" />
                Apply for IDO </a>
            </div>

            <div className="nft">
                <a href=""><img src="https://solminter.com/static/media/icon_nft.d8e9f1af.svg" alt="" />
                NFT </a> 
            </div>

            <div className="docs">
                <a href=""><img src="https://solminter.com/static/media/documentation_1.7ec4e17e.svg" alt="" />
                Documentation </a>
            </div>
        </div>
}

export default Lhs;