import aphnIcon from '../../assets/img/brand/aphn_icon.svg';
import { Link } from 'react-router-dom';

const ProductDetail = ({img, division, title, description, sku, materialcolor, materialmade, model, className, price, color, category, href = "#", tag}) => {

    return (
        <section className="herospace-product">
            <div className="aphn-icon">
                <Link to="/">
                    <img src={aphnIcon} alt="APHN ICON" />
                </Link>
            </div>
            <div className="tech-info">
                <div>
                    <p className="font-12 clr-midgray">{division}</p>
                    <h1 className="font-20">{title}</h1>
                </div>
                <div id="sp-description" className="font-14"><div dangerouslySetInnerHTML={{ __html: description }}></div></div>
                <div id="sp-color" className="font-14">Supplier color: {materialcolor}</div>
                <div id="sp-description-b" className="font-14"><div dangerouslySetInnerHTML={{ __html: materialmade }}></div></div>
                <div id="sku" className="font-14">{sku}</div>
            </div>
            <div className="add-module">
                <div className="price-color-legal">
                    <div>
                        <p className="price-d font-20">${price} USD</p>
                        <div className="product-color bg-olive"></div>
                    </div>
                    <p className="legal-d font-14 clr-midgray">Taxes and duties included.</p>
                </div>
                <div className="select-container">
                    <select className="size" name="size" id="size-btn">
                        <option value="">SIZE</option>
                        <option value="ss">S</option>
                        <option value="sm">M</option>
                        <option value="sl">L</option>
                        <option value="sxl">XL</option>
                        <option value="sxxl">XXL</option>
                    </select>
                    <button className="wish">WISHLIST</button>
                    <button className="add">ADD TO BAG</button>
                </div>
                <div>
                    <p className="size-guide">{model} <a href="">SIZE GUIDE</a></p>
                    <p className="shipping-info font-14 clr-midgray">Mexico : Free shipping on orders over $500 USD.</p>
                </div>
            </div>
            <div className="sp-gallery">
                {img && img.halffront && <img src={img.halffront} alt={`${title} - Half Front`} />}
                {img && img.halfsidefront && <img src={img.halfsidefront} alt={`${title} - Half Side Front`} />}
                {img && img.halfsideback && <img src={img.halfsideback} alt={`${title} - Half Side Back`} />}
                {img && img.fullfront && <img src={img.fullfront} alt={`${title} - Full Front`} />}
                {img && img.dfront && <img src={img.dfront} alt={`${title} - Detailed Front`} />}
                {img && img.dback && <img src={img.dback} alt={`${title} - Detailed Back`} />}
            </div>
        </section>
    );
}

export default ProductDetail;