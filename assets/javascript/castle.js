document.getElementById('castlePost').addEventListener('submit', castlePost);

function castlePost(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let user_id = document.getElementById('user_id').value;

    fetch('https://api.castle.io/v1/authenticate', {
        method: 'POST',
        mode: "no-cors",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        api_secret:'fG3xueHanUDLCmZogDbZ15jv3Aduyzgz'
            // Authorization: {
            //     'basic': 'ZkczeHVlSGFuVURMQ21ab2dEYloxNWp2M0FkdXl6Z3o='
            // }
        },
        // data: {
        // 	"event": "$login.succeeded",
        //     "user_id": "e325bcdd10ac"
        // },
        user_traits: {
            'registered_at': '2018-07-10T17:37:39.123Z'
        },
        body: JSON.stringify({
            email: email,
            user_id: user_id
        })
    })
    // .then((res) => res.json())
    // .then((data) => console.log(data))
}



// function castlePost(e){
//     e.preventDefault();

//     // let title = document.getElementById('title').value;
//     // let body = document.getElementById('body').value;

//     fetch('https://api.castle.io/v1/authenticate', {
//     method:'POST',
//     // mode: 'same-origin',
//     // sameSite:'none',
//     // cache: 'no-cache', default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', include, *same-origin, omit
//     api_secret:'fG3xueHanUDLCmZogDbZ15jv3Aduyzgz',
//     headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
//         "Accept": "text/html",
//         "Accept-Language": "en-us,en;q=0.5",
//         "Accept-Encoding": "gzip, deflate, br",
//         "Connection": "Keep-Alive",
//         "Content-Length": "122",
//         "Content-Type": "application/javascript",
//         "Origin": "https://castle.io/",
//         "Referer": "https://castle.io/login"
//     },  
//     context: {
//         "client_id": "faf117b2-9457-4e3b-9c13-d2795656b78e-094e81caa170c1d2",
//         "ip": "37.46.187.90"
//     },
//     data: {
//         "event": "$login.succeeded",
//         "user_id": "e325bcdd10ac"
//     },
//     user_traits: {
//             "email": "johan@castle.io",
//             "registered_at": "2018-07-10T17:37:39.123Z"
//         }
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// }