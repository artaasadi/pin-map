import React, {useState} from 'react';
import {Map, Marker} from 'pigeon-maps';
import AWS from 'aws-sdk';
import { saveAs } from "file-saver";
import locations from "./locations/data.json";

function MyMap(props) {
    const [center, setCenter] = useState([35.6892, 51.3890]);
    const [zoom, setZoom] = useState(11);
    const [hue, setHue] = useState(0);

    const color = `hsl(${hue % 360}deg 39% 70%)`;
    const config = {
        'accessKeyId' : 'd38c5e13-0042-4fe9-8f83-43bb4c108527',
        'secretAccessKey' : 'ae4b2d1247d49f92612b75ff970016c78b46f70562a4f355fdacf79e60b026a0',
        'endpoint' : 'https://s3.ir-thr-at1.arvanstorage.com',
    }
    function downloadFile(url,fileName) {
        saveAs(
            url,
            fileName
        );
    }

    AWS.config.update(config);
    const downloader = (pic_name) => {
        console.log(pic_name)
        const s3 = new AWS.S3();
        const params = {
            Bucket: 'aaic',
            Key: `${pic_name}`,
        };
        const address = `./img/${pic_name}`;
        s3.getObject(params, function (err, data) {
            if (err != null) {
                console.log('error :', err)
            }

            console.log(data);
            let blob=new Blob([data.Body], {type: data.ContentType});
            let link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.download=address;
            link.click();
            //props.returnData(require("/img_2021_10_11__13_57_55.jpg"))
        })
    }

    let locationsList = []
    for (let l in locations){
        locationsList.push(locations[l])
    }

    return (
        <Map 
        width={'100%'}
        height={'100%'}
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => {
            setCenter(center) 
            setZoom(zoom) 
        }} 
        >
            <Marker 
                width={25}
                anchor={[35.6892, 51.3890]} 
                color={color} 
                onClick={() => props.returnData(require("./img/img_girl2.jpg"))}
            />
            <Marker
                width={25}
                anchor={[35.7492, 51.4390]}
                color={color}
                onClick={() => {
                    downloader("2021_10_11__13_57_55");
                    props.returnData(require("./img/img1.png"))
                }}
            />
            <Marker
                width={25}
                anchor={[35.6492, 51.2990]}
                color={color}
                onClick={() => {
                    downloader("2021_10_11__14_0_25");

                }}
            />
            {locationsList.map(function(l){
                return(
                    <Marker
                        width={25}
                        anchor={[l["geo"]["latitude"], l["geo"]["longitude"]]}
                        color={color}
                        onClick={() => {
                            //downloader(l["picLocation"].split('/')[1]);

                        }}
                    />
                )
            })}
        </Map>

    )
}


export default MyMap