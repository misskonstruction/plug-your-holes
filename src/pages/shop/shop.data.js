const SHOP_DATA = [
      {
        id: 1,
        title: 'Wooden Plugs',
        routeName: 'woodenPlugs',
        items: [
          {
            id: 1,
            name: 'Honeycomb',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0068/6312/products/bee-hive-wood-plugs-wm-pv_2000x.jpg?v=1549600001',
            price: 65
          },
          {
            id: 2,
            name: 'Olive Wood',
            imageUrl: 'https://i.etsystatic.com/11200556/r/il/eee279/1593059034/il_570xN.1593059034_as39.jpg',
            price: 45
          },
          {
            id: 3,
            name: 'Sono Wood',
            imageUrl: 'https://www.urbanbodyjewelry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sono-wooden-tunnels-plugs_1.jpg',
            price: 55
          },
          {
            id: 4,
            name: 'Iron Wood and Abalone Shell',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0019/0572/1409/products/hand-carved-iron-wood-plug-with-heart-edges-design-and-abalone-shell-middle-inlay-1-pair-sbvwpl441-plugs-earrings-double-flare-rebelbod-12032694812737_800x.jpg?v=1579476111',
            price: 75
          },
          {
            id: 5,
            name: 'Snake Wood',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0337/8189/products/WD-002-SW_540x.jpg?v=1604607910',
            price: 60
          },
          {
            id: 6,
            name: 'Organic Root Wood',
            imageUrl: 'https://i.etsystatic.com/8944694/r/il/a9f5c2/1770808725/il_794xN.1770808725_nfap.jpg',
            price: 60
          },
          {
            id: 7,
            name: 'Arang Wood',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0337/8189/products/WPL427_728fa815-29a0-43f0-87c3-fc26e4455a17_540x.jpg?v=1611080654',
            price: 75
          },
          {
            id: 8,
            name: 'Direwolf',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1635/8081/products/IMG_4796_480x480.jpg?v=1554998596',
            price: 70
          },
          {
            id: 9,
            name: 'Bamboo',
            imageUrl: 'https://i.etsystatic.com/18672918/r/il/80772a/1750157388/il_570xN.1750157388_10iu.jpg',
            price: 50
          }
        ]
      },
      {
        id: 2,
        title: 'Stainless Steel Plugs',
        routeName: 'stainless',
        items: [
          {
            id: 1,
            name: 'Screw-Back Tunnels',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0337/8189/products/SS-008-SS_087e3002-8df0-4478-ae1b-a2c19a912d58_540x.jpg?v=1612558616',
            price: 35
          },
          {
            id: 2,
            name: 'Black Screw-Back Tunnels',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0337/8189/products/SS-008-BK_577029c7-c314-4780-a710-d964973a3d33_540x.jpg?v=1612558495',
            price: 40
          },
          {
            id: 3,
            name: 'Solid Double-Flared',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0019/0572/1409/products/basic-steel-solid-double-flared-ear-gauge-plug-1-pair-plugs-earrings-double-flare-rebelbod-11264167149633_600x.jpg?v=1579973847',
            price: 45
          },
          {
            id: 4,
            name: 'Screw-Fit Tunnel',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0019/0572/1409/products/basic-steel-screw-fit-ear-gauge-tunnel-plug-1-pair-tunnels-double-flare-rebelbod-11264164069441_600x.jpg?v=1579973639',
            price: 25
          },
          {
            id: 5,
            name: 'Internally Threaded',
            imageUrl: 'https://cdn11.bigcommerce.com/s-fa4u2s4x/images/stencil/1280x1280/products/399/3165/internal_thread_ear_gauges_ear_plugs_steel_purple___54797.1609602835.jpg?c=2',
            price: 30
          },
          {
            id: 6,
            name: 'Stainless Rainbow',
            imageUrl: 'https://www.urbanbodyjewelry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/single-flare-rainbow-tunnels-plugs.jpg',
            price: 25
          },
          {
            id: 7,
            name: 'Single Flared',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0337/8189/products/ss-020.jpg?v=1574299741',
            price: 20
          },
          {
            id: 8,
            name: 'Sparkle Gemstones',
            imageUrl: 'https://jewelry-eshop.com/1086-57180-thickbox/stainless-steel-tunel-ear-plug-with-zircon-and-rubber-band.jpg',
            price: 20
          }
        ]
      },
      {
        id: 3,
        title: 'Acrylic Plugs',
        routeName: 'acrylic',
        items: [
          {
            id: 1,
            name: 'Double-Flair Forrest Green',
            imageUrl: 'https://www.crazy-factory.com/en-US/p/Piercings/Ear-Flesh-Tunnel-Plug-Tube-Gauge/CJ-DFP16/Double-Flared-Plug/~20:GR#fancy_popup',
            price: 25
          },
          {
            id: 2,
            name: 'Red UV',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/618GnsnCBqL._AC_UX500_.jpg',
            price: 20
          },
          {
            id: 3,
            name: 'Light Blue Saddle',
            imageUrl: 'https://cdn2.bigcommerce.com/n-arxsrf/rbl4wa/products/954/images/2187/light_blue_solid_acrylic_ear_plugs__10148.1404206017.1280.1280.jpg?c=2',
            price: 25
          },
          {
            id: 4,
            name: 'Daisy',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0068/6312/products/Sunflower_Clear_Acrylic_Image_Plug_WM_Web_1600x.jpg?v=1612996512',
            price: 45
          },
          {
            id: 5,
            name: 'Black',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0068/6312/products/blackacrylicplugs2-wm-pv_2000x.jpg?v=1549600059',
            price: 25
          }
        ]
      },
      {
        id: 4,
        title: 'Uniquely Styled',
        routeName: 'unique',
        items: [
          {
            id: 1,
            name: 'Acrylic Flower Tunnels',
            imageUrl: 'https://ae01.alicdn.com/kf/Hd1dc9a7963824abfa1cc54ddec13eca9S/KUBOOZ-2020-Latest-Style-Green-Yellow-Flower-Acrylic-Ear-Plugs-Gauges-Piercing-Body-Jewelry-Earring-Tunnels.jpg',
            price: 55
          },
          {
            id: 2,
            name: 'Tentacle',
            imageUrl: 'https://m.media-amazon.com/images/I/41aavtRG1WL.jpg',
            price: 60
          },
          {
            id: 3,
            name: 'Afghan Saw Hoop',
            imageUrl: 'https://i.etsystatic.com/8053985/r/il/839b0f/2657618077/il_794xN.2657618077_hc2r.jpg',
            price: 80
          },
          {
            id: 4,
            name: 'Eye Infection',
            imageUrl: 'https://www.buythisbling.com/wp-content/uploads/2014/12/Eye-Orb-Ear-Plugs.jpg',
            price: 80
          },
          {
            id: 5,
            name: 'Recycled Skateboard',
            imageUrl: 'https://i.ebayimg.com/images/g/A2IAAOSwyslbo-sJ/s-l400.jpg',
            price: 65
          },
          {
            id: 6,
            name: 'Recycled Skateboard Hollow Tunnel',
            imageUrl: 'https://www.picclickimg.com/d/l400/pict/324156461890_/RECYCLED-SKATEBOARD-12mm-1-2-Wooden-Ear-Plug-Wood.jpg',
            price: 55
          },
          {
            id: 7,
            name: 'Teak Wood and Elephant',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1150/2794/products/vintage-patina-elephant-wooden-dangle-tunnels-for-stretched-ears-2g6mm-through-1-earrings-ever-changing-jewelry-1213mm-turquoise_1800x1800.jpg?v=1569118036',
            price: 60
          }
        ]
      },
      {
        id: 5,
        title: 'Stretching Kits',
        routeName: 'kits',
        items: [
          {
            id: 1,
            name: 'Black Acrylic 14-00g',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1259/1581/products/57467_grande.jpg?v=1568773075',
            price: 25
          },
          {
            id: 2,
            name: 'Flare Plugs Starter Kit 16-6g',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0337/8189/products/ss-020-kit1_540x.jpg?v=1576136634',
            price: 20
          },
          {
            id: 3,
            name: '36pc acrylic 14-00g',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1739/4401/products/36pc-gauges-kit-ear-stretching-8g-00g-color-splash-acrylic-spiral-tapers-plugs-body-piercing-202249_1024x1024.jpg?v=1613078828',
            price: 25
          },
          {
            id: 4,
            name: 'Acrylic UV 22mm-25mm',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1835/6709/products/BM25-TAA-11-25-CL_aed9df0a-eade-4dff-81ab-ecfb870cf317_grande.jpg?v=1561164578',
            price: 50
          },
          {
            id: 5,
            name: 'Sizing 12mm-25mm',
            imageUrl: 'https://cdn11.bigcommerce.com/s-fa4u2s4x/images/stencil/1280x1280/products/283/571/giant_STRETCHING_KIT_ALL___98720.1426454187.png?c=2',
            price: 55
          },
          {
            id: 6,
            name: 'Complete Sizing Visual Aid',
            imageUrl: 'https://cdn11.bigcommerce.com/s-fa4u2s4x/product_images/uploaded_images/ear-plug-gauge-wheel-with-size-chart-large-.jpg',
            price: 5
          }
        ]
      }
    ];

    export default SHOP_DATA;