import '../styles/base.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MyController from '../../src/controllers/MyController';

class Hello extends React.Component {
    render() {
        this.controller = new MyController();
        this.controller.setup({
            http: function (config) {
                return new Promise((resolve, reject) => {
                    setTimeout(()=> {
                        resolve([{
                            "id": 1,
                            "first_name": "Jesse",
                            "last_name": "Willis",
                            "email": "jwillis0@elpais.com",
                            "gender": "Male",
                            "ip_address": "122.239.142.70"
                        },
                            {
                                "id": 2,
                                "first_name": "Marie",
                                "last_name": "Burke",
                                "email": "mburke1@51.la",
                                "gender": "Female",
                                "ip_address": "7.63.103.123"
                            },
                            {
                                "id": 3,
                                "first_name": "Angela",
                                "last_name": "Williams",
                                "email": "awilliams2@xinhuanet.com",
                                "gender": "Female",
                                "ip_address": "81.55.205.203"
                            },
                            {
                                "id": 4,
                                "first_name": "Eugene",
                                "last_name": "Wood",
                                "email": "ewood3@hubpages.com",
                                "gender": "Male",
                                "ip_address": "0.190.100.92"
                            },
                            {
                                "id": 5,
                                "first_name": "Betty",
                                "last_name": "Day",
                                "email": "bday4@artisteer.com",
                                "gender": "Female",
                                "ip_address": "213.85.64.203"
                            },
                            {
                                "id": 6,
                                "first_name": "Mary",
                                "last_name": "Anderson",
                                "email": "manderson5@simplemachines.org",
                                "gender": "Female",
                                "ip_address": "198.158.115.139"
                            },
                            {
                                "id": 7,
                                "first_name": "Juan",
                                "last_name": "Oliver",
                                "email": "joliver6@globo.com",
                                "gender": "Male",
                                "ip_address": "42.106.10.242"
                            },
                            {
                                "id": 8,
                                "first_name": "Kenneth",
                                "last_name": "Medina",
                                "email": "kmedina7@edublogs.org",
                                "gender": "Male",
                                "ip_address": "242.14.36.46"
                            },
                            {
                                "id": 9,
                                "first_name": "Clarence",
                                "last_name": "Martin",
                                "email": "cmartin8@alibaba.com",
                                "gender": "Male",
                                "ip_address": "93.252.36.146"
                            },
                            {
                                "id": 10,
                                "first_name": "Phyllis",
                                "last_name": "Lynch",
                                "email": "plynch9@theglobeandmail.com",
                                "gender": "Female",
                                "ip_address": "47.86.97.56"
                            },
                            {
                                "id": 11,
                                "first_name": "Eugene",
                                "last_name": "Porter",
                                "email": "eportera@digg.com",
                                "gender": "Male",
                                "ip_address": "169.192.16.149"
                            },
                            {
                                "id": 12,
                                "first_name": "Johnny",
                                "last_name": "Johnston",
                                "email": "jjohnstonb@people.com.cn",
                                "gender": "Male",
                                "ip_address": "100.221.57.196"
                            },
                            {
                                "id": 13,
                                "first_name": "Kathryn",
                                "last_name": "Gonzales",
                                "email": "kgonzalesc@yale.edu",
                                "gender": "Female",
                                "ip_address": "182.12.43.119"
                            },
                            {
                                "id": 14,
                                "first_name": "Jose",
                                "last_name": "Fowler",
                                "email": "jfowlerd@rakuten.co.jp",
                                "gender": "Male",
                                "ip_address": "173.102.38.162"
                            },
                            {
                                "id": 15,
                                "first_name": "Laura",
                                "last_name": "Wood",
                                "email": "lwoode@mlb.com",
                                "gender": "Female",
                                "ip_address": "200.97.102.215"
                            },
                            {
                                "id": 16,
                                "first_name": "Janice",
                                "last_name": "Fuller",
                                "email": "jfullerf@yahoo.com",
                                "gender": "Female",
                                "ip_address": "60.86.189.120"
                            },
                            {
                                "id": 17,
                                "first_name": "Catherine",
                                "last_name": "Butler",
                                "email": "cbutlerg@dropbox.com",
                                "gender": "Female",
                                "ip_address": "126.90.84.151"
                            },
                            {
                                "id": 18,
                                "first_name": "Kenneth",
                                "last_name": "Reed",
                                "email": "kreedh@noaa.gov",
                                "gender": "Male",
                                "ip_address": "166.148.80.142"
                            },
                            {
                                "id": 19,
                                "first_name": "Fred",
                                "last_name": "Robertson",
                                "email": "frobertsoni@salon.com",
                                "gender": "Male",
                                "ip_address": "94.35.172.158"
                            },
                            {
                                "id": 20,
                                "first_name": "Denise",
                                "last_name": "Walker",
                                "email": "dwalkerj@mtv.com",
                                "gender": "Female",
                                "ip_address": "43.207.50.183"
                            },
                            {
                                "id": 21,
                                "first_name": "Cynthia",
                                "last_name": "Peterson",
                                "email": "cpetersonk@amazon.com",
                                "gender": "Female",
                                "ip_address": "135.250.35.193"
                            },
                            {
                                "id": 22,
                                "first_name": "Virginia",
                                "last_name": "Larson",
                                "email": "vlarsonl@live.com",
                                "gender": "Female",
                                "ip_address": "230.25.121.143"
                            },
                            {
                                "id": 23,
                                "first_name": "Virginia",
                                "last_name": "Ramirez",
                                "email": "vramirezm@yellowbook.com",
                                "gender": "Female",
                                "ip_address": "36.115.216.156"
                            },
                            {
                                "id": 24,
                                "first_name": "Kevin",
                                "last_name": "Green",
                                "email": "kgreenn@friendfeed.com",
                                "gender": "Male",
                                "ip_address": "13.238.63.226"
                            },
                            {
                                "id": 25,
                                "first_name": "Jack",
                                "last_name": "Mitchell",
                                "email": "jmitchello@businessweek.com",
                                "gender": "Male",
                                "ip_address": "61.14.227.15"
                            },
                            {
                                "id": 26,
                                "first_name": "Linda",
                                "last_name": "Armstrong",
                                "email": "larmstrongp@flavors.me",
                                "gender": "Female",
                                "ip_address": "254.193.199.211"
                            },
                            {
                                "id": 27,
                                "first_name": "Tammy",
                                "last_name": "Diaz",
                                "email": "tdiazq@nba.com",
                                "gender": "Female",
                                "ip_address": "166.55.104.193"
                            },
                            {
                                "id": 28,
                                "first_name": "Michelle",
                                "last_name": "Perkins",
                                "email": "mperkinsr@pagesperso-orange.fr",
                                "gender": "Female",
                                "ip_address": "30.87.194.91"
                            },
                            {
                                "id": 29,
                                "first_name": "Clarence",
                                "last_name": "Evans",
                                "email": "cevanss@woothemes.com",
                                "gender": "Male",
                                "ip_address": "209.146.219.129"
                            },
                            {
                                "id": 30,
                                "first_name": "Chris",
                                "last_name": "Butler",
                                "email": "cbutlert@dmoz.org",
                                "gender": "Male",
                                "ip_address": "251.104.94.78"
                            },
                            {
                                "id": 31,
                                "first_name": "Richard",
                                "last_name": "Flores",
                                "email": "rfloresu@last.fm",
                                "gender": "Male",
                                "ip_address": "57.80.185.149"
                            },
                            {
                                "id": 32,
                                "first_name": "Randy",
                                "last_name": "Wallace",
                                "email": "rwallacev@stanford.edu",
                                "gender": "Male",
                                "ip_address": "173.99.35.92"
                            },
                            {
                                "id": 33,
                                "first_name": "Larry",
                                "last_name": "Lewis",
                                "email": "llewisw@google.ca",
                                "gender": "Male",
                                "ip_address": "126.165.6.74"
                            },
                            {
                                "id": 34,
                                "first_name": "Betty",
                                "last_name": "Gonzales",
                                "email": "bgonzalesx@hc360.com",
                                "gender": "Female",
                                "ip_address": "66.82.175.6"
                            },
                            {
                                "id": 35,
                                "first_name": "Kathleen",
                                "last_name": "Day",
                                "email": "kdayy@icq.com",
                                "gender": "Female",
                                "ip_address": "178.22.228.199"
                            },
                            {
                                "id": 36,
                                "first_name": "Victor",
                                "last_name": "Richardson",
                                "email": "vrichardsonz@apache.org",
                                "gender": "Male",
                                "ip_address": "249.145.200.99"
                            },
                            {
                                "id": 37,
                                "first_name": "Ernest",
                                "last_name": "Welch",
                                "email": "ewelch10@feedburner.com",
                                "gender": "Male",
                                "ip_address": "100.15.145.45"
                            },
                            {
                                "id": 38,
                                "first_name": "Nancy",
                                "last_name": "Jones",
                                "email": "njones11@bandcamp.com",
                                "gender": "Female",
                                "ip_address": "156.113.234.19"
                            },
                            {
                                "id": 39,
                                "first_name": "Ryan",
                                "last_name": "Graham",
                                "email": "rgraham12@w3.org",
                                "gender": "Male",
                                "ip_address": "237.169.216.151"
                            },
                            {
                                "id": 40,
                                "first_name": "Emily",
                                "last_name": "Willis",
                                "email": "ewillis13@free.fr",
                                "gender": "Female",
                                "ip_address": "230.127.202.92"
                            },
                        ]);
                    }, 200);
                });
            },
            endpoint: 'test.html'
        });
        return <h1 onClick={this.controller.click.bind(this.controller)}>Hello React</h1>
    }
}

ReactDOM.render(<Hello/>, document.querySelector('[data-js=main]'));