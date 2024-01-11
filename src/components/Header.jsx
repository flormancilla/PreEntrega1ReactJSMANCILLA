import bannerRookies from "../assets/images/banner-fino.png";

const Header = () => {
    return (
        <div className="caja-titulo-header">
            <img className="imagen-banner" src={bannerRookies} alt="Banner F1 Rookies Argentina" width="100%" />
        </div>
    );
};

export default Header;
