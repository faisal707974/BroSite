import React, { useEffect, useState } from "react";
import './Home.scss'
import { images } from "../../Utils/data";

export default function Home() {

    const image = [
        {
            image: 'https://backlightblog.com/images/2021/04/landscape-photography-header-2000x1310.jpg',
            serial: 1
        }, {
            image: 'https://iso.500px.com/wp-content/uploads/2015/11/photo-129299193.jpg',
            serial: 2
        }, {
            image: 'https://www.azocleantech.com/images/news/ImageForNews_26919_15786618897301054.png',
            serial: 3
        }, {
            image: 'https://learn.zoner.com/wp-content/uploads/2018/06/landscape-photography-at-every-hour-part-i-landscapes-in-the-morning.jpg',
            serial: 4
        }, {
            image: 'https://thumbs.dreamstime.com/b/sun-rays-mountain-landscape-5721010.jpg',
            serial: 5
        }, {
            image: 'https://blog.britishmuseum.org/wp-content/uploads/2021/09/Intro-Moray.jpg',
            serial: 6
        }, {
            image: 'https://images.adsttc.com/media/images/5f40/2eff/b357/65ba/0000/0124/large_jpg/Panorama8-2a.jpg?1598041843',
            serial: 7
        }, {
            image: 'https://i1.adis.ws/i/canon/canon-pro-ambassador-exchange-landscapes-1-1140?w=1140&qlt=70&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
            serial: 8
        }, {
            image: 'https://images.adsttc.com/media/images/5f90/a0b5/63c0/1756/a700/00cd/large_jpg/05lft03s31-2008-0613-1326d-jw._Credit_Jarle_W%C3%A6hler._Statens_vegvesen._(1).jpg?1603313837',
            serial: 9
        }, {
            image: 'https://i1.adis.ws/i/canon/canon-pro-unusual-landscape-photography-techniques-1?w=1140&qlt=70&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
            serial: 10
        }, {
            image: 'https://thumbor.thedailymeal.com/Pe--0AE9-dDdEMC0HmU2N93RGhg=//https://www.theactivetimes.com/sites/default/files/2020/07/08/HERO_landscapes_look_like_they_belong_on_another_planet_shutterstock.jpg',
            serial: 11
        }
    ]

    const [sevenImages, setSevenImages] = useState()
    useEffect(() => {
        const response = images.slice(0, 8)
        setSevenImages(response)
    }, [])

    const [scroll, setScroll] = useState([1, 2, 3, 4, 5, 6, 7])

    const [topLevel, setTopLevel] = useState(images.length - 1)
    const [downLevel, setDownLevel] = useState(0)

    const [currEnd, setCurrEnd] = useState(7)
    const [currStart, setCurrStart] = useState(7)

    const scrollEvent = (e) => {
        if (e.deltaY > 0) {

            let value = scroll.shift()
            setScroll((state) => [...state, value])

            sevenImages.splice(currStart, 1)
            sevenImages.splice(currStart, 0, images[topLevel])


            if (currStart === 0) {
                setCurrStart(7)
            } else {
                setCurrEnd(currEnd - 1)
                setCurrStart(currStart - 1)
            }

            if (currStart === -7) {
                setCurrStart(0)
            }






            if (topLevel === 0) {
                setTopLevel(images.length - 1)
            } else {
                setTopLevel(topLevel - 1)
            }





        } else {

            let value = scroll.pop()
            setScroll((state) => [value, ...state])

            sevenImages.splice(currEnd, 1)
            sevenImages.splice(currEnd, 0, images[downLevel])

            if (currStart === 6) {
                setCurrStart(0)
            } else {
                setCurrStart(currStart + 1)
                setCurrEnd(currEnd + 1)
            }
            if (currEnd === 12) {
                setCurrEnd(6)
            }





            if (downLevel === images.length - 1) {
                setDownLevel(0)
            } else {
                setDownLevel(downLevel + 1)
            }




        }
    }

    // console.log({ currStart })
    // console.log({ currEnd })

    // console.log({ topLevel })
    console.log({ downLevel })

    return (
        <>
            <div className="Home">
                {sevenImages &&
                    <div className="platform" onWheel={scrollEvent} >
                        <div className={"post post" + (scroll[0])}>
                            <img src={sevenImages[0]} alt="" />
                            <p></p>
                        </div>
                        <div className={"post post" + (scroll[1])}>
                            <img src={sevenImages[1]} alt="" />
                            <p></p>
                        </div>
                        <div className={"post post" + (scroll[2])}>
                            <img src={sevenImages[2]} alt="" />
                            <p></p>
                        </div>
                        <div className={"post post" + (scroll[3])}>
                            <img src={sevenImages[3]} alt="" />
                            <p></p>
                        </div>
                        <div className={"post post" + (scroll[4])}>
                            <img src={sevenImages[4]} alt="" />
                            <p></p>
                        </div>
                        <div className={"post post" + (scroll[5])}>
                            <img src={sevenImages[5]} alt="" />
                            <p></p>
                        </div>
                        <div className={"post post" + (scroll[6])}>
                            <img src={sevenImages[6]} alt="" />
                            <p></p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}