'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a65babf3b4e9781ee7533f2d1b01cdf0",
"privacidad.html": "b868b8cee281d85ac228f8fb741fe49f",
"version.json": "f4db524356154a0566aade745a164d71",
"favicon.ico": "a2f0fbf02791e1911c7bdc7d06cb6a01",
"index.html": "01e931e4769c5a5a59555c86d3c705d2",
"/": "01e931e4769c5a5a59555c86d3c705d2",
"msg.php": "6a165984cb5a1f0a242a1360a7d3aeaa",
"main.dart.js": "243d6b6a926ed8949c94a6354baebb12",
"jscript/jquery-3.6.0.min.js": "8fb8fee4fcc3cc86ff6c724154c49c42",
"jscript/form.js": "420e5629fc0ce53497fb2ae556d3a80f",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"clases/CLASE0_/index.html": "1ffeea381ad8b27db1497a4bcd7da7d1",
"clases/CLASE0_/data.local-only/slide5.js": "8a9f1b1ac80ee806e968abbd41dadc32",
"clases/CLASE0_/data.local-only/slide1.js": "9d5ba88a7051d96391c40f282fac30ce",
"clases/CLASE0_/data.local-only/slide4.js": "a8f97cd0a31e3314046ff1ecffd3a250",
"clases/CLASE0_/data.local-only/slide3.js": "6c46e974f0fcc73d8d28a56e4fd9e287",
"clases/CLASE0_/data.local-only/slide7.js": "1ee4129da509727a27f7f811063e0164",
"clases/CLASE0_/data.local-only/slide6.js": "afdd1ac1a024f11c1fe0f1e71f56fab7",
"clases/CLASE0_/data.local-only/slide2.js": "a2cf73327a1ba0c2c7e237e24bfb7eaa",
"clases/CLASE0_/data/sound3.mp3": "57bf62834c3858af83db50928be885d8",
"clases/CLASE0_/data/highlighter.cur": "8f4633fe7f52eed7837b1bf437a2207a",
"clases/CLASE0_/data/sound2.mp3": "caab8caf331283acfb5eb6fbf614dddc",
"clases/CLASE0_/data/fnt0.woff": "f3c4d7ce35a9615db8c19367bc1e4e4e",
"clases/CLASE0_/data/favicon.ico": "a2f0fbf02791e1911c7bdc7d06cb6a01",
"clases/CLASE0_/data/sound1.mp3": "0b82ba630907574cd06e13022cedff0a",
"clases/CLASE0_/data/sound5.mp3": "5f64523a3875ccd556c3e99fc6f4104c",
"clases/CLASE0_/data/fnt1.woff": "cca8244951438f0ed8c11238e1d8ffbb",
"clases/CLASE0_/data/img18.jpg": "1c123400b0c74d0ccde01ac93692c0e4",
"clases/CLASE0_/data/img19.png": "dc8bc1283ef87bf8c2fb84499cd83c72",
"clases/CLASE0_/data/sound4.mp3": "bdf057ffd852ef74b0789f01bc0b97bc",
"clases/CLASE0_/data/sound6.mp3": "f9b9d947e4b205d7ac58bd8b07550604",
"clases/CLASE0_/data/marker.cur": "bf2e20f6b2781f36a6cea223795bcf14",
"clases/CLASE0_/data/apple-touch-icon.png": "de8e52c4964ff64702428cd5ade6079f",
"clases/CLASE0_/data/sound7.mp3": "78626c5f95e35f49e0fd5a556a0bceaa",
"clases/CLASE0_/data/slide3.css": "b8a413050cb9f1b72c19852ee3ec13b0",
"clases/CLASE0_/data/slide5.js": "db20ef99c7188fcb09ca711092ca1046",
"clases/CLASE0_/data/slide2.css": "71954c90582e0eff9e950b8c71441df2",
"clases/CLASE0_/data/fnt6.woff": "f18410af255fcdc5ca6bfd0f7e4b7e76",
"clases/CLASE0_/data/slide1.js": "f4e5f4cf6008d1b4bde9b01c39f561be",
"clases/CLASE0_/data/slide1.css": "74fed145d430db36253df0dcad6becf7",
"clases/CLASE0_/data/slide5.css": "8e237f601b5269d2167fccec591476db",
"clases/CLASE0_/data/slide4.css": "c9097e88385a30dad54ede8d802ccfc1",
"clases/CLASE0_/data/slide6.css": "20c938756bbc1786b2d270911c0c4ed8",
"clases/CLASE0_/data/fnt7.woff": "20e448cd601cf2a9cd2d2e503a1c5e06",
"clases/CLASE0_/data/img9.png": "6379adac39d5437b0379e770aba09aa6",
"clases/CLASE0_/data/slide4.js": "b62482a7d187ef6a2019dc6c1045b0f3",
"clases/CLASE0_/data/img8.png": "2015ae83b8b57db2147984b24b5d94ac",
"clases/CLASE0_/data/slide7.css": "677138709cacf7fd0c2a7e5214ed2067",
"clases/CLASE0_/data/fnt4.woff": "a0d8d39e4385749b7abe0caa296742a9",
"clases/CLASE0_/data/slide3.js": "24fd69258224aea6aaa09aa44a1d1cb1",
"clases/CLASE0_/data/img5.png": "0ced0487ee546031ac5ac9e5243d82cf",
"clases/CLASE0_/data/img4.png": "83ac5e4b148ab4ac2dfc2c67213155d2",
"clases/CLASE0_/data/img6.png": "6844c79a6d1f73c80b24340c3b959303",
"clases/CLASE0_/data/slide7.js": "8a699b10140adb7a44f9da19a38cfb99",
"clases/CLASE0_/data/html5-unsupported.html": "00157474eecdfa7625198a616251eb6b",
"clases/CLASE0_/data/img7.png": "29667ce1e0b1682142658ef788ca970b",
"clases/CLASE0_/data/img3.png": "f9de69f63eabb2cb50d8c1fbd3a3e589",
"clases/CLASE0_/data/slide6.js": "5a9be04eb49d3732fcf7db258a481e43",
"clases/CLASE0_/data/img2.png": "f3a898d7cb702110cc075d846981177d",
"clases/CLASE0_/data/slide2.js": "9fb51511256792f93ec27c927b023bfe",
"clases/CLASE0_/data/img0.png": "ae5687896c92bf5c469c12a8f0cedd5a",
"clases/CLASE0_/data/img1.png": "372aa52a5ab9eb4dc4b6d42ff0302221",
"clases/CLASE0_/data/eraser.cur": "c17c3d655e6bf740e9739ba1b7a55b25",
"clases/CLASE0_/data/fnt5.woff": "07ac4740df055dcc4958873eba2ead87",
"clases/CLASE0_/data/img17.png": "05cf4f92b864f9dccb8754bb42ca676b",
"clases/CLASE0_/data/player.js": "e8e6a41ca1dbd463d448310c08d610ca",
"clases/CLASE0_/data/img16.png": "6c1de3545cf1757f38f0bd5295134ded",
"clases/CLASE0_/data/fnt2.woff": "a277f0e30383a032fbf2209041257da5",
"clases/CLASE0_/data/img14.png": "3d73c743a4d8e38c35488aee9d974e42",
"clases/CLASE0_/data/img15.png": "a4f3b36254c347eab796db840b26f823",
"clases/CLASE0_/data/img11.png": "5aca0720ad44dd11baa3b551a23c6142",
"clases/CLASE0_/data/browsersupport.js": "dcda750e0b86c0e2b75437f4b5acf2e5",
"clases/CLASE0_/data/fnt3.woff": "78814fc60831720ce8ed0f1bf6a712f7",
"clases/CLASE0_/data/img10.png": "cde845fdb707456b353b0906425368d1",
"clases/CLASE0_/data/img12.png": "496fa8f0794012d5cca36b90c0a173d4",
"clases/CLASE0_/data/html5.png": "fd55494d616882b055f19d0af9bbd599",
"clases/CLASE0_/data/lock.cur": "47141a651fceae03e7cc16472f3d101b",
"clases/CLASE0_/data/img13.png": "7feaefc7268170530b8291129d8cbbc0",
"clases/CLASE01/index.html": "755ff5fa69f4d7b08b895b9acb3755f8",
"clases/CLASE01/data.local-only/slide5.js": "a2a5d58d738f1966a6413b5a923f173d",
"clases/CLASE01/data.local-only/slide1.js": "5211d3ff242cb1a2d3ba70c0eba5b2ec",
"clases/CLASE01/data.local-only/slide4.js": "39e21620fa89892cde02be1bc809b51b",
"clases/CLASE01/data.local-only/slide3.js": "f615324896b388995f2e39191ff3e9c9",
"clases/CLASE01/data.local-only/slide7.js": "c515f4a557307d5f569149bb97dd00ac",
"clases/CLASE01/data.local-only/slide10.js": "bfe04edcc4900ef5d38b925adbf3c520",
"clases/CLASE01/data.local-only/slide6.js": "161d18367b9c7297fad401c5d7a9630a",
"clases/CLASE01/data.local-only/slide11.js": "c6ca1d19085237493a2df39ea1008071",
"clases/CLASE01/data.local-only/slide2.js": "8e0df283ade91138aca6a1570b067ed5",
"clases/CLASE01/data.local-only/slide9.js": "e14a4c10bb04095b978dc9abc6dec725",
"clases/CLASE01/data.local-only/slide8.js": "855d864bd60bc8d6f99ea3f6100ef75c",
"clases/CLASE01/data/sound3.mp3": "9a3fecea36ab024b6a05f303082644c5",
"clases/CLASE01/data/highlighter.cur": "8f4633fe7f52eed7837b1bf437a2207a",
"clases/CLASE01/data/sound2.mp3": "46624c31c232f97e7558749f107aac35",
"clases/CLASE01/data/sound10.mp3": "fab515406b2d3019505e79a0987f7365",
"clases/CLASE01/data/fnt0.woff": "94820cf34b2f6e6ecfb645026abbb6aa",
"clases/CLASE01/data/favicon.ico": "0bba7aa68d2c7d87fffb22d9f3fd39b9",
"clases/CLASE01/data/sound1.mp3": "9aa68d948539014842f9ee9d51c8d31d",
"clases/CLASE01/data/sound5.mp3": "cb99f22b65a4436ebe641bd5244d3491",
"clases/CLASE01/data/fnt1.woff": "af52f75f6bcefe8f7ac6ed63dc02d7e4",
"clases/CLASE01/data/img18.png": "cd6a3f990e7cc300e73d3ad85ec776f9",
"clases/CLASE01/data/slide10.css": "a6d3ce4625570478c00b002c2a2857a4",
"clases/CLASE01/data/slide11.css": "a522e3f4fae65ae8d14eb4306a90acb7",
"clases/CLASE01/data/img19.jpg": "0dd842fdb8d1cf74e4f68b3ee54a6945",
"clases/CLASE01/data/sound4.mp3": "d83d7ef17e3ea730211f9a51e9c07ab9",
"clases/CLASE01/data/sound6.mp3": "28a4c905d186f63b30aaf3918b260c47",
"clases/CLASE01/data/marker.cur": "bf2e20f6b2781f36a6cea223795bcf14",
"clases/CLASE01/data/apple-touch-icon.png": "e56f25831315af606a4beab1e74b64eb",
"clases/CLASE01/data/sound7.mp3": "033ce9d26684b0c90f4f36dfc5aa88f9",
"clases/CLASE01/data/slide3.css": "94656d14eb12611fefa44df343a7598e",
"clases/CLASE01/data/slide5.js": "2309a46706aeef10ee6f27b6cb7f1183",
"clases/CLASE01/data/slide2.css": "ca655e0aa62b1f81cda91e3d4b4208de",
"clases/CLASE01/data/fnt6.woff": "4ddd7d9fd0e01f08aa17fd06ec8e6425",
"clases/CLASE01/data/slide1.js": "25a7457ecf571b4df4c8a5610a119433",
"clases/CLASE01/data/slide1.css": "00e2bc01dc09f57ec14f630bd83dac55",
"clases/CLASE01/data/slide5.css": "e1f2324dd7aacf4237b9ad016f484d24",
"clases/CLASE01/data/slide4.css": "ffa5cce2bec1a0b5ec2686592a92721c",
"clases/CLASE01/data/slide6.css": "fcf0807576ef3100c7776824de7eef9d",
"clases/CLASE01/data/img9.png": "6844c79a6d1f73c80b24340c3b959303",
"clases/CLASE01/data/slide4.js": "ed8460df7d69046a81031c71573da001",
"clases/CLASE01/data/img8.png": "69b03bbe14ea22c916baf9fcd60c4cd9",
"clases/CLASE01/data/slide7.css": "ccb1a9efc713446001566a46c06cf15d",
"clases/CLASE01/data/fnt4.woff": "d020201875454aea448ae19ac20b6b29",
"clases/CLASE01/data/slide3.js": "9f66aa5f7ee2d9353697cf74ff33e368",
"clases/CLASE01/data/img5.png": "565738cf06b66047750373d36a0eef0f",
"clases/CLASE01/data/img4.png": "ca179daa0aff33ba25db793240cb65e9",
"clases/CLASE01/data/slide9.css": "4e23325a6d03675689df6c7bc9a55ddb",
"clases/CLASE01/data/img6.png": "f9de69f63eabb2cb50d8c1fbd3a3e589",
"clases/CLASE01/data/slide7.js": "e42e9d8ac871391d18334d027fd63389",
"clases/CLASE01/data/slide10.js": "eb7cb199f08bcbc5a00b2608f81de703",
"clases/CLASE01/data/html5-unsupported.html": "ef1df14858a673386210de1a3f31b910",
"clases/CLASE01/data/img7.png": "2e3525397925b5a0fe94ea0eab5a2311",
"clases/CLASE01/data/slide8.css": "6462aa7e742a2a93a920ce81845c093b",
"clases/CLASE01/data/img3.png": "bb8cf70f642c71943017be91faa812eb",
"clases/CLASE01/data/slide6.js": "9dddbb9ed5c2d0306d8769f4a4871c26",
"clases/CLASE01/data/slide11.js": "b0d67827079d03381bb72aa5f96b7c0b",
"clases/CLASE01/data/img2.png": "400aa54a632c13dbe141dffeb41d0a3c",
"clases/CLASE01/data/slide2.js": "4a3b87d888d2e97111f5b7561ca1d31f",
"clases/CLASE01/data/img0.png": "ae5687896c92bf5c469c12a8f0cedd5a",
"clases/CLASE01/data/img1.png": "41a6bf12d2a716b6d321c5c022aab19c",
"clases/CLASE01/data/eraser.cur": "c17c3d655e6bf740e9739ba1b7a55b25",
"clases/CLASE01/data/fnt5.woff": "da5608c2806df5d1132f3676eee7d365",
"clases/CLASE01/data/slide9.js": "af893c9ed2928c12090d7dacd8d06dce",
"clases/CLASE01/data/img17.jpg": "cb7c6413379f855ae9184effd4665951",
"clases/CLASE01/data/player.js": "e8e6a41ca1dbd463d448310c08d610ca",
"clases/CLASE01/data/img16.jpg": "4f5219f976b7a6fd9258dff31fd268fa",
"clases/CLASE01/data/sound9.mp3": "6d184d209eba4e3abe2200e0f6ff2f0e",
"clases/CLASE01/data/fnt2.woff": "81b6d072192ab62000d99645ac1919be",
"clases/CLASE01/data/img14.png": "93ada1b3a21c21611175f61a48843c40",
"clases/CLASE01/data/img15.png": "63ebeb4ea8b00c0d342438293ba0569f",
"clases/CLASE01/data/sound8.mp3": "601aba63d6f95956028adadcf9dff6c0",
"clases/CLASE01/data/img11.png": "6379adac39d5437b0379e770aba09aa6",
"clases/CLASE01/data/browsersupport.js": "dcda750e0b86c0e2b75437f4b5acf2e5",
"clases/CLASE01/data/fnt3.woff": "af9872f0d22855ae39057f5848b3df9e",
"clases/CLASE01/data/img10.png": "29667ce1e0b1682142658ef788ca970b",
"clases/CLASE01/data/slide8.js": "329e46e5a8492c722079bf1266518de2",
"clases/CLASE01/data/img12.png": "cde845fdb707456b353b0906425368d1",
"clases/CLASE01/data/html5.png": "fd55494d616882b055f19d0af9bbd599",
"clases/CLASE01/data/lock.cur": "47141a651fceae03e7cc16472f3d101b",
"clases/CLASE01/data/img13.png": "5aca0720ad44dd11baa3b551a23c6142",
"clases/CUESTIONARIOS/01/index.html": "c24299b1b5ebba9d5f132b5004638dd0",
"clases/CUESTIONARIOS/01/data/images/img-8b1b-c214-ce5d-6c68.png": "de8e52c4964ff64702428cd5ade6079f",
"clases/CUESTIONARIOS/01/data/images/img-cb54-4f16-7402-d410.jpg": "67b001ddc3d4bd7524748626f855afa5",
"clases/CUESTIONARIOS/01/data/images/img-642d-02d3-420c-d6a6.jpg": "23e7a58e32e2cc1f08e0f85995877d65",
"clases/CUESTIONARIOS/01/data/images/img-e9eb-0fb8-efa0-0335.jpg": "1f9668b52f80df8cd1bba5a4cad92eda",
"clases/CUESTIONARIOS/01/data/html5-unsupported.html": "a9a2e35b5e1fc800eaddc591b9d7f337",
"clases/CUESTIONARIOS/01/data/player.js": "cd3f144658849d64f1d600b3e2656405",
"clases/CUESTIONARIOS/01/data/fonts/fnt0.woff": "802268737275c0fd893f85edee47cd16",
"clases/CUESTIONARIOS/01/data/fonts/fnt1.woff": "7d7e70c326f2d3c2f7f37219a7e97a2f",
"clases/CUESTIONARIOS/01/data/fonts/fnt2.woff": "228caec68e91fb59afc2fe9a6444762e",
"clases/CUESTIONARIOS/01/data/browsersupport.js": "dcda750e0b86c0e2b75437f4b5acf2e5",
"clases/CUESTIONARIOS/01/data/html5.png": "fd55494d616882b055f19d0af9bbd599",
"clases/CUESTIONARIOS/TEST01/index.html": "a7b9dfea2f207a02caa571d2fede013c",
"clases/CUESTIONARIOS/TEST01/data/images/img-8b1b-c214-ce5d-6c68.png": "de8e52c4964ff64702428cd5ade6079f",
"clases/CUESTIONARIOS/TEST01/data/html5-unsupported.html": "a9a2e35b5e1fc800eaddc591b9d7f337",
"clases/CUESTIONARIOS/TEST01/data/player.js": "cd3f144658849d64f1d600b3e2656405",
"clases/CUESTIONARIOS/TEST01/data/fonts/fnt0.woff": "893bb11d7e616c3bfb8c5989ac3659be",
"clases/CUESTIONARIOS/TEST01/data/fonts/fnt1.woff": "7b5408454ad4ad02ab57e2d1d81054ba",
"clases/CUESTIONARIOS/TEST01/data/fonts/fnt2.woff": "4b88fa6e98f4935960b149bb6c6bcbb4",
"clases/CUESTIONARIOS/TEST01/data/fonts/fnt3.woff": "56cd60bab2013b0b052756d3507e4dbe",
"clases/CUESTIONARIOS/TEST01/data/browsersupport.js": "dcda750e0b86c0e2b75437f4b5acf2e5",
"clases/CUESTIONARIOS/TEST01/data/html5.png": "fd55494d616882b055f19d0af9bbd599",
"assets/dist/css/bootstrap.min.css": "298b7683a05fabca93edc49c8a889b90",
"assets/dist/css/privacidad.css": "e79a488ebdfcc45db290af96decf34f2",
"assets/dist/css/markdown.css": "d2a6d33561aa36d62a8d22cfcf5d8be8",
"assets/dist/css/main.css": "95d302256779ff140e9fef20b5c37588",
"assets/dist/css/bootstrap.min.css.map": "ef5ca9e28f780a079318afab2334d8eb",
"assets/dist/css/histology.css": "04b17bdc063818bd2c4c49e6f028f28d",
"assets/dist/js/bootstrap.bundle.min.js.map": "54c3c3bec763f429a29e55cce6a44015",
"assets/dist/js/bootstrap.bundle.min.js": "41c25a364e7e71809045dc74ca6ae377",
"assets/dist/js/main.js": "6352d68d3e41e884145c42bef896d93a",
"assets/images/bg-header.png": "eca3de521b8758ed82bbe0a4c4e74628",
"assets/images/competencia.png": "1762b92cbf4304c4f8b5de387f0706d5",
"assets/images/clase.png": "b2a24d88ff02825dea97a09e5f8125b9",
"assets/images/bg-3.jpg": "a187bb42abdf44d82fa0a504992ef1f8",
"assets/images/backgrouds1.png": "3bc1b3c06089a8d657165fd67b510b7d",
"assets/images/bg-1.jpg": "496d6bf905b384c5bc2882f98f386c58",
"assets/images/vistaprevia.png": "b91b3d0504b5407c3e1b7f7bdfda5e76",
"assets/images/dc2b9795-6532-4518-b732-15ba05bd4d5d.png": "c65696b6dd7ad3c6756e951c516c22e0",
"assets/images/CallToActionMobile.png": "8a85a5559ddcb146dfa130c61f634e93",
"assets/images/Mate%20con%20Bombilla.psd": "47f18e264419db92df23b121ade3c3f2",
"assets/images/bg-2.jpeg": "3b095d2c30fdbbfa483004b55e0b16ae",
"assets/images/icons/user_hst.png": "ca643e501b178c96dfc85ac835896e6b",
"assets/images/icons/tejido_3.png": "cd2f703a2a33d0af8fab122a439a7fc5",
"assets/images/icons/tejido_2.png": "d04b37840a98c1e9f835c723328198cc",
"assets/images/icons/tejido_1.png": "bdea973e09d666902e22b54542d66dbf",
"assets/images/icons/user.png": "902be380e2e878ff71216a1d803ae916",
"assets/images/icons/tejido_4.png": "ccbcd9303eb13b0715695491468c52b2",
"assets/images/icons/microscopio.png": "2edff2622da3e730b96ca7f85509c5df",
"assets/images/icons/niveles.png": "2a449dbd932adfd1ac8e9dff224aa6b3",
"assets/images/progreso.png": "691c129077b49280505b7fe7d22a9cfe",
"assets/images/1233b365-df4e-4c00-90bf-67dc844befcd.png": "02bcc59c17123cbd60048c2840a65f76",
"assets/images/fd64d986-c364-4210-8d86-d5e9dac6c94c.png": "9a9977a9ce5931d3ab9318f62795b6e1",
"assets/images/ipad.png": "8e721905123721dbb721b139e313670a",
"assets/images/iPhone02.png": "1423c5fd7053e8d5463f0e8743f7e455",
"assets/images/iPhone03.png": "3bdb555b913f193ece3d22752ae63b6c",
"assets/images/chatia.png": "6f2b8c1f776b403f54c094ffb05ac9fe",
"assets/brand/eicon.png": "e0cd824d5b675bfb4c455439205a0d0e",
"assets/brand/bootstrap-outline.svg": "987cc8795f6ae5adb1f0938614423163",
"assets/brand/logo-432.png": "de8e52c4964ff64702428cd5ade6079f",
"assets/brand/bootstrap-solid.svg": "16fa1cbd467464183c18257777207ef4",
"assets/brand/brand.png": "41fb7200b3ac37fba6207674978dbdcc",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9326eed8b459549d16a60d5475e64a03",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/pages/body.php": "1081ae443ce1339ab0150554eb75a094",
"assets/pages/header.php": "b4025b88b946faa7de0a786d6613f4fd",
"assets/pages/footer.php": "62796f76309816cc26e21db5b30cd6e9",
"TEST01/index.html": "a7b9dfea2f207a02caa571d2fede013c",
"TEST01/data/images/img-8b1b-c214-ce5d-6c68.png": "de8e52c4964ff64702428cd5ade6079f",
"TEST01/data/html5-unsupported.html": "a9a2e35b5e1fc800eaddc591b9d7f337",
"TEST01/data/player.js": "cd3f144658849d64f1d600b3e2656405",
"TEST01/data/fonts/fnt0.woff": "893bb11d7e616c3bfb8c5989ac3659be",
"TEST01/data/fonts/fnt1.woff": "7b5408454ad4ad02ab57e2d1d81054ba",
"TEST01/data/fonts/fnt2.woff": "4b88fa6e98f4935960b149bb6c6bcbb4",
"TEST01/data/fonts/fnt3.woff": "56cd60bab2013b0b052756d3507e4dbe",
"TEST01/data/browsersupport.js": "dcda750e0b86c0e2b75437f4b5acf2e5",
"TEST01/data/html5.png": "fd55494d616882b055f19d0af9bbd599",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
