// import dummyImage from '../assets/images/wallsink-template.webp'
import dummyImage from '../assets/images/icons8-instagram-48.png'
import './producProperites.css'

export default function producProperites({params,productParamsImage}) {
    console.log(params,'params');
    return (
        <div className="inner-container">
            <div className='properties'>
                <div className="properties-left">
                    <img src={productParamsImage.blob} alt="приставная раковина" />
                </div>
                <div className="properties-right">
                    <div className="product-type">
                        <span>Тип: </span>
                        <span>{params.productType}</span>
                    </div>
                    <div className="product-length">
                        <span>Длина: </span>
                        <span>{params.productLength}мм</span>
                    </div>
                    <div className="product-width">
                        <span>Ширина: </span>
                        <span>{params.productWidth}мм</span>
                    </div>
                    <div className="product-weight">
                        <span>Вес: </span>
                        <span>{params.productWeight}кг</span>
                    </div>
                    <div className="product-height">
                        <span>Высота: </span>
                        <span>{params.productHeight}мм</span>
                    </div>
                    <div className="product-color">
                        <span>Цвет: </span>
                        <span>{params.productColor}</span>
                    </div>
                    <div className="product-color">
                        <span>Покрытие: </span>
                        <span>{params.productCoating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
