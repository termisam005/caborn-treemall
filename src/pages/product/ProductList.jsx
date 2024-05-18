import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import ButtonWith from '../../components/common/ButtonWith';
import ImgComponent from '../../components/common/ImgComponent';
import Footer from '../../components/layout/Footer';
import TotallCts from '../../components/common/TotallCts';
import data from './data';


const ProductList = () =>{

    const [products, setProducts] = useState(data);

    useEffect(()=>{
        console.log(products);
    }, [products]);

    return(
        <div className='wrap'>
            <div className='contents'>
                <Header className={'header'}>
                    <h1 className='header_title'>CTreemall</h1>
                    <ButtonWith className={'btn_close'}>
                        <ImgComponent src={'close_line_fff_16.svg'} />
                    </ButtonWith>
                </Header>
                <article className='product_list'>
                    <ul>
                        {products.map((a, i)=>{
                            return(
                                <List key={i} product={products[i]} i={i + 1} />
                            )
                        })}
                    </ul>
                </article>
                <Footer className={'footer'}>
                    <div className='footer_cts'>
                        <h2>CarbonTree</h2>
                        <TotallCts className={'totall_cts'} result={'1,234'} unit={'Cts'} />
                    </div>
                </Footer>
            </div>
        </div>
    )
}

const List = ({ i, product }) => {
    return (
        <li>
            <Link to={'/productdetail'}>
                <section className='list_box'>
                    <div className='list_thumbnail'>
                        <ImgComponent className={'img_thumb'} src={'img_thumb_' + i + '.png'} />
                    </div>
                    <div className='list_text'>
                        <dl className='list_name_dl'>
                            <dt>{product.brand}</dt>
                            <dd>{product.name}</dd>
                        </dl>
                        <div className='list_price'>
                            <p className='price'>{product.price}</p>
                            <span className='unit'>CTs</span>
                        </div>
                    </div>
                </section>
            </Link>
        </li>
    )
}

export default ProductList;
