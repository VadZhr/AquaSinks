
import dummyImage from '../assets/images/wallsink-template.webp'
import './producProperites.css'

export default function producProperites() {
    return (
        <div className="inner-container">
            <div className='properties'>
                <div className="properties-left">
                    <img src={dummyImage} alt="приставная раковина" />
                </div>
                <div className="properties-right">
                    <div className="product-type">
                        <span>Тип: </span>
                        <span>Пристенная</span>
                    </div>
                    <div className="product-length">
                        <span>Длина: </span>
                        <span>430мм</span>
                    </div>
                    <div className="product-width">
                        <span>Ширина: </span>
                        <span>430мм</span>
                    </div>
                    <div className="product-weight">
                        <span>Вес: </span>
                        <span>38кг</span>
                    </div>
                    <div className="product-height">
                        <span>Высота: </span>
                        <span>830мм</span>
                    </div>
                    <div className="product-color">
                        <span>Цвет: </span>
                        <span>Белый</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
